import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ScrollArea } from './scroll-area';

describe('ScrollArea', () => {
  it('should render content', () => {
    render(
      <ScrollArea.Root>
        <ScrollArea.Viewport>
          <ScrollArea.Content>Long content block</ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    );

    expect(screen.getByText('Long content block')).toBeInTheDocument();
  });
});
