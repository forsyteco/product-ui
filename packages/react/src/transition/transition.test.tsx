import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Transition from './transition';

describe('Transition', () => {
  it('renders children when show is true', () => {
    render(
      <Transition show={true}>
        <div>Content</div>
      </Transition>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('does not render children when show is false', () => {
    render(
      <Transition show={false}>
        <div>Content</div>
      </Transition>
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });
});

