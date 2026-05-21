import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';
import { useState } from 'react';
import { type DateRange } from 'react-day-picker';

import { Button } from '../button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../card';
import { Calendar } from './calendar';
import storyStyles from './calendar.stories.module.css';

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
    const [range, setRange] = useState<DateRange | undefined>();

    const label =
      range?.from && range?.to
        ? `${dayjs(range.from).format('DD MMM YYYY')} – ${dayjs(range.to).format('DD MMM YYYY')}`
        : range?.from
          ? `${dayjs(range.from).format('DD MMM YYYY')} – …`
          : 'Select a date range';

    return (
      <Card className={storyStyles.exampleCard}>
        <CardHeader>
          <CardTitle>Booking dates</CardTitle>
        </CardHeader>
        <CardContent className={storyStyles.exampleCardContent}>
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
          />
        </CardContent>
        <CardFooter className={storyStyles.exampleCardFooter}>
          <div className={storyStyles.exampleLabel}>{label}</div>
          <Button variant="outline" size="sm" onClick={() => setRange(undefined)}>
            Clear
          </Button>
        </CardFooter>
      </Card>
    );
  },
};


