import type { FC } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { BottomSheetParams } from '@components/design-system/BottomSheet/BottomSheet.types';
import { globalBottomSheet$ } from '@libs/GlobalComponent/globalComponent$';
import { filter, map } from 'rxjs';
import { Layout } from '@components/design-system';
import { LAYOUT_Z } from '@constants/common';
import Header from '@components/design-system/BottomSheet/components/Header';
import styled from 'styled-components';
import { useWindowSize } from '@hooks/common';
import BottomSheetContextProvider from '@components/design-system/BottomSheet/BottomSheetContextProvider';

const BottomSheetComponent: FC = () => {
  const { height } = useWindowSize();

  const [
    {
      visible,
      Component,
      maxHeight,
      disableClose = false,
      hideHeader = false,
      dimColor,
      bgColor,
    },
    setState,
  ] = useState<BottomSheetState>({ visible: false });

  const [anim, setAnim] = useState(false);
  const [extraHeight, setExtraHeight] = useState(0);

  const close = () => {
    return new Promise(resolve => {
      setAnim(false);
      setTimeout(resolve, DURATION);
    });
  };

  const setInvisible = useCallback(() => {
    close().then(() => {
      setState({ visible: false });
      setDraggingY(0);
      setExtraHeight(0);
      globalBottomSheet$.complete();
    });
  }, []);

  const show = useCallback((params: BottomSheetParams) => {
    setState({ ...params, visible: true });
  }, []);

  useEffect(() => {
    const sub = globalBottomSheet$.observable
      .pipe(
        filter(({ type }) => type === 'BOTTOM_SHEET'),
        map(v => v as BottomSheetParams),
      )
      .subscribe(show);

    return () => sub.unsubscribe();
  }, []);

  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (visible) {
      timer.current = setTimeout(() => {
        setAnim(true);
      }, DURATION);
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [visible]);

  const bottomSheetHeight =
    maxHeight === 'FULLSCREEN' || !maxHeight ? height : maxHeight;

  const [dragging, setDragging] = useState(false);
  const [draggingY, setDraggingY] = useState<number>(0);

  useEffect(() => {
    if (draggingY > bottomSheetHeight * CLOSE_Y_RATIO) {
      setInvisible();
    }
  }, [draggingY]);

  if (!visible) return <></>;

  return (
    <Layout.AbsoluteFillScreen style={{ zIndex: LAYOUT_Z.BOTTOM_SHEET }}>
      <AnimatedBgLayout
        width={'100%'}
        height={'100%'}
        bgColor={dimColor ?? 'BLACK'}
        onClick={disableClose ? () => {} : setInvisible}
        opacity={anim ? 0.5 : 0}
      />
      <AnimatedLayout
        left={0}
        bottom={0}
        height={
          bottomSheetHeight + extraHeight - (!hideHeader ? Header.HEIGHT : 0)
        }
        bgColor={bgColor ?? 'WHITE'}
        style={{ overflow: 'visible' }}
        translateY={anim ? draggingY : bottomSheetHeight}
        isDragging={dragging}
      >
        <BottomSheetContextProvider
          close={setInvisible}
          extraHeight={extraHeight}
          setExtraHeight={setExtraHeight}
        >
          {!hideHeader && (
            <Header
              setDraggingY={setDraggingY}
              setDragging={setDragging}
              closeY={bottomSheetHeight * CLOSE_Y_RATIO}
            />
          )}
          {Component}
        </BottomSheetContextProvider>
      </AnimatedLayout>
    </Layout.AbsoluteFillScreen>
  );
};

export const CLOSE_Y_RATIO = 0.4;

const DURATION = 300;

const AnimatedBgLayout = styled(Layout.LayoutBase)<{ opacity: number }>`
  opacity: ${({ opacity }) => opacity};
  transition: opacity ${DURATION}ms;
`;

const AnimatedLayout = styled(Layout.Absolute)<{
  translateY: number;
  isDragging: boolean;
}>`
  transform: translateY(${({ translateY }) => translateY}px);
  transition: transform ${({ isDragging }) => (isDragging ? 0 : DURATION)}ms;
`;

type BottomSheetState = {
  visible: boolean;
} & Partial<BottomSheetParams>;

const BottomSheet = (() => {
  const show = (params: Omit<BottomSheetParams, 'type'>) => {
    globalBottomSheet$.next({ type: 'BOTTOM_SHEET', ...params });
  };

  return {
    show,
  };
})();
export default BottomSheet;
export { BottomSheetComponent };
