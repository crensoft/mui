import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import muiTheme from './muiTheme';
import { CssBaseline } from '@material-ui/core';

const theme = muiTheme({
  palette: {
    primary: {
      main: '#453',
    },
  },
});

export default function Theme({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
