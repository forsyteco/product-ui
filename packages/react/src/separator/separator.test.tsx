import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Separator } from './separator';

describe('Separator', () => {
  it('should render', () => {
    const { container } = render(<Separator />);
    expect(container.firstChild).toBeTruthy();
  });
});
