export let listener: ResizeObserverCallback | null = null;

declare global {
  interface Window {
    ResizeObserver: typeof ResizeObserver;
  }
}

type CustomDOMRect = {
  width: number;
  height: number;
};

type ResizeObserverCallback = (entries: { contentRect: CustomDOMRect }[]) => void;

export default class ResizeObserverMock implements ResizeObserver {
  constructor(ls: ResizeObserverCallback) {
    listener = ls;
  }

  observe() {
    return this;
  }

  unobserve() {
    return this;
  }

  disconnect() {
    return this;
  }
}
