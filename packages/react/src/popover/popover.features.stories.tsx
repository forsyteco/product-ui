import type { Meta, StoryObj } from '@storybook/react-vite';
import Popover, { PopoverButton, PopoverPanel } from './popover';

const meta = {
  title: 'Components/Popover/Features',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Popover>
      <PopoverButton>Open Popover</PopoverButton>
      <PopoverPanel>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Popover Title</h3>
        <p className="text-sm text-gray-600">This is the popover content.</p>
      </PopoverPanel>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverButton>Filter</PopoverButton>
      <PopoverPanel>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date Range</label>
            <input type="date" className="mt-1 block w-full rounded-md border-gray-300" />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Apply
          </button>
        </form>
      </PopoverPanel>
    </Popover>
  ),
};

