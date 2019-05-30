import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import { AppTheme } from '../Theme/muiTheme';

export default function useMobile() {
  const theme = useTheme<AppTheme>();
  return useMediaQuery(theme.breakpoints.only('xs'));
}
