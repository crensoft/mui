import React, { ReactNode } from 'react';
import { AppTheme } from '../Theme/muiTheme';
declare type Props = {
    children?: ReactNode;
    elevation?: number;
    /** default: false */
    fluid?: boolean;
    position?: 'static' | 'fixed' | 'relative';
    /** default: 'md' */
    size?: keyof AppTheme['topbar']['sizes'];
    color?: 'primary' | 'secondary' | 'neutral' | 'black' | 'white';
    colorScale?: number;
    paletteType?: 'dark' | 'light' | 'main';
    large?: boolean;
    scrollTarget?: any;
};
export declare const AppBarContext: React.Context<{
    bgColor: string;
}>;
export default function AppBar({ children, color, paletteType, elevation, fluid, large, scrollTarget, }: Props): JSX.Element;
export {};
