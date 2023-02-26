import styled from 'styled-components';
import { LayoutBase } from '@components/design-system/Layout/LayoutBase';
import { BOTTOM_TAB_HEIGHT } from '@components/design-system/BottomTab/BottomTab.constants';

export const MobileLayoutBase = styled(LayoutBase)<{
  renderBottomSheet: boolean;
}>`
  height: 100vh;
  padding-bottom: ${({ renderBottomSheet }) =>
    renderBottomSheet ? BOTTOM_TAB_HEIGHT : 0}px;
  @media only screen and ${({ theme }) => theme.MIN_ONLY_MOBILE} {
    width: 375px;
    align-self: center;
  }
`;
