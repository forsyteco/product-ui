import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';
import { useState } from 'react';

import { Calendar } from './calendar';

const meta = {
  title: 'Components/Calendar/Features',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ControlledSingle: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(undefined);

    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={(date) => {
          if (date) setSelected(date);
        }}
        footer={
          <div className="mt-4 text-sm">
            {selected ? `Selected: ${dayjs(selected).format('DD/MM/YYYY')}` : 'Pick a day'}
          </div>
        }
      />
    );
  },
};

export const DropdownCaption: Story = {
  render: () => <Calendar captionLayout="dropdown" />,
};

export const MultipleMonths: Story = {
  render: () => <Calendar numberOfMonths={2} />,
};

export const DisabledSelected: Story = {
  render: () => {
    const date = dayjs().set('date', 8).toDate();
    return <Calendar mode="single" selected={date} disabled={date} />;
  },
};

export const WithStartAndEndMonths: Story = {
  render: () => (
    <Calendar
      startMonth={dayjs().startOf('year').subtract(2, 'months').toDate()}
      endMonth={dayjs().endOf('year').add(2, 'months').toDate()}
    />
  ),
};


