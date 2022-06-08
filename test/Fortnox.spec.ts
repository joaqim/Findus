import * as Findus from "../src";

import wooOrders from "./orders.mock.json";

describe("Invoice, Customer & Articles", () => {
  describe("Can create Invoice, Customer & Article from WcOrder", () => {
    const order = Findus.WooConvert.toWcOrder(
      JSON.stringify(wooOrders.data[0])
    );

    const currencyRate = 1.234;

    const invoice = Findus.Invoices.tryCreateInvoice(order, currencyRate);
    const customer = Findus.Customers.createCustomer(order, invoice);
    const articles = Findus.Articles.createArticles(order);
  });
});