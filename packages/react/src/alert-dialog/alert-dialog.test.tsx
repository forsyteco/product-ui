import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AlertDialog } from './alert-dialog';

describe('AlertDialog', () => {
  it('should render trigger', () => {
    render(
      <AlertDialog.Root>
        <AlertDialog.Trigger>Open alert</AlertDialog.Trigger>
      </AlertDialog.Root>
    );

    expect(screen.getByRole('button', { name: 'Open alert' })).toBeInTheDocument();
  });
});
