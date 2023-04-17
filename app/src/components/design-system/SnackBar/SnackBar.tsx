import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { SnackBarParams } from '@components/design-system/SnackBar/SnackBar.types';
import { globalSnackBar$ } from '@libs/GlobalComponent/globalComponent$';
import {
  ANIMATION_DURATION,
  HIDE_DURATION,
  SNACK_BAR_HEIGHT,
  TRANSLATE_OFFSET,
} from '@components/design-system/SnackBar/SnackBar.constants';
import { filter, map, of, switchMap, tap } from 'rxjs';
import styled from 'styled-components';
import { Layout, Text } from '@components/design-system';
import * as Icons from '@components/icons';
import { LAYOUT_Z } from '@constants/common';

const SnackBarComponent = () => {
  const TOP_SNACK_BAR_DESTINATION = SNACK_BAR_HEIGHT + TRANSLATE_OFFSET;

  const [anim, setAnim] = useState(false);

  const [snackBar, setSnackbar] = useState<SnackBarParams>({
    type: 'SNACK_BAR',
    visible: false,
  });

  const show = useCallback((params: SnackBarParams) => {
    setSnackbar(params);
  }, []);

  const hide = () => {
    return new Promise(resolve => {
      setAnim(false);
      setTimeout(resolve, ANIMATION_DURATION);
    });
  };

  const setInvisible = useCallback(() => {
    hide().then(() => {
      setSnackbar({
        type: 'SNACK_BAR',
        visible: false,
      });
    });
  }, []);

  useEffect(() => {
    const subscription = globalSnackBar$.observable
      .pipe(
        filter(({ type }) => type === 'SNACK_BAR'),
        map(v => v as SnackBarParams),
        switchMap(v => of(v).pipe(tap(show))),
      )
      .subscribe();

    return () => subscription.unsubscribe();
  }, []);

  const timer = useRef<NodeJS.Timeout | null>(null);
  const hideTimer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (snackBar.visible) {
      timer.current = setTimeout(() => {
        setAnim(true);
      }, ANIMATION_DURATION);
      hideTimer.current = setTimeout(() => {
        setInvisible();
      }, snackBar.duration ?? HIDE_DURATION);
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, [snackBar]);

  return (
    <>
      {snackBar.visible && (
        <SnackBarBox
          translateY={TOP_SNACK_BAR_DESTINATION}
          hide={setInvisible}
          position={snackBar.position}
          title={snackBar.title}
          iconName={snackBar.iconName}
          showAnim={anim}
        />
      )}
    </>
  );
};

const AnimatedLayout = styled(Layout.Absolute)<{ translateY: number }>`
  transform: translateY(${({ translateY }) => translateY}px);
  transition: transform ${ANIMATION_DURATION}ms;
`;
// TODO(include): bottom 구현
const SnackBarBox: React.FC<
  Pick<SnackBarParams, 'iconName' | 'title' | 'position' | 'onClick'> & {
    translateY: number;
    hide: () => void;
    showAnim: boolean;
  }
> = ({
  translateY,
  position = 'top',
  hide,
  title,
  onClick,
  iconName,
  showAnim,
}) => {
  const Icon = iconName ? Icons[iconName] : null;
  return (
    <AnimatedLayout
      width={'100%'}
      top={position === 'top' ? -translateY : undefined}
      bottom={position === 'bottom' ? 0 : undefined}
      translateY={showAnim ? translateY * 2 : 0}
      padding={'0 20px'}
      style={{ zIndex: LAYOUT_Z.SNACK_BAR }}
    >
      <Layout.Row
        bgColor={'BLACK'}
        alignItems={'center'}
        padding={'0 20px'}
        onClick={hide}
        style={{ borderRadius: 8, height: SNACK_BAR_HEIGHT }}
      >
        {!!Icon && <Icon width={24} height={24} />}
        <Text.Typo fontType={'KR/Button/S/Medium'} color={'WHITE'}>
          {title}
        </Text.Typo>
      </Layout.Row>
    </AnimatedLayout>
  );
};

const SnackBar = (() => {
  const show = (params: Omit<SnackBarParams, 'type'>) => {
    globalSnackBar$.next({ ...params, type: 'SNACK_BAR' });
  };

  return {
    show,
  };
})();

export default SnackBar;
export { SnackBarComponent };
