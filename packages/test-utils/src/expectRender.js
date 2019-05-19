"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_testing_library_1 = require("react-testing-library");
function expectRender(ele) {
    var container = react_testing_library_1.render(ele).container;
    expect(container.firstChild).not.toBeNull();
}
exports.default = expectRender;
//# sourceMappingURL=expectRender.js.map