import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';

const meta = {
  title: 'Components/Select/Examples',
  component: Select,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CountrySelect: Story = {
  render: () => (
    <div className="sb-demo-narrow">
      <form className="sb-stack-4">
        <div>
          <label className="sb-form-label">
            Country
          </label>
          <Select
            options={[
              { value: 'us', label: 'United States' },
              { value: 'uk', label: 'United Kingdom' },
              { value: 'ca', label: 'Canada' },
              { value: 'au', label: 'Australia' },
            ]}
            placeholder="Select a country..."
          />
        </div>
        <div>
          <label className="sb-form-label">
            State/Province
          </label>
          <Select
            options={[
              { value: 'ny', label: 'New York' },
              { value: 'ca', label: 'California' },
              { value: 'tx', label: 'Texas' },
            ]}
            placeholder="Select a state..."
          />
        </div>
      </form>
    </div>
  ),
};

