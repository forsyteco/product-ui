import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { RelativeTime } from './relative-time';

describe('RelativeTime', () => {
  describe('when rendered with no date props', () => {
    it('should render a relative-time element', () => {
      // Arrange
      const { container } = render(<RelativeTime />);

      // Act
      const nodeName = container.firstChild?.nodeName.toLowerCase();

      // Assert
      expect(nodeName).toEqual('relative-time');
    });
  });

  describe('when date is provided', () => {
    it('should render a date inside', () => {
      // Arrange
      const date = new Date('2024-03-07T12:22:48.123Z');
      const { container } = render(<RelativeTime date={date} />);

      // Act
      const text = container.textContent;

      // Assert
      expect(text).toEqual('Mar 7, 2024');
    });
  });

  describe('when datetime is provided', () => {
    it('should render a datetime inside', () => {
      // Arrange
      const date = new Date('2024-03-07T12:22:48.123Z');
      const { container } = render(<RelativeTime datetime={date.toJSON()} />);

      // Act
      const text = container.textContent;

      // Assert
      expect(text).toEqual('Mar 7, 2024');
    });
  });

  describe('when children are provided', () => {
    it('should render children if passed', () => {
      // Arrange
      const date = new Date('2024-03-07T12:22:48.123Z');
      const { container } = render(<RelativeTime date={date}>server rendered date</RelativeTime>);

      // Act
      const text = container.textContent;

      // Assert
      expect(text).toEqual('server rendered date');
    });
  });

  describe('when noTitle is not set', () => {
    it('should not render no-title attribute by default', () => {
      // Arrange
      const date = new Date('2024-03-07T12:22:48.123Z');
      const { container } = render(<RelativeTime date={date} />);

      // Act
      const el = container.firstChild;

      // Assert
      expect(el).not.toHaveAttribute('no-title');
    });
  });

  describe('when noTitle is true', () => {
    it('should add no-title attribute if noTitle is true', () => {
      // Arrange
      const date = new Date('2024-03-07T12:22:48.123Z');
      const { container } = render(<RelativeTime date={date} noTitle={true} />);

      // Act
      const el = container.firstChild;

      // Assert
      expect(el).toHaveAttribute('no-title');
    });
  });
});
