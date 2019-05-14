import React from 'react';
import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container as BaseContainer } from '@material-ui/core';

const useStyles = makeStyles(
  theme => ({
    root: (props: any) => {
      if (!props.center) {
        return {
          padding: 0,
          margin: 0,
        };
      }
      return {};
    },
  }),
  {
    name: 'mui',
  },
);

interface ContainerProps {
  children?: ReactNode;
  fluid?: boolean;
  maxWidth?: 'sm' | 'md';
  center?: boolean;
}

/**
 * Container with max width
 */
export default function Container({
  children,
  maxWidth,
  center = false,
  fluid = false,
}: ContainerProps) {
  const classes = useStyles({ fluid, center });
  return (
    <BaseContainer maxWidth={maxWidth} className={classes.root}>
      {children}
    </BaseContainer>
  );
}
