import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Autocomplete } from './autocomplete';
import type { AutocompleteOption } from './types';

const meta = {
  title: 'Components/Autocomplete',
  component: Autocomplete.Root,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Search-first autocomplete: options open after typing a minimum number of characters. Supports loading state and custom empty messages. Use compound parts: Root, Control, LeadingIcon, Input, ClearButton, Options.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the autocomplete is disabled',
    },
    minQueryLength: {
      control: { type: 'number', min: 0, max: 5 },
      description: 'Minimum characters before showing options',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: AutocompleteOption[] = [
  { id: '1', label: 'Apple', value: 'apple' },
  { id: '2', label: 'Banana', value: 'banana' },
  { id: '3', label: 'Cherry', value: 'cherry' },
  { id: '4', label: 'Date', value: 'date' },
  { id: '5', label: 'Elderberry', value: 'elderberry' },
];

export const Default: Story = {
  args: {
    placeholder: "Apple",
    disabled: true,
    minQueryLength: 5
  },

  render: () => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    return (
      <div className="w-72">
        <Autocomplete.Root
          options={options}
          value={selected}
          onChange={setSelected}
          placeholder="Search fruits…"
        >
          <Autocomplete.Control>
            <Autocomplete.LeadingIcon />
            <Autocomplete.Input />
            <Autocomplete.ClearButton />
          </Autocomplete.Control>
          <Autocomplete.Options />
        </Autocomplete.Root>
      </div>
    );
  }
};

export const Playground: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    return (
      <div className="w-72">
        <Autocomplete.Root {...args} options={options} value={selected} onChange={setSelected}>
          <Autocomplete.Control>
            <Autocomplete.LeadingIcon />
            <Autocomplete.Input />
            <Autocomplete.ClearButton />
          </Autocomplete.Control>
          <Autocomplete.Options />
        </Autocomplete.Root>
      </div>
    );
  },
  args: {
    placeholder: "Apple",
    disabled: true,
    minQueryLength: 1,
  },
};
