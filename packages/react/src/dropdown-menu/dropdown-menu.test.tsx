import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
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

  it('renders menu items', async () => {
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenu>
    );

    fireEvent.click(screen.getByText('Open'));
    expect(await screen.findByText('Item 1')).toBeInTheDocument();
    expect(await screen.findByText('Item 2')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <DropdownMenu trigger={<button>Open</button>} className="custom-class">
        <DropdownMenuItem>Item 1</DropdownMenuItem>
      </DropdownMenu>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});

describe('DropdownMenuItem', () => {
  it('renders with onClick handler', async () => {
    const handleClick = vi.fn();
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem onClick={handleClick}>Click me</DropdownMenuItem>
      </DropdownMenu>
    );

    fireEvent.click(screen.getByText('Open'));
    const item = await screen.findByText('Click me');
    fireEvent.click(item);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled state', async () => {
    render(
      <DropdownMenu trigger={<button>Open</button>}>
        <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
      </DropdownMenu>
    );

    fireEvent.click(screen.getByText('Open'));
    const item = await screen.findByText('Disabled');
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

