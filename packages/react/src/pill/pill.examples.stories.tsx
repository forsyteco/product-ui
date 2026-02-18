import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pill } from "./pill";
import { RiskLevelPill, RISK_LEVEL } from "./risk-level-pill";
import { StatusPill, STATUS } from "./status-pill";

const meta = {
  title: "Components/Pill/Examples",
  component: Pill,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TagList: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-sm font-medium">Projects:</p>
      <div className="flex flex-wrap gap-2">
        <Pill variant="primary">Dashboard</Pill>
        <Pill variant="primary">API Integration</Pill>
        <Pill variant="primary">Mobile App</Pill>
      </div>
    </div>
  ),
};

export const RiskAssessmentRow: Story = {
  render: () => (
    <div className="flex items-center gap-6 rounded border border-border p-4">
      <div className="flex-1">
        <p className="font-medium">Property Sale</p>
        <p className="text-sm text-muted-foreground">James Morgan</p>
      </div>
      <RiskLevelPill level={RISK_LEVEL.MEDIUM} />
      <div className="flex flex-col gap-1">
        <StatusPill status={STATUS.IN_PROGRESS} />
        <span className="text-xs text-muted-foreground">Version: v2.1</span>
      </div>
    </div>
  ),
};

export const PolicyTypes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Pill
        variant="outline"
        className="border-green-200 bg-green-50 text-green-700"
      >
        Active
      </Pill>
      <Pill
        variant="outline"
        className="border-amber-200 bg-amber-50 text-amber-700"
      >
        Draft
      </Pill>
      <Pill
        variant="outline"
        className="border-gray-200 bg-gray-50 text-gray-600"
      >
        Archived
      </Pill>
    </div>
  ),
};
