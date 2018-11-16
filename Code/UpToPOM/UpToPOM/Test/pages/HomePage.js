"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//import the class
var protractor_1 = require("protractor");
var BasePage_1 = require("./BasePage");
var Locators = {
    heading: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//course-thumb/div/h2[text()=' Selenium Framework development ']"
    },
    headings: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".well.hoverwell.thumbnail>h2"
    }
};
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Selenium framework development course heading
        _this.heading = _this.ElementLocator(Locators.heading).element(protractor_1.by.xpath("//span[contains(text(),'4th')]"));
        //All heading                           
        _this.headings = _this.ElementLocator(Locators.headings);
        return _this;
    }
    //Open browser
    HomePage.prototype.OpenBrowser = function (url) {
        protractor_1.browser.get(url);
    };
    HomePage.prototype.GetAllHeadings = function () {
        this.headings.getText().then(function (text) {
            console.log("The heading is :" + text);
        });
    };
    HomePage.prototype.ClickFirstHeading = function () {
        this.heading.click();
    };
    return HomePage;
}(BasePage_1.BasePage));
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map