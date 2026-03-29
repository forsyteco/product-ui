import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from './input';
import styles from './input.module.css';

describe('Input', () => {
  it('renders the input component', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('applies error styling', () => {
    const { container } = render(<Input aria-invalid="true" />);
    const wrapper = container.firstChild;
    const input = screen.getByRole('textbox');
    expect(wrapper).toHaveClass(styles.root);
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies disabled state', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('handles different input types', () => {
    render(<Input type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('passes through common form and a11y attributes', () => {
    render(<Input name="email" required aria-label="Email address" />);
    const input = screen.getByRole('textbox', { name: 'Email address' });
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toBeRequired();
  });
});

