import React from "react";
import { Toggle } from "./toggle";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

test("should toggle the state after clicking on the Toggle State button", () => {
  // render
  const { getByText } = render(<Toggle />);

  // check the state
  expect(getByText(/the state is: false/i)).toBeInTheDocument();

  // click
  const button = getByText(/toggle state/i);
  fireEvent.click(button);

  // check the state
  expect(getByText(/the state is: true/i)).toBeInTheDocument();
});
