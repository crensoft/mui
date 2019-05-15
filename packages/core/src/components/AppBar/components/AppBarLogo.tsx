import React from 'react';
import { makeStyles } from '@material-ui/core';
import Image from '../../Img/Img';
import { AppTheme } from '../../Theme/muiTheme';

const useStyles = makeStyles<AppTheme>(theme => ({
  ['appbar-logo']: {
    maxWidth: 200,
    height: '100%',
    display: 'flex',
    flexGrow: 1,
  },
}));

type Props = {
  img?: string;
};

export default function AppBarLogo({ img }: Props) {
  const classes = useStyles();
  return (
    <div className={classes['appbar-logo']}>{img && <Image src={img} alt="Home" responsive />}</div>
  );
}
