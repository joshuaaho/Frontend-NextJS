import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductName from "./ProductName";

test("ProductName", () => {
  render(<ProductName name="Test Bubble Tea" />);
  expect(screen.getByText("Test Bubble Tea")).toBeDefined();
});
