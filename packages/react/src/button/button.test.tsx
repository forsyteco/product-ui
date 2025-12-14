import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('renders the button component', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    screen.getByText('Click me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes', () => {
    const { container } = render(<Button variant="secondary">Button</Button>);
    const button = container.querySelector('button');
    // secondary maps to brand primary styling in this library
    expect(button).toHaveClass('bg-primary');
  });

  it('applies size classes', () => {
    const { container } = render(<Button size="lg">Button</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('px-6', 'py-3');
  });

  it('applies disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });
});

