import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Disclosure, DisclosureButton, DisclosurePanel } from './disclosure';

describe('Disclosure', () => {
  describe('when rendered in default closed state', () => {
    it('should render the disclosure component', () => {
      // Arrange
      render(
        <Disclosure>
          <DisclosureButton>Toggle</DisclosureButton>
          <DisclosurePanel>Content</DisclosurePanel>
        </Disclosure>
      );

      // Act
      const toggle = screen.getByText('Toggle');

      // Assert
      expect(toggle).toBeInTheDocument();
    });
  });

  describe('when defaultOpen is true', () => {
    it('should render panel content', () => {
      // Arrange
      render(
        <Disclosure defaultOpen>
          <DisclosureButton>Toggle</DisclosureButton>
          <DisclosurePanel>Panel content</DisclosurePanel>
        </Disclosure>
      );

      // Act
      const panelText = screen.getByText('Panel content');

      // Assert
      expect(panelText).toBeInTheDocument();
    });
  });

  describe('when className is provided', () => {
    it('should apply custom className', () => {
      // Arrange
      const { container } = render(
        <Disclosure className="custom-class">
          <DisclosureButton>Toggle</DisclosureButton>
          <DisclosurePanel>Content</DisclosurePanel>
        </Disclosure>
      );

      // Act
      const disclosure = container.firstChild as HTMLElement;

      // Assert
      expect(disclosure).toHaveClass('custom-class');
    });
  });
});
