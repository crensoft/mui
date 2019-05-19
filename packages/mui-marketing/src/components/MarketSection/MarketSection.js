"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var mui_core_1 = require("@crensoft/mui-core");
var Intro_1 = __importDefault(require("../Intro/Intro"));
var useStyles = mui_core_1.createStyles(function (theme) { return ({
    MarketSection: function (_a) {
        var _b = _a.spacing, spacing = _b === void 0 ? 5 : _b, bgColor = _a.bgColor, bgImage = _a.bgImage;
        var styles = {
            padding: theme.spacing(spacing) + "px",
        };
        if (bgColor) {
            styles.backgroundColor = theme.palette.getColor(bgColor);
        }
        return styles;
    },
}); });
function MarketSection(_a) {
    var children = _a.children, bgColor = _a.bgColor, intro = _a.intro, whitespace = _a.whitespace, maxWidth = _a.maxWidth;
    var content = children;
    var spacing = whitespace ? 5 : 0;
    var classes = useStyles({ spacing: spacing, bgColor: bgColor });
    if (intro) {
        content = (react_1.default.createElement(Intro_1.default, __assign({ main: true }, intro), content));
    }
    return (react_1.default.createElement("section", { className: classes.MarketSection },
        react_1.default.createElement(mui_core_1.Container, { maxWidth: maxWidth, center: true }, content)));
}
exports.default = MarketSection;
//# sourceMappingURL=MarketSection.js.map