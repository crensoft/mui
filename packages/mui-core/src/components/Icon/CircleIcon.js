"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("./Icon"));
var createStyles_1 = __importDefault(require("../Theme/createStyles"));
var styles_1 = require("@material-ui/core/styles");
var styles_2 = require("@material-ui/styles");
var useStyles = createStyles_1.default(function (theme) { return ({
    CircleIcon: function (_a) {
        var color = _a.color, _b = _a.bgColor, bgColor = _b === void 0 ? 'neutral' : _b, _c = _a.paletteType, paletteType = _c === void 0 ? 'light' : _c;
        return ({
            display: 'inline-block',
            background: bgColor,
            padding: theme.spacing(2),
            width: 'auto',
            height: 'auto',
            borderRadius: '50%',
        });
    },
}); });
var CircleIcon = function (_a) {
    var label = _a.label, icon = _a.icon, _b = _a.size, size = _b === void 0 ? '1x' : _b, _c = _a.color, color = _c === void 0 ? 'neutral' : _c, bgColor = _a.bgColor;
    var theme = styles_2.useTheme();
    var calcBgColor = bgColor
        ? theme.palette.getColor(bgColor)
        : styles_1.fade(theme.palette.getColor(color), 0.12);
    var classes = useStyles({
        bgColor: calcBgColor,
    });
    return (react_1.default.createElement("div", { className: classes.CircleIcon },
        react_1.default.createElement(Icon_1.default, { label: label, icon: icon, size: size, color: color, fixedWidth: true })));
};
exports.default = CircleIcon;
//# sourceMappingURL=CircleIcon.js.map