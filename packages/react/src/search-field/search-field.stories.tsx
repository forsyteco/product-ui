import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { SearchField } from './search-field';

const meta = {
  title: 'Components/SearchField',
  component: SearchField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Search input using the `Input` start/end slots — search icon on the left, optional clear button on the right.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: '20rem' }}>
        <SearchField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search…"
          aria-label="Search"
        />
      </div>
    );
  },
};

export const Clearable: Story = {
  render: function Render() {
    const [value, setValue] = useState('Acme Corp');
    return (
      <div style={{ width: '20rem' }}>
        <SearchField
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
