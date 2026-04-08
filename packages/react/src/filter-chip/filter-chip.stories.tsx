import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { FilterChip } from './filter-chip';

const meta = {
  title: 'Components/FilterChip',
  component: FilterChip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggleable filter pill (Forsyte brand: black when selected).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: false,
    onClick: () => {},
    children: 'Status',
  },
  render: function Render(args) {
    const [active, setActive] = useState(args.active);
    return (
      <FilterChip
        active={active}
        onClick={() => setActive((v) => !v)}
        className={args.className}
        idleClassName={args.idleClassName}
        activeClassName={args.activeClassName}
      >
        {args.children}
      </FilterChip>
    );
  },
};

export const Active: Story = {
  args: {
    active: true,
    onClick: () => {},
    children: 'Status',
  },
  render: function Render(args) {
    const [active, setActive] = useState(args.active);
    return (
      <FilterChip
        active={active}
        onClick={() => setActive((v) => !v)}
        className={args.className}
        idleClassName={args.idleClassName}
        activeClassName={args.activeClassName}
      >
        {args.children}
      </FilterChip>
    );
  },
};
