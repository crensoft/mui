import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import muiTheme from './muiTheme';
import { CssBaseline } from '@material-ui/core';

export const theme = muiTheme({});

export default function Theme({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
