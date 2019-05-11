import { createMuiTheme, Theme } from "@material-ui/core";
// @ts-ignore
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

const muiTheme = {
  header: {
    sizes: {
      sm: 48,
      md: 64,
      lg: 90
    },
    height(size?: 'sm' | 'md' | 'lg') {
      return size ? this.sizes[size]: this.sizes.md;
    }
  },
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      text: { // Name of the rule
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
}

export type AppTheme = Theme & typeof muiTheme;

export default (opts?: any): AppTheme  => responsiveFontSizes(createMuiTheme({ ...muiTheme, ...opts }));