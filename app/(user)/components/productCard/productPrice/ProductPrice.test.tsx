import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductPrice from "./ProductPrice";

test("ProductPrice", () => {
  render(<ProductPrice price="HKD 32"/>);
  expect(screen.getByText("HKD 32")).toBeDefined();
});
