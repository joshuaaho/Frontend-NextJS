import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Description from "./Description";

test("Description", () => {
  render(<Description description="Test Description" />);
  expect(screen.getByText("Test Description")).toBeDefined();
}); 