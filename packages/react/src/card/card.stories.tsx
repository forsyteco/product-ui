import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card primitive with header/content/footer slots.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="sb-w-360">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Short supporting text goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="sb-text-base sb-muted-text">
          This is the main content area. Use it for body copy, forms, or other components.
        </p>
      </CardContent>
      <CardFooter className="sb-card-footer-actions">
        <Button variant="default">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Playground: Story = {
  args: {},
  render: () => (
    <Card className="sb-w-360">
      <CardHeader>
        <CardTitle>Playground</CardTitle>
        <CardDescription>Try composing the card slots.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="sb-card-well" />
      </CardContent>
      <CardFooter className="sb-card-footer-end">
        <Button variant="default">Action</Button>
      </CardFooter>
    </Card>
  ),
};


