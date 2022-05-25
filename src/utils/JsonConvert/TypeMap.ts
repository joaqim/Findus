/* eslint-disable @typescript-eslint/explicit-function-return-type */
function array(typ: unknown) {
  return { arrayItems: typ };
}

function union(...typs: unknown[]) {
  return { unionMembers: typs };
}

function object(properties: unknown[], additional: unknown) {
  return { properties, additional };
}

function reference(name: string) {
  return { reference: name };
}

export default {
  Article: object(
    [
      { json: "ArticleNumber", js: "articleNumber", typ: "" },
      { json: "Description", js: "description", typ: "" },
      { json: "Type", js: "type", typ: union(undefined, "") },
    ],
    false
  ),
  Invoice: object(
    [
      { json: "@url", js: "url", typ: "" },
      { json: "@urlTaxReductionList", js: "urlTaxReductionList", typ: "" },
      { json: "Address1", js: "address1", typ: "" },
      { json: "Address2", js: "address2", typ: "" },
      { json: "AdministrationFee", js: "administrationFee", typ: 0 },
      { json: "AdministrationFeeVAT", js: "administrationFeeVAT", typ: 0 },
      { json: "Balance", js: "balance", typ: 0 },
      { json: "BasisTaxReduction", js: "basisTaxReduction", typ: 0 },
      { json: "Booked", js: "booked", typ: true },
      { json: "Cancelled", js: "cancelled", typ: true },
      { json: "City", js: "city", typ: "" },
      { json: "Comments", js: "comments", typ: "" },
      { json: "ContractReference", js: "contractReference", typ: 0 },
      { json: "ContributionPercent", js: "contributionPercent", typ: 3.14 },
      { json: "ContributionValue", js: "contributionValue", typ: 0 },
      { json: "CostCenter", js: "costCenter", typ: "" },
      { json: "Country", js: "country", typ: "" },
      { json: "Credit", js: "credit", typ: "" },
      { json: "CreditInvoiceReference", js: "creditInvoiceReference", typ: "" },
      { json: "Currency", js: "currency", typ: "" },
      { json: "CurrencyRate", js: "currencyRate", typ: 0 },
      { json: "CurrencyUnit", js: "currencyUnit", typ: 0 },
      { json: "CustomerName", js: "customerName", typ: "" },
      { json: "CustomerNumber", js: "customerNumber", typ: "" },
      { json: "DeliveryAddress1", js: "deliveryAddress1", typ: "" },
      { json: "DeliveryAddress2", js: "deliveryAddress2", typ: "" },
      { json: "DeliveryCity", js: "deliveryCity", typ: "" },
      { json: "DeliveryCountry", js: "deliveryCountry", typ: "" },
      { json: "DeliveryDate", js: "deliveryDate", typ: null },
      { json: "DeliveryName", js: "deliveryName", typ: "" },
      { json: "DeliveryZipCode", js: "deliveryZipCode", typ: "" },
      { json: "DocumentNumber", js: "documentNumber", typ: "" },
      { json: "DueDate", js: "dueDate", typ: Date },
      {
        json: "EDIInformation",
        js: "ediInformation",
        typ: reference("EDIInformation"),
      },
      { json: "EUQuarterlyReport", js: "euQuarterlyReport", typ: true },
      {
        json: "ExternalInvoiceReference1",
        js: "externalInvoiceReference1",
        typ: "",
      },
      {
        json: "ExternalInvoiceReference2",
        js: "externalInvoiceReference2",
        typ: "",
      },
      { json: "Freight", js: "freight", typ: 0 },
      { json: "FreightVAT", js: "freightVAT", typ: 3.14 },
      { json: "Gross", js: "gross", typ: 0 },
      { json: "HouseWork", js: "houseWork", typ: true },
      { json: "InvoiceDate", js: "invoiceDate", typ: Date },
      { json: "InvoicePeriodEnd", js: "invoicePeriodEnd", typ: "" },
      { json: "InvoicePeriodStart", js: "invoicePeriodStart", typ: "" },
      { json: "InvoiceReference", js: "invoiceReference", typ: "" },
      {
        json: "InvoiceRows",
        js: "invoiceRows",
        typ: array(reference("InvoiceRow")),
      },
      { json: "InvoiceType", js: "invoiceType", typ: "" },
      { json: "Labels", js: "labels", typ: array(reference("Label")) },
      { json: "Language", js: "language", typ: "" },
      { json: "LastRemindDate", js: "lastRemindDate", typ: null },
      { json: "Net", js: "net", typ: 0 },
      { json: "NotCompleted", js: "notCompleted", typ: true },
      { json: "NoxFinans", js: "noxFinans", typ: true },
      { json: "OCR", js: "ocr", typ: "" },
      { json: "OfferReference", js: "offerReference", typ: "" },
      { json: "OrderReference", js: "orderReference", typ: "" },
      { json: "OrganisationNumber", js: "organisationNumber", typ: "" },
      { json: "OurReference", js: "ourReference", typ: "" },
      { json: "PaymentWay", js: "paymentWay", typ: "" },
      { json: "Phone1", js: "phone1", typ: "" },
      { json: "Phone2", js: "phone2", typ: "" },
      { json: "PriceList", js: "priceList", typ: "" },
      { json: "PrintTemplate", js: "printTemplate", typ: "" },
      { json: "Project", js: "project", typ: "" },
      { json: "Remarks", js: "remarks", typ: "" },
      { json: "Reminders", js: "reminders", typ: 0 },
      { json: "RoundOff", js: "roundOff", typ: 3.14 },
      { json: "Sent", js: "sent", typ: true },
      { json: "TaxReduction", js: "taxReduction", typ: null },
      { json: "TaxReductionType", js: "taxReductionType", typ: "" },
      { json: "TermsOfDelivery", js: "termsOfDelivery", typ: "" },
      { json: "TermsOfPayment", js: "termsOfPayment", typ: "" },
      { json: "Total", js: "total", typ: 0 },
      { json: "TotalToPay", js: "totalToPay", typ: 0 },
      { json: "TotalVAT", js: "totalVAT", typ: 3.14 },
      { json: "VATIncluded", js: "vatIncluded", typ: true },
      { json: "VoucherNumber", js: "voucherNumber", typ: null },
      { json: "VoucherSeries", js: "voucherSeries", typ: null },
      { json: "VoucherYear", js: "voucherYear", typ: null },
      { json: "WayOfDelivery", js: "wayOfDelivery", typ: "" },
      { json: "YourOrderNumber", js: "yourOrderNumber", typ: "" },
      { json: "YourReference", js: "yourReference", typ: "" },
      { json: "ZipCode", js: "zipCode", typ: "" },
    ],
    false
  ),
  EDIInformation: object(
    [
      {
        json: "EDIGlobalLocationNumber",
        js: "ediGlobalLocationNumber",
        typ: "",
      },
      {
        json: "EDIGlobalLocationNumberDelivery",
        js: "ediGlobalLocationNumberDelivery",
        typ: "",
      },
      { json: "EDIInvoiceExtra1", js: "ediInvoiceExtra1", typ: "" },
      { json: "EDIInvoiceExtra2", js: "ediInvoiceExtra2", typ: "" },
      {
        json: "EDIOurElectronicReference",
        js: "ediOurElectronicReference",
        typ: "",
      },
      {
        json: "EDIYourElectronicReference",
        js: "ediYourElectronicReference",
        typ: "",
      },
    ],
    false
  ),
  InvoiceRow: object(
    [
      { json: "AccountNumber", js: "accountNumber", typ: 0 },
      { json: "ArticleNumber", js: "articleNumber", typ: "" },
      { json: "ContributionPercent", js: "contributionPercent", typ: 3.14 },
      { json: "ContributionValue", js: "contributionValue", typ: 0 },
      { json: "CostCenter", js: "costCenter", typ: null },
      { json: "DeliveredQuantity", js: "deliveredQuantity", typ: "" },
      { json: "Description", js: "description", typ: "" },
      { json: "Discount", js: "discount", typ: 0 },
      { json: "DiscountType", js: "discountType", typ: "" },
      { json: "HouseWork", js: "houseWork", typ: true },
      {
        json: "HouseWorkHoursToReport",
        js: "houseWorkHoursToReport",
        typ: null,
      },
      { json: "HouseWorkType", js: "houseWorkType", typ: null },
      { json: "Price", js: "price", typ: 0 },
      { json: "PriceExcludingVAT", js: "priceExcludingVAT", typ: 0 },
      { json: "Project", js: "project", typ: "" },
      { json: "Total", js: "total", typ: 0 },
      { json: "TotalExcludingVAT", js: "totalExcludingVAT", typ: 0 },
      { json: "Unit", js: "unit", typ: "" },
      { json: "VAT", js: "vat", typ: 0 },
    ],
    false
  ),
  Label: object([{ json: "Id", js: "id", typ: 0 }], false),
  WcOrder: object(
    [
      { json: "id", js: "id", typ: 0 },
      { json: "parent_id", js: "parentID", typ: 0 },
      { json: "number", js: "number", typ: "" },
      { json: "order_key", js: "orderKey", typ: "" },
      { json: "created_via", js: "createdVia", typ: "" },
      { json: "version", js: "version", typ: "" },
      { json: "status", js: "status", typ: "" },
      { json: "currency", js: "currency", typ: "" },
      { json: "date_created", js: "dateCreated", typ: Date },
      { json: "date_created_gmt", js: "dateCreatedGmt", typ: Date },
      { json: "date_modified", js: "dateModified", typ: Date },
      { json: "date_modified_gmt", js: "dateModifiedGmt", typ: Date },
      { json: "discount_total", js: "discountTotal", typ: "" },
      { json: "discount_tax", js: "discountTax", typ: "" },
      { json: "shipping_total", js: "shippingTotal", typ: "" },
      { json: "shipping_tax", js: "shippingTax", typ: "" },
      { json: "cart_tax", js: "cartTax", typ: "" },
      { json: "total", js: "total", typ: "" },
      { json: "total_tax", js: "totalTax", typ: "" },
      { json: "prices_include_tax", js: "pricesIncludeTax", typ: true },
      { json: "customer_id", js: "customerID", typ: 0 },
      { json: "customer_ip_address", js: "customerIPAddress", typ: "" },
      { json: "customer_user_agent", js: "customerUserAgent", typ: "" },
      { json: "customer_note", js: "customerNote", typ: "" },
      { json: "billing", js: "billing", typ: reference("Ing") },
      { json: "shipping", js: "shipping", typ: reference("Ing") },
      { json: "payment_method", js: "paymentMethod", typ: "" },
      { json: "payment_method_title", js: "paymentMethodTitle", typ: "" },
      { json: "transaction_id", js: "transactionID", typ: "" },
      { json: "date_paid", js: "datePaid", typ: Date },
      { json: "date_paid_gmt", js: "datePaidGmt", typ: Date },
      { json: "date_completed", js: "dateCompleted", typ: null },
      { json: "date_completed_gmt", js: "dateCompletedGmt", typ: null },
      { json: "cart_hash", js: "cartHash", typ: "" },
      { json: "meta_data", js: "metaData", typ: array(reference("MetaDatum")) },
      {
        json: "line_items",
        js: "lineItems",
        typ: array(reference("LineItem")),
      },
      { json: "tax_lines", js: "taxLines", typ: array(reference("TaxLine")) },
      {
        json: "shipping_lines",
        js: "shippingLines",
        typ: array(reference("ShippingLine")),
      },
      { json: "fee_lines", js: "feeLines", typ: array("any") },
      { json: "coupon_lines", js: "couponLines", typ: array("any") },
      { json: "refunds", js: "refunds", typ: array("any") },
      { json: "_links", js: "links", typ: reference("Links") },
    ],
    false
  ),
  Ing: object(
    [
      { json: "first_name", js: "firstName", typ: "" },
      { json: "last_name", js: "lastName", typ: "" },
      { json: "company", js: "company", typ: "" },
      { json: "address_1", js: "address1", typ: "" },
      { json: "address_2", js: "address2", typ: "" },
      { json: "city", js: "city", typ: "" },
      { json: "state", js: "state", typ: "" },
      { json: "postcode", js: "postcode", typ: "" },
      { json: "country", js: "country", typ: "" },
      { json: "email", js: "email", typ: union(undefined, "") },
      { json: "phone", js: "phone", typ: union(undefined, "") },
    ],
    false
  ),
  LineItem: object(
    [
      { json: "id", js: "id", typ: 0 },
      { json: "name", js: "name", typ: "" },
      { json: "product_id", js: "productID", typ: 0 },
      { json: "variation_id", js: "variationID", typ: 0 },
      { json: "quantity", js: "quantity", typ: 0 },
      { json: "tax_class", js: "taxClass", typ: "" },
      { json: "subtotal", js: "subtotal", typ: "" },
      { json: "subtotal_tax", js: "subtotalTax", typ: "" },
      { json: "total", js: "total", typ: "" },
      { json: "total_tax", js: "totalTax", typ: "" },
      { json: "taxes", js: "taxes", typ: array(reference("Tax")) },
      { json: "meta_data", js: "metaData", typ: array(reference("MetaDatum")) },
      { json: "sku", js: "sku", typ: "" },
      { json: "price", js: "price", typ: 0 },
    ],
    false
  ),
  MetaDatum: object(
    [
      { json: "id", js: "id", typ: 0 },
      { json: "key", js: "key", typ: "" },
      { json: "value", js: "value", typ: "" },
    ],
    false
  ),
  Tax: object(
    [
      { json: "id", js: "id", typ: 0 },
      { json: "total", js: "total", typ: "" },
      { json: "subtotal", js: "subtotal", typ: "" },
    ],
    false
  ),
  Links: object(
    [
      { json: "self", js: "self", typ: array(reference("Collection")) },
      {
        json: "collection",
        js: "collection",
        typ: array(reference("Collection")),
      },
    ],
    false
  ),
  Collection: object([{ json: "href", js: "href", typ: "" }], false),
  ShippingLine: object(
    [
      { json: "id", js: "id", typ: 0 },
      { json: "method_title", js: "methodTitle", typ: "" },
      { json: "method_id", js: "methodID", typ: "" },
      { json: "total", js: "total", typ: "" },
      { json: "total_tax", js: "totalTax", typ: "" },
      { json: "taxes", js: "taxes", typ: array("any") },
      { json: "meta_data", js: "metaData", typ: array("any") },
    ],
    false
  ),
  TaxLine: object(
    [
      { json: "id", js: "id", typ: 0 },
      { json: "rate_code", js: "rateCode", typ: "" },
      { json: "rate_id", js: "rateID", typ: 0 },
      { json: "label", js: "label", typ: "" },
      { json: "compound", js: "compound", typ: true },
      { json: "tax_total", js: "taxTotal", typ: "" },
      { json: "shipping_tax_total", js: "shippingTaxTotal", typ: "" },
      { json: "meta_data", js: "metaData", typ: array("any") },
    ],
    false
  ),
  Customer: object(
    [
      { json: "@url", js: "url", typ: union(undefined, "") },
      { json: "Active", js: "active", typ: union(undefined, true) },
      { json: "Address1", js: "address1", typ: union(undefined, "") },
      { json: "Address2", js: "address2", typ: union(undefined, null) },
      { json: "City", js: "city", typ: union(undefined, "") },
      { json: "Comments", js: "comments", typ: union(undefined, null) },
      { json: "CostCenter", js: "costCenter", typ: union(undefined, null) },
      { json: "Country", js: "country", typ: union(undefined, "") },
      { json: "CountryCode", js: "countryCode", typ: union(undefined, "") },
      { json: "Currency", js: "currency", typ: union(undefined, "") },
      {
        json: "CustomerNumber",
        js: "customerNumber",
        typ: union(undefined, ""),
      },
      {
        json: "DefaultDeliveryTypes",
        js: "defaultDeliveryTypes",
        typ: union(undefined, reference("Default")),
      },
      {
        json: "DefaultTemplates",
        js: "defaultTemplates",
        typ: union(undefined, reference("Default")),
      },
      {
        json: "DeliveryAddress1",
        js: "deliveryAddress1",
        typ: union(undefined, null),
      },
      {
        json: "DeliveryAddress2",
        js: "deliveryAddress2",
        typ: union(undefined, null),
      },
      { json: "DeliveryCity", js: "deliveryCity", typ: union(undefined, null) },
      {
        json: "DeliveryCountry",
        js: "deliveryCountry",
        typ: union(undefined, null),
      },
      {
        json: "DeliveryCountryCode",
        js: "deliveryCountryCode",
        typ: union(undefined, null),
      },
      { json: "DeliveryFax", js: "deliveryFax", typ: union(undefined, null) },
      { json: "DeliveryName", js: "deliveryName", typ: union(undefined, null) },
      {
        json: "DeliveryPhone1",
        js: "deliveryPhone1",
        typ: union(undefined, null),
      },
      {
        json: "DeliveryPhone2",
        js: "deliveryPhone2",
        typ: union(undefined, null),
      },
      {
        json: "DeliveryZipCode",
        js: "deliveryZipCode",
        typ: union(undefined, null),
      },
      { json: "Email", js: "email", typ: union(undefined, "") },
      { json: "EmailInvoice", js: "emailInvoice", typ: union(undefined, "") },
      {
        json: "EmailInvoiceBCC",
        js: "emailInvoiceBCC",
        typ: union(undefined, ""),
      },
      {
        json: "EmailInvoiceCC",
        js: "emailInvoiceCC",
        typ: union(undefined, ""),
      },
      { json: "EmailOffer", js: "emailOffer", typ: union(undefined, "") },
      { json: "EmailOfferBCC", js: "emailOfferBCC", typ: union(undefined, "") },
      { json: "EmailOfferCC", js: "emailOfferCC", typ: union(undefined, "") },
      { json: "EmailOrder", js: "emailOrder", typ: union(undefined, "") },
      { json: "EmailOrderBCC", js: "emailOrderBCC", typ: union(undefined, "") },
      { json: "EmailOrderCC", js: "emailOrderCC", typ: union(undefined, "") },
      { json: "Fax", js: "fax", typ: union(undefined, null) },
      { json: "GLN", js: "gln", typ: union(undefined, null) },
      { json: "GLNDelivery", js: "glnDelivery", typ: union(undefined, null) },
      {
        json: "InvoiceAdministrationFee",
        js: "invoiceAdministrationFee",
        typ: union(undefined, null),
      },
      {
        json: "InvoiceDiscount",
        js: "invoiceDiscount",
        typ: union(undefined, null),
      },
      {
        json: "InvoiceFreight",
        js: "invoiceFreight",
        typ: union(undefined, null),
      },
      { json: "InvoiceRemark", js: "invoiceRemark", typ: union(undefined, "") },
      { json: "Name", js: "name", typ: union(undefined, "") },
      {
        json: "OrganisationNumber",
        js: "organisationNumber",
        typ: union(undefined, ""),
      },
      { json: "OurReference", js: "ourReference", typ: union(undefined, "") },
      { json: "Phone1", js: "phone1", typ: union(undefined, "") },
      { json: "Phone2", js: "phone2", typ: union(undefined, null) },
      { json: "PriceList", js: "priceList", typ: union(undefined, "") },
      { json: "Project", js: "project", typ: union(undefined, "") },
      { json: "SalesAccount", js: "salesAccount", typ: union(undefined, null) },
      {
        json: "ShowPriceVATIncluded",
        js: "showPriceVATIncluded",
        typ: union(undefined, true),
      },
      {
        json: "TermsOfDelivery",
        js: "termsOfDelivery",
        typ: union(undefined, ""),
      },
      {
        json: "TermsOfPayment",
        js: "termsOfPayment",
        typ: union(undefined, ""),
      },
      { json: "Type", js: "type", typ: union(undefined, "") },
      { json: "VATNumber", js: "vatNumber", typ: union(undefined, "") },
      { json: "VATType", js: "vatType", typ: union(undefined, "") },
      {
        json: "VisitingAddress",
        js: "visitingAddress",
        typ: union(undefined, null),
      },
      { json: "VisitingCity", js: "visitingCity", typ: union(undefined, null) },
      {
        json: "VisitingCountry",
        js: "visitingCountry",
        typ: union(undefined, null),
      },
      {
        json: "VisitingCountryCode",
        js: "visitingCountryCode",
        typ: union(undefined, null),
      },
      {
        json: "VisitingZipCode",
        js: "visitingZipCode",
        typ: union(undefined, null),
      },
      { json: "WWW", js: "www", typ: union(undefined, "") },
      { json: "WayOfDelivery", js: "wayOfDelivery", typ: union(undefined, "") },
      { json: "YourReference", js: "yourReference", typ: union(undefined, "") },
      { json: "ZipCode", js: "zipCode", typ: union(undefined, "") },
    ],
    false
  ),
  Default: object(
    [
      { json: "Invoice", js: "invoice", typ: union(undefined, "") },
      { json: "Offer", js: "offer", typ: union(undefined, "") },
      { json: "Order", js: "order", typ: union(undefined, "") },
      { json: "CashInvoice", js: "cashInvoice", typ: union(undefined, "") },
    ],
    false
  ),
  CouponLine: object(
    [
      { json: "id", js: "id", typ: union(undefined, 0) },
      { json: "code", js: "code", typ: union(undefined, "") },
      { json: "discount", js: "discount", typ: union(undefined, "") },
      { json: "discount_tax", js: "discountTax", typ: union(undefined, "") },
      {
        json: "meta_data",
        js: "metaData",
        typ: union(undefined, array(reference("CouponLineMetaDatum"))),
      },
    ],
    false
  ),
  CouponLineMetaDatum: object(
    [
      { json: "id", js: "id", typ: union(undefined, 0) },
      { json: "key", js: "key", typ: union(undefined, "") },
      {
        json: "value",
        js: "value",
        typ: union(undefined, reference("DisplayValueClass")),
      },
      { json: "display_key", js: "displayKey", typ: union(undefined, "") },
      {
        json: "display_value",
        js: "displayValue",
        typ: union(undefined, reference("DisplayValueClass")),
      },
    ],
    false
  ),
  DisplayValueClass: object(
    [
      { json: "id", js: "id", typ: union(undefined, 0) },
      { json: "code", js: "code", typ: union(undefined, "") },
      { json: "amount", js: "amount", typ: union(undefined, "") },
      { json: "status", js: "status", typ: union(undefined, "") },
      {
        json: "date_created",
        js: "dateCreated",
        typ: union(undefined, reference("DateCreatedClass")),
      },
      {
        json: "date_modified",
        js: "dateModified",
        typ: union(undefined, reference("DateCreatedClass")),
      },
      { json: "date_expires", js: "dateExpires", typ: union(undefined, null) },
      { json: "discount_type", js: "discountType", typ: union(undefined, "") },
      { json: "description", js: "description", typ: union(undefined, "") },
      { json: "usage_count", js: "usageCount", typ: union(undefined, 0) },
      {
        json: "individual_use",
        js: "individualUse",
        typ: union(undefined, true),
      },
      {
        json: "product_ids",
        js: "productIDS",
        typ: union(undefined, array("any")),
      },
      {
        json: "excluded_product_ids",
        js: "excludedProductIDS",
        typ: union(undefined, array("any")),
      },
      { json: "usage_limit", js: "usageLimit", typ: union(undefined, 0) },
      {
        json: "usage_limit_per_user",
        js: "usageLimitPerUser",
        typ: union(undefined, 0),
      },
      {
        json: "limit_usage_to_x_items",
        js: "limitUsageToXItems",
        typ: union(undefined, 0),
      },
      {
        json: "free_shipping",
        js: "freeShipping",
        typ: union(undefined, true),
      },
      {
        json: "product_categories",
        js: "productCategories",
        typ: union(undefined, array("any")),
      },
      {
        json: "excluded_product_categories",
        js: "excludedProductCategories",
        typ: union(undefined, array("any")),
      },
      {
        json: "exclude_sale_items",
        js: "excludeSaleItems",
        typ: union(undefined, true),
      },
      {
        json: "minimum_amount",
        js: "minimumAmount",
        typ: union(undefined, ""),
      },
      {
        json: "maximum_amount",
        js: "maximumAmount",
        typ: union(undefined, ""),
      },
      {
        json: "email_restrictions",
        js: "emailRestrictions",
        typ: union(undefined, array("any")),
      },
      { json: "virtual", js: "virtual", typ: union(undefined, true) },
      {
        json: "meta_data",
        js: "metaData",
        typ: union(undefined, array(reference("DisplayValueMetaDatum"))),
      },
    ],
    false
  ),
  DateCreatedClass: object(
    [
      { json: "date", js: "date", typ: union(undefined, Date) },
      { json: "timezone_type", js: "timezoneType", typ: union(undefined, 0) },
      { json: "timezone", js: "timezone", typ: union(undefined, "") },
    ],
    false
  ),
  DisplayValueMetaDatum: object(
    [
      { json: "id", js: "id", typ: union(undefined, 0) },
      { json: "key", js: "key", typ: union(undefined, "") },
      {
        json: "value",
        js: "value",
        typ: union(undefined, union(array("any"), reference("ValueValue"), "")),
      },
    ],
    false
  ),
  ValueValue: object(
    [
      {
        json: "5908",
        js: "the5908",
        typ: union(undefined, reference("The5908")),
      },
    ],
    false
  ),
  The5908: object(
    [
      { json: "product_id", js: "productID", typ: union(undefined, 0) },
      { json: "variation_id", js: "variationID", typ: union(undefined, 0) },
      { json: "quantity", js: "quantity", typ: union(undefined, 0) },
    ],
    false
  ),
};
