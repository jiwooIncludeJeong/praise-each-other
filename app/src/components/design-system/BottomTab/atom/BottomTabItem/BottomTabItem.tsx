import type { FC } from 'react';
import React from 'react';
import * as Icons from '../../../../icons/index';
import { IconButton } from '@components/design-system/BottomTab/atom/BottomTabItem/BottomTabItem.styles';
import type { BottomTabRouteType } from '@libs/Navigation/BottomTab';
import { BOTTOM_TAB_HEIGHT } from '@components/design-system/BottomTab/BottomTab.constants';

type BottomTabItemProps = BottomTabRouteType;

const BottomTabItem: FC<BottomTabItemProps> = props => {
  const { icon, link } = props;

  const Icon = Icons[icon];

  return (
    <IconButton size={BOTTOM_TAB_HEIGHT} to={link} replace={true}>
      <Icon width={ICON_SIZE} height={ICON_SIZE} />
    </IconButton>
  );
};

const ICON_SIZE = 30;

export default BottomTabItem;
