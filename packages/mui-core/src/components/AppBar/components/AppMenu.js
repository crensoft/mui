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
var mui_utils_1 = require("@crensoft/mui-utils");
var useAppBarContext_1 = __importDefault(require("../useAppBarContext"));
var AppMenuItem_1 = __importDefault(require("./AppMenuItem"));
var useStyles = core_1.makeStyles(function (theme) { return ({
    menu: {
        display: 'flex',
        height: '100%',
        padding: theme.spacing(1) + "px 0",
    },
}); });
function AppMenu(_a) {
    var menu = _a.menu;
    var appBarCtx = useAppBarContext_1.default();
    var classes = useStyles();
    var renderMenu = mui_utils_1.renderMap(function (menuItem) { return (react_1.default.createElement(AppMenuItem_1.default, __assign({ key: menuItem.title }, menuItem, { ctxColor: appBarCtx.bgColor }))); });
    return react_1.default.createElement("div", { className: classes.appmenu }, renderMenu(menu));
}
exports.default = AppMenu;
//# sourceMappingURL=AppMenu.js.map