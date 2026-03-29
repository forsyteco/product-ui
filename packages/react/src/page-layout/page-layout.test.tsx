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
});
