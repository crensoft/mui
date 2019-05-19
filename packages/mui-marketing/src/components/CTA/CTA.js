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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MarketSection_1 = __importDefault(require("../MarketSection/MarketSection"));
var PainPoint_1 = __importDefault(require("../PainPoint/PainPoint"));
function CTA(_a) {
    var whitespace = _a.whitespace, center = _a.center, actions = _a.actions, props = __rest(_a, ["whitespace", "center", "actions"]);
    if (!actions || !actions.length) {
        throw new Error('Action required for CTA');
    }
    return (react_1.default.createElement(MarketSection_1.default, { whitespace: whitespace },
        react_1.default.createElement(PainPoint_1.default, __assign({ center: center }, props, { actions: actions }))));
}
exports.default = CTA;
//# sourceMappingURL=CTA.js.map