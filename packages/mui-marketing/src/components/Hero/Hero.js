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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Highlight_1 = __importDefault(require("../Highlight/Highlight"));
var PainPoint_1 = __importDefault(require("../PainPoint/PainPoint"));
var mui_core_1 = require("@crensoft/mui-core");
var useStyles = mui_core_1.createStyles(function (theme) { return ({
    HighlightContent: {
        minHeight: "calc(66vh + " + theme.topbar.height() + "px)",
        alignItems: 'center',
    },
}); });
function Hero(_a) {
    var whitespace = _a.whitespace, centerItems = _a.centerItems, center = _a.center, props = __rest(_a, ["whitespace", "centerItems", "center"]);
    var classes = useStyles();
    return (react_1.default.createElement(Highlight_1.default, { custom: classes, whitespace: whitespace, centerItems: centerItems },
        react_1.default.createElement(PainPoint_1.default, __assign({ h1: true, center: center }, props))));
}
exports.default = Hero;
//# sourceMappingURL=Hero.js.map