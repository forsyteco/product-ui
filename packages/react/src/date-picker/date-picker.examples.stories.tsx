import type { Meta, StoryObj } from '@storybook/react-vite';
import dayjs from 'dayjs';
import { useState } from 'react';

import { Button } from '../button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../card';
import { DatePicker } from './date-picker';
import storyStyles from './date-picker.stories.module.css';

const meta = {
  title: 'Components/DatePicker/Examples',
  component: DatePicker,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePickerInCard: Story = {
  render: () => {
    const [value, setValue] = useState<Date | undefined>();

    const label = value ? dayjs(value).format('DD MMM YYYY') : 'No date selected';

    return (
      <Card className={storyStyles.exampleCard}>
        <CardHeader>
          <CardTitle>Schedule review</CardTitle>
        </CardHeader>
        <CardContent className={storyStyles.exampleCardContent}>
          <DatePicker value={value} onValueChange={setValue} />
        </CardContent>
        <CardFooter className={storyStyles.exampleCardFooter}>
          <div className={storyStyles.exampleLabel}>{label}</div>
          <Button variant="outline" size="sm" onClick={() => setValue(undefined)}>
            Clear
          </Button>
        </CardFooter>
      </Card>
    );
  },
};
