import React, { ReactNode, CSSProperties, useState } from 'react';
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
  const [enableFullscreen, setState] = useState(false);
  // @ts-ignore
  window.__FRAME_WRAPPER__ = {
    setState,
  };
  return (
    <div style={style} className={enableFullscreen ? '' : classes['frame-wrapper']}>
      <Theme>{children}</Theme>
    </div>
  );
}
