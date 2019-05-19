import React, { ReactNode } from 'react';
import { createStyles, ActionGroup, Spacer } from '@crensoft/mui-core';
import Intro, { IntroProps } from '../Intro/Intro';
import { ActionGroupProps } from '@crensoft/mui-core/lib/components/Actions/components/ActionGroup';

const useStyles = createStyles(theme => ({
  PainPoint: ({ padding }) => ({
    padding: padding ? theme.spacing(padding) : '',
  }),
}));

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
  const spacing = intro.h1 ? 2 : 1;
  return (
    <div className={classes.PainPoint}>
      <Intro center={center} {...intro}>
        {children}
        {actions && <Spacer val={spacing} />}
        {actions && <ActionGroup center={center} actions={actions} />}
      </Intro>
    </div>
  );
}
