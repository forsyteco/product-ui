import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Toolbar } from './toolbar';

describe('Toolbar', () => {
  it('should render actions', () => {
    render(
      <Toolbar.Root aria-label="Tools">
        <Toolbar.Button>Cut</Toolbar.Button>
        <Toolbar.Button>Copy</Toolbar.Button>
      </Toolbar.Root>
    );

    expect(screen.getByRole('toolbar', { name: 'Tools' })).toBeInTheDocument();
  });
});
