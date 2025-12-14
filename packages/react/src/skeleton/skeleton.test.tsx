import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skeleton from './skeleton';

describe('Skeleton', () => {
  it('renders and forwards className', () => {
    const { container } = render(<Skeleton className="test-skeleton" />);
    const el = container.querySelector('[data-slot="skeleton"]');
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('test-skeleton');
  });
});


