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
    <div className="sbDemoNarrow">
      <form className="sbStack4">
        <div>
          <label className="sbFormLabel">
            Email
          </label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="sbFormLabel">
            Password
          </label>
          <Input type="password" placeholder="••••••••" />
        </div>
        <Button type="submit" className="sbWFull">
          Sign In
        </Button>
      </form>
    </div>
  ),
};

export const FormWithValidation: Story = {
  render: () => (
    <div className="sbDemoNarrow">
      <form className="sbStack4">
        <div>
          <label className="sbFormLabel">
            Username
          </label>
          <Input placeholder="Enter username" />
          <p className="sbMt1 sbTextBase sbHelpText">Must be at least 3 characters</p>
        </div>
        <div>
          <label className="sbFormLabel">
            Email
          </label>
          <Input type="email" placeholder="Enter email" error />
          <p className="sbMt1 sbTextBase sbErrorText">Please enter a valid email address</p>
        </div>
      </form>
    </div>
  ),
};

