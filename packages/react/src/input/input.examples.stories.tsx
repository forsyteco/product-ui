import type { Meta, StoryObj } from '@storybook/react-vite';
import { AddressFormExample } from './address-form-example';
import { Input } from './input';
import { Button } from '../button';
import { FormField } from '../form-field';

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
    <div className="w-full max-w-sm">
      <form className="space-y-4">
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Control>
            <Input type="email" placeholder="you@example.com" />
          </FormField.Control>
        </FormField>
        <FormField>
          <FormField.Label>Password</FormField.Label>
          <FormField.Control>
            <Input type="password" placeholder="••••••••" />
          </FormField.Control>
        </FormField>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  ),
};

export const AddressForm: Story = {
  render: () => <AddressFormExample />,
};

export const FormWithValidation: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <form className="space-y-4">
        <FormField>
          <FormField.Label>Username</FormField.Label>
          <FormField.Control>
            <Input placeholder="Enter username" />
          </FormField.Control>
          <FormField.Description>Must be at least 3 characters</FormField.Description>
        </FormField>
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Control describedBy="both">
            <Input type="email" placeholder="Enter email" error />
          </FormField.Control>
          <FormField.Error>Please enter a valid email address</FormField.Error>
        </FormField>
      </form>
    </div>
  ),
};
