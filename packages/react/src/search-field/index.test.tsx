import { describe, expect, it } from 'vitest';

import { SearchField } from './index';

describe('search-field index exports', () => {
  it('exposes SearchField', () => {
    expect(SearchField).toBeDefined();
    expect(typeof SearchField).toBe('function');
  });
});
