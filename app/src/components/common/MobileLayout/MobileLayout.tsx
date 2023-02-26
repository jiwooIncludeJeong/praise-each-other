import type { FC } from 'react';
import React from 'react';
import { Layout } from '@components/design-system';
import BottomTab from '@components/design-system/BottomTab';
import { useLocation } from 'react-router';
import { useBottomSheetRender } from '@hooks/common';

type MobileLayoutProps = {
  children: React.ReactNode;
};
const MobileLayout: FC<MobileLayoutProps> = props => {
  const { children } = props;

  const location = useLocation();

  const { renderState: renderBottomSheet } = useBottomSheetRender([
    location.pathname,
  ]);

  return (
    <Layout.LayoutBase bgColor={'BLACK'} justifyContent={'center'}>
      <Layout.MobileLayoutBase
        bgColor={'WHITE'}
        renderBottomSheet={renderBottomSheet}
      >
        {children}
        {renderBottomSheet && <BottomTab currentPathname={location.pathname} />}
      </Layout.MobileLayoutBase>
    </Layout.LayoutBase>
  );
};

export default MobileLayout;
