export interface Label {
  ID: number;
}

export interface EDIInformation {
  EDIGlobalLocationNumber?: string;
  EDIGlobalLocationNumberDelivery?: string;
  EDIInvoiceExtra1?: string;
  EDIInvoiceExtra2?: string;
  EDIOurElectronicReference?: string;
  EDIYourElectronicReference?: string;
}

export type InvoiceType =
  | "INVOICE"
  | "AGREEMENTINVOICE"
  | "INTRESTINVOICE"
  | "SUMMARYINVOICE"
  | "CASHINVOICE";

export type PaymentWay = "CASH" | "CARD" | "AG";

export interface InvoiceRow {
  AccountNumber?: number;
  ArticleNumber: string;
  ContributionPercent?: number;
  ContributionValue?: number;
  CostCenter?: string;
  DeliveredQuantity?: number;
  Description?: string;
  Discount?: number;
  DiscountType?: string;
  HouseWork?: boolean;
  HouseWorkHoursToReport?: null;
  HouseWorkType?: null;
  Price: number;
  PriceExcludingVAT?: number;
  Project?: string;
  Total?: number;
  TotalExcludingVAT?: number;
  Unit?: string;
  VAT?: number;
}

export interface EmailInformation {
  EmailAddressFrom?: string;
  EmailAddressTo?: string;
  EmailAddressCC?: string;
  EmailAddressBCC?: string;
  EmailSubject?: string;
  EmailBody?: string;
}

export default interface Invoice {
  Url?: string;
  UrlTaxReductionList?: string;
  AccountingMethod?: "ACCRUAL" | "CASH";
  Address1?: string;
  Address2?: string;
  AdministrationFee?: number;
  AdministrationFeeVAT?: number;
  Balance?: number;
  BasisTaxReduction?: number;
  Booked?: boolean;
  Cancelled?: boolean;
  City?: string;
  Comments?: string;
  ContractReference?: number;
  ContributionPercent?: number;
  ContributionValue?: number;
  CostCenter?: string;
  Country: string;
  Credit?: boolean;
  CreditInvoiceReference?: number;
  Currency: "SEK" | "EUR" | "USD";
  CurrencyRate?: number;
  CurrencyUnit?: number;
  CustomerName?: string;
  CustomerNumber?: string;
  DeliveryAddress1?: string;
  DeliveryAddress2?: string;
  DeliveryCity?: string;

  // NOTE: DeliveryCountry is optional for orders where there is no shipping AND no VAT, i.e. for Gift Card purchases.
  DeliveryCountry?: string;
  DeliveryDate?: null;
  DeliveryName?: string;
  DeliveryZipCode?: string;
  DocumentNumber?: number;
  DueDate?: string;
  EdiInformation?: EDIInformation;
  EmailInformation?: EmailInformation;
  EuQuarterlyReport?: boolean;
  ExternalInvoiceReference1?: string;
  ExternalInvoiceReference2?: string;
  Freight?: number;
  FreightVAT?: number;
  Gross?: number;
  HouseWork?: boolean;
  InvoiceDate?: string;
  InvoicePeriodEnd?: string;
  InvoicePeriodStart?: string;
  InvoiceReference?: string;
  InvoiceRows: InvoiceRow[];
  InvoiceType?: InvoiceType;
  Labels?: Label[];
  Language?: string;
  LastRemindDate?: null;
  Net?: number;
  NotCompleted?: boolean;
  NoxFinans?: boolean;
  OCR?: string;
  OfferReference?: string;
  OrderReference?: string;
  OrganisationNumber?: string;
  OurReference?: string;
  PaymentWay?: PaymentWay;
  Phone1?: string;
  Phone2?: string;
  PriceList?: string;
  PrintTemplate?: string;
  Project?: string;
  Remarks?: string;
  Reminders?: number;
  RoundOff?: number;
  Sent?: boolean;
  TaxReduction?: null;
  TaxReductionType?: string;
  TermsOfDelivery?: string;
  TermsOfPayment?: string;
  Total?: number;
  TotalToPay?: number;
  TotalVAT?: number;
  VATIncluded?: boolean;
  VoucherNumber?: Readonly<number>;
  VoucherSeries?: Readonly<string>;
  VoucherYear?: Readonly<number>;
  WayOfDelivery?: string;
  YourOrderNumber: string;
  YourReference?: string;
  ZipCode?: string;
}
