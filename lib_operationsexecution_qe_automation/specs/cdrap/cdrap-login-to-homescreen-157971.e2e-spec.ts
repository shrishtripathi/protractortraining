import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";

let cdrapHomePage = new CdrapHomePage();
let using = require('jasmine-data-provider');

//TC #157971: CDRAP Login to homescreen
using(DataProvider.Tc_157971, async function (data) {

    describe("CDRAP Login to homescreen", () => {

        it("Should open CDRAP url", async () => {
            await cdrapHomePage.openUrl(cdrapHomePage.cdrapUrl);
        });

        it("Verifying that CDRAP page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toBe(data.loginTitle);
        });

        it("Login into CDRAP application ", async () => {
            await cdrapHomePage.loginIntoCdrap(data.username, data.password, data.submit);
        });

        it("Verifying that CDRAP Logged in Home page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.cdrapHomeTitle);
        });

    });

});