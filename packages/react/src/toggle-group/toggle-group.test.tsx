import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Toggle } from '../toggle';
import { ToggleGroup } from './toggle-group';

describe('ToggleGroup', () => {
  it('should render', () => {
    const { container } = render(
      <ToggleGroup defaultValue={['a']}>
        <Toggle value="a">A</Toggle>
        <Toggle value="b">B</Toggle>
      </ToggleGroup>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
