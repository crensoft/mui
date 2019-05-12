import React, { ReactNode, CSSProperties } from 'react';
import { makeStyles } from '@material-ui/core';
import Theme from '../Theme/Theme';

const useStyles = makeStyles({
  ['frame-wrapper']: {
    transform: 'translate3d(0,0,0)',
  },
});

/**
 * Fixes 'fixed' positioned elements
 */
export default function FrameWrapper({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  const classes = useStyles();
  return (
    <div style={style} className={classes['frame-wrapper']}>
      <Theme>{children}</Theme>
    </div>
  );
}
