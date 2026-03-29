import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  PageLayout,
  PageLayoutBody,
  PageLayoutContent,
  PageLayoutFooter,
  PageLayoutHeader,
  PageLayoutPane,
  PageLayoutSection,
} from './page-layout';

describe('PageLayout', () => {
  describe('when composed with header, section, body, content, pane, and footer', () => {
    it('should render sections and landmark attributes', () => {
      // Arrange
      // Act
      render(
        <PageLayout>
          <PageLayoutHeader ariaLabel="Page header">Header</PageLayoutHeader>
          <PageLayoutSection>Section</PageLayoutSection>
          <PageLayoutBody>
            <PageLayoutContent ariaLabel="Main content">Main</PageLayoutContent>
            <PageLayoutPane ariaLabel="Context pane">Pane</PageLayoutPane>
          </PageLayoutBody>
          <PageLayoutFooter ariaLabel="Page footer">Footer</PageLayoutFooter>
        </PageLayout>
      );

      // Assert
      expect(screen.getByText('Header').closest('header')).toHaveAttribute('aria-label', 'Page header');
      expect(screen.getByText('Footer').closest('footer')).toHaveAttribute('aria-label', 'Page footer');
      expect(screen.getByRole('main', { name: 'Main content' })).toBeInTheDocument();
      expect(screen.getByRole('complementary', { name: 'Context pane' })).toBeInTheDocument();
    });
  });

  describe('when the pane is resizable', () => {
    it('should render a vertical resize separator', () => {
      // Arrange
      // Act
      render(
        <PageLayout>
          <PageLayoutBody>
            <PageLayoutContent>Main</PageLayoutContent>
            <PageLayoutPane ariaLabel="Resizable pane" resizable>
              Pane
            </PageLayoutPane>
          </PageLayoutBody>
        </PageLayout>
      );

      // Assert
      expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
    });
  });

  describe('when PageLayoutSection is rendered outside PageLayout', () => {
    it('should throw a descriptive error', () => {
      // Arrange
      const renderOutside = () => render(<PageLayoutSection>Section</PageLayoutSection>);

      // Act
      const run = () => renderOutside();

      // Assert
      expect(run).toThrow('PageLayout.* must be used inside <PageLayout>.');
    });
  });

  describe('when header and footer use divider variants', () => {
    it('should apply divider line and filled classes', () => {
      // Arrange
      // Act
      render(
        <PageLayout>
          <PageLayoutHeader divider="line">Header</PageLayoutHeader>
          <PageLayoutFooter divider="filled">Footer</PageLayoutFooter>
        </PageLayout>
      );

      // Assert
      const header = screen.getByText('Header').closest('header');
      const footer = screen.getByText('Footer').closest('footer');
      expect(header?.firstElementChild?.className).toContain('divider-line');
      expect(footer?.firstElementChild?.className).toContain('divider-filled');
    });
  });

  describe('when PageLayoutBody receives gap and style props', () => {
    it('should apply column gap tokens and inline row gap override', () => {
      // Arrange
      // Act
      render(
        <PageLayout>
          <PageLayoutBody columnGap="condensed" rowGap="normal" style={{ rowGap: '99px' }}>
            Body
          </PageLayoutBody>
        </PageLayout>
      );

      // Assert
      const body = screen.getByText('Body').closest('div');
      expect(body).toHaveStyle({ columnGap: '1rem', rowGap: '99px' });
    });
  });

  describe('when PageLayoutContent is polymorphic with width and padding', () => {
    it('should render as the requested element with width and padding classes', () => {
      // Arrange
      // Act
      render(
        <PageLayout containerWidth="full">
          <PageLayoutContent as="section" ariaLabel="Polymorphic content" width="medium" padding="condensed">
            Content
          </PageLayoutContent>
        </PageLayout>
      );

      // Assert
      const section = screen.getByLabelText('Polymorphic content');
      expect(section.tagName).toBe('SECTION');
      expect(section.className).toContain('maxw-3xl');
      expect(section.className).toContain('pad-condensed');
    });
  });

  describe('when PageLayoutPane is sticky with start position and divider', () => {
    it('should apply sticky layout, offset, and divider classes', () => {
      // Arrange
      // Act
      render(
        <PageLayout>
          <PageLayoutBody>
            <PageLayoutContent>Main</PageLayoutContent>
            <PageLayoutPane
              ariaLabel="Sticky pane"
              sticky
              offsetHeader={32}
              position="start"
              divider="line"
            >
              Pane
            </PageLayoutPane>
          </PageLayoutBody>
        </PageLayout>
      );

      // Assert
      const pane = screen.getByRole('complementary', { name: 'Sticky pane' });
      const paneContainer = pane.closest('div');
      expect(paneContainer?.className).toContain('pane-start');
      expect(paneContainer).toHaveStyle({ position: 'sticky', top: '32px' });
      expect(paneContainer?.firstElementChild?.className).toContain('divider-line');
    });
  });
});
