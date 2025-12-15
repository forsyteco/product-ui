import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';
import { useState } from 'react';

import Button from '../button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../card';
import { Calendar } from './calendar';

const meta = {
  title: 'Components/Calendar/Examples',
  component: Calendar,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RangePickerInCard: Story = {
  render: () => {
    const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>();

    const label =
      range?.from && range?.to
        ? `${dayjs(range.from).format('DD MMM YYYY')} – ${dayjs(range.to).format('DD MMM YYYY')}`
        : range?.from
          ? `${dayjs(range.from).format('DD MMM YYYY')} – …`
          : 'Select a date range';

    return (
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>Booking dates</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Calendar
            mode="range"
            selected={range}
            // React Day Picker's range type is generic; keep the story simple.
            onSelect={(next) => setRange(next as unknown as { from?: Date; to?: Date } | undefined)}
            numberOfMonths={2}
          />
        </CardContent>
        <CardFooter className="justify-between gap-2">
          <div className="text-base text-muted-foreground">{label}</div>
          <Button variant="outline" size="sm">
            Clear
          </Button>
        </CardFooter>
      </Card>
    );
  },
};


