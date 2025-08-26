import { describe, it, expect } from "vitest";
import { formatLabel } from "./labelFormatter";

describe("formatLabel", () => {
  it("should format snake_case to Title Case", () => {
    expect(formatLabel("fresh_fruit_tea")).toBe("Fresh Fruit Tea");
  });

  it("should handle single word", () => {
    expect(formatLabel("popular")).toBe("Popular");
  });

  it("should handle empty string", () => {
    expect(formatLabel("")).toBe("");
  });
});
