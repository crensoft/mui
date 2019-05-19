import React from 'react';
import { Button } from '@material-ui/core';
import { Link as BaseLink } from '@material-ui/core';
import Link, { LinkProps } from './Link';

export interface ActionLinkProps extends LinkProps {
  prominent?: boolean;
  secondary?: boolean;
  primary?: boolean;
  large?: boolean;
}

// todo: add validateProps
export default function ActionLink({
  to,
  prominent,
  secondary,
  primary,
  large,
  ...props
}: ActionLinkProps) {
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
  return <Link to={to} component={Component} {...opts} {...props} />;
}
