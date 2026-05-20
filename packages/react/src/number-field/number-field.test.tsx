import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NumberField } from './number-field';

describe('NumberField', () => {
  it('should render input', () => {
    render(
      <NumberField.Root defaultValue={3}>
        <NumberField.Group>
          <NumberField.Decrement aria-label="Decrease" />
          <NumberField.Input />
          <NumberField.Increment aria-label="Increase" />
        </NumberField.Group>
      </NumberField.Root>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
