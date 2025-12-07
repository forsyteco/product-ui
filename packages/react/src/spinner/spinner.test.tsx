import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Spinner from './spinner'

describe('Spinner', () => {
  it('renders the spinner component', () => {
    const { container } = render(<Spinner />)
    const span = container.querySelector('span')
    expect(span).toBeInTheDocument()
  })

  it('renders LoaderCircle icon', () => {
    const { container } = render(<Spinner />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies default classes to wrapper span', () => {
    const { container } = render(<Spinner />)
    const span = container.querySelector('span')
    expect(span).toHaveClass('inline-flex', 'items-center', 'justify-center')
  })

  it('applies animate-spin to the icon', () => {
    const { container } = render(<Spinner />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('animate-spin')
  })

  describe('full prop', () => {
    it('applies full-width classes when full is true', () => {
      const { container } = render(<Spinner full />)
      const span = container.querySelector('span')
      expect(span).toHaveClass('flex', 'flex-1', 'items-center', 'justify-center')
    })

    it('does not apply full-width classes when full is false', () => {
      const { container } = render(<Spinner full={false} />)
      const span = container.querySelector('span')
      expect(span).not.toHaveClass('flex-1')
    })

    it('does not apply full-width classes when full is undefined', () => {
      const { container } = render(<Spinner />)
      const span = container.querySelector('span')
      expect(span).not.toHaveClass('flex-1')
    })
  })

  describe('className prop', () => {
    it('merges custom className with default classes on icon', () => {
      const { container } = render(<Spinner className="text-blue-500 w-8 h-8" />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('animate-spin', 'text-blue-500', 'w-8', 'h-8')
    })

    it('handles empty className', () => {
      const { container } = render(<Spinner className="" />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('animate-spin')
    })

    it('handles undefined className', () => {
      const { container } = render(<Spinner />)
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('animate-spin')
    })
  })
})
