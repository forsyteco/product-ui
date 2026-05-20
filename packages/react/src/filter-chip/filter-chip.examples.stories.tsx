import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { FilterChip } from './filter-chip';

const meta = {
  title: 'Components/FilterChip/Examples',
  component: FilterChip,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RiskFilter: Story = {
  args: {
    active: false,
    onClick: () => {},
    children: 'Filter',
  },
  render: function Render() {
    const [high, setHigh] = useState(false);
    const [medium, setMedium] = useState(true);
    return (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <FilterChip active={high} onClick={() => setHigh((v) => !v)}>
          High risk
        </FilterChip>
        <FilterChip active={medium} onClick={() => setMedium((v) => !v)}>
          Medium risk
        </FilterChip>
      </div>
    );
  },
};
