import { describe, it, expect, vi, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '#test-utils';
import { CopyableCell } from './copyable-cell';

describe('CopyableCell', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('when rendering text', () => {
    it('should render the text value correctly', () => {
      // Arrange
      // Act
      render(<CopyableCell value="Hello World" />);

      // Assert
      expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    it('should handle empty string gracefully', () => {
      // Arrange
      // Act
      const { container } = render(<CopyableCell value="" />);

      // Assert
      // Component should still render without errors
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('when displaying the copy icon', () => {
    it('should have copy icon initially hidden (has opacity-0 class)', () => {
      // Arrange
      // Act
      const { container } = render(<CopyableCell value="Test value" />);

      // Assert
      // The copy button should have opacity-0 class when not hovered
      const copyButton = container.querySelector('button');
      expect(copyButton).toBeInTheDocument();
      expect(copyButton).toHaveClass('opacity-0');
    });

    it('should have group-hover:opacity-100 class on copy icon for hover visibility', () => {
      // Arrange
      // Act
      const { container } = render(<CopyableCell value="Test value" />);

      // Assert
      const copyButton = container.querySelector('button');
      expect(copyButton).toHaveClass('group-hover:opacity-100');
    });
  });

  describe('when rendering container layout', () => {
    it('should have proper layout classes on container (inline-flex, items-center, gap)', () => {
      // Arrange
      // Act
      const { container } = render(<CopyableCell value="Test value" />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('inline-flex');
      expect(wrapper).toHaveClass('items-center');
      expect(wrapper).toHaveClass('gap-1');
    });

    it('should have group class on container for hover interactions', () => {
      // Arrange
      // Act
      const { container } = render(<CopyableCell value="Test value" />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('group');
    });
  });

  describe('when styling the copy icon', () => {
    it('should render the copy icon', () => {
      // Arrange
      // Act
      const { container } = render(<CopyableCell value="Test value" />);

      // Assert
      const copyIcon = container.querySelector('button svg');
      expect(copyIcon).toBeInTheDocument();
    });

    it('should have correct size on copy icon (sm)', () => {
      // Arrange
      // Act
      const { container } = render(<CopyableCell value="Test value" />);

      // Assert
      const copyIcon = container.querySelector('button svg');
      expect(copyIcon).toHaveClass('h-3');
      expect(copyIcon).toHaveClass('w-3');
    });

    it('should have cursor-pointer class on copy button', () => {
      // Arrange
      // Act
      const { container } = render(<CopyableCell value="Test value" />);

      // Assert
      const copyButton = container.querySelector('button');
      expect(copyButton).toHaveClass('cursor-pointer');
    });
  });

  describe('when using clipboard functionality', () => {
    it('should call navigator.clipboard.writeText with the value when copy icon is clicked', async () => {
      // Arrange
      const user = userEvent.setup({ writeToClipboard: false });
      const mockWriteText = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined);
      const { container } = render(<CopyableCell value="Copy this text" />);
      const copyButton = container.querySelector('button');
      expect(copyButton).toBeInTheDocument();

      // Act
      if (copyButton) {
        await user.click(copyButton);
      }

      // Assert
      expect(mockWriteText).toHaveBeenCalledTimes(1);
      expect(mockWriteText).toHaveBeenCalledWith('Copy this text');
    });

    it('should copy empty string when value is empty', async () => {
      // Arrange
      const user = userEvent.setup({ writeToClipboard: false });
      const mockWriteText = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined);
      const { container } = render(<CopyableCell value="" />);
      const copyButton = container.querySelector('button');

      // Act
      if (copyButton) {
        await user.click(copyButton);
      }

      // Assert
      expect(mockWriteText).toHaveBeenCalledWith('');
    });
  });

  describe('when considering accessibility', () => {
    it('should have proper aria-label on copy button for accessibility', () => {
      // Arrange
      // Act
      render(<CopyableCell value="Accessible text" />);

      // Assert
      const copyButton = screen.getByRole('button', { name: /copy/i });
      expect(copyButton).toBeInTheDocument();
    });
  });
});
