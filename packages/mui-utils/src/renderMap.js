"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Renders items using provided map function
 */
function renderMap(fn) {
    if (!fn) {
        throw new Error('map func required');
    }
    return function (items) {
        if (!items)
            return;
        return items.map(fn);
    };
}
exports.default = renderMap;
//# sourceMappingURL=renderMap.js.map