"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var mui_core_1 = require("@crensoft/mui-core");
var useStyles = mui_core_1.createStyles({
    Fixer: {
        fontSize: '5rem',
    },
});
function Fixer(_a) {
    var classes = useStyles();
    // 1
    return (react_1.default.createElement(mui_core_1.Container, null,
        react_1.default.createElement("div", { className: classes.Fixer }, "test")));
}
exports.default = Fixer;
//# sourceMappingURL=Fixer.js.map