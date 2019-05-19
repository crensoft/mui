import React from 'react';
export declare type LinkProps = {
    to?: string;
    guide?: boolean;
    children?: React.ReactNode;
    content?: React.ReactNode;
    component?: React.ReactElement;
};
export default function Link({ component, children, content, to, guide, ...other }: LinkProps): JSX.Element;
