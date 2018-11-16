"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomePage_1 = require("./pages/HomePage");
describe("Going to write first test", function () {
    //Globally
    var homePage = new HomePage_1.HomePage();
    it("should pass without any issue", function () {
        //Open browser
        homePage.OpenBrowser("http://localhost:8808/");
        //Get the headings
        homePage.GetAllHeadings();
        //Click the first heading
        homePage.ClickFirstHeading();
    });
    it("should not pass as the values are undefined", function () {
        var u = 1;
        expect(u).toBeDefined("Not definied");
    });
    it("Without any expectation", function () {
    });
});
//# sourceMappingURL=FirstTestSpec.js.map