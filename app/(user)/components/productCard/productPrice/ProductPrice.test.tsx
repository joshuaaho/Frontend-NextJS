import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductPrice from "./ProductPrice";

test("ProductPrice", () => {
  render(<ProductPrice price="32 HKD" />);
  expect(screen.getByText("32 HKD")).toBeDefined();
});


