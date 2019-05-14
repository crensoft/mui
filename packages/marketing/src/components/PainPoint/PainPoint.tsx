import React, { ReactNode } from 'react';
import { createStyles, ActionGroup, Spacer } from '@crensoft/mui-core';
import Intro, { IntroProps } from '../Intro/Intro';
import { ActionGroupProps } from '@crensoft/mui-core/lib/components/Actions/ActionGroup';

const useStyles = createStyles(theme => ({
  PainPoint: () => ({
    textAlign: 'left',
  }),
}));

type Props = {
  intro: IntroProps;
  children?: ReactNode;
  actions?: ActionGroupProps['actions'];
};

export default function PainPoint({ intro, children, actions }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.PainPoint}>
      <Intro {...intro} />
      {children}
      {actions && <Spacer val={1} />}
      {actions && <ActionGroup actions={actions} />}
    </div>
  );
}
