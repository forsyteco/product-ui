import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Calendar } from './calendar';

describe('Calendar', () => {
  it('renders the calendar root', () => {
    render(<Calendar />);
    const root = screen.getByTestId('calendar-root');
    expect(root).toBeInTheDocument();
  });
});


