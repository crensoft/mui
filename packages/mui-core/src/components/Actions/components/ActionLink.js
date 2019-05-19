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
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var Link_1 = __importDefault(require("./Link"));
// todo: add validateProps
function ActionLink(_a) {
    var to = _a.to, prominent = _a.prominent, secondary = _a.secondary, primary = _a.primary, large = _a.large, props = __rest(_a, ["to", "prominent", "secondary", "primary", "large"]);
    var Component = core_1.Button;
    var opts = {};
    if (prominent) {
        opts.variant = 'contained';
    }
    else {
        Component = core_2.Link;
    }
    if (primary) {
        opts.color = 'primary';
    }
    else if (secondary) {
        opts.color = 'secondary';
    }
    if (large) {
        opts.size = 'large';
    }
    return react_1.default.createElement(Link_1.default, __assign({ to: to, component: Component }, opts, props));
}
exports.default = ActionLink;
//# sourceMappingURL=ActionLink.js.map