"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var createStyles_1 = __importDefault(require("../Theme/createStyles"));
var useStyles = createStyles_1.default(function (theme) { return ({
    Spacer: function (_a) {
        var val = _a.val;
        return ({
            margin: theme.spacing(val) + "px",
        });
    },
}); });
/**
 * Spacer
 */
function Spacer(_a) {
    var _b = _a.val, val = _b === void 0 ? 1 : _b;
    var classes = useStyles({ val: val });
    return react_1.default.createElement("div", { className: classes.Spacer });
}
exports.default = Spacer;
//# sourceMappingURL=Spacer.js.map