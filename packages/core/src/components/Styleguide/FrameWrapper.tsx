import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  ['frame-wrapper']: {
    transform: 'translate3d(0,0,0)'
  }
});

/**
 * Fixes 'fixed' positioned elements
 */
export default function FrameWrapper({ children }: { children: ReactNode }) {
  const classes = useStyles();
  return <div className={classes['frame-wrapper']}>{children}</div>
}