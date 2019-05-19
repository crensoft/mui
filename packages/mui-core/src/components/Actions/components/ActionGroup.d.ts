import React from 'react';
import { ActionLinkProps } from './ActionLink';
export declare type ActionGroupProps = {
    guide?: boolean;
    children?: React.ReactNode;
    actions?: ActionLinkProps[];
    center?: boolean;
};
export default function ActionGroup({ children, actions, center }: ActionGroupProps): JSX.Element;
