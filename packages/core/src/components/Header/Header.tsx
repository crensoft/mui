import React from 'react';
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

export default function Header() {
  const classes = useStyles();
  return <header className={classes.header}>test</header>;
}
