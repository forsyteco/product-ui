import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Progress } from './progress';

describe('Progress', () => {
  it('should render', () => {
    const { container } = render(
      <Progress.Root value={30}>
        <Progress.Track>
          <Progress.Indicator />
        </Progress.Track>
      </Progress.Root>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
