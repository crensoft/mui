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
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) {
    var _a;
    return (_a = {},
        _a['appmenu-item'] = function (_a) {
            var ctxColor = _a.ctxColor;
            return ({
                justifyContent: 'center',
                width: 'auto',
                margin: "0 " + theme.spacing(1) + "px",
                boxShadow: 'none',
                '&:not(.MuiButton-contained)': {
                    color: theme.palette.getContrastText(ctxColor),
                },
            });
        },
        _a);
});
function AppMenuItem(_a) {
    var title = _a.title, ctxColor = _a.ctxColor, _b = _a.btn, btn = _b === void 0 ? {} : _b;
    var classes = useStyles({ ctxColor: ctxColor });
    return (react_1.default.createElement(core_1.Button, __assign({ className: classes['appmenu-item'], key: title }, btn), title));
}
exports.default = AppMenuItem;
//# sourceMappingURL=AppMenuItem.js.map