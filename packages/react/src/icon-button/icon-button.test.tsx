import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { IconButton } from './icon-button';
import styles from './icon-button.module.css';

const HeartIcon = ({ className }: { className?: string }) => (
  <svg data-testid="icon" aria-hidden className={className} />
)

describe('IconButton', () => {
  it('renders an icon button with accessible label', () => {
    render(<IconButton icon={HeartIcon} aria-label="Favorite" />)
    expect(screen.getByLabelText('Favorite')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('applies variant, size, and shape classes', () => {
    const { container } = render(
      <IconButton icon={HeartIcon} variant="primary" size="large" shape="circle" aria-label="Favorite" />
    )
    const button = container.firstChild as HTMLElement
    expect(button).toHaveClass(styles.variantPrimary)
    expect(button).toHaveClass(styles.sizeLarge, styles.shapeCircle)
    expect(screen.getByTestId('icon')).toHaveClass(styles.iconLarge)
  })

  it('supports loading state', () => {
    const { container } = render(<IconButton icon={HeartIcon} loading aria-label="Loading" />)
    expect(container.querySelector('svg.animate-spinner-rotate')).toBeInTheDocument()
  })

  it('can render as a link when href is provided', () => {
    render(<IconButton as="a" href="https://example.com" icon={HeartIcon} aria-label="Go to site" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('keeps interactions when inactive but dims the button', () => {
    const handleClick = vi.fn()
    render(<IconButton icon={HeartIcon} inactive onClick={handleClick} aria-label="Inactive" />)
    const button = screen.getByRole('button')
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(button).toHaveClass(styles.inactive)
  })
})

