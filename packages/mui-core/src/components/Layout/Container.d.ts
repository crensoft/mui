import { ReactNode } from 'react';
import { ContainerProps as BaseContainerProps } from '@material-ui/core/Container';
export interface ContainerProps extends Pick<BaseContainerProps, 'maxWidth'> {
    children?: ReactNode;
    fluid?: boolean;
    center?: boolean;
}
/**
 * Container with max width
 */
export default function Container({ children, maxWidth, center, fluid, }: ContainerProps): JSX.Element;
