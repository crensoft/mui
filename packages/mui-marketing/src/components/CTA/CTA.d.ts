/// <reference types="react" />
import { MarketSectionProps } from '../MarketSection/MarketSection';
import { PainPointProps } from '../PainPoint/PainPoint';
interface CTAProps extends PainPointProps, Partial<MarketSectionProps> {
}
export default function CTA({ whitespace, center, actions, ...props }: CTAProps): JSX.Element;
export {};
