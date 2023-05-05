import React, { useState, useEffect, MutableRefObject } from 'react';

type Options = {
  root?: null | Element;
  rootMargin?: string;
  threshold?: number;
};

type Window = 'desktop' | 'phone';

const useOnScreen = <T extends Element>(ref: MutableRefObject<T>, options: Options, window: Window, isReachEnd: boolean | undefined) => {
  const [intersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    if (window === 'desktop') return;
    if (isReachEnd) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIntersecting(entry.isIntersecting);
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [window, isReachEnd, ref, options]);

  return intersecting;
};

export default useOnScreen;
