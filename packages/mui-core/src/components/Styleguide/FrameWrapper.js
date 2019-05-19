"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var Theme_1 = __importDefault(require("../Theme/Theme"));
var useStyles = core_1.makeStyles((_a = {},
    _a['frame-wrapper'] = {
        transform: 'translate3d(0,0,0)',
    },
    _a));
/**
 * Fixes 'fixed' positioned elements
 */
function FrameWrapper(_a) {
    var children = _a.children, style = _a.style;
    var classes = useStyles();
    var _b = react_1.useState(false), enableFullscreen = _b[0], setState = _b[1];
    // @ts-ignore
    window.__FRAME_WRAPPER__ = {
        setState: setState,
    };
    return (react_1.default.createElement("div", { style: style, className: enableFullscreen ? '' : classes['frame-wrapper'] },
        react_1.default.createElement(Theme_1.default, null, children)));
}
exports.default = FrameWrapper;
//# sourceMappingURL=FrameWrapper.js.map