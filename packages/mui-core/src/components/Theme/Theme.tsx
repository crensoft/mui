import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import muiTheme from './muiTheme';
import { CssBaseline } from '@material-ui/core';

export default function Theme({ children, theme = {} }: { children: ReactNode; theme?: any }) {
  const opts = muiTheme(theme);
  return (
    <ThemeProvider theme={opts}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
