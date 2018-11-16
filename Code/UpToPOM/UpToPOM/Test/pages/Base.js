"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Base = (function () {
    function Base() {
    }
    Base.prototype.ElementLocator = function (obj) {
        switch (obj.type) {
            case "xpath":
                return protractor_1.by.xpath(obj.value);
            case "className":
                return protractor_1.by.className(obj.value);
            case "id":
                return protractor_1.by.id(obj.value);
            case "js":
                return protractor_1.by.js(obj.value);
            case "linkText":
                return protractor_1.by.className(obj.value);
            case "name":
                return protractor_1.by.name(obj.value);
            case "partialLinkText":
                return protractor_1.by.partialLinkText(obj.value);
            case "className":
                return protractor_1.by.className(obj.value);
            case "css":
                return protractor_1.by.css(obj.value);
            default:
                break;
        }
    };
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=Base.js.map