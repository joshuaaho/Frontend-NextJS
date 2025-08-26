import { describe, it, expect } from "vitest";
import { createLabelMap } from "./labelMap";

describe("createLabelMap", () => {
  it("should create label map with labels as keys and product IDs as values", () => {
    const products = [
      { id: 1, labels: ["sweet", "popular"] },
      { id: 2, labels: ["sweet", "refreshing"] },
    ];

    const result = createLabelMap(products);

    expect(result.sweet).toEqual([1, 2]);
    expect(result.popular).toEqual([1]);
    expect(result.refreshing).toEqual([2]);
  });

  it("should handle empty array", () => {
    const result = createLabelMap([]);
    expect(result).toEqual({});
  });
});
