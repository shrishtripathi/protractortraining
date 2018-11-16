import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { LocationAvailability } from "../../pages/cdrap/location-availability-page.po";
import { LocationStarts } from "../../pages/cdrap/location-starts-page.po";
import { async } from "q";

let cdrapHomePage = new CdrapHomePage();
let locationAvailability = new LocationAvailability();
let locationStarts = new LocationStarts()
let using = require('jasmine-data-provider');

describe("CDRAP_Regression_31 Location availability", () => {

    //PreTestCase 139492: CDRAP Login to homescreen
    using(DataProvider.Tc_157971, async function (data) {

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

    //145578
    using(DataProvider.Tc_145578, async function (data) {

        it('Click the Recruiting hyperlink.', async () => {
            await cdrapHomePage.clickonMenuLink(data.locationAvailability)
        });

        it('Click on Avaliablity Tab', async () => {
            await cdrapHomePage.clickOnTab(data.availability)
        });

        it(' Click the Search button.', async () => {
            await locationAvailability.clickOnButton(data.search)
        });

        it('Click a checkbox underneath Start Date.', async () => {
            await locationAvailability.click(locationAvailability.availablityCheckBox)
        });

        it('Click the Close Date(s) for Scheduling button', async () => {
            await locationAvailability.clickOnButton(data.closeDate)
        });

        it('Validate red icon next to the date ', async () => {
            expect(await locationAvailability.redIconNextToCheckbox.isPresent()).toBe(true)
        });

        it('Click the checkbox next to the same date you just closed.', async () => {
            await locationAvailability.click(locationAvailability.availablityCheckBoxWithReadIcon)
        });

        it('Click the Open Date(s) for Scheduling button.', async () => {
            await locationAvailability.clickOnButton(data.openDate)
        });

        it('Validate red icon next to the date ', async () => {
            expect(await locationAvailability.redIconNextToCheckbox.isPresent()).toBe(false)
        });

        it(' Click the Reset button.', async () => {
            await locationAvailability.clickOnButton(data.reset)
        });

        it('Validate Search list will disappear.', async () => {
            expect(await locationAvailability.searchResultTable.isPresent()).toBe(false)
        });

        it('Click the Location Starts tab.', async () => {
            await cdrapHomePage.clickOnTab(data.locationStarts)
        });

        it('Click the dropdown tab next to Location, click to select FMS - Chicago.', async () => {
            await locationStarts.selectOptionFromDropdown(data.locationNameDropDown, data.fmsChicago)
        });

        it('Click the dropdown tab next to Orientation starts at, and click to select a time.', async () => {
            await locationStarts.selectOptionFromDropdown(data.orientationStarts, data.orientationStartsTime)
        });

        it(' Click the Add Start button.', async () => {
            await locationStarts.clickOnButton(data.addStart)
        });

        it('Validate Start details appear.', async () => {
            expect(await locationStarts.locationStartTable.isPresent()).toBe(true)
        });

        it(' Click the Remove Start button.', async () => {
            await locationStarts.clickOnRemoveStart()
        });

        it('Validate Start details disappear.', async () => {
            expect(await locationStarts.locationStartTable.isPresent()).toBe(false)
        });

        it('Click the Holiday Special Starts tab.', async () => {
            await locationStarts.handleBrowserAlert()
            await cdrapHomePage.clickOnTab(data.holidaySpecialStarts)
        });

        it('Underneath Available Locations, click to select Atlanta.', async () => {
            await locationStarts.selectOptionFromDropdown(data.selectedAvailableLocations, data.atlanta)
        });

        it('Click the > arrow button. ', async () => {
            await locationStarts.clickOnButton(data.insertArrow)
        });

        it('Enter Data in the text box', async () => {
            await locationStarts.enterValueInTextBox(data.mmNameAttribute, data.mm)
            await locationStarts.enterValueInTextBox(data.ddNameAttribute, data.dd)
            await locationStarts.enterValueInTextBox(data.yyyyNameAttribute, data.yyyy)
            await locationStarts.enterValueInTextBox(data.capacityNameAttribute, data.capacity)
            await locationStarts.enterValueInTextBox(data.durationNameAttribute, data.duration)
            await locationStarts.clickOnAllCheckBoxes()
        });

        it('Click the Add or Update Special Start to Selected Location(s) button. ', async () => {
            await locationStarts.clickOnButton(data.updateSpecialStart)
        });


    });

});