import type { FC } from 'react';
import React from 'react';
import * as Icons from '../../../../icons/index';
import { IconButton } from '@components/design-system/BottomTab/components/BottomTabItem/BottomTabItem.styles';
import type { BottomTabRouteType } from '@libs/Navigation/BottomTab';
import { BOTTOM_TAB_HEIGHT } from '@components/design-system/BottomTab/BottomTab.constants';

type BottomTabItemProps = BottomTabRouteType & { active: boolean };

const BottomTabItem: FC<BottomTabItemProps> = props => {
  const { activeIcon, inactiveIcon, link, active } = props;

  const Icon = Icons[active ? activeIcon : inactiveIcon];

  return (
    <IconButton size={BOTTOM_TAB_HEIGHT} to={link} replace={true}>
      <Icon width={ICON_SIZE} height={ICON_SIZE} />
    </IconButton>
  );
};

const ICON_SIZE = 30;

export default BottomTabItem;
