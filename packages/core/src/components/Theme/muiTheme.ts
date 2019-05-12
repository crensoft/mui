import { createMuiTheme, Theme } from '@material-ui/core';
// @ts-ignore
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import { grey } from '@material-ui/core/colors';
import { mergeDeepLeft } from 'ramda';
// import { dark } from '@material-ui/core/styles/createPalette';

const muiTheme = {
  topbar: {
    sizes: {
      sm: 48,
      md: 64,
      lg: 90,
    },
    height(size?: 'sm' | 'md' | 'lg') {
      return size ? this.sizes[size] : this.sizes.md;
    },
  },
  palette: {
    contrastThreshold: 4.5,
    neutral: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
    },
    getColor(
      this: any,
      name: keyof Theme['palette'] | keyof Theme['palette']['common'] | 'neutral',
      paletteType?: 'light' | 'dark' | 'main',
    ) {
      if (this[name]) {
        return this[name][paletteType || this.type];
      }
      return this.common[name];
    },
  },
  overrides: {
    MuiButton: {
      // Name of the component ⚛️ / style sheet
      text: {
        // Name of the rule
        color: 'white', // Some CSS
      },
    },
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
};

export type AppTheme = Theme & typeof muiTheme;

export default (opts?: any): AppTheme =>
  responsiveFontSizes(createMuiTheme(mergeDeepLeft(muiTheme, opts)));
