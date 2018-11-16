import { DataProvider } from "../../data/dataProvider";
import { OrientationLocationSearch } from "../../pages/cdrap/orientation-location-search.po";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";

let cdrapHomePage = new CdrapHomePage();
let orientationLocationSearch = new OrientationLocationSearch();
let using = require('jasmine-data-provider');

//TC #139864: CDRAP_Regression_11 Orientation location search
using(DataProvider.Tc_139864, async function (data) {

    describe("Orientation location search", () => {

        it("Should open CDRAP url", async () => {
            await cdrapHomePage.navigateToCdrap();
        });

        it("Click on Orientation Location Search Hyperlink", async () => {
            await cdrapHomePage.clickOnElement(cdrapHomePage.orientationLocationSearch);
        });

        it("Should Select Hiring Center from Location Type Dropdown", async () => {
            await cdrapHomePage.waitForElementIsVisible(orientationLocationSearch.loactionTypeDropdown);
            await cdrapHomePage.clickOnElement(orientationLocationSearch.loactionTypeHiringCenter);

        });

        it("Should Select FMS-Chicago from Hiring Center Dropdown", async () => {
            await orientationLocationSearch.waitForElementIsVisible(orientationLocationSearch.hotelDropdown)
            await cdrapHomePage.clickOnElement(orientationLocationSearch.hotelDropdownChicago);
        });

        it("Verify that Hiring Center Details Table is Populated", async () => {
            await orientationLocationSearch.waitForElementIsVisible(orientationLocationSearch.hiringCenterDetailsTable);
            await expect(await orientationLocationSearch.hiringCenterDetailsTable.isPresent()).toBe(true);
        });

        it("Should Select Hotel from Location Type Dropdown", async () => {
            await cdrapHomePage.waitForElementIsVisible(orientationLocationSearch.loactionTypeDropdown);
            await cdrapHomePage.clickOnElement(orientationLocationSearch.locationTypeHotel);

        });

        it("Should Select FMS-Candlewood from Hiring Center Dropdown", async () => {
            await orientationLocationSearch.waitForElementIsVisible(orientationLocationSearch.hotelDropdown)
            await cdrapHomePage.clickOnElement(orientationLocationSearch.hotelDropdownCandlewood);
        });

        it("Verify that Hotel Details Table is Populated", async () => {
            await orientationLocationSearch.waitForElementIsVisible(orientationLocationSearch.hotelDetailsTable);
            await expect(await orientationLocationSearch.hotelDetailsTable.isPresent()).toBe(true);
        });

    });

});