import type { FC } from 'react';
import React, { useEffect } from 'react';
import { BottomSheetComponent } from '@components/design-system/BottomSheet/BottomSheet';
import {
  globalBottomSheet$,
  globalComponents$,
} from '@libs/GlobalComponent/globalComponent$';
import { SnackBarComponent } from '@components/design-system/SnackBar/SnackBar';

const GlobalComponents: FC<GlobalComponentsProps> = props => {
  const { children } = props;

  useEffect(() => {
    globalComponents$.complete();
    globalBottomSheet$.complete();
  }, []);

  return (
    <>
      {children}
      <SnackBarComponent />
      <BottomSheetComponent />
    </>
  );
};

type GlobalComponentsProps = {
  children: React.ReactNode;
};

export default GlobalComponents;
