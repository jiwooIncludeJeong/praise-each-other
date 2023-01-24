import type { DefaultTheme } from 'styled-components/native/dist';
import { COLOR } from '@assets/color';

export const SIZE = {
  MIN_MOBILE: 360,
  MAX_MOBILE: 428,
};

const DEFAULT_THEME = {
  MAX_ONLY_MOBILE: `(max_width: ${SIZE.MIN_MOBILE}px)`, // 360 미만에 대해서는 대응 X
  MIN_MOBILE: `(min-width: ${SIZE.MIN_MOBILE + 1}px)`,
  MAX_MOBILE: `(max_width: ${SIZE.MAX_MOBILE}px)`,
  MIN_ONLY_MOBILE: `(min-width:${SIZE.MAX_MOBILE + 1}px)`, // 428 초과에 대해서는 대응 X
};

export const THEME: DefaultTheme = {
  COLOR,
  ...DEFAULT_THEME,
};
