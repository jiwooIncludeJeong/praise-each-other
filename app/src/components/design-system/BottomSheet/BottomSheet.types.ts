import type { ColorKeys } from '@assets/color';

export type BottomSheetParams = {
  type: 'BOTTOM_SHEET';
  Component: JSX.Element;
  disableClose?: boolean;
  hideHeader?: boolean;
  maxHeight: BottomSheetMaxHeight;
  bgColor?: ColorKeys;
  dimColor?: ColorKeys;
};

export type BottomSheetMaxHeight = 'FULLSCREEN' | number;

export type BottomSheetContextType = {
  close: (callback?: () => void) => void;
  extraHeight: number;
  setExtraHeight: (pb: number) => void;
};
