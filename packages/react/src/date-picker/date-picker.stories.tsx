import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from './date-picker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DatePicker />,
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>(new Date(2024, 0, 15));
    return <DatePicker value={value} onValueChange={setValue} />;
  },
};
