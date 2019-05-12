import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { renderMap } from '@crensoft/mui-utils';
import { AppTheme } from '../../Theme/muiTheme';

const useStyles = makeStyles<AppTheme>(theme => ({
  root: {
    height: theme.header.height(),
  },
  logo: {
    maxWidth: 200,
    height: '100%',
  },
  menu: {
    display: 'flex',
    height: '100%',
    padding: `${theme.spacing(1)}px 0`,
  },
  menuItem: {
    justifyContent: 'center',
    width: 'auto',
    margin: `0 ${theme.spacing(1)}px`,
    boxShadow: 'none',
    // "&:hover": {
    // 	backgroundColor:
    // }
  },
}));

type Props = {
  menu: any;
};

export default function AppMenu({ menu }: Props) {
  const classes = useStyles();
  const btnProps = {};
  const renderMenu = renderMap((menuItem: any) => (
    <Button className={classes.menuItem} key={menuItem.title} {...menuItem.btn || btnProps}>
      {menuItem.title}
    </Button>
  ));
  return <div className={classes.appmenu}>{renderMenu(menu)}</div>;
}
