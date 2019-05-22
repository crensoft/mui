import React from 'react';
import { ReactNode } from 'react';
import { Container as BaseContainer } from '@material-ui/core';
import { ContainerProps as BaseContainerProps } from '@material-ui/core/Container';
import createStyles from '../Theme/createStyles';
import { CSSProperties } from '@material-ui/styles';

const useStyles = createStyles(
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
    name: 'CsContainer',
  },
);

export interface ContainerProps extends Pick<BaseContainerProps, 'maxWidth'> {
  children?: ReactNode;
  fluid?: boolean;
  center?: boolean;
  style?: CSSProperties;
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
}: ContainerProps) {
  const classes = useStyles({ fluid, center });
  return (
    <BaseContainer style={style} maxWidth={maxWidth} className={classes.root}>
      {children}
    </BaseContainer>
  );
}
