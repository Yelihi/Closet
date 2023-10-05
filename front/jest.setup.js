import '@testing-library/jest-dom';
import { cache } from 'swr/_internal';
import { server } from './__mocks__/server.js';
import 'jest-canvas-mock';

// 테스트를 하기 전 API mocking 을 생성한다
beforeAll(() => server.listen());

// 매 테스트 마다 계속해서 핸들러를 리셋하준다. 그래야지 다른 테스트에 영향을 끼치지 않는다.
afterEach(() => server.resetHandlers());

// 모든 테스트가 완료되면 server 를 clean 한다.
afterAll(() => {
  cache.clear();
  server.close();
});

export const mockIntersectionObserver = class {
  constructor(callback, options) {
    this.root = options.root === null ? window : options.root;
    this.rootMargin = options.rootMargin;
    this.thresholds = options.thresholds;
    this.takeRecords = options.takeRecords;
    this.viewPort = options.root === null ? window : options.root;
    this.entries = [];
    this.viewPort.addEventListener('scroll', () => {
      this.entries.map(entry => {
        entry.isIntersecting = this.isInViewPort(entry.target);
      });
      callback(this.entries, this);
    });
  }

  isInViewPort(target) {
    return window.scrollY >= 750;
  }

  observe(target) {
    this.entries.push({ isIntersecting: false, target });
  }

  unobserve(target) {
    this.entries = this.entries.filter(ob => ob.target !== target);
  }

  disconnect() {
    this.entries = [];
  }
};
