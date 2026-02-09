import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';
import { useState } from 'react';

import { DatePicker } from './date-picker';

const meta = {
  title: 'Components/DatePicker/Features',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>(new Date(2024, 0, 15));
    return <DatePicker value={value} onValueChange={setValue} />;
  },
};

export const CustomFormat: Story = {
  render: () => (
    <DatePicker
      defaultValue={new Date(2024, 2, 5)}
      formatDate={(date) => dayjs(date).format('ddd, D MMM')}
    />
  ),
};

export const DisabledDates: Story = {
  render: () => (
    <DatePicker
      calendarProps={{
        disabled: (date) => dayjs(date).isBefore(dayjs().startOf('day')),
      }}
    />
  ),
};

export const LimitedRange: Story = {
  render: () => (
    <DatePicker
      calendarProps={{
        startMonth: dayjs().startOf('year').toDate(),
        endMonth: dayjs().endOf('year').toDate(),
      }}
    />
  ),
};
