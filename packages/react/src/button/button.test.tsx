import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';
import styles from './button.module.css';

const HeartIcon = ({ className }: { className?: string }) => (
  <svg data-testid="icon" aria-hidden className={className} />
);

describe('Button', () => {
  it('renders the button component', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    screen.getByText('Click me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes', () => {
    const { container } = render(<Button variant="secondary">Button</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass(styles['variant-secondary']);
  });

  it('applies size classes', () => {
    const { container } = render(<Button size="lg">Button</Button>);
    const button = container.querySelector('button');
    expect(button).toHaveClass(styles['size-lg']);
  });

  it('applies disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  describe('when used as an icon-only button', () => {
    it('should render the icon with an accessible label', () => {
      render(<Button icon={HeartIcon} aria-label="Favorite" />);
      expect(screen.getByLabelText('Favorite')).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('should apply variant, size, and shape classes', () => {
      const { container } = render(
        <Button icon={HeartIcon} variant="primary" size="large" shape="circle" aria-label="Favorite" />
      );
      const button = container.firstChild as HTMLElement;
      expect(button).toHaveClass(styles['variant-primary']);
      expect(button).toHaveClass(styles['size-large'], styles['shape-circle']);
      expect(screen.getByTestId('icon')).toHaveClass(styles['icon-large']);
    });

    it('should support loading state', () => {
      const { container } = render(<Button icon={HeartIcon} loading aria-label="Loading" />);
      expect(container.querySelector('svg.animate-spinner-rotate')).toBeInTheDocument();
    });

    it('should render as a link when href is provided', () => {
      render(<Button as="a" href="https://example.com" icon={HeartIcon} aria-label="Go to site" />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('should keep interactions when inactive but dim the button', () => {
      const handleClick = vi.fn();
      render(<Button icon={HeartIcon} inactive onClick={handleClick} aria-label="Inactive" />);
      const button = screen.getByRole('button');
      button.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(button).toHaveClass(styles.inactive);
    });

    it('should map danger variant to destructive styling', () => {
      const { container } = render(
        <Button icon={HeartIcon} variant="danger" aria-label="Delete" />
      );
      expect(container.firstChild).toHaveClass(styles['variant-destructive']);
    });
  });
});
