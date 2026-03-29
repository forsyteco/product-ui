import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Menubar } from './menubar';

describe('Menubar', () => {
  it('should render', () => {
    const { container } = render(<Menubar>items</Menubar>);
    expect(container.firstChild).toBeTruthy();
  });
});
