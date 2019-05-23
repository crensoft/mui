import React, { ReactNode } from 'react';
import { createStyles, ActionGroup, Spacer } from '@crensoft/mui-core';
import Intro, { IntroProps } from '../Intro/Intro';
import { ActionGroupProps } from '@crensoft/mui-core/lib/components/Actions/components/ActionGroup';
import clsx from 'clsx';

const useStyles = createStyles(
  theme => ({
    root: {},
    padding: ({ padding = 0 }) => ({
      padding: theme.spacing(padding / 3),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(padding),
      },
    }),
  }),
  {
    name: 'MuiPainPoint',
  },
);

export interface PainPointProps extends IntroProps {
  children?: ReactNode;
  actions?: ActionGroupProps['actions'];
  padding?: number;
  center?: boolean;
  h1?: boolean;
}

export default function PainPoint({
  children,
  actions,
  center,
  padding,
  ...intro
}: PainPointProps) {
  const classes = useStyles({ padding });
  const spacing = intro.h1 ? 2 : 1.5;
  const cl = clsx(classes.root, padding && classes.padding);
  return (
    <div className={cl}>
      <Intro center={center} {...intro}>
        {children}
        {actions && <Spacer val={spacing} />}
        {actions && <ActionGroup center={center} actions={actions} />}
      </Intro>
    </div>
  );
}
