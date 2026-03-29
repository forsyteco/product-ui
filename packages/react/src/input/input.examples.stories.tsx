import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';
import { Button } from '../button';

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
    <div className="sb-demo-narrow">
      <form className="sb-stack-4">
        <div>
          <label className="sb-form-label">
            Email
          </label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="sb-form-label">
            Password
          </label>
          <Input type="password" placeholder="••••••••" />
        </div>
        <Button type="submit" className="sb-w-full">
          Sign In
        </Button>
      </form>
    </div>
  ),
};

export const FormWithValidation: Story = {
  render: () => (
    <div className="sb-demo-narrow">
      <form className="sb-stack-4">
        <div>
          <label className="sb-form-label">
            Username
          </label>
          <Input placeholder="Enter username" />
          <p className="sb-mt-1 sb-text-base sb-help-text">Must be at least 3 characters</p>
        </div>
        <div>
          <label className="sb-form-label">
            Email
          </label>
          <Input type="email" placeholder="Enter email" error />
          <p className="sb-mt-1 sb-text-base sb-error-text">Please enter a valid email address</p>
        </div>
      </form>
    </div>
  ),
};

