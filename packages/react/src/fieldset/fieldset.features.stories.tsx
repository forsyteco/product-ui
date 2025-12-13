import type { Meta, StoryObj } from '@storybook/react-vite';
import Fieldset from './fieldset';

const meta = {
  title: 'Components/Fieldset/Features',
  component: Fieldset,
  parameters: {
    layout: 'centered',
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
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLegend: Story = {
  render: () => (
    <Fieldset legend="Personal Information">
      <div className="space-y-2">
        <input type="text" placeholder="First Name" className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Last Name" className="w-full px-3 py-2 border rounded" />
      </div>
    </Fieldset>
  ),
};

export const WithoutLegend: Story = {
  render: () => (
    <Fieldset>
      <div className="space-y-2">
        <input type="text" placeholder="Field 1" className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Field 2" className="w-full px-3 py-2 border rounded" />
      </div>
    </Fieldset>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Fieldset legend="Disabled Fieldset" disabled>
      <div className="space-y-2">
        <input type="text" placeholder="Field 1" className="w-full px-3 py-2 border rounded" disabled />
        <input type="text" placeholder="Field 2" className="w-full px-3 py-2 border rounded" disabled />
      </div>
    </Fieldset>
  ),
};

