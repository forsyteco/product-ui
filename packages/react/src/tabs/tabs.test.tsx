import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './tabs';

describe('Tabs', () => {
  it('renders the tabs component', () => {
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
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
  });

  it('renders tab panel content', () => {
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
    expect(screen.getByText('Panel content')).toBeInTheDocument();
  });
});

