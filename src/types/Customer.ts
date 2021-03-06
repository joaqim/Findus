export type CustomerVatTypes =
  | "SEVAT"
  | "SEREVERSEDVAT"
  | "EUREVERSEDVAT"
  | "EUVAT"
  | "EXPORT";

export type CustomerType = "PRIVATE" | "COMPANY";

export interface Default {
  Invoice?: string;
  Offer?: string;
  Order?: string;
  CashInvoice?: string;
}

export default interface Customer {
  Url?: string;
  Active?: boolean;
  Address1?: string;
  Address2?: string;
  City?: string;
  Comments?: string;
  CostCenter?: string;
  Country?: Readonly<string>; // read-only
  CountryCode?: string;
  Currency?: string;
  CustomerNumber?: string;
  DefaultDeliveryTypes?: Default;
  DefaultTemplates?: Default;
  DeliveryAddress1?: string;
  DeliveryAddress2?: string;
  DeliveryCity?: string;
  DeliveryCountry?: Readonly<string>; // read-only
  DeliveryCountryCode?: string;
  DeliveryFax?: string;
  DeliveryName?: string;
  DeliveryPhone1?: string;
  DeliveryPhone2?: string;
  DeliveryZipCode?: string;
  Email?: string;
  EmailInvoice?: string;
  EmailInvoiceBCC?: string;
  EmailInvoiceCC?: string;
  EmailOffer?: string;
  EmailOfferBCC?: string;
  EmailOfferCC?: string;
  EmailOrder?: string;
  EmailOrderBCC?: string;
  EmailOrderCC?: string;
  Fax?: string;
  Gln?: string;
  GlnDelivery?: string;
  InvoiceAdministrationFee?: number;
  InvoiceDiscount?: number;
  InvoiceFreight?: number;
  InvoiceRemark?: string;
  Name?: string;
  OrganisationNumber?: string;
  OurReference?: string;
  Phone1?: string;
  Phone2?: string;
  PriceList?: string;
  Project?: string;
  SalesAccount?: number;
  ShowPriceVATIncluded?: boolean;
  TermsOfDelivery?: string;
  TermsOfPayment?: string;
  Type?: CustomerType;
  VATNumber?: string;
  VATType?: CustomerVatTypes;
  VisitingAddress?: string;
  VisitingCity?: string;
  VisitingCountry?: string;
  VisitingCountryCode?: string;
  VisitingZipCode?: string;
  WWW?: string;
  WayOfDelivery?: string;
  YourReference?: string;
  ZipCode?: string;
}
