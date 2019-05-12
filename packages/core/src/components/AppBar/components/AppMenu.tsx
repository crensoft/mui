import React from 'react';
import { makeStyles } from '@material-ui/core';
import { renderMap } from '@crensoft/mui-utils';
import { AppTheme } from '../../Theme/muiTheme';
import useAppBarContext from '../useAppBarContext';
import AppMenuItem from './AppMenuItem';

const useStyles = makeStyles<AppTheme>(theme => ({
  menu: {
    display: 'flex',
    height: '100%',
    padding: `${theme.spacing(1)}px 0`,
  },
}));

type Props = {
  menu: any;
};

export default function AppMenu({ menu }: Props) {
  const appBarCtx = useAppBarContext();
  const classes = useStyles();
  const renderMenu = renderMap((menuItem: any) => (
    <AppMenuItem key={menuItem.title} {...menuItem} ctxColor={appBarCtx.bgColor} />
  ));
  return <div className={classes.appmenu}>{renderMenu(menu)}</div>;
}
