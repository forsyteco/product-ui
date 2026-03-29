import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NavigationMenu } from './navigation-menu';

describe('NavigationMenu', () => {
  it('should render list structure', () => {
    render(
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#">Home</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });
});
