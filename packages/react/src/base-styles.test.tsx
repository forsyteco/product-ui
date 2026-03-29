import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BaseStyles } from './base-styles';
import styles from './base-styles.module.css';

describe('BaseStyles', () => {
  it('renders with default root class and portal marker', () => {
    render(<BaseStyles data-testid="base-styles">content</BaseStyles>);
    const root = screen.getByTestId('base-styles');

    expect(root).toHaveClass(styles.root);
    expect(root).toHaveAttribute('data-portal-root');
  });

  it('supports polymorphic "as", custom className, and style variables', () => {
    render(
      <BaseStyles
        as="section"
        data-testid="base-styles"
        className="custom-root"
        color="rgb(10 20 30)"
        style={{ padding: '8px' }}
      >
        content
      </BaseStyles>
    );

    const root = screen.getByTestId('base-styles');
    expect(root.tagName).toBe('SECTION');
    expect(root).toHaveClass('custom-root');
    expect(root).toHaveStyle({ '--BaseStyles-fgColor': 'rgb(10 20 30)', padding: '8px' });
  });
});
