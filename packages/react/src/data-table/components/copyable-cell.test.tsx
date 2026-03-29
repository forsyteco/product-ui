import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CopyableCell } from './copyable-cell';
import styles from './data-table.module.css';

describe('CopyableCell', () => {
  const mockWriteText = vi.fn();

  beforeEach(() => {
    // Mock navigator.clipboard.writeText
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });
    mockWriteText.mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('when rendering text', () => {
    it('should render the text value correctly', () => {
      // Arrange
      const value = 'Hello World';

      // Act
      render(<CopyableCell value={value} />);

      // Assert
      expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    it('should handle empty string gracefully', () => {
      // Arrange
      const value = '';

      // Act
      const { container } = render(<CopyableCell value={value} />);

      // Assert
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('when inspecting copy icon visibility', () => {
    it('should apply hidden-by-default copy button class to the copy icon', () => {
      // Arrange
      const value = 'Test value';

      // Act
      const { container } = render(<CopyableCell value={value} />);

      // Assert
      const copyButton = container.querySelector('button');
      expect(copyButton).toBeInTheDocument();
      expect(copyButton).toHaveClass(styles['copy-button']);
    });

    it('should wrap the copy icon in a hover-aware group container', () => {
      // Arrange
      const value = 'Test value';

      // Act
      const { container } = render(<CopyableCell value={value} />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass(styles['copy-group']);
    });
  });

  describe('when inspecting container layout', () => {
    it('should apply the copy group class to the container', () => {
      // Arrange
      const value = 'Test value';

      // Act
      const { container } = render(<CopyableCell value={value} />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass(styles['copy-group']);
    });

    it('should use copy group styling on the container', () => {
      // Arrange
      const value = 'Test value';

      // Act
      const { container } = render(<CopyableCell value={value} />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass(styles['copy-group']);
    });
  });

  describe('when inspecting copy icon styling', () => {
    it('should render the Copy icon from lucide-react', () => {
      // Arrange
      const value = 'Test value';

      // Act
      const { container } = render(<CopyableCell value={value} />);

      // Assert
      const copyIcon = container.querySelector('svg.lucide-copy');
      expect(copyIcon).toBeInTheDocument();
    });

    it('should apply module sizing class to the copy icon', () => {
      // Arrange
      const value = 'Test value';

      // Act
      const { container } = render(<CopyableCell value={value} />);

      // Assert
      const copyIcon = container.querySelector('svg.lucide-copy');
      expect(copyIcon).toHaveClass(styles['copy-icon']);
    });

    it('should apply module class to the copy button', () => {
      // Arrange
      const value = 'Test value';

      // Act
      const { container } = render(<CopyableCell value={value} />);

      // Assert
      const copyButton = container.querySelector('button');
      expect(copyButton).toHaveClass(styles['copy-button']);
    });
  });

  describe('when copying to the clipboard', () => {
    it('should call navigator.clipboard.writeText with the value when the copy icon is clicked', async () => {
      // Arrange
      const value = 'Copy this text';
      const { container } = render(<CopyableCell value={value} />);
      const copyButton = container.querySelector('button');
      expect(copyButton).toBeInTheDocument();

      // Act
      if (copyButton) {
        fireEvent.click(copyButton);
      }

      // Assert
      expect(mockWriteText).toHaveBeenCalledTimes(1);
      expect(mockWriteText).toHaveBeenCalledWith('Copy this text');
    });

    it('should copy empty string when value is empty', async () => {
      // Arrange
      const value = '';
      const { container } = render(<CopyableCell value={value} />);
      const copyButton = container.querySelector('button');

      // Act
      if (copyButton) {
        fireEvent.click(copyButton);
      }

      // Assert
      expect(mockWriteText).toHaveBeenCalledWith('');
    });
  });

  describe('when checking accessibility', () => {
    it('should expose a copy button with a proper aria-label', () => {
      // Arrange
      const value = 'Accessible text';

      // Act
      render(<CopyableCell value={value} />);

      // Assert
      const copyButton = screen.getByRole('button', { name: /copy/i });
      expect(copyButton).toBeInTheDocument();
    });
  });
});
