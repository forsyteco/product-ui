import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatusPill, STATUS } from "./status-pill";

describe("StatusPill", () => {
  describe("Status Rendering", () => {
    it('renders "In progress" for in_progress status', () => {
      render(<StatusPill status={STATUS.IN_PROGRESS} />);
      expect(screen.getByText("In progress")).toBeInTheDocument();
    });

    it('renders "Complete" for complete status', () => {
      render(<StatusPill status={STATUS.COMPLETE} />);
      expect(screen.getByText("Complete")).toBeInTheDocument();
    });

    it('renders "Do not act" for do_not_act status', () => {
      render(<StatusPill status={STATUS.DO_NOT_ACT} />);
      expect(screen.getByText("Do not act")).toBeInTheDocument();
    });

    it('renders "Failed" for failed status', () => {
      render(<StatusPill status={STATUS.FAILED} />);
      expect(screen.getByText("Failed")).toBeInTheDocument();
    });
  });

  describe("Status Colors", () => {
    it("applies emerald colors for complete status", () => {
      render(<StatusPill status={STATUS.COMPLETE} />);
      const pill = screen.getByText("Complete");
      expect(pill).toHaveClass("bg-emerald-100");
      expect(pill).toHaveClass("text-emerald-800");
    });

    it("applies rose colors for do_not_act status", () => {
      render(<StatusPill status={STATUS.DO_NOT_ACT} />);
      const pill = screen.getByText("Do not act");
      expect(pill).toHaveClass("bg-rose-100");
      expect(pill).toHaveClass("text-rose-800");
    });

    it("applies red colors for failed status", () => {
      render(<StatusPill status={STATUS.FAILED} />);
      const pill = screen.getByText("Failed");
      expect(pill).toHaveClass("bg-red-100");
      expect(pill).toHaveClass("text-red-800");
    });

    it("applies gray colors for in_progress status", () => {
      render(<StatusPill status={STATUS.IN_PROGRESS} />);
      const pill = screen.getByText("In progress");
      expect(pill).toHaveClass("bg-gray-100");
      expect(pill).toHaveClass("text-gray-800");
    });
  });

  describe("Base Styling", () => {
    it("applies badge styling (rounded, text-xs, font-medium)", () => {
      render(<StatusPill status={STATUS.IN_PROGRESS} />);
      const pill = screen.getByText("In progress");
      expect(pill).toHaveClass("rounded");
      expect(pill).toHaveClass("text-xs");
      expect(pill).toHaveClass("font-medium");
    });
  });

  describe("STATUS constant", () => {
    it("exports STATUS constant with expected values", () => {
      expect(STATUS.COMPLETE).toBe("complete");
      expect(STATUS.DO_NOT_ACT).toBe("do_not_act");
      expect(STATUS.FAILED).toBe("failed");
      expect(STATUS.IN_PROGRESS).toBe("in_progress");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to the span element", () => {
      const ref = { current: null } as React.RefObject<HTMLSpanElement | null>;
      render(<StatusPill ref={ref} status={STATUS.COMPLETE} />);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe("Custom className", () => {
    it("merges custom className with default classes", () => {
      render(<StatusPill status={STATUS.COMPLETE} className="extra-class" />);
      const pill = screen.getByText("Complete");
      expect(pill).toHaveClass("extra-class");
      expect(pill).toHaveClass("bg-emerald-100");
    });
  });
});
