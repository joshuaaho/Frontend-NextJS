import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Name from "./Name";

test("Name", () => {
  render(<Name name="Test Bubble Tea" />);
  expect(screen.getByText("Test Bubble Tea")).toBeDefined();
});
