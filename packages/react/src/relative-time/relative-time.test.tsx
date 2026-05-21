import { describe, expect, it } from 'vitest';
import { render } from '#test-utils';
import { RelativeTime } from './relative-time';

describe('RelativeTime', () => {
  describe('when rendered with default props', () => {
    it('should render a relative-time element', () => {
      // Arrange
      // Act
      const { container } = render(<RelativeTime />);

      // Assert
      expect(container.firstChild?.nodeName.toLowerCase()).toEqual('relative-time');
    });
  });

  describe('when a date prop is provided', () => {
    it('should render the formatted date', () => {
      // Arrange
      const date = new Date('2024-03-07T12:22:48.123Z');

      // Act
      const { container } = render(<RelativeTime date={date} />);

      // Assert
      expect(container.textContent).toEqual('Mar 7, 2024');
    });
  });

  describe('when a datetime prop is provided', () => {
    it('should render the formatted datetime', () => {
      // Arrange
      const date = new Date('2024-03-07T12:22:48.123Z');

      // Act
      const { container } = render(<RelativeTime datetime={date.toJSON()} />);

      // Assert
      expect(container.textContent).toEqual('Mar 7, 2024');
    });
  });

  describe('when children are provided', () => {
    it('should render the children instead of the default date text', () => {
      // Arrange
      const date = new Date('2024-03-07T12:22:48.123Z');

      // Act
      const { container } = render(<RelativeTime date={date}>server rendered date</RelativeTime>);

      // Assert
      expect(container.textContent).toEqual('server rendered date');
    });
  });

  describe('when noTitle is not set', () => {
    it('should not add the no-title attribute', () => {
      // Arrange
      const date = new Date('2024-03-07T12:22:48.123Z');

      // Act
      const { container } = render(<RelativeTime date={date} />);

      // Assert
      expect(container.firstChild).not.toHaveAttribute('no-title');
    });
  });

  describe('when noTitle is true', () => {
    it('should add the no-title attribute', () => {
      // Arrange
      const date = new Date('2024-03-07T12:22:48.123Z');

      // Act
      const { container } = render(<RelativeTime date={date} noTitle={true} />);

      // Assert
      expect(container.firstChild).toHaveAttribute('no-title');
    });
  });
});
