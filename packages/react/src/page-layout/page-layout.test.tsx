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
  it('renders composed sections and landmark attributes', () => {
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

    expect(screen.getByText('Header').closest('header')).toHaveAttribute('aria-label', 'Page header');
    expect(screen.getByText('Footer').closest('footer')).toHaveAttribute('aria-label', 'Page footer');
    expect(screen.getByRole('main', { name: 'Main content' })).toBeInTheDocument();
    expect(screen.getByRole('complementary', { name: 'Context pane' })).toBeInTheDocument();
  });

  it('renders a resize separator when pane is resizable', () => {
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

    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('throws when section is used outside PageLayout provider', () => {
    expect(() => render(<PageLayoutSection>Section</PageLayoutSection>)).toThrow(
      'PageLayout.* must be used inside <PageLayout>.'
    );
  });

  it('applies divider variants on header and footer', () => {
    // Arrange
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

  it('applies body gap overrides and custom style overrides', () => {
    // Arrange
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

  it('renders polymorphic content element with width and padding', () => {
    // Arrange
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

  it('renders sticky pane with start position and divider', () => {
    // Arrange
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
