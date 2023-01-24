import type React from 'react';
import { useState } from 'react';
import { COMMON } from '@constants/index';

export const useTheme = () => {
  const [theme, setTheme] = useState<keyof typeof COMMON.THEME>(
    COMMON.THEME.LIGHT,
  );

  const changeThemeToOpposite = () =>
    setTheme(prev => {
      if (prev === COMMON.THEME.LIGHT) return COMMON.THEME.DARK;
      return COMMON.THEME.LIGHT;
    });

  return {
    theme,
    changeThemeToOpposite,
  };
};
