"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useScrollTrigger_1 = __importDefault(require("@material-ui/core/useScrollTrigger"));
/**
 * Defaults to window object
 * Optionally can pass another node using id without '#'
 * @param param0
 */
function useScrollEffect(_a) {
    var scrollTarget = _a.scrollTarget;
    var _b = react_1.useState(window), scrollElement = _b[0], setScrollTarget = _b[1];
    var trigger = useScrollTrigger_1.default({
        disableHysteresis: true,
        threshold: 0,
        target: scrollElement,
    });
    react_1.useEffect(function () {
        if (scrollTarget) {
            var newScrollTarget = document.getElementById(scrollTarget);
            if (newScrollTarget) {
                setScrollTarget(newScrollTarget);
            }
        }
    }, []);
    return trigger;
}
exports.default = useScrollEffect;
//# sourceMappingURL=useScrollEffect.js.map