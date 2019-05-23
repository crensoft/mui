import React from 'react';
import { ReactNode } from 'react';
import { Container as BaseContainer } from '@material-ui/core';
import { ContainerProps as BaseContainerProps } from '@material-ui/core/Container';
import createStyles from '../Theme/createStyles';
import { CSSProperties } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = createStyles(
  theme => ({
    root: {
      margin: 0,
      '& &': {
        padding: 0,
      },
    },
    center: {
      margin: 'auto',
    },
  }),
  {
    name: 'CsContainer',
  },
);

export interface ContainerProps extends Pick<BaseContainerProps, 'maxWidth'> {
  children?: ReactNode;
  fluid?: boolean;
  center?: boolean;
  style?: CSSProperties;
  className?: string;
}

/**
 * Container with max width
 */
export default function Container({
  children,
  maxWidth = 'lg',
  center = false,
  fluid = false,
  style,
  className,
}: ContainerProps) {
  const classes = useStyles({ fluid });
  const cl = clsx(classes.root, center && classes.center, className);
  return (
    <BaseContainer style={style} maxWidth={maxWidth} className={cl}>
      {children}
    </BaseContainer>
  );
}
