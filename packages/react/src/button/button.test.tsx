import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';
import styles from './button.module.css';

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
    const { container } = render(<Button variant="default">Button</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass(styles['variant-default']);
  });

  it('applies size classes', () => {
    const { container } = render(<Button size="lg">Button</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass(styles['size-lg']);
  });

  it('applies disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });
});

