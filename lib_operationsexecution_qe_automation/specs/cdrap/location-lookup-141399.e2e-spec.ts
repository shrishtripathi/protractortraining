import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";

import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";
import { browser } from "protractor";
import { LocationLookUpPage } from "../../pages/cdrap/location-lookup.po";

let cdrapHomePage = new CdrapHomePage();
let locationLookUpPage=new LocationLookUpPage();
let using = require('jasmine-data-provider');

//TC #141399: CDRAP Location lookup
using(DataProvider.Tc_141399, async function (data) {

    describe("Location lookup", () => {

        //TC #157971
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
        it("Click the Location Lookup hyperlink.", async () => {
            await cdrapHomePage.click(cdrapHomePage.locationLookUpLink);
        });
        it("Click the dropdown tab next to Location Type, click to select Hiring Center", async () => {
            await locationLookUpPage.selectLocationType(data.locationType);
        });
        it("Click the dropdown tab next to Hiring Center, click to select FMS - Chicago.", async () => {
            await locationLookUpPage.selectHiringCenterType(data.hiringType)
        });
        it("Verifying that Hiring Center details populate.", async () => {
            await expect(await locationLookUpPage.verifyDetails(data.hiringType)).toBeTruthy();
        });
        it("Click the dropdown tab next to Location Type, click to select Hotel.", async () => {
            await locationLookUpPage.selectLocationType(data.locationType2)
        });
        it("Click the dropdown tab next to Hotel, click to select FMS - Candlewood Suites - Spanaway, WA. ", async () => {
            await locationLookUpPage.selectHiringCenterType(data.hotel);
        });
        it("Verifying that Hotel details populate.", async () => {
            await expect(await locationLookUpPage.verifyDetails(data.hotel)).toBeTruthy();
        });
        


    });

});