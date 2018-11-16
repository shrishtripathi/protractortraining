"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Going to write first test", function () {
    it("should pass without any issue", function () {
        protractor_1.browser.get("http://www.executeautomation.com");
        var a = 12;
        expect(a).toBe(12);
    });
    it("should not pass as the values are undefined", function () {
        var u = 1;
        expect(u).toBeDefined("Not definied");
    });
    it("Without any expectation", function () {
    });
});
//# sourceMappingURL=FirstTestSpec.js.map