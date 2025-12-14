import { describe, expect, it } from 'vitest';
import Button, { buttonVariants } from './index';

describe('button index exports', () => {
  it('exposes default component and helpers', () => {
    expect(Button).toBeDefined();
    expect(buttonVariants).toBeDefined();
    expect(typeof buttonVariants).toBe('function');
  });
});

