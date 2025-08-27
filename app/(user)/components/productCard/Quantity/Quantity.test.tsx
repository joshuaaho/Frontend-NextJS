import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Quantity from "./Quantity";

test("Quantity renders the quantity text", () => {
  render(<Quantity quantity={5} />);
  expect(screen.getByText("In cart: 5")).toBeDefined();
});

test("Quantity renders nothing when quantity is 0", () => {
  render(<Quantity quantity={0} />);
  expect(screen.queryByText("In cart: 0")).toBeNull();
});


