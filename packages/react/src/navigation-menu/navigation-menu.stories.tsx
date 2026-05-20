import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationMenu } from './navigation-menu';

const meta = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu.Root,
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Navigation menu from `@base-ui/react/navigation-menu`.' } },
  },
} satisfies Meta<typeof NavigationMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#overview">Overview</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#api">API</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  ),
};
