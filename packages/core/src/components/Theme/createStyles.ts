import { makeStyles } from '@material-ui/core';
import { AppTheme } from './muiTheme';
import { Styles } from '@material-ui/styles/withStyles';
import { WithStylesOptions } from '@material-ui/core/styles/withStyles';

const createStyles = <T = any>(
  styles: Styles<AppTheme, T, string>,
  options?: WithStylesOptions | undefined,
) => makeStyles<AppTheme, T>(styles, options);

export default createStyles;
