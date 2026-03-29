import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContextMenu } from './context-menu';

describe('ContextMenu', () => {
  it('should render trigger area', () => {
    render(
      <ContextMenu.Root>
        <ContextMenu.Trigger>Right click me</ContextMenu.Trigger>
      </ContextMenu.Root>
    );

    expect(screen.getByText('Right click me')).toBeInTheDocument();
  });
});
