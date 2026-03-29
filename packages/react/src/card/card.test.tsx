import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

describe('Card', () => {
  describe('when header and content are provided', () => {
    it('should render the card structure and forwards className', () => {
      // Arrange
      render(
        <Card className="test-card">
          <CardHeader>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardContent>Content</CardContent>
        </Card>
      );

      // Act
      const card = screen.getByText('Title').closest('[data-slot="card"]');

      // Assert
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('test-card');
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('when all slots are provided', () => {
    it('should render all provided slots', () => {
      // Arrange
      render(
        <Card>
          <CardHeader>
            <CardTitle>Header</CardTitle>
            <CardDescription>Description</CardDescription>
            <CardAction>Action</CardAction>
          </CardHeader>
          <CardContent>Body</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      );

      // Act
      const header = screen.getByText('Header');

      // Assert
      expect(header).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByText('Action')).toBeInTheDocument();
      expect(screen.getByText('Body')).toBeInTheDocument();
      expect(screen.getByText('Footer')).toBeInTheDocument();
    });
  });
});
