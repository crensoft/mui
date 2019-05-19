import { ReactNode } from 'react';
export declare type IntroProps = {
    title?: ReactNode;
    label?: ReactNode;
    /** Body text */
    body?: ReactNode;
    caption?: ReactNode;
    children?: ReactNode;
    /** Use h2 tag for title instead of h3. Default: false */
    main?: boolean;
    /** Centers content. Default: false */
    center?: boolean;
    /** Display title above label. Default: false */
    invertLabel?: boolean;
    icon?: any;
    iconSize?: string;
    iconColor?: string;
    iconBgColor?: string;
    circleIcon?: boolean;
    titleColor?: string;
    divider?: 'header' | 'footer';
    dividerColor?: string;
    /** display icon on same line as content */
    inline?: boolean;
    h1?: boolean;
};
export default function Intro({ title, body, label, invertLabel, caption, icon, circleIcon, iconSize, iconColor, iconBgColor, titleColor, main, center, divider, dividerColor, children, inline, h1, }: IntroProps): JSX.Element;
