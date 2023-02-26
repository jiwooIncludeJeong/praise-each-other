import type { DependencyList } from 'react';
import { useEffect, useState } from 'react';
import { shouldRenderBottomSheet } from '@libs/Navigation/BottomTab';

export const useBottomSheetRender = (deps: DependencyList) => {
  const [renderState, setRenderState] = useState(false);

  useEffect(() => {
    setRenderState(shouldRenderBottomSheet(window.location.pathname));
  }, deps);

  return { renderState };
};
