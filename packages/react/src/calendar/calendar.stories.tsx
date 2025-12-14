import type { Meta, StoryObj } from '@storybook/react-vite';

import { Calendar } from './calendar';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component:
          'Calendar component uses [React Day Picker](https://daypicker.dev/) behind the scene. Most of its implementation is inspired by [shadcn and Luca Ziegler Félix](https://date-picker.luca-felix.com/).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Calendar />,
};

export const Playground: Story = {
  args: {
    showOutsideDays: true,
    captionLayout: 'label',
    numberOfMonths: 1,
  },
  render: (args) => <Calendar {...args} />,
};