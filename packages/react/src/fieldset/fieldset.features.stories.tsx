import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../input';
import { Fieldset } from './fieldset';

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
      <div className="sb-stack-2">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
      </div>
    </Fieldset>
  ),
};

export const WithoutLegend: Story = {
  render: () => (
    <Fieldset>
      <div className="sb-stack-2">
        <Input type="text" placeholder="Field 1" />
        <Input type="text" placeholder="Field 2" />
      </div>
    </Fieldset>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Fieldset legend="Disabled Fieldset" disabled>
      <div className="sb-stack-2">
        <Input type="text" placeholder="Field 1" disabled />
        <Input type="text" placeholder="Field 2" disabled />
      </div>
    </Fieldset>
  ),
};

