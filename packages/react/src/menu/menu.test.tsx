import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Menu, MenuItem, MenuButton } from './menu';

describe('Menu', () => {
  describe('when rendered with a trigger and items', () => {
    it('should render the menu trigger', () => {
      render(
        <Menu trigger={<button>Open</button>}>
          <MenuItem>Item 1</MenuItem>
        </Menu>
      );

      expect(screen.getByText('Open')).toBeInTheDocument();
    });

    it('should render menu items after the trigger is clicked', async () => {
      render(
        <Menu trigger={<button>Open</button>}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      );

      fireEvent.click(screen.getByText('Open'));

      expect(await screen.findByText('Item 1')).toBeInTheDocument();
      expect(await screen.findByText('Item 2')).toBeInTheDocument();
    });
  });

  describe('when className is provided', () => {
    it('should apply the custom className to the root', () => {
      const { container } = render(
        <Menu trigger={<button>Open</button>} className="custom-class">
          <MenuItem>Item 1</MenuItem>
        </Menu>
      );

      expect(container.firstChild).toHaveClass('custom-class');
    });
  });
});

describe('MenuItem', () => {
  describe('when the item has an onClick handler', () => {
    it('should call onClick when the item is activated', async () => {
      const handleClick = vi.fn();
      render(
        <Menu trigger={<button>Open</button>}>
          <MenuItem onClick={handleClick}>Click me</MenuItem>
        </Menu>
      );
      fireEvent.click(screen.getByText('Open'));
      const item = await screen.findByText('Click me');

      fireEvent.click(item);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the item is disabled', () => {
    it('should render the item as disabled', async () => {
      render(
        <Menu trigger={<button>Open</button>}>
          <MenuItem disabled>Disabled</MenuItem>
        </Menu>
      );

      fireEvent.click(screen.getByText('Open'));

      const item = await screen.findByText('Disabled');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });
  });
});

describe('MenuButton', () => {
  describe('when used as the menu trigger', () => {
    it('should render the button label', () => {
      render(
        <Menu trigger={<MenuButton>Menu</MenuButton>}>
          <MenuItem>Item</MenuItem>
        </Menu>
      );

      expect(screen.getByText('Menu')).toBeInTheDocument();
    });
  });
});
