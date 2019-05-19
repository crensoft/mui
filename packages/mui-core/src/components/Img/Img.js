"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    image: function (_a) {
        var responsive = _a.responsive;
        if (responsive) {
            return { maxWidth: '100%', height: 'auto' };
        }
        return {};
    },
}); }, {
    name: 'mui',
});
function Image(_a) {
    var src = _a.src, alt = _a.alt, responsive = _a.responsive;
    if (!alt) {
        throw new Error('Alt text required');
    }
    var classes = useStyles({ responsive: responsive });
    return react_1.default.createElement("img", { className: classes.image, src: src, alt: alt });
}
exports.default = Image;
//# sourceMappingURL=Img.js.map