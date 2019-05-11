import React from 'react';
import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  theme => ({
    container: (props: any) => ({
      // add padding when not fluid
      maxWidth: props.fluid ? '100%' : 1080 - theme.spacing(2),
      padding: props.fluid ? 0 : theme.spacing(1),
      width: '100%',
      margin: '0 auto',
      maxHeight: '100%',
    }),
  }),
  {
    name: 'mui',
  },
);

interface ContainerProps {
  children?: ReactNode;
  fluid?: boolean;
}

/**
 * Container with max width
 */
export default function Container({ children, fluid = false }: ContainerProps) {
  const classes = useStyles({ fluid });
  return <div className={classes.container}>{children}</div>;
}
