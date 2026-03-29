import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VisuallyHidden } from './visually-hidden';
import styles from './visually-hidden.module.css';

describe('VisuallyHidden', () => {
  it('renders children inside a span with visually hidden class', () => {
    render(<VisuallyHidden data-testid="vh">Hidden text</VisuallyHidden>);
    const element = screen.getByTestId('vh');

    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveClass(styles.root);
    expect(element).toHaveTextContent('Hidden text');
  });

  it('merges custom className and forwards html attributes', () => {
    render(
      <VisuallyHidden data-testid="vh" className="extra-class" id="extra-id">
        Hidden text
      </VisuallyHidden>
    );

    const element = screen.getByTestId('vh');
    expect(element).toHaveClass('extra-class');
    expect(element).toHaveAttribute('id', 'extra-id');
  });
});
