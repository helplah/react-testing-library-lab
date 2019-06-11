import React from "react";
import { FavoriteNumber } from "./favoriteNumber";
import { render, getByText } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react/dist";

//Write the below test
test('renders a number input with a label "Favorite Number"', () => {
  // 1. render Component
  const { getByLabelText } = render(<FavoriteNumber />);

  // 2. search for the element
  const numberInput = getByLabelText(/favorite number/i);

  // 3. assert on the element
  expect(numberInput).toHaveAttribute("type", "number");
});

test("change the number input to 10 should trigger error message", () => {
  const { getByLabelText, getByText } = render(<FavoriteNumber />);
  const numberInput = getByLabelText(/Favorite Number/);

  // key in the number 10
  fireEvent.change(numberInput, { target: { value: 10 } });

  // assert that
  expect(getByText("The number is invalid")).toBeInTheDocument();
});
