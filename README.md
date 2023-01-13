# Findus
> Typescript library for use for integration of WooCommerce with Fortnox.

<br>

## Example of usage for uploading, Customer, Articles and Invoice and occassional Voucher.

```typescript
const invoice = Invoices.tryCreateInvoice(
  order,
  currencyRate,
  provider // 'GB' or 'ND'; implemantion is specific for Naudrink and Gamerbullk WooCommerce domains
);

const paymentMethod = WcOrders.tryGetPaymentMethod(order);

const { containsOnlyGiftCards } = WcOrders.tryGetGiftCardsPurchases(order);
const requireShippingAdress = !containsOnlyGiftCards;

const customer = Customers.tryCreateCustomer(order, requireShippingAdress);

const Email = WcOrders.tryGetCustomerEmail(order).toLocaleLowerCase();

const { CustomerNumber } = await this.tryUploadDocument(
  accessToken,
  clientSecret,
  "customers",
  customer,
  {
    CustomerNumber: nanoid()
  }
);

const articlesResult: unknown[] = [];
const articles = Articles.createArticles(order);
if (Invoices.hasGiftCardRedeem(invoice)) {
  const giftCardRedeemArticles =
    Invoices.tryCreateGiftCardRedeemArticles(invoice);
  articles.push(...giftCardRedeemArticles);
}

const articlesDao = new DocumentsDao("articles");
for (const article of articles) {
  const result = await this.tryUploadDocument(
    accessToken,
    clientSecret,
    "articles",
    article
  );

  articlesResult.push(result);
}

const { DocumentNumber, YourOrderNumber } = await this.tryUploadDocument(
  accessToken,
  clientSecret,
  "invoices",
  invoice,
  { CustomerNumber }
);

if (/PayPal|Stripe/.test(paymentMethod)) {
  const voucher = Vouchers.tryCreateVoucherForPaymentFee(
    order,
    currencyRate,
    provider,
    paymentMethod as "PayPal" | "Stripe"
  );

  this.tryUploadDocument(accessToken, clientSecret, "vouchers", voucher, {
    InvoiceNumber: DocumentNumber
  });
}
```
