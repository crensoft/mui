import { AppTheme } from './muiTheme';
import { Styles } from '@material-ui/styles/withStyles';
import { WithStylesOptions } from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/styles';

const createStyles = <T = any>(
  styles: Styles<AppTheme, T, string>,
  options?: WithStylesOptions | undefined,
) => makeStyles<AppTheme, T>(styles, { name: 'mui', ...options });

export default createStyles;
