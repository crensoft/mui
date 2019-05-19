"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
// @ts-ignore
var responsiveFontSizes_1 = __importDefault(require("@material-ui/core/styles/responsiveFontSizes"));
var colors_1 = require("@material-ui/core/colors");
var ramda_1 = require("ramda");
// import { dark } from '@material-ui/core/styles/createPalette';
var muiTheme = {
    topbar: {
        sizes: {
            sm: 48,
            md: 64,
            lg: 81,
        },
        height: function (size) {
            return size ? this.sizes[size] : this.sizes.md;
        },
    },
    palette: {
        tonalOffset: 0.5,
        contrastThreshold: 4.5,
        neutral: {
            light: colors_1.grey[300],
            main: colors_1.grey[500],
            dark: colors_1.grey[700],
        },
        getColor: function (name, paletteType) {
            if (this[name]) {
                return this[name][paletteType || this.type];
            }
            return this.common[name] || name;
        },
    },
    typography: {
        h1: {
            fontSize: '3.5rem',
            lineHeight: 1.3,
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            lineHeight: 1.3,
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.5rem',
            lineHeight: 1.3,
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.2rem',
            lineHeight: 1.3,
            fontWeight: 400,
        },
        h5: {
            fontSize: '1rem',
            lineHeight: 1.3,
            fontWeight: 400,
        },
        subtitle1: {
            lineHeight: 1.3,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1920,
        },
    },
    overrides: {
        MuiButton: {
            // Name of the component ⚛ / style sheet
            text: {
            // Name of the rule
            // color: 'white', // Some CSS
            },
        },
    },
    props: {
        // Name of the component ⚛️
        MuiButtonBase: {
            // The default props to change
            disableRipple: true,
        },
    },
};
exports.default = (function (opts) {
    return responsiveFontSizes_1.default(core_1.createMuiTheme(ramda_1.mergeDeepLeft(muiTheme, opts)));
});
//# sourceMappingURL=muiTheme.js.map