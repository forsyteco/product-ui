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
      <div className="sbStack2">
        <input type="text" placeholder="First Name" className="sbNativeInputSimple" />
        <input type="text" placeholder="Last Name" className="sbNativeInputSimple" />
      </div>
    </Fieldset>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <div className="sbStack2">
        <input type="text" placeholder="Field 1" className="sbNativeInputSimple" />
        <input type="text" placeholder="Field 2" className="sbNativeInputSimple" />
      </div>
    </Fieldset>
  ),
  args: {
    legend: 'Form Section',
    disabled: false,
  },
};

