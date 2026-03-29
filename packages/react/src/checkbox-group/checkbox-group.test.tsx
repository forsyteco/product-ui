import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { CheckboxGroup } from './checkbox-group';

describe('CheckboxGroup', () => {
  it('should render', () => {
    const { container } = render(<CheckboxGroup aria-label="Options">child</CheckboxGroup>);
    expect(container.firstChild).toBeTruthy();
  });
});
