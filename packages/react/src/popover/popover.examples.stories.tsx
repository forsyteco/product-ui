import type { Meta, StoryObj } from '@storybook/react-vite';
import Popover, { PopoverButton, PopoverPanel } from './popover';

const meta = {
  title: 'Components/Popover/Examples',
  component: Popover,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoPopover: Story = {
  render: () => (
    <div className="p-6">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Total Revenue</span>
        <Popover>
          <PopoverButton className="p-1">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </PopoverButton>
          <PopoverPanel>
            <p className="text-sm text-gray-600">
              Total revenue includes all sales from the current period, including refunds and discounts.
            </p>
          </PopoverPanel>
        </Popover>
      </div>
      <p className="mt-2 text-2xl font-bold">$45,231</p>
    </div>
  ),
};

