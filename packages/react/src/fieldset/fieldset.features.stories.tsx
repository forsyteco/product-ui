import type { Meta, StoryObj } from '@storybook/react-vite';
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
        <input type="text" placeholder="First Name" className="sb-native-input-simple" />
        <input type="text" placeholder="Last Name" className="sb-native-input-simple" />
      </div>
    </Fieldset>
  ),
};

export const WithoutLegend: Story = {
  render: () => (
    <Fieldset>
      <div className="sb-stack-2">
        <input type="text" placeholder="Field 1" className="sb-native-input-simple" />
        <input type="text" placeholder="Field 2" className="sb-native-input-simple" />
      </div>
    </Fieldset>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Fieldset legend="Disabled Fieldset" disabled>
      <div className="sb-stack-2">
        <input type="text" placeholder="Field 1" className="sb-native-input-simple" disabled />
        <input type="text" placeholder="Field 2" className="sb-native-input-simple" disabled />
      </div>
    </Fieldset>
  ),
};

