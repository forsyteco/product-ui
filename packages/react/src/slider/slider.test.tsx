import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Slider } from './slider';

describe('Slider', () => {
  it('should render', () => {
    const { container } = render(
      <Slider.Root defaultValue={[40]} min={0} max={100}>
        <Slider.Control>
          <Slider.Track>
            <Slider.Indicator />
            <Slider.Thumb />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
