import type { FC } from 'react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { commonHooks } from '@hooks/index';
import { COMMON } from '@constants/index';
import { THEME } from '@styles/theme';

type ThemeLayoutProps = {
  children: React.ReactNode;
};

const ThemeLayout: FC<ThemeLayoutProps> = props => {
  const { children } = props;

  const { theme } = commonHooks.useTheme();

  return (
    <ThemeProvider theme={theme === COMMON.THEME.LIGHT ? THEME : THEME}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
