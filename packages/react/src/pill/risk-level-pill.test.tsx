import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RiskLevelPill, RISK_LEVEL } from "./risk-level-pill";

describe("RiskLevelPill", () => {
  describe("High Risk Level", () => {
    it('renders "High" with correct red styling', () => {
      render(<RiskLevelPill level={RISK_LEVEL.HIGH} />);

      const pill = screen.getByText("High");
      expect(pill).toBeInTheDocument();
      expect(pill).toHaveClass("bg-red-100");
      expect(pill).toHaveClass("text-red-800");
    });
  });

  describe("Medium Risk Level", () => {
    it('renders "Medium" with correct yellow styling', () => {
      render(<RiskLevelPill level={RISK_LEVEL.MEDIUM} />);

      const pill = screen.getByText("Medium");
      expect(pill).toBeInTheDocument();
      expect(pill).toHaveClass("bg-yellow-100");
      expect(pill).toHaveClass("text-yellow-800");
    });
  });

  describe("Low Risk Level", () => {
    it('renders "Low" with correct green styling', () => {
      render(<RiskLevelPill level={RISK_LEVEL.LOW} />);

      const pill = screen.getByText("Low");
      expect(pill).toBeInTheDocument();
      expect(pill).toHaveClass("bg-green-100");
      expect(pill).toHaveClass("text-green-800");
    });
  });

  describe("Base Styling", () => {
    it("applies base styling classes (rounded, px-2, py-1, text-xs, font-medium)", () => {
      render(<RiskLevelPill level={RISK_LEVEL.LOW} />);

      const pill = screen.getByText("Low");
      expect(pill).toHaveClass("rounded");
      expect(pill).toHaveClass("px-2");
      expect(pill).toHaveClass("py-1");
      expect(pill).toHaveClass("text-xs");
      expect(pill).toHaveClass("font-medium");
    });
  });

  describe("RISK_LEVEL constant", () => {
    it("exports RISK_LEVEL constant with expected values", () => {
      expect(RISK_LEVEL.LOW).toBe("low");
      expect(RISK_LEVEL.MEDIUM).toBe("medium");
      expect(RISK_LEVEL.HIGH).toBe("high");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to the span element", () => {
      const ref = { current: null } as React.RefObject<HTMLSpanElement | null>;
      render(<RiskLevelPill ref={ref} level={RISK_LEVEL.HIGH} />);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe("Custom className", () => {
    it("merges custom className with default classes", () => {
      render(<RiskLevelPill level={RISK_LEVEL.HIGH} className="extra-class" />);
      const pill = screen.getByText("High");
      expect(pill).toHaveClass("extra-class");
      expect(pill).toHaveClass("bg-red-100");
    });
  });
});
