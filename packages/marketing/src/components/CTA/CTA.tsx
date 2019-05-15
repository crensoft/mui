import React from 'react';
import { Action } from '@crensoft/mui-core/lib/components/Actions/ActionGroup';
import MarketSection, { MarketSectionProps } from '../MarketSection/MarketSection';
import PainPoint from '../PainPoint/PainPoint';
import { IntroProps } from '../Intro/Intro';

interface CTAProps extends IntroProps, Partial<MarketSectionProps> {
  actions: Action[];
}

export default function CTA({ whitespace, center, actions, ...props }: CTAProps) {
  if (!actions || !actions.length) {
    throw new Error('Action required for CTA');
  }
  return (
    <MarketSection whitespace={whitespace}>
      <PainPoint center={center} intro={props} actions={actions} />
    </MarketSection>
  );
}
