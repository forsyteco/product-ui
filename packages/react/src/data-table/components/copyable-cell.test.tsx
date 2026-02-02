import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CopyableCell from './copyable-cell';

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
    it('copy icon is initially hidden (has opacity-0 class)', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      // The copy button should have opacity-0 class when not hovered
      const copyButton = container.querySelector('button');
      expect(copyButton).toBeInTheDocument();
      expect(copyButton).toHaveClass('opacity-0');
    });

    it('copy icon has group-hover:opacity-100 class for hover visibility', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      const copyButton = container.querySelector('button');
      expect(copyButton).toHaveClass('group-hover:opacity-100');
    });
  });

  describe('Container Layout', () => {
    it('container has proper layout classes (inline-flex, items-center, gap)', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass('inline-flex');
      expect(wrapper).toHaveClass('items-center');
      expect(wrapper).toHaveClass('gap-1');
    });

    it('container has group class for hover interactions', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass('group');
    });
  });

  describe('Copy Icon Styling', () => {
    it('renders the Copy icon from lucide-react', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      // lucide-react icons render as SVGs with the lucide class
      const copyIcon = container.querySelector('svg.lucide-copy');
      expect(copyIcon).toBeInTheDocument();
    });

    it('copy icon has correct size (small)', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      const copyIcon = container.querySelector('svg.lucide-copy');
      expect(copyIcon).toHaveClass('h-3');
      expect(copyIcon).toHaveClass('w-3');
    });

    it('copy button has cursor-pointer class', () => {
      const { container } = render(<CopyableCell value="Test value" />);

      const copyButton = container.querySelector('button');
      expect(copyButton).toHaveClass('cursor-pointer');
    });
  });

  describe('Clipboard Functionality', () => {
    it('clicking the copy icon calls navigator.clipboard.writeText with the value', async () => {
      const { container } = render(<CopyableCell value="Copy this text" />);

      const copyButton = container.querySelector('button');
      expect(copyButton).toBeInTheDocument();

      fireEvent.click(copyButton!);

      expect(mockWriteText).toHaveBeenCalledTimes(1);
      expect(mockWriteText).toHaveBeenCalledWith('Copy this text');
    });

    it('copies empty string when value is empty', async () => {
      const { container } = render(<CopyableCell value="" />);

      const copyButton = container.querySelector('button');
      fireEvent.click(copyButton!);

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
