/// <reference types="react" />
import { LinkProps } from './Link';
export interface ActionLinkProps extends LinkProps {
    prominent?: boolean;
    secondary?: boolean;
    primary?: boolean;
    large?: boolean;
}
export default function ActionLink({ to, prominent, secondary, primary, large, ...props }: ActionLinkProps): JSX.Element;
