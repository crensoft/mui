/// <reference types="react" />
import { HighlightProps } from '../Highlight/Highlight';
import { PainPointProps } from '../PainPoint/PainPoint';
interface HeroProps extends PainPointProps, HighlightProps {
    title: PainPointProps['title'];
}
export default function Hero({ whitespace, centerItems, center, ...props }: HeroProps): JSX.Element;
export {};
