import React from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
declare type Props = {
    label: string;
    icon: IconProp;
    size: SizeProp;
    color?: string;
    bgColor?: string;
};
declare const CircleIcon: React.FunctionComponent<Props>;
export default CircleIcon;
