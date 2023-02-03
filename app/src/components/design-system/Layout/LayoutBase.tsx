import styled from 'styled-components';
import type { ColorKeys } from '@assets/color';

export const LayoutBase = styled.div<{
  bgColor?: ColorKeys;
  scroll?: boolean;
  alignItems?: 'center' | 'flex-end';
  justifyContent?: 'space-between' | 'center' | 'space-around' | 'flex-end';
  margin?: string;
  padding?: string;
  size?: { width: number | string; height: number | string } | 'unset';
  borderRadius?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${props => {
    if (props.size === 'unset') {
      return 'width: unset; height: unset;';
    }
    if (props.size?.width) {
      return `width:${props.size.width}px; height:${props.size.height};`;
    }
    return 'width:100%; height:100%;';
  }}
  background-color: ${({ bgColor, theme }) =>
    bgColor !== undefined ? theme.COLOR[bgColor] : 'transparent'};
  overflow-y: ${props => (props.scroll === true ? 'auto' : 'hidden')};
  overflow-x: hidden;

  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'unset'};

  margin: ${props => (props.margin !== null ? props.margin : '0')};
  padding: ${props => (props.padding !== null ? props.padding : '0')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0')};
`;
