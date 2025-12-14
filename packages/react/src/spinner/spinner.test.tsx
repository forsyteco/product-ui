import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Spinner from './spinner';

describe('Spinner', () => {
  it('renders wrapper and svg', () => {
    const { container } = render(<Spinner />);
    const wrapper = container.querySelector('div');
    const svg = container.querySelector('svg');
    const circle = container.querySelector('circle');

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('inline-flex');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('animate-spinner-rotate');
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveClass('animate-spinner-dash');
  });

  it('applies className to the wrapper', () => {
    const { container } = render(<Spinner className="text-blue-500" />);
    const wrapper = container.querySelector('div');
    expect(wrapper).toHaveClass('text-blue-500');
  });
});
