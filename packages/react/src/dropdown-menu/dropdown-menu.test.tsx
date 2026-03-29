import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { DropdownMenu, DropdownMenuItem, DropdownMenuButton } from './dropdown-menu';

describe('DropdownMenu', () => {
  describe('when rendered with a trigger and items', () => {
    it('should render the dropdown trigger', () => {
      // Arrange
      // Act
      render(
        <DropdownMenu trigger={<button>Open</button>}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenu>
      );

      // Assert
      expect(screen.getByText('Open')).toBeInTheDocument();
    });

    it('should render menu items after the trigger is clicked', async () => {
      // Arrange
      render(
        <DropdownMenu trigger={<button>Open</button>}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenu>
      );

      // Act
      fireEvent.click(screen.getByText('Open'));

      // Assert
      expect(await screen.findByText('Item 1')).toBeInTheDocument();
      expect(await screen.findByText('Item 2')).toBeInTheDocument();
    });
  });

  describe('when className is provided', () => {
    it('should apply the custom className to the root', () => {
      // Arrange
      // Act
      const { container } = render(
        <DropdownMenu trigger={<button>Open</button>} className="custom-class">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenu>
      );

      // Assert
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });
});

describe('DropdownMenuItem', () => {
  describe('when the item has an onClick handler', () => {
    it('should call onClick when the item is activated', async () => {
      // Arrange
      const handleClick = vi.fn();
      render(
        <DropdownMenu trigger={<button>Open</button>}>
          <DropdownMenuItem onClick={handleClick}>Click me</DropdownMenuItem>
        </DropdownMenu>
      );
      fireEvent.click(screen.getByText('Open'));
      const item = await screen.findByText('Click me');

      // Act
      fireEvent.click(item);

      // Assert
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the item is disabled', () => {
    it('should render the item as disabled', async () => {
      // Arrange
      render(
        <DropdownMenu trigger={<button>Open</button>}>
          <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
        </DropdownMenu>
      );

      // Act
      fireEvent.click(screen.getByText('Open'));

      // Assert
      const item = await screen.findByText('Disabled');
      expect(item).toBeDisabled();
    });
  });
});

describe('DropdownMenuButton', () => {
  describe('when used as the menu trigger', () => {
    it('should render the button label', () => {
      // Arrange
      // Act
      render(
        <DropdownMenu trigger={<DropdownMenuButton>Menu</DropdownMenuButton>}>
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenu>
      );

      // Assert
      expect(screen.getByText('Menu')).toBeInTheDocument();
    });
  });
});
