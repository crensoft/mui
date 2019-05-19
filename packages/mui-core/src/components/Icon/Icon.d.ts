import React from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
declare type Props = {
    img?: string;
    label: string;
    icon?: IconProp;
    bg?: string;
    stack?: React.ReactNode[];
    size?: SizeProp;
    mask?: any;
    transform?: string;
    color?: string;
    fixedWidth?: boolean;
};
declare const Icon: React.FunctionComponent<Props>;
export default Icon;
