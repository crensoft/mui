import { ReactNode } from 'react';
import { IntroProps } from '../Intro/Intro';
import { ContainerProps } from '@crensoft/mui-core/src/components/Layout/Container';
export interface MarketSectionProps extends ContainerProps {
    children?: ReactNode;
    className?: string;
    intro?: IntroProps;
    /** adds padding */
    whitespace?: boolean;
    bgColor?: string;
}
export default function MarketSection({ children, bgColor, intro, whitespace, maxWidth, }: MarketSectionProps): JSX.Element;
