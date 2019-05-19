"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function nl2br(str) {
    return str.split('\n').map(function (item) { return (react_1.default.createElement("span", { key: item },
        item,
        react_1.default.createElement("br", null))); });
}
exports.default = nl2br;
//# sourceMappingURL=nl2br.js.map