import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup } from './radio-group';
import type { RadioGroupOption } from './radio-group';

const meta = {
  title: 'Components/RadioGroup/Examples',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const planOptions: RadioGroupOption[] = [
  {
    id: 'basic',
    label: 'Basic Plan',
    value: 'basic',
    description: 'Perfect for individuals and small teams',
  },
  {
    id: 'pro',
    label: 'Pro Plan',
    value: 'pro',
    description: 'Best for growing businesses',
  },
  {
    id: 'enterprise',
    label: 'Enterprise Plan',
    value: 'enterprise',
    description: 'For large organizations',
  },
];

export const PlanSelector: Story = {
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState<string>('basic');
    return (
      <div className="p-6 max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Choose Your Plan</h2>
        <RadioGroup
          options={planOptions}
          value={selectedPlan}
          onChange={setSelectedPlan}
        />
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-base text-gray-600">
            Selected plan: <span className="font-medium">{selectedPlan}</span>
          </p>
        </div>
      </div>
    );
  },
};

