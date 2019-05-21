import React from 'react';
import createStyles from '../Theme/createStyles';
import clsx from 'clsx';

export type ContentProps = {
  children?: React.ReactNode;
  verticalList?: boolean;
};

const useStyles = createStyles(
  theme => ({
    root: {},
    verticalList: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  }),
  {
    name: 'MuiContent',
  },
);

export default function Content({ children, verticalList }: ContentProps) {
  const classes = useStyles();
  const cl = clsx(classes.root, verticalList && classes.verticalList);
  return <section className={cl}>{children}</section>;
}
