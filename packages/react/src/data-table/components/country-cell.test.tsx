import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import CountryCell from './country-cell';

describe('CountryCell', () => {
  describe('Country Name Rendering', () => {
    it('renders the country name correctly', () => {
      render(<CountryCell value="United Kingdom" />);

      expect(screen.getByText('United Kingdom')).toBeInTheDocument();
    });

    it('renders different country names', () => {
      render(<CountryCell value="France" />);

      expect(screen.getByText('France')).toBeInTheDocument();
    });

    it('applies correct styling to country name (text-foreground)', () => {
      render(<CountryCell value="Germany" />);

      const nameElement = screen.getByText('Germany');
      expect(nameElement).toHaveClass('text-foreground');
    });
  });

  describe('Flag Image Rendering', () => {
    it('renders an img element for the flag', () => {
      render(<CountryCell value="United States" />);

      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
    });

    it('renders flag image with correct dimensions (h-5 w-5)', () => {
      render(<CountryCell value="Canada" />);

      const img = screen.getByRole('img');
      expect(img).toHaveClass('h-5');
      expect(img).toHaveClass('w-5');
    });

    it('sets correct alt text on flag image', () => {
      render(<CountryCell value="Japan" />);

      const img = screen.getByRole('img');
      expect(img).toHaveAttribute('alt', 'Japan flag');
    });

    it('uses Twemoji CDN for flag images', () => {
      render(<CountryCell value="United Kingdom" />);

      const img = screen.getByRole('img');
      expect(img.getAttribute('src')).toContain('twemoji');
    });
  });

  describe('Container Styling', () => {
    it('applies correct styling to container (inline-flex, items-center, gap)', () => {
      const { container } = render(<CountryCell value="Australia" />);

      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('inline-flex');
      expect(wrapper).toHaveClass('items-center');
      expect(wrapper).toHaveClass('gap-2');
    });
  });

  describe('Unknown Country Names', () => {
    it('handles unknown country names gracefully and still displays the name', () => {
      render(<CountryCell value="Unknown Country" />);

      expect(screen.getByText('Unknown Country')).toBeInTheDocument();
    });

    it('still renders an img element for unknown countries', () => {
      render(<CountryCell value="Fictional Land" />);

      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
    });
  });

  describe('Image Error Handling', () => {
    it('shows fallback "-" when image fails to load', () => {
      render(<CountryCell value="Invalid Country" />);

      const img = screen.getByRole('img');
      fireEvent.error(img);

      expect(screen.getByText('-')).toBeInTheDocument();
    });

    it('hides the img element when error occurs', () => {
      render(<CountryCell value="Invalid Country" />);

      const img = screen.getByRole('img');
      fireEvent.error(img);

      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    it('still displays country name when image fails to load', () => {
      render(<CountryCell value="Some Country" />);

      const img = screen.getByRole('img');
      fireEvent.error(img);

      expect(screen.getByText('Some Country')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty string gracefully', () => {
      const { container } = render(<CountryCell value="" />);

      const wrapper = container.firstChild;
      expect(wrapper).toBeInTheDocument();
    });

    it('handles country names with special characters', () => {
      render(<CountryCell value="Cote d'Ivoire" />);

      expect(screen.getByText("Cote d'Ivoire")).toBeInTheDocument();
    });
  });
});
