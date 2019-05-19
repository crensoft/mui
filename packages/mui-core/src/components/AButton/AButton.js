"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function AButton(_a) {
    var name = _a.name, onClick = _a.onClick;
    return react_1.default.createElement("button", { onClick: onClick },
        "Click me: ",
        name);
}
exports.default = AButton;
//# sourceMappingURL=AButton.js.map