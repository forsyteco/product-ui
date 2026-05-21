import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './tabs';

describe('Tabs', () => {
  describe('when rendered with tab labels', () => {
    it('should render the tab triggers', () => {
      // Arrange
      // Act
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

      // Assert
      expect(screen.getByText('Tab 1')).toBeInTheDocument();
      expect(screen.getByText('Tab 2')).toBeInTheDocument();
    });
  });

  describe('when a tab panel is active', () => {
    it('should render the panel content', () => {
      // Arrange
      // Act
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

      // Assert
      expect(screen.getByText('Panel content')).toBeInTheDocument();
    });
  });
});
