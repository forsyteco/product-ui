import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Fieldset } from './fieldset';
import styles from './fieldset.module.css';

describe('Fieldset', () => {
  it('renders the fieldset component', () => {
    render(<Fieldset>Content</Fieldset>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with legend', () => {
    render(<Fieldset legend="Test Legend">Content</Fieldset>);
    expect(screen.getByText('Test Legend')).toBeInTheDocument();
  });

  it('applies disabled state', () => {
    render(<Fieldset disabled>Content</Fieldset>);
    const fieldset = screen.getByText('Content').closest('fieldset');
    expect(fieldset).toBeDisabled();
  });

  it('applies error styling when error is true', () => {
    render(<Fieldset error>Content</Fieldset>);
    const fieldset = screen.getByText('Content').closest('fieldset');
    expect(fieldset).toHaveClass(styles.error);
  });
});

