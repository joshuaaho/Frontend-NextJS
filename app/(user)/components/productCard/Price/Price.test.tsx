import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Price from "./Price";

test("Price", () => {
  render(<Price price="32 HKD" />);
  expect(screen.getByText("32 HKD")).toBeDefined();
});


