import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("passes native button props", () => {
    render(
      <Button type="submit" disabled>
        Submit
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("type", "submit");
  });

  it("handles click events", () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("supports aria attributes", () => {
    render(<Button aria-label="custom-button">Icon</Button>);

    expect(screen.getByLabelText("custom-button")).toBeInTheDocument();
  });
});
