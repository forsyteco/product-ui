import { describe, expect, it } from 'vitest';

import { InlineAlert } from './index';

describe('inline-alert index exports', () => {
  it('exposes InlineAlert', () => {
    expect(InlineAlert).toBeDefined();
    expect(typeof InlineAlert).toBe('function');
  });
});
