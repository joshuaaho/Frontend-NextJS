import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Name from "./Name";

test("Name renders the name text", () => {
  render(<Name name="Test Bubble Tea" />);
  expect(screen.getByText("Test Bubble Tea")).toBeDefined();
});
