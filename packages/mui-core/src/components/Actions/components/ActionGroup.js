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
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var mui_utils_1 = require("@crensoft/mui-utils");
var ramda_1 = require("ramda");
var Layout_1 = require("../../Layout");
var ActionLink_1 = __importDefault(require("./ActionLink"));
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faLongArrowAltRight);
function ActionGroup(_a) {
    var children = _a.children, actions = _a.actions, center = _a.center;
    if (!actions) {
        throw new Error('Actions required');
    }
    var renderActions = mui_utils_1.renderMap(function (_a) {
        var url = _a.url, _b = _a.tags, tags = _b === void 0 ? [] : _b, action = __rest(_a, ["url", "tags"]);
        var opts = {};
        if (ramda_1.contains('guide', tags)) {
            opts.guide = true;
        }
        return react_1.default.createElement(ActionLink_1.default, __assign({ key: url, to: url }, action, opts));
    });
    return react_1.default.createElement(Layout_1.Row, { justify: center ? 'center' : 'flex-start' }, renderActions(actions));
}
exports.default = ActionGroup;
//# sourceMappingURL=ActionGroup.js.map