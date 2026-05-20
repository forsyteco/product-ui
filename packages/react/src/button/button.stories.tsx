import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A button component with canonical variants (`primary`, `default`, `ghost`, `danger`) and size options. Interaction states consume centralized tokens such as `--button-primary-background`, `--button-primary-hover`, `--button-primary-active`, and `--button-primary-focus-ring`.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'default', 'ghost', 'danger'],
      description: 'Button variant style',
      table: {
        type: { summary: "'primary' | 'default' | 'ghost' | 'danger'" },
        defaultValue: { summary: "'primary'" },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Playground: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

