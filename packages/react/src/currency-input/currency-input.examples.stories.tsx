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
      <div className="sbDemoNarrow sbStack4">
        <h2 className="sbTextLg sbFontSemibold">Send payment</h2>
        <form className="sbStack4">
          <div>
            <label className="sbFormLabel">
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
            <p className="sbMt1 sbTextSm sbMutedText">
              Supports commas, partial decimals, and clamps to zero.
            </p>
          </div>
          <Button type="submit" className="sbWFull">
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
      <div className="sbDemoNarrow sbStack4">
        <h2 className="sbTextLg sbFontSemibold">Top up balance</h2>
        <form className="sbStack4">
          <div>
            <label className="sbFormLabel">
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
            <p className="sbMt1 sbTextSm sbMutedText">
              Value is clamped to the maximum allowed balance.
            </p>
          </div>
          <Button type="submit" className="sbWFull">
            Top up
          </Button>
        </form>
      </div>
    );
  },
};
