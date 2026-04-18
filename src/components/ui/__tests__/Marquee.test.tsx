import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Marquee from "../Marquee";

describe("Marquee", () => {
  it("duplica os filhos para criar loop contínuo", () => {
    render(
      <Marquee>
        <span>Item 1</span>
        <span>Item 2</span>
      </Marquee>,
    );

    expect(screen.getAllByText("Item 1")).toHaveLength(2);
    expect(screen.getAllByText("Item 2")).toHaveLength(2);
  });
});
