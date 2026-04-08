import { describe, expect, it } from 'vitest';

import { FilterChip } from './index';

describe('filter-chip index exports', () => {
  it('exposes FilterChip', () => {
    expect(FilterChip).toBeDefined();
    expect(typeof FilterChip).toBe('function');
  });
});
