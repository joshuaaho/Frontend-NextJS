import { describe, it, expect } from "vitest";
import { createProductMap } from "./productMap";

describe("createProductMap", () => {
  it("should create product map with product IDs as keys", () => {
    const products = [
      { id: 1, name: "Tea 1" },
      { id: 2, name: "Tea 2" },
    ];

    const result = createProductMap(products);

    expect(result[1]).toEqual({ id: 1, name: "Tea 1" });
    expect(result[2]).toEqual({ id: 2, name: "Tea 2" });
  });

  it("should handle empty array", () => {
    const result = createProductMap([]);
    expect(result).toEqual({});
  });
});
