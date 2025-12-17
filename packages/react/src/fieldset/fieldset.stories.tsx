import type { Meta, StoryObj } from '@storybook/react-vite';
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
      <div className="space-y-2">
        <input type="text" placeholder="First Name" className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Last Name" className="w-full px-3 py-2 border rounded" />
      </div>
    </Fieldset>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <div className="space-y-2">
        <input type="text" placeholder="Field 1" className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Field 2" className="w-full px-3 py-2 border rounded" />
      </div>
    </Fieldset>
  ),
  args: {
    legend: 'Form Section',
    disabled: false,
  },
};

