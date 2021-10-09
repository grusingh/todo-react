import React from "react";
import { render, screen } from "@testing-library/react";
import FilterButton from "./FilterButton";
import userEvent from "@testing-library/user-event";

describe("FilterButton", () => {
  // Happy path: render component for most common use case
  it("should render", () => {
    const props = {
      name: "All",
      isPressed: true,
      setFilter: jest.fn(),
    };

    render(<FilterButton {...props} />);

    expect(screen.getByText("All")).toBeInTheDocument();
  });

  it("should render pressed button", () => {
    const props = {
      name: "All",
      isPressed: true,
      setFilter: jest.fn(),
    };

    render(<FilterButton {...props} />);

    expect(screen.getByRole("button").getAttribute("aria-pressed")).toEqual(
      "true"
    );
  });

  it("should render unpressed button", () => {
    const props = {
      name: "All",
      isPressed: false,
      setFilter: jest.fn(),
    };

    render(<FilterButton {...props} />);

    expect(screen.getByRole("button").getAttribute("aria-pressed")).toEqual(
      "false"
    );
  });

  it("should be able to set filter", () => {
    const props = {
      name: "All",
      isPressed: true,
      setFilter: jest.fn(),
    };

    render(<FilterButton {...props} />);

    userEvent.click(screen.getByRole("button"));

    expect(props.setFilter).toHaveBeenCalledWith("All");
  });

  it("snapshot", () => {
    const props = {
      name: "All",
      isPressed: true,
      setFilter: jest.fn(),
    };

    const { container } = render(<FilterButton {...props} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          aria-pressed="true"
          class="btn toggle-btn"
          type="button"
        >
          <span
            class="visually-hidden"
          >
            Show 
          </span>
          <span>
            All
          </span>
          <span
            class="visually-hidden"
          >
             tasks
          </span>
        </button>
      </div>
    `);
  });
});
