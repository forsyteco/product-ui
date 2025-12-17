import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CounterLabel } from './counter-label';

describe('CounterLabel', () => {
  it('renders with default variant and aria-hidden', () => {
    render(<CounterLabel>12</CounterLabel>);

    const el = screen.getByText('12').closest('[data-slot="counter-label"]');
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute('aria-hidden', 'true');
    expect(el).toHaveAttribute('data-variant', 'secondary');
  });

  it('does not render when empty', () => {
    const { container } = render(<CounterLabel />);
    expect(container.querySelector('[data-slot="counter-label"]')).toBeNull();
  });
});


