import { ReactNode } from 'react';
import { IntroProps } from '../Intro/Intro';
import { ActionGroupProps } from '@crensoft/mui-core/lib/components/Actions/components/ActionGroup';
export interface PainPointProps extends IntroProps {
    children?: ReactNode;
    actions?: ActionGroupProps['actions'];
    padding?: number;
    center?: boolean;
    h1?: boolean;
}
export default function PainPoint({ children, actions, center, padding, ...intro }: PainPointProps): JSX.Element;
