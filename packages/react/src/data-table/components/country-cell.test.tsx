import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { CountryCell } from './country-cell';
import styles from './data-table.module.css';

describe('CountryCell', () => {
  describe('when rendering the country name', () => {
    it('should render the country name correctly', () => {
      // Arrange
      const value = 'United Kingdom';

      // Act
      render(<CountryCell value={value} />);

      // Assert
      expect(screen.getByText('United Kingdom')).toBeInTheDocument();
    });

    it('should render different country names', () => {
      // Arrange
      const value = 'France';

      // Act
      render(<CountryCell value={value} />);

      // Assert
      expect(screen.getByText('France')).toBeInTheDocument();
    });

    it('should apply country name class', () => {
      // Arrange
      const value = 'Germany';

      // Act
      render(<CountryCell value={value} />);

      // Assert
      const nameElement = screen.getByText('Germany');
      expect(nameElement).toHaveClass(styles['copy-value']);
    });
  });

  describe('when rendering the flag image', () => {
    it('should render an img element for the flag', () => {
      // Arrange
      const value = 'United States';

      // Act
      render(<CountryCell value={value} />);

      // Assert
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
    });

    it('should render flag image with expected class', () => {
      // Arrange
      const value = 'Canada';

      // Act
      render(<CountryCell value={value} />);

      // Assert
      const img = screen.getByRole('img');
      expect(img).toHaveClass(styles['country-flag']);
    });

    it('should set correct alt text on flag image', () => {
      // Arrange
      const value = 'Japan';

      // Act
      render(<CountryCell value={value} />);

      // Assert
      const img = screen.getByRole('img');
      expect(img).toHaveAttribute('alt', 'Japan flag');
    });

    it('should use Twemoji CDN for flag images', () => {
      // Arrange
      const value = 'United Kingdom';

      // Act
      render(<CountryCell value={value} />);

      // Assert
      const img = screen.getByRole('img');
      expect(img.getAttribute('src')).toContain('twemoji');
    });
  });

  describe('when inspecting container styling', () => {
    it('should apply expected container class', () => {
      // Arrange
      const value = 'Australia';

      // Act
      const { container } = render(<CountryCell value={value} />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass(styles.country);
    });
  });

  describe('when the country name is unknown', () => {
    it('should still display the name for unknown country names', () => {
      // Arrange
      const value = 'Unknown Country';

      // Act
      render(<CountryCell value={value} />);

      // Assert
      expect(screen.getByText('Unknown Country')).toBeInTheDocument();
    });

    it('should still render an img element for unknown countries', () => {
      // Arrange
      const value = 'Fictional Land';

      // Act
      render(<CountryCell value={value} />);

      // Assert
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
    });
  });

  describe('when the flag image fails to load', () => {
    it('should show fallback "-" when image fails to load', () => {
      // Arrange
      render(<CountryCell value="Invalid Country" />);
      const img = screen.getByRole('img');

      // Act
      fireEvent.error(img);

      // Assert
      expect(screen.getByText('-')).toBeInTheDocument();
    });

    it('should hide the img element when error occurs', () => {
      // Arrange
      render(<CountryCell value="Invalid Country" />);
      const img = screen.getByRole('img');

      // Act
      fireEvent.error(img);

      // Assert
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    it('should still display country name when image fails to load', () => {
      // Arrange
      render(<CountryCell value="Some Country" />);
      const img = screen.getByRole('img');

      // Act
      fireEvent.error(img);

      // Assert
      expect(screen.getByText('Some Country')).toBeInTheDocument();
    });
  });

  describe('when handling edge cases', () => {
    it('should handle empty string gracefully', () => {
      // Arrange
      const value = '';

      // Act
      const { container } = render(<CountryCell value={value} />);

      // Assert
      const wrapper = container.firstChild;
      expect(wrapper).toBeInTheDocument();
    });

    it('should handle country names with special characters', () => {
      // Arrange
      const value = "Cote d'Ivoire";

      // Act
      render(<CountryCell value={value} />);

      // Assert
      expect(screen.getByText("Cote d'Ivoire")).toBeInTheDocument();
    });
  });
});
