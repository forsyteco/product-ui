import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Drawer } from './drawer';

describe('Drawer', () => {
  it('should render trigger', () => {
    render(
      <Drawer.Root>
        <Drawer.Trigger>Open drawer</Drawer.Trigger>
      </Drawer.Root>
    );

    expect(screen.getByRole('button', { name: 'Open drawer' })).toBeInTheDocument();
  });
});
