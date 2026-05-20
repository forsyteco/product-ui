import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tooltip } from './tooltip';

describe('Tooltip', () => {
  it('should render trigger', () => {
    render(
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>Hover me</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup>Tip</Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });
});
