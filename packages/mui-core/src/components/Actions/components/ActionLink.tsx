import React from 'react';
import { Link as BaseLink, Button } from '@material-ui/core';
import clsx from 'clsx';
import Color from 'color';
import Link, { LinkProps } from './Link';
import createStyles from '../../Theme/createStyles';

// prominent/contained, notable/outlined, info/text
const useStyles = createStyles(
  theme => ({
    root: {
      color: theme.palette.actions.info,
    },
    cta: {
      backgroundColor: theme.palette.actions.cta,
      color: theme.palette.getContrastText(theme.palette.actions.cta),
      '&:hover': {
        backgroundColor: Color(theme.palette.actions.cta)
          .darken(0.15)
          .string(),
      },
    },
  }),
  {
    name: 'MuiAction',
  },
);

export interface ActionLinkProps extends LinkProps {
  prominent?: boolean;
  notable?: boolean;
  secondary?: boolean;
  primary?: boolean;
  large?: boolean;
  info?: boolean;
  warning?: boolean;
  success?: boolean;
  error?: boolean;
  cta?: boolean;
  className?: string;
}

// todo: add validateProps
export default function ActionLink({
  to,
  prominent,
  secondary,
  primary,
  large,
  cta,
  className,
  ...props
}: ActionLinkProps) {
  const classes = useStyles();
  let Component = Button;
  const opts: any = {};
  if (prominent) {
    opts.variant = 'contained';
  } else {
    Component = BaseLink;
  }
  if (primary) {
    opts.color = 'primary';
  } else if (secondary) {
    opts.color = 'secondary';
  }
  if (large) {
    opts.size = 'large';
  }
  opts.className = clsx(classes.root, cta && classes.cta, className);
  return <Link to={to} component={Component} {...opts} {...props} />;
}
