import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import DropdownMenu, { DropdownMenuItem, DropdownMenuButton } from './dropdown-menu';

describe('DropdownMenu', () => {
  it('renders the dropdown menu component', () => {
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
      </DropdownMenu>
    );
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('renders menu items', () => {
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenu>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <DropdownMenu trigger={<button>Open</button>} className="custom-class">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
      </DropdownMenu>
    );
    const menu = container.querySelector('[role="menu"]')?.parentElement;
    expect(menu).toHaveClass('custom-class');
  });
});

describe('DropdownMenuItem', () => {
  it('renders with onClick handler', () => {
    const handleClick = vi.fn();
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem onClick={handleClick}>Click me</DropdownMenuItem>
      </DropdownMenu>
    );
    const item = screen.getByText('Click me');
    expect(item).toBeInTheDocument();
  });

  it('applies disabled state', () => {
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
      </DropdownMenu>
    );
    const item = screen.getByText('Disabled');
    expect(item).toBeDisabled();
  });
});

describe('DropdownMenuButton', () => {
  it('renders the button component', () => {
    render(
      <DropdownMenu trigger={<DropdownMenuButton>Menu</DropdownMenuButton>}>
        <DropdownMenuItem>Item</DropdownMenuItem>
      </DropdownMenu>
    );
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });
});

