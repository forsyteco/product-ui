import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Form } from './form';

describe('Form', () => {
  it('should render native form', () => {
    render(
      <Form>
        <button type="submit">Send</button>
      </Form>
    );

    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
  });
});
