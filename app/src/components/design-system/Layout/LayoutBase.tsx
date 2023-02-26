import styled from 'styled-components';
import type { ColorKeys } from '@assets/color';
import { NavBar } from '@components/design-system/TopNavigation';

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

export const Row = styled.div<{
  reverse?: boolean;
  wrap?: boolean;
  alignItems?: 'center' | 'flex-end' | 'unset';
  justifyContent?:
    | 'unset'
    | 'space-between'
    | 'center'
    | 'space-around'
    | 'flex-end';
  scroll?: boolean;
  margin?: string;
  padding?: string;
  bgColor?: ColorKeys;
  relative?: boolean;
  absolute?: boolean;
  pointer?: boolean;
}>`
  position: ${props => {
    if (props.relative) {
      return 'relative';
    }
    if (props.absolute) {
      return 'absolute';
    }
    return 'unset';
  }};
  width: 100%;
  margin: ${props => (props.margin !== null ? props.margin : '0')};
  padding: ${props => (props.padding !== null ? props.padding : '0')};
  display: ${props => (props.scroll ? '-webkit-box' : 'flex')};
  flex-wrap: ${props => (props.wrap === true ? 'wrap' : 'nowrap')};
  flex-direction: ${props => (props.reverse === true ? 'row-reverse' : 'row')};
  overflow: ${props => (props.scroll ? 'scroll' : 'unset')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'unset'};
  background-color: ${props =>
    props.bgColor !== null ? props.bgColor : 'transparent'};
  cursor: ${props => (props.pointer ? 'pointer' : 'unset')};
`;
