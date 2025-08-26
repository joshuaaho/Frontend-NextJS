import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductQuantity from "./ProductQuantity";

test("ProductQuantity", () => {
  render(<ProductQuantity quantity={5} />);
  expect(screen.getByText("In cart: 5")).toBeDefined();
});


