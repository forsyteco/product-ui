import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Radio } from './radio';

describe('Radio', () => {
  it('should render', () => {
    render(
      <Radio.Root name="r" value="a">
        <Radio.Indicator />
        Option
      </Radio.Root>
    );

    expect(screen.getByText('Option')).toBeInTheDocument();
  });
});
