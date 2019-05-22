import React from 'react';
import createStyles from '../Theme/createStyles';
import clsx from 'clsx';

export type ContentProps = {
  children?: React.ReactNode;
  verticalList?: boolean;
  /** adds top padding */
  body?: boolean;
};

const useStyles = createStyles(
  theme => ({
    root: {
      padding: theme.spacing(1),
    },
    verticalList: {
      padding: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    body: {
      paddingTop: theme.spacing(2),
    },
  }),
  {
    name: 'MuiContent',
  },
);

export default function Content({ children, verticalList, body }: ContentProps) {
  const classes = useStyles();
  const cl = clsx(classes.root, verticalList && classes.verticalList, body && classes.body);
  return <section className={cl}>{children}</section>;
}
