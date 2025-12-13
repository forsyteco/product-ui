import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Popover, { PopoverButton, PopoverPanel } from './popover';

describe('Popover', () => {
  it('renders the popover component', () => {
    render(
      <Popover>
        <PopoverButton>Open</PopoverButton>
        <PopoverPanel>Content</PopoverPanel>
      </Popover>
    );
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('renders panel content', () => {
    render(
      <Popover>
        <PopoverButton>Open</PopoverButton>
        <PopoverPanel>Popover content</PopoverPanel>
      </Popover>
    );
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });
});

