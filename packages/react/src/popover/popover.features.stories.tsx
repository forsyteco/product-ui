import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from '../button';

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
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>
        <h3 className="sb-text-base sb-font-medium sb-foreground-text sb-mb-2">Popover Title</h3>
        <p className="sb-text-base sb-muted-text">This is the popover content.</p>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Filter</PopoverTrigger>
      <PopoverContent>
        <form className="sb-stack-4">
          <div>
            <label className="sb-form-label-inline">Status</label>
            <select className="sb-native-field">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="sb-form-label-inline">Date Range</label>
            <input type="date" className="sb-native-field" />
          </div>
          <Button type="submit" className="sb-w-full">
            Apply
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  ),
};

