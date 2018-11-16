import { browser, element, by, protractor, $$, $ } from 'protractor';
import { HomePage } from "./pages/HomePage";

describe("Going to write first test", () => {
    //Globally
    var homePage = new HomePage();

    it("should pass without any issue", () => {

        //Open browser
        homePage.OpenBrowser("http://localhost:8808/");

        //Get the headings
        homePage.GetAllHeadings();

        //Click the first heading
        homePage.ClickFirstHeading();
    });

    it("should not pass as the values are undefined", () => {
        let u = 1;
        expect(u).toBeDefined("Not definied");
    })

    it("Without any expectation", () => {

    })



});




