import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationMenu } from './navigation-menu';

const meta = {
  title: 'Components/NavigationMenu/Features',
  component: NavigationMenu.Root,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof NavigationMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinksRow: Story = {
  render: () => (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#a">Alpha</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#b">Beta</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  ),
};
