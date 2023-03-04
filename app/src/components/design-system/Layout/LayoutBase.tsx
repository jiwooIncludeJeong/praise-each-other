import styled from 'styled-components';
import type { ColorKeys } from '@assets/color';

export const LayoutBase = styled.div<{
  bgColor?: ColorKeys;
  scroll?: boolean;
  alignItems?: 'center' | 'flex-end';
  justifyContent?: 'space-between' | 'center' | 'space-around' | 'flex-end';
  margin?: string;
  padding?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ width }) => {
    if (typeof width === 'number') {
      return `width:${width}px;`;
    }
    if (typeof width === 'string') {
      return `width:${width};`;
    }
    return `width:100%;`;
  }}
  ${({ height }) => {
    if (typeof height === 'number') {
      return `height:${height}px;`;
    }
    if (typeof height === 'string') {
      return `height:${height};`;
    }
    return `height:100%;`;
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

export const AbsoluteFillScreen = styled(LayoutBase)`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;

  @media only screen and ${({ theme }) => theme.MIN_ONLY_MOBILE} {
    width: 375px;
    align-self: center;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Absolute = styled(LayoutBase)<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>`
  position: absolute;
  ${({ top }) => `top: ${top}px;`}
  ${({ bottom }) => `bottom: ${bottom}px;`}
  ${({ right }) => `right: ${right}px;`}
  ${({ left }) => `left:${left}px;`}
`;
