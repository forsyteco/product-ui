import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Meter } from './meter';

describe('Meter', () => {
  it('should render', () => {
    const { container } = render(
      <Meter.Root value={40} min={0} max={100}>
        <Meter.Track>
          <Meter.Indicator />
        </Meter.Track>
      </Meter.Root>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
