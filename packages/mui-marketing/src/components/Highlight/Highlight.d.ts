import { ReactNode } from 'react';
import { MarketSectionProps } from '../MarketSection/MarketSection';
export declare type HighlightProps = {
    children?: ReactNode;
    illustration?: any;
    centerItems?: boolean;
    flip?: boolean;
    custom?: any;
} & MarketSectionProps;
export default function Highlight({ children, centerItems, flip, custom }: HighlightProps): JSX.Element;
