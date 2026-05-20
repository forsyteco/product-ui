import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { SearchField } from './search-field';

const meta = {
  title: 'Components/SearchField/Examples',
  component: SearchField,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterPanel: Story = {
  render: function Render() {
    const [query, setQuery] = useState('');
    return (
      <div style={{ width: '24rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <SearchField
          clearable
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery('')}
          placeholder="Filter by name…"
          aria-label="Filter entities"
        />
        {query ? (
          <p style={{ fontSize: '0.75rem', color: 'currentColor' }}>
            Filtering for: <strong>{query}</strong>
          </p>
        ) : null}
      </div>
    );
  },
};
