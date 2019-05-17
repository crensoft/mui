import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import createStyles from '../Theme/createStyles';
import { AppTheme } from '../Theme/muiTheme';
import { useTheme } from '@material-ui/styles';
// import createStyles from '../Theme/createStyles';

// const useStyles = createStyles<Partial<Props>>(theme => ({
//   IconBg: ({ bg }) => {
//     if (bg) {
//       // @ used to denote a variable, and not color literal. hack;
//       const bgColor = /@/.test(bg) ? theme.palette.getColor(bg.replace('@', '') as any) : bg;
//       return {
//         backgroundColor: bgColor as string,
//       };
//     }
//     return {};
//   },
// }));
const useStyles = createStyles({
  FaStackIcon: {
    height: '2em',
  },
});

type Props = {
  img?: string;
  label: string;
  icon?: IconProp;
  bg?: string;
  stack?: React.ReactNode[];
  size?: SizeProp;
  mask?: any;
  transform?: string;
  color?: string;
  fixedWidth?: boolean;
};

const Icon: React.FunctionComponent<Props> = ({
  img,
  mask,
  icon,
  size = '4x',
  bg,
  transform,
  label,
  stack,
  color,
  fixedWidth,
}) => {
  const classes = useStyles({ size });
  const theme = useTheme<AppTheme>();

  if (!label) {
    throw new Error('Label required for icon');
  }
  // const classes = useStyles({ bg });

  if (stack) {
    return (
      <span className={`fa-stack fa-${size} ${classes.FaStackIcon}`}>
        {stack.map(item => item)}
      </span>
    );
  }

  if (icon) {
    return (
      <FontAwesomeIcon
        color={theme.palette.getColor(color as any, 'dark')}
        transform={transform}
        mask={mask}
        icon={icon}
        size={size}
        fixedWidth={fixedWidth}
        aria-hidden
      />
    );
  }

  throw new Error('icon not set');
};

export default Icon;
