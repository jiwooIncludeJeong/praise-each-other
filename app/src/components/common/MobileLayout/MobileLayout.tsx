import type { FC } from 'react';
import React from 'react';

import { Layout } from '@components/design-system';

type MobileLayoutProps = {
  children: React.ReactNode;
};
const MobileLayout: FC<MobileLayoutProps> = props => {
  const { children } = props;
  return (
    <Layout.LayoutBase bgColor={'BLACK'} justifyContent={'center'}>
      <Layout.MobileLayoutBase bgColor={'WHITE'}>
        {children}
      </Layout.MobileLayoutBase>
    </Layout.LayoutBase>
  );
};

export default MobileLayout;
