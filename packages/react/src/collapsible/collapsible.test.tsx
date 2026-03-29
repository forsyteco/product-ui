import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from './collapsible';

describe('Collapsible', () => {
  describe('when rendered in default closed state', () => {
    it('should render the collapsible component', () => {
      render(
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsiblePanel>Content</CollapsiblePanel>
        </Collapsible>
      );

      const toggle = screen.getByText('Toggle');

      expect(toggle).toBeInTheDocument();
    });
  });

  describe('when defaultOpen is true', () => {
    it('should render panel content', () => {
      render(
        <Collapsible defaultOpen>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsiblePanel>Panel content</CollapsiblePanel>
        </Collapsible>
      );

      const panelText = screen.getByText('Panel content');

      expect(panelText).toBeInTheDocument();
    });
  });

  describe('when className is provided', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <Collapsible className="custom-class">
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsiblePanel>Content</CollapsiblePanel>
        </Collapsible>
      );

      const root = container.firstChild as HTMLElement;

      expect(root).toHaveClass('custom-class');
    });
  });
});
