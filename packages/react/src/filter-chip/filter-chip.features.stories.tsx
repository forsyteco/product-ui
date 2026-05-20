import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { FilterChip } from './filter-chip';

const meta = {
  title: 'Components/FilterChip/Features',
  component: FilterChip,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    active: false,
    onClick: () => {},
    children: 'Chip',
  },
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(true);
    return (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <FilterChip active={open} onClick={() => setOpen((v) => !v)}>
          Open
        </FilterChip>
        <FilterChip active={closed} onClick={() => setClosed((v) => !v)}>
          Closed
        </FilterChip>
      </div>
    );
  },
};
