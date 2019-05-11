import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import muiTheme from './muiTheme';

const theme = muiTheme();

export default function Theme({ children }: { children: ReactNode}) {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
}