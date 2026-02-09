import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { CurrencyInput } from './currency-input';

const meta = {
  title: 'Components/CurrencyInput',
  component: CurrencyInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CurrencyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>();

    return (
      <div className="space-y-2 w-64">
        <CurrencyInput
          placeholder="Enter amount"
          value={value}
          onValueChange={setValue}
        />
        <div className="text-sm text-muted-foreground">
          Current value: {value ?? 'undefined'}
        </div>
      </div>
    );
  },
};

export const WithBounds: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(5);

    return (
      <div className="space-y-2 w-64">
        <CurrencyInput
          value={value}
          onValueChange={setValue}
          min={0}
          max={10}
          decimalScale={2}
        />
        <div className="text-sm text-muted-foreground">
          Clamped between 0 and 10
        </div>
      </div>
    );
  },
};
