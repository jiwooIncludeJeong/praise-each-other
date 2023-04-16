import { useEffect, useState } from 'react';

const useImageLazyLoading = (rootMargin?: string) => {
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      // 타겟 이미지 접근 전 이미지를 불러오기 위해 rootMargin을 설정
      rootMargin: rootMargin ?? '30px 0px 30px 0px',
      threshold: 0,
    };
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const { target } = entry;
          const { previousSibling } = target;
          if (previousSibling) {
            //@ts-ignore
            target.src = target.dataset.src;
            //@ts-ignore
            // previousSibling.srcset = previousSibling.dataset.srcset;
          }
          observer.unobserve(entry.target);
        }
      });
    };
    if (element) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(element);
    }
  }, [element]);

  return [setElement];
};

export default useImageLazyLoading;
