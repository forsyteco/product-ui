import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

describe('Avatar', () => {
  it('renders root', () => {
    const { container } = render(<Avatar />);
    expect(container.querySelector('[data-slot="avatar"]')).toBeInTheDocument();
  });

  it('renders initials fallback', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
    );
    expect(container.querySelector('[data-slot="avatar-fallback"]')).toBeInTheDocument();
    expect(screen.getByText('AL')).toBeInTheDocument();
  });

  it('renders boring fallback', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback variant="boring" name="Grace Hopper" />
      </Avatar>
    );
    expect(container.querySelector('[data-slot="avatar-fallback"]')).toBeInTheDocument();
    // The boring avatar renders an svg. We just assert something is in the DOM.
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders image slot', () => {
    const { container } = render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.png" alt="Avatar" />
      </Avatar>
    );
    // Radix may not render the image element until it has loaded;
    // this test just ensures the AvatarImage can be mounted without crashing.
    expect(container.querySelector('[data-slot="avatar"]')).toBeInTheDocument();
  });
});


