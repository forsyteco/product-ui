import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Field } from './field';

describe('Field', () => {
  it('should render label', () => {
    render(
      <Field.Root name="email">
        <Field.Label>Email</Field.Label>
        <input />
      </Field.Root>
    );

    expect(screen.getByText('Email')).toBeInTheDocument();
  });
});
