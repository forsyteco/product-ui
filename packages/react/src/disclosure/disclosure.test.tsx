import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Disclosure, { DisclosureButton, DisclosurePanel } from './disclosure';

describe('Disclosure', () => {
  it('renders the disclosure component', () => {
    render(
      <Disclosure>
        <DisclosureButton>Toggle</DisclosureButton>
        <DisclosurePanel>Content</DisclosurePanel>
      </Disclosure>
    );
    expect(screen.getByText('Toggle')).toBeInTheDocument();
  });

  it('renders panel content', () => {
    render(
      <Disclosure defaultOpen>
        <DisclosureButton>Toggle</DisclosureButton>
        <DisclosurePanel>Panel content</DisclosurePanel>
      </Disclosure>
    );
    expect(screen.getByText('Panel content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Disclosure className="custom-class">
        <DisclosureButton>Toggle</DisclosureButton>
        <DisclosurePanel>Content</DisclosurePanel>
      </Disclosure>
    );
    const disclosure = container.firstChild;
    expect(disclosure).toHaveClass('custom-class');
  });
});

