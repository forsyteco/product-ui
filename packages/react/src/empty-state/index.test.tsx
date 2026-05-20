import { describe, expect, it } from 'vitest';

import { EmptyState } from './index';

describe('empty-state index exports', () => {
  it('exposes EmptyState', () => {
    expect(EmptyState).toBeDefined();
    expect(typeof EmptyState).toBe('function');
  });
});
