import React, { ReactNode } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>(theme => ({
  header: {
    height: 64,
  },
  menu: {
    display: 'flex',
    height: '100%',
    padding: `${theme.spacing(1)}px 0`,
  },
  menuItem: {
    justifyContent: 'center',
    width: 'auto',
    margin: `0 ${theme.spacing(1)}px`,
    boxShadow: 'none',
  },
}));

interface HeaderProps {
  children?: ReactNode
}

export default function Header({ children }: HeaderProps) {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      {children}
    </header>
  );
}
