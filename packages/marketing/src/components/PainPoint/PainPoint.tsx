import React, { ReactNode } from 'react';
import { createStyles, ActionGroup, Spacer } from '@crensoft/mui-core';
import Intro, { IntroProps } from '../Intro/Intro';
import { ActionGroupProps } from '@crensoft/mui-core/lib/components/Actions/ActionGroup';

const useStyles = createStyles(theme => ({
  PainPoint: ({ padding }) => ({
    padding: padding ? theme.spacing(padding) : '',
  }),
}));

type Props = {
  intro: IntroProps;
  children?: ReactNode;
  actions?: ActionGroupProps['actions'];
  padding?: number;
  center?: boolean;
};

export default function PainPoint({ intro, children, actions, center, padding }: Props) {
  const classes = useStyles({ padding });
  return (
    <div className={classes.PainPoint}>
      <Intro center={center} {...intro}>
        {children}
        {actions && <Spacer val={1} />}
        {actions && <ActionGroup center={center} actions={actions} />}
      </Intro>
    </div>
  );
}
