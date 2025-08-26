import { expect, test, describe } from "vitest";
import { formatPrice } from "./priceFormatter";

describe("priceFormatter", () => {
  test("should format price with currency", () => {
    console.log(formatPrice(32, "HKD"), "ds");
    expect(formatPrice(32, "HKD")).toBe("32 HKD");
    expect(formatPrice(22, "USD")).toBe("22 USD");
    expect(formatPrice(0, "EUR")).toBe("0 EUR");
  });

  test("should handle negative prices by using absolute value", () => {
    expect(formatPrice(-32, "HKD")).toBe("32 HKD");
    expect(formatPrice(-22.5, "USD")).toBe("22.5 USD");
  });
});
