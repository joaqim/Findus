import type { Rate } from "./Accounts";
import CultureInfo from "./CultureInfo";
import LineItems from "./LineItems";
import type { Customer, LineItem, MetaData, TaxLine, WcOrder } from "./types";

export interface TaxLabel {
  vat: number;
  label?: string;
}

abstract class WcOrders {
  public static tryVerifyOrder(order: WcOrder) {
    if (!order.prices_include_tax) {
      throw new Error(
        `Unexpected: 'prices_include_tax' is ${false}, expected: true`
      );
    }
  }

  public static getPaymentMethod(order: WcOrder): "Stripe" | "PayPal" {
    const { payment_method } = order;

    /*
    if (!paymentMethod || paymentMethod === "") {
      throw new Error("Beställningen behöver bokföras manuellt.");
    }
    */
    // NOTE: Matches stripe & stripe_{bancontant,ideal,sofort}, but not *_stripe

    if (/^stripe\S*/i.test(payment_method)) {
      return "Stripe";
    }
    // NOTE: Matches paypal & (ppec_paypal)_paypal, but not paypal_*

    if (/^\S*paypal$/i.test(payment_method)) {
      return "PayPal";
    }

    throw new Error(
      `Unexpected Payment Method: '${payment_method}', '${order.payment_method_title}'`
    );
  }

  public static tryGetAccurateTotal(order: WcOrder): number {
    let total = 0;
    order.line_items.forEach((item) => {
      total += item.price * item.quantity + LineItems.getAccurateTaxTotal(item);
    });

    total += parseFloat(order.shipping_total) + parseFloat(order.shipping_tax);

    const diff = Math.abs(total - parseFloat(order.total));

    // Should not deviate more than 1-E15 from WooCommerce total cost
    if (diff > 0.000_000_000_000_001) {
      throw new Error(
        `WooCommerce order total does not match calculated total. Difference: ${total}, ${order.total} = ${diff}`
      );
    }
    return total;
  }

  public static tryVerifyCurrencyRate(
    order: WcOrder,
    currencyRate = 1
  ): number {
    if (order.currency === "SEK") {
      if (currencyRate !== 1)
        throw new Error(`Unexpected Currency Rate for SEK: ${currencyRate}`);
      return currencyRate;
    }

    if (currencyRate !== 1) {
      return currencyRate;
    }
    return WcOrders.tryGetCurrencyRate(order);
  }

  public static tryGetCurrencyRate(
    order: WcOrder,
    accurateTotal?: number
  ): number {
    const paymentMethod = WcOrders.getPaymentMethod(order);

    if (paymentMethod !== "Stripe") {
      throw new Error(
        `Findus can only deduce Currency Rate with Stripe payments. Unsupported payment method: ${paymentMethod} - ${order.payment_method_title}`
      );
    }

    const stripeCharge = order.meta_data.find(
      (d) => d.key === "_stripe_charge_captured"
    )?.value as string;
    const stripeFee = order.meta_data.find((d) => d.key === "_stripe_fee")
      ?.value as string;
    const stripeNet = order.meta_data.find((d) => d.key === "_stripe_net")
      ?.value as string;
    const stripeCurrency = order.meta_data.find(
      (d) => d.key === "_stripe_currency"
    )?.value as string;

    if (!stripeCharge || parseFloat(stripeCharge) <= 0) {
      throw new Error(
        `Unexpected: Order 'meta_data' of key '_stripe_charge_captured' has value '${stripeCharge}' `
      );
    }

    if (!stripeFee || parseFloat(stripeFee) <= 0) {
      throw new Error(
        `Unexpected: Order 'meta_data' of key '_stripe_fee' has value '${stripeFee}' `
      );
    }

    if (!stripeNet) {
      throw new Error(
        `Unexpected: Order 'meta_data' of key '_stripe_net' has value '${stripeNet}' `
      );
    }

    if (!stripeCurrency) {
      throw new Error(
        `Unexpected: Order 'meta_data' of key '_stripe_currency' has value '${stripeCurrency}' `
      );
    }

    if (stripeCurrency !== "SEK") {
      throw new Error(
        `Stripe Payment with currency: ${stripeCurrency} is unexpected`
      );
    }

    const total = accurateTotal ?? WcOrders.tryGetAccurateTotal(order);
    const stripeCurrencyRate =
      (parseFloat(stripeFee) + parseFloat(stripeNet)) / total;
    return stripeCurrencyRate;
  }

  public static verifyRateForItem(
    order: WcOrder,
    rate: Rate,
    item: LineItem
  ): TaxLabel {
    if (rate.vat === 0) {
      return { vat: 0, label: "0% Vat" };
    }

    const taxRates = WcOrders.tryGetTaxRateLabels(order.tax_lines);
    var taxLabel: TaxLabel;
    if (Object.is(taxRates.standard, taxRates.reduced)) {
      taxLabel = taxRates.standard;
    } else {
      if (item.tax_class === "") {
        throw new Error(`Unexpected empty tax class for item: '${item.name}', expected either 'normal-rate' or 'reduced-rate'`);
      }
      const isStandard = item.tax_class !== "reduced-rate";
      taxLabel = isStandard ? taxRates.standard : taxRates.reduced;
    }

    if (rate.vat !== taxLabel.vat) {
      throw new Error(
        `VAT Rate miss-match, expected value: ${rate.vat} VAT, but WooCommerce gave: ${taxLabel.vat}% VAT, with label: ${taxLabel.label}`
      );
    }
    return taxLabel;
  }

  public static getTaxRate(tax: TaxLine): number {
    const taxLabel = tax.label;

    try {
      // eslint-disable-next-line unicorn/no-unsafe-regex
      const regex = /(?:\d+(?:\.\d*)?|\.\d+)%/;
      // Throws error on undefined
      const vat = regex.exec(taxLabel);

      if (!vat || vat.length !== 1) {
        throw new Error(
          `Could not parse VAT Percentage from Tax Label: ${taxLabel}`
        );
      }
      return parseFloat(vat[0]) / 100;
    } catch {
      throw new Error(`Unexpected Tax label: ${taxLabel}`);
    }
  }

  public static tryGetTaxRateLabels(taxes: TaxLine[]): {
    standard: TaxLabel;
    reduced: TaxLabel;
  } {
    let labels: TaxLabel[] = [];

    taxes.forEach((tax: TaxLine) => {
      const vat = WcOrders.getTaxRate(tax);
      const taxLabel = { vat, label: tax.label };

      if (!taxLabel) {
        throw new Error("Missing tax label");
      }

      // Make sure lowest VAT is the last value in tuple
      if (labels[0]?.vat >= vat) labels.push(taxLabel);
      else labels = [taxLabel, ...labels];
    });

    return { standard: labels[0], reduced: labels[1] };
  }

  public static getDocumentSource(order: WcOrder): string | null {
    return order.meta_data.find(
      (entry: MetaData) => entry.key === "pdf_invoice_source"
    )?.value as string;
  }

  public static tryGetDocumentLink(
    order: WcOrder,
    storefrontUrl?: string
  ): string {
    // Try to get Document link from metadata
    const pdfLink = order.meta_data.find(
      (entry: MetaData) => entry.key === "_wcpdf_document_link"
    )?.value as string;

    if (pdfLink && pdfLink !== "") {
      return pdfLink;
    }
    // Try to get Order key from metadata
    let orderKey = order.meta_data.find(
      (entry: MetaData) => entry.key === "_wc_order_key"
    )?.value;

    if (!orderKey) {
      orderKey = order.order_key;
    }

    if (!orderKey) {
      throw new Error(`Order is missing document_link and order_key`);
    }

    if (!storefrontUrl) {
      const url = order.meta_data.find(
        (entry: MetaData) => entry.key === "storefront_url"
      )?.value;

      if (!url) {
        throw new Error(`Could not get 'storefront_url' from order meta_data`);
      }
      return `${url}/wp-admin/admin-ajax.php?action=generate_wpo_wcpdf&template_type=invoice&order_ids=${order.id}&order_key=${orderKey}`;
    }

    return `${storefrontUrl}/wp-admin/admin-ajax.php?action=generate_wpo_wcpdf&template_type=invoice&order_ids=${order.id}&order_key=${orderKey}`;
  }

  public static tryGetInvoiceReference(order: WcOrder): number {
    if (!order.meta_data) return 0;
    const reference = order.meta_data.find(
      (entry: MetaData) => entry.key === "_fortnox_invoice_number"
    )?.value as string;

    if (!reference) {
      throw new Error(
        `Order is missing '_fortnox_invoice_number' referenced in meta data.`
      );
    }
    return parseInt(reference, 10);
  }

  public static tryCanBeRefunded(order: WcOrder): boolean {
    if (order.status === "completed" && order.refunds?.length === 0) {
      throw new Error(
        "Order status is 'completed' and is not partially refunded."
      );
    } else if (order.status !== "refunded") {
      throw new Error(
        `Unexpected order status: '${order.status}', expected 'refunded' or alternatively 'completed' with partial refund.`
      );
    }
    return true;
  }

  public static tryGetCustomerName(order: WcOrder): string {
    try {
      return this.tryGetBillingName(order);
    } catch {
      try {
        return this.tryGetDeliveryName(order);
      } catch {
        throw new Error(
          `Order is missing customer name for 'billing' and failed to fallback to 'shipping'`
        );
      }
    }
  }

  public static tryGetDeliveryName(order: WcOrder): string {
    if (order.shipping.first_name || order.shipping.last_name) {
      return `${order.shipping.first_name} ${order.shipping.last_name}`.trim();
    }
    throw new Error(`Order is missing customer name for shipping`);
  }

  public static tryGetBillingName(order: WcOrder): string {
    if (order.billing.first_name || order.billing.last_name) {
      return `${order.billing.first_name} ${order.billing.last_name}`.trim();
    }
    throw new Error(`Order is missing customer name for billing`);
  }

  public static tryGetAddresses(order: WcOrder): Customer {
    return {
      Country: CultureInfo.tryGetEnglishName(order.billing.country),
      Address1: order.billing.address_1,
      Address2: order.billing.address_2,
      ZipCode: order.billing.postcode,
      City: order.billing.city,

      DeliveryCountry: CultureInfo.tryGetEnglishName(order.shipping.country),
      DeliveryAddress1: order.shipping.address_1,
      DeliveryAddress2: order.shipping.address_2,
      DeliveryZipCode: order.shipping.postcode,
      DeliveryCity: order.shipping.city,
    };
  }
}

export default WcOrders;
