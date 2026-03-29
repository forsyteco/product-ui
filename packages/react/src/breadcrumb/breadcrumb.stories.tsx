import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb';
import { Button } from '../button';
import { Menu, MenuItem } from '../menu/menu';

const meta = {
  title: 'Components/Breadcrumb',
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export function Default() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Menu
            align="left"
            trigger={
              <Button variant="ghost" size="sm" className="sb-breadcrumb-trigger">
                <BreadcrumbEllipsis className="sb-icon-4" />
                <span className="sb-sr-only">Toggle menu</span>
              </Button>
            }
          >
            <MenuItem>Documentation</MenuItem>
            <MenuItem>Themes</MenuItem>
            <MenuItem>GitHub</MenuItem>
          </Menu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export const Playground: Story = {
  args: {
    collapsed: true,
  } as { collapsed: boolean },
  render: (args) => {
    const collapsed = (args as { collapsed?: boolean }).collapsed ?? true;

    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {collapsed ? (
            <BreadcrumbItem>
              <Menu
                align="left"
                trigger={
                  <Button variant="ghost" size="sm" className="sb-breadcrumb-trigger">
                    <BreadcrumbEllipsis className="sb-icon-4" />
                    <span className="sb-sr-only">Toggle menu</span>
                  </Button>
                }
              >
                <MenuItem>Documentation</MenuItem>
                <MenuItem>Themes</MenuItem>
                <MenuItem>GitHub</MenuItem>
              </Menu>
            </BreadcrumbItem>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
          )}

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  },
};