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
var react_1 = __importStar(require("react"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var ramda_1 = require("ramda");
var useScrollEffect_1 = __importDefault(require("./useScrollEffect"));
var Container_1 = __importDefault(require("../Layout/Container"));
var createStyles_1 = __importDefault(require("../Theme/createStyles"));
var useStyles = createStyles_1.default(function (theme) { return ({
    root: {
        flexGrow: 1,
    },
    colorDefault: function (_a) {
        var _b = _a.color, color = _b === void 0 ? 'neutral' : _b, paletteType = _a.paletteType;
        return ({
            backgroundColor: Boolean(console.log(theme)) || theme.palette.getColor(color, paletteType),
        });
    },
    toolbar: function (_a) {
        var size = _a.size;
        return ({
            justifyContent: 'space-between',
            height: theme.topbar.height(size),
        });
    },
    HeaderFill: function (_a) {
        var size = _a.size;
        return ({
            height: theme.topbar.height(size),
        });
    },
}); });
exports.AppBarContext = react_1.createContext({
    bgColor: '',
});
function AppBar(_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'white' : _b, paletteType = _a.paletteType, _c = _a.elevation, elevation = _c === void 0 ? 0 : _c, _d = _a.fluid, fluid = _d === void 0 ? false : _d, large = _a.large, scrollTarget = _a.scrollTarget;
    var scrollTrigger = useScrollEffect_1.default({ scrollTarget: scrollTarget });
    var calcElevation = scrollTrigger ? 2 : elevation;
    var theme = styles_1.useTheme();
    var size = large ? 'lg' : 'md';
    var classes = useStyles({ fluid: fluid, size: size, color: color, paletteType: paletteType });
    return (react_1.default.createElement(exports.AppBarContext.Provider, { value: { bgColor: theme.palette && theme.palette.getColor(color, paletteType) } },
        react_1.default.createElement("header", null,
            react_1.default.createElement("div", { className: classes.HeaderFill }),
            react_1.default.createElement(core_1.AppBar, { component: "nav", color: "default", elevation: calcElevation, classes: ramda_1.pick(['root', 'colorDefault'], classes) },
                react_1.default.createElement(Container_1.default, { fluid: fluid, center: true },
                    react_1.default.createElement(Toolbar_1.default, { disableGutters: true, className: classes.toolbar }, children))))));
}
exports.default = AppBar;
//# sourceMappingURL=AppBar.js.map