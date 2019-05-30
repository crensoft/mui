import { useTheme } from '@material-ui/styles';
import { AppTheme } from './muiTheme';

export default function useAppTheme() {
  return useTheme<AppTheme>();
}
