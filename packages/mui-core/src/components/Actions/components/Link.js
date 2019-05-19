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
var Link_1 = __importDefault(require("@material-ui/core/Link"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var createStyles_1 = __importDefault(require("../../Theme/createStyles"));
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faLongArrowAltRight);
var useStyles = createStyles_1.default(function (theme) { return ({
    LinkGuide: {
        marginLeft: theme.spacing(0.6),
        'a:hover &': {
            marginLeft: theme.spacing(0.75),
        },
    },
}); });
function Link(_a) {
    var component = _a.component, children = _a.children, content = _a.content, to = _a.to, guide = _a.guide, other = __rest(_a, ["component", "children", "content", "to", "guide"]);
    var classes = useStyles();
    var renderIcon = function () {
        if (!guide)
            return null;
        // xxx: can also use ">" as arrow
        return react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { className: classes.LinkGuide, icon: "long-arrow-alt-right" });
    };
    var Component = component || Link_1.default;
    return (react_1.default.createElement(Component, __assign({}, other, { href: to, title: content }),
        content,
        children,
        renderIcon()));
}
exports.default = Link;
//# sourceMappingURL=Link.js.map