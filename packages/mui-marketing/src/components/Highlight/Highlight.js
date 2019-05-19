"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var mui_core_1 = require("@crensoft/mui-core");
var MarketSection_1 = __importDefault(require("../MarketSection/MarketSection"));
var useStyles = mui_core_1.createStyles(function (theme) { return ({
    Highlight: function () { return ({
        textAlign: 'left',
    }); },
    HighlightMain: function (_a) {
        var centerItems = _a.centerItems;
        var styles = {};
        if (centerItems) {
            styles.display = 'flex';
            styles.alignItems = 'center';
        }
        return styles;
    },
}); });
function Highlight(_a) {
    var children = _a.children, centerItems = _a.centerItems, flip = _a.flip, _b = _a.custom, custom = _b === void 0 ? {} : _b;
    var classes = useStyles({ centerItems: centerItems });
    var contentItems = [
        react_1.default.createElement(mui_core_1.Col, { className: classes.HighlightMain, key: "main", xs: 12, sm: 6 }, children),
    ];
    contentItems.push(react_1.default.createElement(mui_core_1.Col, { key: "visual", xs: 12, sm: 6 },
        react_1.default.createElement(mui_core_1.Img, { responsive: true, alt: "visuals", src: "/illustrations/undraw_wordpress.svg" })));
    if (flip) {
        contentItems.reverse();
    }
    return (react_1.default.createElement(MarketSection_1.default, { className: classes.Highlight },
        react_1.default.createElement(mui_core_1.Row, { className: "" + custom.HighlightContent }, contentItems)));
}
exports.default = Highlight;
//# sourceMappingURL=Highlight.js.map