import React from 'react';
import { animateScroll } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import createStyles from '../Theme/createStyles';
import Icon from '../Icon/Icon';

const useStyles = createStyles(
  theme => ({
    root: {
      position: 'absolute',
      top: 3,
      left: 0,
      right: 0,
      width: 50,
      margin: 'auto',
    },
  }),
  {
    name: 'MuiScrollTop',
  },
);
export default function ScrollTop({ className }: { className: string }) {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const classes = useStyles();
  const cl = clsx(classes.root, className);
  return (
    <IconButton className={cl} onClick={scrollToTop}>
      <Icon size="1x" label="arrow up" icon={faChevronCircleUp} />
    </IconButton>
  );
}
