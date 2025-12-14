import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Textarea from './textarea';

describe('Textarea', () => {
  it('renders the textarea component', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
  });

  it('applies error styling', () => {
    const { container } = render(<Textarea error />);
    const textarea = container.querySelector('textarea');
    expect(textarea).toHaveClass('border-destructive-border');
  });

  it('applies disabled state', () => {
    render(<Textarea disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
  });

  it('handles placeholder', () => {
    render(<Textarea placeholder="Enter text..." />);
    const textarea = screen.getByPlaceholderText('Enter text...');
    expect(textarea).toBeInTheDocument();
  });
});

