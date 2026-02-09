import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { CurrencyInput } from './currency-input';

const meta = {
  title: 'Components/CurrencyInput/Features',
  component: CurrencyInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CurrencyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => {
    const [valueDefault, setValueDefault] = useState<number | undefined>();
    const [valueClamped, setValueClamped] = useState<number | undefined>(5);
    const [valueLocale, setValueLocale] = useState<number | undefined>(1234.56);

    return (
      <div className="space-y-4 w-72">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Default (2 decimals)</p>
          <CurrencyInput
            placeholder="Enter amount"
            value={valueDefault}
            onValueChange={setValueDefault}
            currencySymbol="£"
          />
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Clamped between 0 and 10</p>
          <CurrencyInput
            value={valueClamped}
            onValueChange={setValueClamped}
            min={0}
            max={10}
            decimalScale={2}
            currencySymbol="$"
          />
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Different locale (fr-FR)</p>
          <CurrencyInput
            value={valueLocale}
            onValueChange={setValueLocale}
            locale="fr-FR"
            decimalScale={2}
            currencySymbol="€"
          />
        </div>
      </div>
    );
  },
};
