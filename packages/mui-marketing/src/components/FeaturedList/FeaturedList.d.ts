import { ReactNode } from 'react';
import { PainPointProps } from '../PainPoint/PainPoint';
import { IntroProps } from '../Intro/Intro';
interface FeaturedItem extends PainPointProps {
}
declare type Props = {
    children?: ReactNode;
    flip?: boolean;
    features: FeaturedItem[];
    large?: boolean;
    intro?: IntroProps;
    cards?: boolean;
    fullWidth?: boolean;
    center?: boolean;
};
export default function FeaturedList({ fullWidth, center, cards, intro, large, features }: Props): JSX.Element;
export {};
