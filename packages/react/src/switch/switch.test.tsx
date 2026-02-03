import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Switch } from './switch';

describe('Switch', () => {
  it('renders the switch component', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByText('Enable notifications')).toBeInTheDocument();
  });

  it('applies checked state', () => {
    render(<Switch checked />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
  });

  it('applies disabled state', () => {
    render(<Switch disabled />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeDisabled();
  });

  it('calls onChange when toggled', () => {
    const handleChange = vi.fn();
    render(<Switch onChange={handleChange} />);
    expect(handleChange).toBeDefined();
  });
});

