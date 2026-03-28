import { describe, expect, it, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import { Spinner } from './spinner';
import styles from './spinner.module.css';

describe('Spinner', () => {
  it('renders wrapper and svg', () => {
    const { container } = render(<Spinner />);
    const wrapper = container.querySelector('div');
    const svg = container.querySelector('svg');
    const circle = container.querySelector('circle');

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass(styles.root);
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('animate-spinner-rotate');
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveClass('animate-spinner-dash');
  });

  it('applies className to the wrapper', () => {
    const { container } = render(<Spinner className="custom-spinner-class" />);
    const wrapper = container.querySelector('div');
    expect(wrapper).toHaveClass('custom-spinner-class');
  });

  it('cycles through colors over time', () => {
    vi.useFakeTimers();
    const { container, unmount } = render(<Spinner colors={['#111111', '#222222']} />);
    const circle = container.querySelector('circle');

    expect(circle).toHaveStyle({ stroke: '#111111' });

    act(() => {
      vi.advanceTimersByTime(1500);
    });
    expect(circle).toHaveStyle({ stroke: '#222222' });

    act(() => {
      unmount();
    });
    vi.useRealTimers();
  });
});
