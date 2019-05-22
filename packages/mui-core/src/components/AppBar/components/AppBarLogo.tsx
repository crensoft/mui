import React from 'react';
import Image from '../../Img/Img';
import createStyles from '../../Theme/createStyles';

const useStyles = createStyles(
  theme => ({
    root: {
      maxWidth: 150,
      height: '100%',
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
    },
  }),
  {
    name: 'MuiAppbarLogo',
  },
);

type Props = {
  img?: string;
  svg?: any;
};

export default function AppBarLogo({ img, svg }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>{img && <Image svg={svg} src={img} alt="Home" responsive />}</div>
  );
}
