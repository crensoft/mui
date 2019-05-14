import React from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import Icon from './Icon';
import createStyles from '../Theme/createStyles';
import { fade } from '@material-ui/core/styles';
import { AppTheme } from '../Theme/muiTheme';
import { useTheme } from '@material-ui/styles';

const useStyles = createStyles(theme => ({
  CircleIcon: ({ color, bgColor = 'neutral', paletteType = 'light' }) => ({
    display: 'inline-block',
    background: bgColor,
    padding: theme.spacing(2),
    width: 'auto',
    height: 'auto',
    borderRadius: '50%',
  }),
}));

type Props = {
  label: string;
  icon: IconProp;
  size: SizeProp;
  color?: string;
  bgColor?: string;
};

const CircleIcon: React.FunctionComponent<Props> = ({
  label,
  icon,
  size = '1x',
  color = 'neutral',
  bgColor,
}) => {
  const theme = useTheme<AppTheme>();
  const calcBgColor = bgColor
    ? theme.palette.getColor(bgColor as any)
    : fade(theme.palette.getColor(color as any), 0.12);
  const classes = useStyles({
    bgColor: calcBgColor,
  });

  return (
    <div className={classes.CircleIcon}>
      <Icon label={label} icon={icon} size={size} color={color} />
    </div>
  );
};

export default CircleIcon;
