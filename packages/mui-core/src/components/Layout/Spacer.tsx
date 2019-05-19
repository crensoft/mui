import React from 'react';
import createStyles from '../Theme/createStyles';

const useStyles = createStyles(theme => ({
  Spacer: ({ val }) => ({
    margin: `${theme.spacing(val)}px`,
  }),
}));

interface SpacerProps {
  val?: number;
}

/**
 * Spacer
 */
export default function Spacer({ val = 1 }: SpacerProps) {
  const classes = useStyles({ val });
  return <div className={classes.Spacer} />;
}
