import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

const meta = {
  title: 'Components/Input/Features',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the input has an error',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Input placeholder="Normal input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="Error input" error />
      <Input placeholder="Readonly input" readOnly value="Readonly value" />
    </div>
  ),
};

