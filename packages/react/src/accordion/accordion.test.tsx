import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Accordion } from './accordion';

describe('Accordion', () => {
  it('should render trigger and panel content', () => {
    render(
      <Accordion.Root>
        <Accordion.Item value="a">
          <Accordion.Header>
            <Accordion.Trigger>Section</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>Body</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    );

    expect(screen.getByRole('button', { name: 'Section' })).toBeInTheDocument();
  });
});
