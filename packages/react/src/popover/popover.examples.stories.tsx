import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

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
    <div className="sb-p-6">
      <div className="sb-row sb-gap-2">
        <span className="sb-text-base sb-font-medium">Total Revenue</span>
        <Popover>
          <PopoverTrigger className="sb-popover-trigger-pad">
            <svg className="sb-icon-4 sb-icon-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </PopoverTrigger>
          <PopoverContent>
            <p className="sb-text-base sb-muted-text">
              Total revenue includes all sales from the current period, including refunds and discounts.
            </p>
          </PopoverContent>
        </Popover>
      </div>
      <p className="sb-mt-2 sb-text-2xl sb-font-bold">$45,231</p>
    </div>
  ),
};

