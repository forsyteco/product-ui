import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { SearchField } from './search-field';

const meta = {
  title: 'Components/SearchField/Features',
  component: SearchField,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  render: function Render() {
    return (
      <div style={{ width: '20rem' }}>
        <SearchField value="" onChange={() => {}} placeholder="Search…" aria-label="Search" disabled />
      </div>
    );
  },
};

export const SmallSize: Story = {
  render: function Render() {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: '16rem' }}>
        <SearchField
          size="sm"
          clearable
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
          placeholder="Search…"
          aria-label="Search"
        />
      </div>
    );
  },
};
