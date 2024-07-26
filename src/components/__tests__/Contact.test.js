import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component test cases", () => {
  it("should load contact us component ", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should load button component", () => {
    render(<Contact />);

    const text = screen.getByText("Submit");

    expect(text).toBeInTheDocument();
  });

  it("should have placeholder text in the component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Name");

    expect(input).toBeInTheDocument();
  });

  it("should have placeholder text in the component", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });
});
