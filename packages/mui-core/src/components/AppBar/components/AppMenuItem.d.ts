/// <reference types="react" />
import { ButtonProps } from '@material-ui/core/Button';
declare type AppMenuItemProps = {
    title: string;
    btn?: ButtonProps;
    ctxColor: string;
};
export default function AppMenuItem({ title, ctxColor, btn }: AppMenuItemProps): JSX.Element;
export {};
