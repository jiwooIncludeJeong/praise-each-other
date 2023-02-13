import styled from 'styled-components';
import { LayoutBase } from '@components/design-system/Layout/LayoutBase';
import { BOTTOM_TAB_HEIGHT } from '@components/design-system/BottomTab/BottomTab.constants';

export const MobileLayoutBase = styled(LayoutBase)`
  height: 100vh;
  padding-bottom: ${BOTTOM_TAB_HEIGHT}px;
  @media only screen and ${({ theme }) => theme.MIN_ONLY_MOBILE} {
    width: 375px;
    align-self: center;
  }
`;
