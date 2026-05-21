import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';
import { useState } from 'react';

import { DatePicker } from './date-picker';
import storyStyles from './date-picker.stories.module.css';

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
      minDate={new Date()}
      inputFormat="DD/MM/YYYY"
    />
  ),
};

export const Clearable: Story = {
  render: () => (
    <DatePicker clearable defaultValue={new Date(2024, 0, 15)} inputFormat="DD/MM/YYYY" />
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <DatePicker readOnly defaultValue={new Date(2024, 0, 15)} inputFormat="DD/MM/YYYY" />
  ),
};

export const Required: Story = {
  render: () => <DatePicker required inputFormat="DD/MM/YYYY" />,
};

export const Validation: Story = {
  render: () => (
    <div className={storyStyles.validationLayout}>
      <DatePicker inputFormat="DD/MM/YYYY" defaultValue={new Date(2024, 0, 15)} />
      <p className={storyStyles.validationHint}>
        Try entering 31/02/2023 and tabbing out to see validation.
      </p>
    </div>
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
