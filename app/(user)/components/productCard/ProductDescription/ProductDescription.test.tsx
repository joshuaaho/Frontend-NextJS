import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductDescription from "./ProductDescription";

test("ProductDescription renders the description text", () => {
  const mockDescription = 'A delicious bubble tea with fresh ingredients';
  render(<ProductDescription description={mockDescription} />);
  
  expect(screen.getByText(mockDescription)).toBeDefined();
});

test("ProductDescription applies correct styling", () => {
  const mockDescription = 'A delicious bubble tea with fresh ingredients';
  render(<ProductDescription description={mockDescription} />);
  
  const descriptionElement = screen.getByText(mockDescription);
  expect(descriptionElement).toBeDefined();
  expect(descriptionElement.tagName.toLowerCase()).toBe('p');
});

test("ProductDescription renders with empty description", () => {
  render(<ProductDescription description="" />);
  
  const descriptionElement = screen.getByText('');
  expect(descriptionElement).toBeDefined();
});

test("ProductDescription renders with long description", () => {
  const longDescription = 'This is a very long description that might wrap to multiple lines and should still be displayed correctly with the proper styling applied';
  render(<ProductDescription description={longDescription} />);
  
  expect(screen.getByText(longDescription)).toBeDefined();
}); 