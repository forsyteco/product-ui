import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardContent, CardHeader, CardTitle } from './card';

describe('Card', () => {
  it('renders the card structure and forwards className', () => {
    render(
      <Card className="test-card">
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>Content</CardContent>
      </Card>
    );

    const card = screen.getByText('Title').closest('[data-slot="card"]');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('test-card');

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});


