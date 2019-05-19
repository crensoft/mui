"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var createStyles_1 = __importDefault(require("../Theme/createStyles"));
var styles_1 = require("@material-ui/styles");
// import createStyles from '../Theme/createStyles';
// const useStyles = createStyles<Partial<Props>>(theme => ({
//   IconBg: ({ bg }) => {
//     if (bg) {
//       // @ used to denote a variable, and not color literal. hack;
//       const bgColor = /@/.test(bg) ? theme.palette.getColor(bg.replace('@', '') as any) : bg;
//       return {
//         backgroundColor: bgColor as string,
//       };
//     }
//     return {};
//   },
// }));
var useStyles = createStyles_1.default({
    FaStackIcon: {
        height: '2em',
    },
});
var Icon = function (_a) {
    var img = _a.img, mask = _a.mask, icon = _a.icon, _b = _a.size, size = _b === void 0 ? '4x' : _b, bg = _a.bg, transform = _a.transform, label = _a.label, stack = _a.stack, color = _a.color, fixedWidth = _a.fixedWidth;
    var classes = useStyles({ size: size });
    var theme = styles_1.useTheme();
    if (!label) {
        throw new Error('Label required for icon');
    }
    // const classes = useStyles({ bg });
    if (stack) {
        return (react_1.default.createElement("span", { className: "fa-stack fa-" + size + " " + classes.FaStackIcon }, stack.map(function (item) { return item; })));
    }
    if (icon) {
        return (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: theme.palette.getColor(color, 'dark'), transform: transform, mask: mask, icon: icon, size: size, fixedWidth: fixedWidth, "aria-hidden": true }));
    }
    throw new Error('icon not set');
};
exports.default = Icon;
//# sourceMappingURL=Icon.js.map