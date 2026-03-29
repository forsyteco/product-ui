import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Toggle } from './toggle';

describe('Toggle', () => {
  it('should render', () => {
    render(
      <Toggle value="bold" aria-label="Bold">
        B
      </Toggle>
    );

    expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument();
  });
});
