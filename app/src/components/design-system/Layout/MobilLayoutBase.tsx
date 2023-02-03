import styled from 'styled-components';
import { LayoutBase } from '@components/design-system/Layout/LayoutBase';

export const MobileLayoutBase = styled(LayoutBase)`
  height: 100vh;
  @media only screen and ${({ theme }) => theme.MIN_ONLY_MOBILE} {
    width: 375px;
    align-self: center;
  }
`;