import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../input';
import { Fieldset } from './fieldset';

const meta = {
  title: 'Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A fieldset component for grouping form fields. Supports optional legend and all standard fieldset HTML attributes.',
      },
    },
  },
  argTypes: {
    legend: {
      control: { type: 'text' },
      description: 'Legend text for the fieldset',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the fieldset is disabled',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset legend="Personal Information">
      <div className="sb-stack-2">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
      </div>
    </Fieldset>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <div className="sb-stack-2">
        <Input type="text" placeholder="Field 1" />
        <Input type="text" placeholder="Field 2" />
      </div>
    </Fieldset>
  ),
  args: {
    legend: 'Form Section',
    disabled: false,
  },
};

