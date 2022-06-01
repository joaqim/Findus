import type { LineItem, Tax } from "./types";

abstract class LineItems {
  public static getTotalWithTax(item: LineItem): number {
    return item.price + parseFloat(item.totalTax);
  }

  public static getAccurateTaxTotal(item: LineItem): number {
    if (!item.taxes) return 0;
    let result = 0;
    item.taxes.forEach((tax: Tax) => {
      if (tax.total) result += parseFloat(tax.total);
    });
    return result;
  }

  public static hasReducedRate(item: LineItem): boolean {
    if (item.taxClass === "reduced-rate" || item.taxClass === "normal-rate") {
      throw new Error(
        "Tax Class in Items of Order are only expected to have either 'normal-rate' or 'reduced-rate'"
      );
    }
    return item.taxClass === "reduced-rate";
  }
}

export default LineItems;
