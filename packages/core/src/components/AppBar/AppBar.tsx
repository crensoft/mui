import React, { ReactNode, createContext } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/styles';
import { AppBar as BaseAppBar } from '@material-ui/core';
import { pick } from 'ramda';
import useScrollEffect from './useScrollEffect';
import Container from '../Layout/Container';

import { AppTheme } from '../Theme/muiTheme';

const useStyles = makeStyles<AppTheme, Props>(theme => ({
  root: {
    flexGrow: 1,
  },
  colorDefault: ({ color = 'neutral', paletteType }) => ({
    backgroundColor: theme.palette.getColor(color, paletteType),
  }),
  toolbar: ({ size }) => ({
    justifyContent: 'space-between',
    height: theme.topbar.height(size),
  }),
  HeaderFill: ({ size }) => ({
    height: theme.topbar.height(size),
  }),
}));

type Props = {
  children?: ReactNode;
  elevation?: number;
  /** default: false */
  fluid?: boolean;
  position?: 'static' | 'fixed' | 'relative';
  /** default: 'md' */
  size?: keyof AppTheme['topbar']['sizes'];
  color?: 'primary' | 'secondary' | 'neutral' | 'black' | 'white';
  colorScale?: number;
  paletteType?: 'dark' | 'light' | 'main';
  large?: boolean;
  scrollTarget?: any;
};

export const AppBarContext = createContext({
  bgColor: '',
});

export default function AppBar({
  children,
  color = 'white',
  paletteType,
  elevation = 0,
  fluid = false,
  large,
  scrollTarget,
}: Props) {
  const scrollTrigger = useScrollEffect({ scrollTarget });
  const calcElevation = scrollTrigger ? 2 : elevation;
  const theme = useTheme<AppTheme>();
  const size = large ? 'lg' : 'md';
  const classes = useStyles({ fluid, size, color, paletteType });

  return (
    <AppBarContext.Provider value={{ bgColor: theme.palette.getColor(color, paletteType) }}>
      <header>
        <div className={classes.HeaderFill} />
        <BaseAppBar
          component="nav"
          color="default"
          elevation={calcElevation}
          classes={pick(['root', 'colorDefault'], classes)}
        >
          <Container fluid={fluid} center>
            <Toolbar disableGutters={true} className={classes.toolbar}>
              {children}
            </Toolbar>
          </Container>
        </BaseAppBar>
      </header>
    </AppBarContext.Provider>
  );
}
