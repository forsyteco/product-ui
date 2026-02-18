import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pill } from "./pill";

const meta = {
  title: "Components/Pill",
  component: Pill,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A small label/badge component with variant styles matching the Button system. Use for tags, categories, and status indicators.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
      description: "Visual style variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "ghost" },
      },
    },
    children: {
      control: { type: "text" },
      description: "Content to display inside the pill",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Playground: Story = {
  args: {
    children: "Active",
    variant: "primary",
  },
};
