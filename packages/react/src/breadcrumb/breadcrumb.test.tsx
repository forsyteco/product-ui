import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb';

describe('Breadcrumb', () => {
  describe('when a full list with current page is rendered', () => {
    it('should render a breadcrumb navigation with links and current page semantics', () => {
      // Arrange
      render(
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );

      // Act
      const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
      const home = screen.getByRole('link', { name: 'Home' });
      const current = screen.getByText('Settings');

      // Assert
      expect(nav).toBeInTheDocument();
      expect(home).toHaveAttribute('href', '/home');
      expect(current).toHaveAttribute('aria-current', 'page');
      expect(current).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('when BreadcrumbEllipsis is rendered', () => {
    it('should render the ellipsis with accessible text', () => {
      // Arrange
      render(<BreadcrumbEllipsis />);

      // Act
      const more = screen.getByText('More');

      // Assert
      expect(more).toBeInTheDocument();
    });
  });
});
