import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { SortIndicator } from './sort-indicator';

describe('SortIndicator', () => {
  it('should render ascending icon when direction is asc', () => {
    // Arrange
    const { container } = render(<SortIndicator direction="asc" />);

    // Assert
    expect(container.querySelector('.lucide-arrow-up')).toBeInTheDocument();
    expect(container.querySelector('.lucide-arrow-down')).not.toBeInTheDocument();
    expect(container.querySelector('.lucide-arrow-up-down')).not.toBeInTheDocument();
  });

  it('should render descending icon when direction is desc', () => {
    // Arrange
    const { container } = render(<SortIndicator direction="desc" />);

    // Assert
    expect(container.querySelector('.lucide-arrow-down')).toBeInTheDocument();
    expect(container.querySelector('.lucide-arrow-up')).not.toBeInTheDocument();
    expect(container.querySelector('.lucide-arrow-up-down')).not.toBeInTheDocument();
  });

  it('should render unsorted icon when direction is null', () => {
    // Arrange
    const { container } = render(<SortIndicator direction={null} />);

    // Assert
    expect(container.querySelector('.lucide-arrow-up-down')).toBeInTheDocument();
    expect(container.querySelector('.lucide-arrow-down')).not.toBeInTheDocument();
    expect(container.querySelector('.lucide-arrow-up')).not.toBeInTheDocument();
  });

  it('should apply active background and active foreground when sorted', () => {
    // Arrange
    const { container } = render(
      <SortIndicator
        direction="asc"
        color="rgb(10, 20, 30)"
        activeBackground="rgb(1, 2, 3)"
        activeForeground="rgb(4, 5, 6)"
      />
    );

    // Assert
    const wrapper = container.querySelector('span');
    const icon = container.querySelector('.lucide-arrow-up');
    expect(wrapper).toHaveStyle({ backgroundColor: 'rgb(1, 2, 3)' });
    expect(icon).toHaveStyle({ color: 'rgb(4, 5, 6)' });
  });

  it('should apply default active class when sorted without active background', () => {
    // Arrange
    const { container } = render(<SortIndicator direction="desc" color="rgb(10, 20, 30)" />);

    // Assert
    const wrapper = container.querySelector('span');
    expect(wrapper?.className).toContain('sort-active-default');
  });
});
