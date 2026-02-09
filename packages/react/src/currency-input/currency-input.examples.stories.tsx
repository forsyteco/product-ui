import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { CurrencyInput } from './currency-input';
import { Button } from '../button';

const meta = {
  title: 'Components/CurrencyInput/Examples',
  component: CurrencyInput,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CurrencyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaymentForm: Story = {
  render: () => {
    const [amount, setAmount] = useState<number | undefined>();

    return (
      <div className="p-6 max-w-md space-y-4">
        <h2 className="text-lg font-semibold">Send payment</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">
              Amount
            </label>
            <CurrencyInput
              placeholder="0.00"
              value={amount}
              onValueChange={setAmount}
              min={0}
              decimalScale={2}
              currencySymbol="£"
            />
            <p className="mt-1 text-sm text-muted-foreground">
              Supports commas, partial decimals, and clamps to zero.
            </p>
          </div>
          <Button type="submit" className="w-full">
            Pay now
          </Button>
        </form>
      </div>
    );
  },
};

export const WithPresetAndMax: Story = {
  render: () => {
    const [amount, setAmount] = useState<number | undefined>(2500);
    const max = 5000;

    return (
      <div className="p-6 max-w-md space-y-4">
        <h2 className="text-lg font-semibold">Top up balance</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">
              Amount (max {max.toLocaleString()})
            </label>
            <CurrencyInput
              value={amount}
              onValueChange={setAmount}
              min={0}
              max={max}
              decimalScale={2}
              currencySymbol="$"
            />
            <p className="mt-1 text-sm text-muted-foreground">
              Value is clamped to the maximum allowed balance.
            </p>
          </div>
          <Button type="submit" className="w-full">
            Top up
          </Button>
        </form>
      </div>
    );
  },
};
