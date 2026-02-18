import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Pill } from "./pill";

describe("Pill", () => {
  describe("Rendering", () => {
    it("renders children text", () => {
      render(<Pill>Active</Pill>);
      expect(screen.getByText("Active")).toBeInTheDocument();
    });

    it("renders as a span element", () => {
      render(<Pill>Label</Pill>);
      const pill = screen.getByText("Label");
      expect(pill.tagName).toBe("SPAN");
    });
  });

  describe("Base Styling", () => {
    it("applies base styling classes", () => {
      render(<Pill>Label</Pill>);
      const pill = screen.getByText("Label");
      expect(pill).toHaveClass("inline-flex");
      expect(pill).toHaveClass("items-center");
      expect(pill).toHaveClass("rounded");
      expect(pill).toHaveClass("px-2");
      expect(pill).toHaveClass("py-1");
      expect(pill).toHaveClass("text-xs");
      expect(pill).toHaveClass("font-medium");
    });
  });

  describe("Variants", () => {
    it("applies ghost variant by default", () => {
      render(<Pill>Default</Pill>);
      const pill = screen.getByText("Default");
      expect(pill).toHaveClass("bg-muted");
      expect(pill).toHaveClass("text-foreground");
    });

    it("applies primary variant", () => {
      render(<Pill variant="primary">Primary</Pill>);
      const pill = screen.getByText("Primary");
      expect(pill).toHaveClass("bg-accent");
      expect(pill).toHaveClass("text-accent-foreground");
    });

    it("applies secondary variant", () => {
      render(<Pill variant="secondary">Secondary</Pill>);
      const pill = screen.getByText("Secondary");
      expect(pill).toHaveClass("bg-primary");
      expect(pill).toHaveClass("text-primary-foreground");
    });

    it("applies outline variant", () => {
      render(<Pill variant="outline">Outline</Pill>);
      const pill = screen.getByText("Outline");
      expect(pill).toHaveClass("border");
      expect(pill).toHaveClass("border-border");
      expect(pill).toHaveClass("bg-background");
      expect(pill).toHaveClass("text-foreground");
    });

    it("applies destructive variant", () => {
      render(<Pill variant="destructive">Destructive</Pill>);
      const pill = screen.getByText("Destructive");
      expect(pill).toHaveClass("bg-destructive");
      expect(pill).toHaveClass("text-destructive-foreground");
    });
  });

  describe("Custom className", () => {
    it("merges custom className with variant classes", () => {
      render(<Pill className="custom-class">Label</Pill>);
      const pill = screen.getByText("Label");
      expect(pill).toHaveClass("custom-class");
      expect(pill).toHaveClass("inline-flex");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to the span element", () => {
      const ref = { current: null } as React.RefObject<HTMLSpanElement | null>;
      render(<Pill ref={ref}>Label</Pill>);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe("HTML attributes", () => {
    it("passes through additional HTML attributes", () => {
      render(
        <Pill data-testid="my-pill" aria-label="status">
          Label
        </Pill>,
      );
      const pill = screen.getByTestId("my-pill");
      expect(pill).toHaveAttribute("aria-label", "status");
    });
  });
});
