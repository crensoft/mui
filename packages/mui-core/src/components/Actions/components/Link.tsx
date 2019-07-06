import React from 'react';
import BaseLink from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import createStyles from '../../Theme/createStyles';

library.add(faLongArrowAltRight);

const useStyles = createStyles(theme => ({
  LinkGuide: {
    marginLeft: theme.spacing(0.6),
    'a:hover &': {
      marginLeft: theme.spacing(0.75),
    },
  },
}));

export type LinkProps = {
  to?: string;
  guide?: boolean;
  children?: React.ReactNode;
  content?: React.ReactNode;
  component?: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
};

export default function Link({ component, children, content, to, guide, ...other }: LinkProps) {
  const classes = useStyles();
  const renderIcon = () => {
    if (!guide) return;
    // xxx: can also use ">" as arrow
    return <FontAwesomeIcon className={classes.LinkGuide} icon="long-arrow-alt-right" />;
  };

  const Component: any = component || BaseLink;
  return (
    <Component {...other} href={to} title={content as string}>
      {children || content}
      {renderIcon()}
    </Component>
  );
}
