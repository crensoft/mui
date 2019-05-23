import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import { AppTheme } from '@crensoft/mui-core/lib/components/Theme/muiTheme';

export default function useMobile() {
  const theme = useTheme<AppTheme>();
  return useMediaQuery(theme.breakpoints.only('xs'));
}
