import '@testing-library/jest-dom';

// Mock ResizeObserver for Radix UI & Ant Design components in JSDOM
if (typeof window !== 'undefined') {
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.ResizeObserver = ResizeObserver;
  globalThis.ResizeObserver = ResizeObserver;

  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    };
  };
}
