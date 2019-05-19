import { Theme } from '@material-ui/core';
declare const muiTheme: {
    topbar: {
        sizes: {
            sm: number;
            md: number;
            lg: number;
        };
        height(size?: "sm" | "md" | "lg" | undefined): number;
    };
    palette: {
        tonalOffset: number;
        contrastThreshold: number;
        neutral: {
            light: string;
            main: string;
            dark: string;
        };
        getColor(this: any, name: "error" | "text" | "black" | "grey" | "white" | "background" | "action" | "divider" | "primary" | "secondary" | "type" | "common" | "contrastThreshold" | "tonalOffset" | "getContrastText" | "augmentColor" | "neutral", paletteType?: "main" | "dark" | "light" | undefined): any;
    };
    typography: {
        h1: {
            fontSize: string;
            lineHeight: number;
            fontWeight: number;
        };
        h2: {
            fontSize: string;
            lineHeight: number;
            fontWeight: number;
        };
        h3: {
            fontSize: string;
            lineHeight: number;
            fontWeight: number;
        };
        h4: {
            fontSize: string;
            lineHeight: number;
            fontWeight: number;
        };
        h5: {
            fontSize: string;
            lineHeight: number;
            fontWeight: number;
        };
        subtitle1: {
            lineHeight: number;
        };
    };
    breakpoints: {
        values: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
    };
    overrides: {
        MuiButton: {
            text: {};
        };
    };
    props: {
        MuiButtonBase: {
            disableRipple: boolean;
        };
    };
};
export declare type AppTheme = Theme & typeof muiTheme;
declare const _default: (opts?: any) => AppTheme;
export default _default;
