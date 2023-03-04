import type { FC } from 'react';
import React from 'react';
import { BottomTabContainer } from '@components/design-system/BottomTab/BottomTab.styles';
import { BottomTab as tabs } from '@libs/Navigation/BottomTab';
import BottomTabItem from '@components/design-system/BottomTab/atom/BottomTabItem/BottomTabItem';
import { withConstants } from 'src/utils';
import { BOTTOM_TAB_HEIGHT } from '@components/design-system/BottomTab/BottomTab.constants';
import { COMMON } from '@constants/index';

const BottomTab: FC<BottomTabProps> = props => {
  const { currentPathname } = props;

  return (
    <BottomTabContainer style={{ zIndex: COMMON.LAYOUT_Z.BOTTOM_TAB }}>
      {tabs.map(tab => (
        <BottomTabItem
          key={tab.link}
          {...tab}
          active={currentPathname === tab.link}
        />
      ))}
    </BottomTabContainer>
  );
};

type BottomTabProps = {
  currentPathname: string;
};

export default withConstants(BottomTab, { BOTTOM_TAB_HEIGHT });
