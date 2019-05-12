import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { AppTheme } from '../../Theme/muiTheme';
import { ButtonProps } from '@material-ui/core/Button';

const useStyles = makeStyles<AppTheme, { ctxColor: string }>(theme => ({
  ['appmenu-item']: ({ ctxColor }) => ({
    justifyContent: 'center',
    width: 'auto',
    margin: `0 ${theme.spacing(1)}px`,
    boxShadow: 'none',
    '&:not(.MuiButton-contained)': {
      color: theme.palette.getContrastText(ctxColor),
    },
  }),
}));

type AppMenuItemProps = {
  title: string;
  btn?: ButtonProps;
  ctxColor: string;
};

export default function AppMenuItem({ title, ctxColor, btn = {} }: AppMenuItemProps) {
  const classes = useStyles({ ctxColor });
  return (
    <Button className={classes['appmenu-item']} key={title} {...btn}>
      {title}
    </Button>
  );
}
