import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

describe('Popover', () => {
  describe('when rendered with trigger and content', () => {
    it('should render the popover component', () => {
      // Arrange
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
      );

      // Act
      const trigger = screen.getByText('Open');

      // Assert
      expect(trigger).toBeInTheDocument();
    });
  });

  describe('when the trigger is activated', () => {
    it('should render panel content', () => {
      // Arrange
      render(
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>
      );

      // Act
      fireEvent.click(screen.getByText('Open'));

      // Assert
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });
});
