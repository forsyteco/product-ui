import '@testing-library/jest-dom/vitest';

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-expect-error - test environment shim
globalThis.ResizeObserver = globalThis.ResizeObserver ?? ResizeObserverMock;
