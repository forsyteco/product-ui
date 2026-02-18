import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pill } from "./pill";
import { RiskLevelPill, RISK_LEVEL } from "./risk-level-pill";
import { StatusPill, STATUS } from "./status-pill";

const meta = {
  title: "Components/Pill/Features",
  component: Pill,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Ghost</span>
        <Pill variant="ghost">Default</Pill>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Primary</span>
        <Pill variant="primary">Active</Pill>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Secondary</span>
        <Pill variant="secondary">Pending</Pill>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Outline</span>
        <Pill variant="outline">Draft</Pill>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Destructive</span>
        <Pill variant="destructive">Deleted</Pill>
      </div>
    </div>
  ),
};

export const RiskLevels: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <RiskLevelPill level={RISK_LEVEL.LOW} />
      <RiskLevelPill level={RISK_LEVEL.MEDIUM} />
      <RiskLevelPill level={RISK_LEVEL.HIGH} />
    </div>
  ),
};

export const Statuses: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <StatusPill status={STATUS.IN_PROGRESS} />
      <StatusPill status={STATUS.COMPLETE} />
      <StatusPill status={STATUS.DO_NOT_ACT} />
      <StatusPill status={STATUS.FAILED} />
    </div>
  ),
};

export const CustomClassName: Story = {
  render: () => (
    <Pill className="bg-purple-100 text-purple-800">Custom styled</Pill>
  ),
};
