"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var createStyles_1 = __importDefault(require("../Theme/createStyles"));
var useStyles = createStyles_1.default(function (theme) { return ({
    root: function (props) {
        if (!props.center) {
            return {
                padding: 0,
                margin: 0,
            };
        }
        return {};
    },
}); }, {
    name: 'CsContainer',
});
/**
 * Container with max width
 */
function Container(_a) {
    var children = _a.children, _b = _a.maxWidth, maxWidth = _b === void 0 ? 'lg' : _b, _c = _a.center, center = _c === void 0 ? false : _c, _d = _a.fluid, fluid = _d === void 0 ? false : _d;
    var classes = useStyles({ fluid: fluid, center: center });
    return (react_1.default.createElement(core_1.Container, { maxWidth: maxWidth, className: classes.root }, children));
}
exports.default = Container;
//# sourceMappingURL=Container.js.map