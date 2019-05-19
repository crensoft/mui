"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var Img_1 = __importDefault(require("../../Img/Img"));
var useStyles = core_1.makeStyles(function (theme) {
    var _a;
    return (_a = {},
        _a['appbar-logo'] = {
            maxWidth: 150,
            height: '100%',
            display: 'flex',
            flexGrow: 1,
        },
        _a);
});
function AppBarLogo(_a) {
    var img = _a.img;
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: classes['appbar-logo'] }, img && react_1.default.createElement(Img_1.default, { src: img, alt: "Home", responsive: true })));
}
exports.default = AppBarLogo;
//# sourceMappingURL=AppBarLogo.js.map