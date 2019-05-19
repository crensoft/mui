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
var mui_core_1 = require("@crensoft/mui-core");
var Intro_1 = __importDefault(require("../Intro/Intro"));
var useStyles = mui_core_1.createStyles(function (theme) { return ({
    PainPoint: function (_a) {
        var padding = _a.padding;
        return ({
            padding: padding ? theme.spacing(padding) : '',
        });
    },
}); });
function PainPoint(_a) {
    var children = _a.children, actions = _a.actions, center = _a.center, padding = _a.padding, intro = __rest(_a, ["children", "actions", "center", "padding"]);
    var classes = useStyles({ padding: padding });
    var spacing = intro.h1 ? 2 : 1;
    return (react_1.default.createElement("div", { className: classes.PainPoint },
        react_1.default.createElement(Intro_1.default, __assign({ center: center }, intro),
            children,
            actions && react_1.default.createElement(mui_core_1.Spacer, { val: spacing }),
            actions && react_1.default.createElement(mui_core_1.ActionGroup, { center: center, actions: actions }))));
}
exports.default = PainPoint;
//# sourceMappingURL=PainPoint.js.map