"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/styles");
var muiTheme_1 = __importDefault(require("./muiTheme"));
var core_1 = require("@material-ui/core");
exports.theme = muiTheme_1.default({});
function Theme(_a) {
    var children = _a.children;
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: exports.theme },
        react_1.default.createElement(core_1.CssBaseline, null),
        children));
}
exports.default = Theme;
//# sourceMappingURL=Theme.js.map