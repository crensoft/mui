"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_testing_library_1 = require("react-testing-library");
/**
 * Render ReactElement and tests that it throws error
 */
function expectRenderThrow(ele, err) {
    if (err === void 0) { err = /.*/; }
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(function () { });
    expect(function () {
        react_testing_library_1.render(ele);
    }).toThrow(err);
    // @ts-ignore
    console.error.mockRestore();
}
exports.default = expectRenderThrow;
//# sourceMappingURL=expectRenderThrow.js.map