import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationMenu } from './navigation-menu';

const meta = {
  title: 'Components/NavigationMenu/Examples',
  component: NavigationMenu.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof NavigationMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductNav: Story = {
  render: () => (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#dash">Dashboard</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#reports">Reports</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#settings">Settings</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  ),
};
