import { describe, it, expect } from 'vitest';
import { act, fireEvent, render, screen } from '#test-utils';
import { CountryCell } from './country-cell';

describe('CountryCell', () => {
  describe('when rendering the country name', () => {
    it('should render the country name correctly', () => {
      // Arrange
      // Act
      render(<CountryCell value="United Kingdom" />);

      // Assert
      expect(screen.getByText('United Kingdom')).toBeInTheDocument();
    });

    it('should render different country names', () => {
      // Arrange
      // Act
      render(<CountryCell value="France" />);

      // Assert
      expect(screen.getByText('France')).toBeInTheDocument();
    });

    it('should apply correct styling to country name (text-foreground)', () => {
      // Arrange
      // Act
      render(<CountryCell value="Germany" />);

      // Assert
      const nameElement = screen.getByText('Germany');
      expect(nameElement).toHaveClass('text-foreground');
    });
  });

  describe('when rendering the flag image', () => {
    it('should render a decorative flag image for known countries', () => {
      // Arrange
      // Act
      const { container } = render(<CountryCell value="United States" />);

      // Assert
      const img = container.querySelector('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('aria-hidden', 'true');
    });

    it('should render flag image with correct dimensions (h-5 w-5)', () => {
      // Arrange
      // Act
      const { container } = render(<CountryCell value="Canada" />);

      // Assert
      const img = container.querySelector('img');
      expect(img).toHaveClass('h-5');
      expect(img).toHaveClass('w-5');
    });

    it('should resolve the flag URL from the country code via CountryFlagProvider', () => {
      // Arrange
      // Act
      const { container } = render(<CountryCell value="Japan" />);

      // Assert
      const img = container.querySelector('img');
      expect(img?.getAttribute('src')).toContain('JP');
    });
  });

  describe('when rendering container styling', () => {
    it('should apply correct styling to container (inline-flex, items-center, gap)', () => {
      // Arrange
      // Act
      const { container } = render(<CountryCell value="Australia" />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('inline-flex');
      expect(wrapper).toHaveClass('items-center');
      expect(wrapper).toHaveClass('gap-2');
    });
  });

  describe('when the country name is unknown', () => {
    it('should handle unknown country names gracefully and still display the name', () => {
      // Arrange
      // Act
      render(<CountryCell value="Unknown Country" />);

      // Assert
      expect(screen.getByText('Unknown Country')).toBeInTheDocument();
    });

    it('should still attempt to render a flag when CountryFlagProvider supplies a URL', () => {
      // Arrange
      // Act
      const { container } = render(<CountryCell value="Fictional Land" />);

      // Assert
      expect(container.querySelector('img')).toBeInTheDocument();
    });
  });

  describe('when the flag image fails to load', () => {
    it('should hide the flag when the image fails to load', () => {
      // Arrange
      const { container } = render(<CountryCell value="Invalid Country" />);
      const img = container.querySelector('img');
      expect(img).toBeInTheDocument();

      // Act
      act(() => {
        fireEvent.error(img!);
      });

      // Assert
      expect(container.querySelector('img')).not.toBeInTheDocument();
    });

    it('should still display country name when image fails to load', () => {
      // Arrange
      const { container } = render(<CountryCell value="Some Country" />);
      const img = container.querySelector('img');

      // Act
      act(() => {
        fireEvent.error(img!);
      });

      // Assert
      expect(screen.getByText('Some Country')).toBeInTheDocument();
    });
  });

  describe('when handling edge cases', () => {
    it('should handle empty string gracefully', () => {
      // Arrange
      // Act
      const { container } = render(<CountryCell value="" />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toBeInTheDocument();
    });

    it('should handle country names with special characters', () => {
      // Arrange
      // Act
      render(<CountryCell value="Cote d'Ivoire" />);

      // Assert
      expect(screen.getByText("Cote d'Ivoire")).toBeInTheDocument();
    });
  });
});
