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

  describe('Text Rendering', () => {
    it('renders the text value correctly', () => {
      render(<CopyableCell value="Hello World" />);

      expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    it('handles empty string gracefully', () => {
      const { container } = render(<CopyableCell value="" />);

      // Component should still render without errors
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Copy Icon Visibility', () => {
    it('copy icon uses hidden-by-default copy button class', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      // The copy button should have opacity-0 class when not hovered
      const copyButton = container.querySelector('button');
      expect(copyButton).toBeInTheDocument();
      expect(copyButton).toHaveClass(styles['copy-button']);
    });

    it('copy icon is wrapped by hover-aware group container', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass(styles['copy-group']);
    });
  });

  describe('Container Layout', () => {
    it('container has proper layout class', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass(styles['copy-group']);
    });

    it('container uses copy group styling', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass(styles['copy-group']);
    });
  });

  describe('Copy Icon Styling', () => {
    it('renders the Copy icon from lucide-react', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      // lucide-react icons render as SVGs with the lucide class
      const copyIcon = container.querySelector('svg.lucide-copy');
      expect(copyIcon).toBeInTheDocument();
    });

    it('copy icon uses module sizing class', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      const copyIcon = container.querySelector('svg.lucide-copy');
      expect(copyIcon).toHaveClass(styles['copy-icon']);
    });

    it('copy button uses module class', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      const copyButton = container.querySelector('button');
      expect(copyButton).toHaveClass(styles['copy-button']);
    });
  });

  describe('Clipboard Functionality', () => {
    it('clicking the copy icon calls navigator.clipboard.writeText with the value', async () => {
      const { container } = render(<CopyableCell value="Copy this text" />);

      const copyButton = container.querySelector('button');
      expect(copyButton).toBeInTheDocument();

      if (copyButton) {
        fireEvent.click(copyButton);
      }

      expect(mockWriteText).toHaveBeenCalledTimes(1);
      expect(mockWriteText).toHaveBeenCalledWith('Copy this text');
    });

    it('copies empty string when value is empty', async () => {
      const { container } = render(<CopyableCell value="" />);

      const copyButton = container.querySelector('button');
      if (copyButton) {
        fireEvent.click(copyButton);
      }

      expect(mockWriteText).toHaveBeenCalledWith('');
    });
  });

  describe('Accessibility', () => {
    it('copy button has proper aria-label for accessibility', () => {
      render(<CopyableCell value="Accessible text" />);

      const copyButton = screen.getByRole('button', { name: /copy/i });
      expect(copyButton).toBeInTheDocument();
    });
  });
});
