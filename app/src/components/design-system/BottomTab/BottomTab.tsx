import type { FC } from 'react';
import React from 'react';
import { BottomTabContainer } from '@components/design-system/BottomTab/BottomTab.styles';
import { BottomTab as tabs } from '@libs/Navigation/BottomTab';
import BottomTabItem from '@components/design-system/BottomTab/atom/BottomTabItem/BottomTabItem';

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

export default BottomTab;
