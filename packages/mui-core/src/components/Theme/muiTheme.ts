import { createMuiTheme, Theme } from '@material-ui/core';
// @ts-ignore
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import { grey, blue, green } from '@material-ui/core/colors';
import { mergeDeepLeft } from 'ramda';
// import { dark } from '@material-ui/core/styles/createPalette';

const muiTheme = {
  topbar: {
    sizes: {
      sm: 48,
      md: 64,
      lg: 81,
    },
    height(size?: 'sm' | 'md' | 'lg') {
      return size ? this.sizes[size] : this.sizes.md;
    },
  },
  palette: {
    tonalOffset: 0.5,
    contrastThreshold: 4.5,
    tertiary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
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
      let type = paletteType || this.type;
      let color = name;
      if (/\./.test(name)) {
        [color, type] = name.split('.') as any;
      }
      if (this[color]) {
        return this[color][type];
      }
      return this.common[color] || color;
    },
    actions: {
      cta: blue[500],
      info: blue[500],
    },
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
      lineHeight: 1.3,
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      lineHeight: 1.3,
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: 1.3,
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.2rem',
      lineHeight: 1.3,
      fontWeight: 400,
    },
    h5: {
      fontSize: '1rem',
      lineHeight: 1.3,
      fontWeight: 400,
    },
    subtitle1: {
      lineHeight: 1.3,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      // Name of the component ⚛ / style sheet
      text: {
        // Name of the rule
        // color: 'white', // Some CSS
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
  responsiveFontSizes(createMuiTheme(mergeDeepLeft(opts, muiTheme))) as AppTheme;
