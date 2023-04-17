import styled from 'styled-components';
import { Link } from '@remix-run/react';

export const IconButton = styled(Link)<{ size: number }>`
  width: 100%;
  height: ${({ size }) => size}px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  cursor: pointer;
  display: flex;

  :last-child {
    border-right: 0;
  }
`;
