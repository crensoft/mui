import React from 'react';
import { makeStyles } from '@material-ui/core';
import Image from '../../Image/Image';
import { AppTheme } from '../../Theme/muiTheme';

const useStyles = makeStyles<AppTheme>(theme => ({
  ['appbar-logo']: {
    maxWidth: 200,
    height: '100%',
    display: 'flex',
    flexGrow: 1,
  },
}));

export default function AppBarLogo({}) {
  const classes = useStyles();
  return (
    <div className={classes['appbar-logo']}>
      <Image src="/img/logo.svg" alt="App logo" responsive />
    </div>
  );
}
