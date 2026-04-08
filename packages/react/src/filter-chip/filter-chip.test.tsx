import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FilterChip } from './filter-chip';

describe('FilterChip', () => {
  it('renders children', () => {
    render(
      <FilterChip active={false} onClick={() => {}}>
        High risk
      </FilterChip>
    );
    expect(screen.getByRole('button', { name: 'High risk' })).toBeInTheDocument();
  });

  it('calls onClick when pressed', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <FilterChip active={false} onClick={onClick}>
        Toggle
      </FilterChip>
    );
    await user.click(screen.getByRole('button', { name: 'Toggle' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('sets aria-pressed from active', () => {
    const { rerender } = render(
      <FilterChip active={false} onClick={() => {}}>
        X
      </FilterChip>
    );
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');

    rerender(
      <FilterChip active onClick={() => {}}>
        X
      </FilterChip>
    );
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('merges className onto the trigger', () => {
    render(
      <FilterChip active={false} onClick={() => {}} className="chip-extra">
        X
      </FilterChip>
    );
    expect(screen.getByRole('button')).toHaveClass('chip-extra');
  });
});
