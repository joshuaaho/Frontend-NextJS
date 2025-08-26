import { describe, it, expect } from "vitest";
import { sortLabels } from "./labelSorter";

describe("labelSorter", () => {
  it('should move "popular" to the front and sort other labels alphabetically', () => {
    const input = ["sweet", "popular", "refreshing"];
    const expected = ["popular", "refreshing", "sweet"];
    const result = sortLabels(input);
    expect(result).toEqual(expected);
  });

  it('should sort labels alphabetically when "popular" is not present', () => {
    const input = ["sweet", "refreshing", "fruity", "bubble"];
    const expected = ["bubble", "fruity", "refreshing", "sweet"];
    const result = sortLabels(input);
    expect(result).toEqual(expected);
  });

  it("should handle empty array", () => {
    const input: string[] = [];
    const expected: string[] = [];
    const result = sortLabels(input);
    expect(result).toEqual(expected);
  });

  it('should handle single item array without "popular"', () => {
    const input = ["sweet"];
    const expected = ["sweet"];
    const result = sortLabels(input);
    expect(result).toEqual(expected);
  });

  it('should handle array with "popular" at the beginning', () => {
    const input = ["popular", "sweet", "refreshing"];
    const expected = ["popular", "refreshing", "sweet"];
    const result = sortLabels(input);
    expect(result).toEqual(expected);
  });
});
