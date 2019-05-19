import { ReactNode, CSSProperties } from 'react';
/**
 * Fixes 'fixed' positioned elements
 */
export default function FrameWrapper({ children, style, }: {
    children: ReactNode;
    style?: CSSProperties;
}): JSX.Element;
