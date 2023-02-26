import type { FC } from 'react';
import React from 'react';
import { BottomTabContainer } from '@components/design-system/BottomTab/BottomTab.styles';
import { BottomTab as tabs } from '@libs/Navigation/BottomTab';
import BottomTabItem from '@components/design-system/BottomTab/atom/BottomTabItem/BottomTabItem';
import { withConstants } from 'src/utils';
import { BOTTOM_TAB_HEIGHT } from '@components/design-system/BottomTab/BottomTab.constants';

const BottomTab: FC<BottomTabProps> = props => {
  const {} = props;

  return (
    <BottomTabContainer>
      {tabs.map(tab => (
        <BottomTabItem key={tab.link} {...tab} />
      ))}
    </BottomTabContainer>
  );
};

type BottomTabProps = {};

export default withConstants(BottomTab, { BOTTOM_TAB_HEIGHT });
