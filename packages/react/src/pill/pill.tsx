import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/tailwind";

export const pillVariants = cva(
  "inline-flex items-center rounded px-2 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground",
        secondary: "bg-primary text-primary-foreground",
        outline: "border border-border bg-background text-foreground",
        ghost: "bg-muted text-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "ghost",
    },
  },
);

export type PillProps = ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof pillVariants> & {
    children?: ReactNode;
  };

const Pill = forwardRef<HTMLSpanElement, PillProps>(function Pill(
  { variant, className, children, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(pillVariants({ variant }), className)}
      {...props}
    >
      {children}
    </span>
  );
});

export { Pill };
