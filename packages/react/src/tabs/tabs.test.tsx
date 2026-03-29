import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './tabs';

describe('Tabs', () => {
  describe('when rendered with multiple tabs', () => {
    it('should render the tabs component', () => {
      // Arrange
      render(
        <Tabs>
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Content 1</TabPanel>
            <TabPanel>Content 2</TabPanel>
          </TabPanels>
        </Tabs>
      );

      // Act
      const tab1 = screen.getByText('Tab 1');
      const tab2 = screen.getByText('Tab 2');

      // Assert
      expect(tab1).toBeInTheDocument();
      expect(tab2).toBeInTheDocument();
    });
  });

  describe('when a tab panel is visible', () => {
    it('should render tab panel content', () => {
      // Arrange
      render(
        <Tabs>
          <TabList>
            <Tab>Tab 1</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Panel content</TabPanel>
          </TabPanels>
        </Tabs>
      );

      // Act
      const panelContent = screen.getByText('Panel content');

      // Assert
      expect(panelContent).toBeInTheDocument();
    });
  });
});
