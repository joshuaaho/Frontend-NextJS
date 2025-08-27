import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Quantity from "./Quantity";

test("Quantity", () => {
  render(<Quantity quantity={5} />);
  expect(screen.getByText("In cart: 5")).toBeDefined();
});


