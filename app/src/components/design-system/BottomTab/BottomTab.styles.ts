import styled from 'styled-components';
import { LayoutBase } from '@components/design-system/Layout';
import { BOTTOM_TAB_HEIGHT } from '@components/design-system/BottomTab/BottomTab.constants';

export const BottomTabContainer = styled(LayoutBase)`
  flex-direction: row;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: ${BOTTOM_TAB_HEIGHT}px;
  border-top: 1px solid gray;
  justify-content: space-around;
  align-items: center;
`;
