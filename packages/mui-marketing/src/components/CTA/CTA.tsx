import React from 'react';
import MarketSection, { MarketSectionProps } from '../MarketSection/MarketSection';
import PainPoint, { PainPointProps } from '../PainPoint/PainPoint';

interface CTAProps extends PainPointProps, Partial<MarketSectionProps> {}

export default function CTA({ whitespace, center, actions, id, ...props }: CTAProps) {
  if (!actions || !actions.length) {
    throw new Error('Action required for CTA');
  }
  return (
    <MarketSection id={id} whitespace={whitespace}>
      <PainPoint center={center} {...props} actions={actions} />
    </MarketSection>
  );
}
