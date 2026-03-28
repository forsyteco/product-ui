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
        <h3 className="sbTextBase sbFontMedium sbForegroundText sbMb2">Popover Title</h3>
        <p className="sbTextBase sbMutedText">This is the popover content.</p>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Filter</PopoverTrigger>
      <PopoverContent>
        <form className="sbStack4">
          <div>
            <label className="sbFormLabelInline">Status</label>
            <select className="sbNativeField">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="sbFormLabelInline">Date Range</label>
            <input type="date" className="sbNativeField" />
          </div>
          <Button type="submit" className="sbWFull">
            Apply
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  ),
};

