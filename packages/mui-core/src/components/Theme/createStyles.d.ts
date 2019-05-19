import { AppTheme } from './muiTheme';
import { Styles } from '@material-ui/styles/withStyles';
import { WithStylesOptions } from '@material-ui/core/styles/withStyles';
declare const createStyles: <T = any>(styles: Styles<AppTheme, T, string>, options?: WithStylesOptions | undefined) => import("@material-ui/styles/makeStyles").StylesHook<Styles<AppTheme, T, string>>;
export default createStyles;
