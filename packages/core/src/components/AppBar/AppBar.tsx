import React, { ReactNode } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Container from '../Layout/Container';
import { pick } from 'ramda';
import { AppBar as BaseAppBar } from '@material-ui/core';
import { AppTheme } from '../Theme/muiTheme';

const useStyles = makeStyles<AppTheme, Props>(theme => ({
  root: {
    flexGrow: 1,
  },
  colorDefault: {
    backgroundColor: '#fff',
  },
  toolbar: ({ size }) => ({
    justifyContent: 'space-between',
    height: theme.header.height(size),
  }),
}));

type Props = {
  children?: ReactNode;
  elevation?: number;
  /** default: false */
  fluid?: boolean;
  position?: 'static' | 'fixed' | 'relative';
  /** default: 'md' */
  size?: keyof AppTheme['header']['sizes'];
};

export default function AppBar({ children, elevation = 0, size = 'md', fluid = false }: Props) {
  const classes = useStyles({ fluid, size });

  return (
    <BaseAppBar
      component="nav"
      color="default"
      elevation={elevation}
      classes={pick(['root', 'colorDefault'], classes)}
    >
      <Container fluid={fluid}>
        <Toolbar disableGutters={true} className={classes.toolbar}>
          {children}
        </Toolbar>
      </Container>
    </BaseAppBar>
  );
}
