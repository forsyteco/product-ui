import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './input';
import Button from '../button';

const meta = {
  title: 'Components/Input/Examples',
  component: Input,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginForm: Story = {
  render: () => (
    <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input type="password" placeholder="••••••••" />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  ),
};

export const FormWithValidation: Story = {
  render: () => (
    <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <Input placeholder="Enter username" />
          <p className="mt-1 text-sm text-gray-500">Must be at least 3 characters</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input type="email" placeholder="Enter email" error />
          <p className="mt-1 text-sm text-red-600">Please enter a valid email address</p>
        </div>
      </form>
    </div>
  ),
};

