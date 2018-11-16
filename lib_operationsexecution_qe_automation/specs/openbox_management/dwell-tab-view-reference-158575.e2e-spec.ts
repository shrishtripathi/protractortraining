import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { DwellPage } from "../../pages/openbox_management/dwell.po";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";


let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let dwellPage = new DwellPage()
let trailerPage = new TrailerPage();

//Tc# 158575 -Box Management System- DWELL TAB- 'VIEW REFERENCE #' (via De-ramped Trailer Summary Screen)
using(DataProvider.Tc_158575, async function (data) {

    let loadNumber = null;

    describe("Box Management System- DWELL TAB- 'VIEW REFERENCE #' (via De-ramped Trailer Summary Screen) ", function () {

        it("Should open Fleet Status url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            await expect<any>(boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("When the 'Box Management System' App opens- Click on the Dwell Tab From the Dropdown list- Click on 'De-ramped'  ", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName, data.optionName);
        });

        it("On the 'De-Ramped Trailer Summary' Screen- Click on the 'NOTASGN' Radial button ", async () => {
            await dwellPage.click(dwellPage.notasgnRadioButton);
        });

        it("Next, Click on the 'Search' button ", async () => {
            await dwellPage.click(dwellPage.searchButton);
            expect(await dwellPage.verifySearchResults(dwellPage.result)).toBeTruthy();
        });

        it("When the list of publications appear- Click anywhere on the row of one of the publications  ", async () => {
            await dwellPage.click(dwellPage.result);
            expect(await dwellPage.verifySearchResults(dwellPage.searchResult)).toBeTruthy();
        });

        it("Next, Select a Load by Clicking on the Check box next to the Load Number you are selecting- And Take note of the Loader number ", async () => {
            await dwellPage.click(dwellPage.searchResult);
        });

        it("When the Load Buttons become active- Click on the 'View Reference #' button", async () => {
            loadNumber = await dwellPage.getText(dwellPage.loadNumber);
            await dwellPage.click(dwellPage.viewReferenceButton);
        });

        it("When the 'Reference Numbers' pop-up box appears- Confirm that for each 'Reference Type' in the Reference Type Column a 'Reference Number' is displayed in the related Reference Number Column", async () => {
            expect(await dwellPage.verifyLoadNumberPopUpDetails(loadNumber)).toBeTruthy();
        });

        it("After Viewing the Reference Numbers Data- Click the 'Close' button ", async () => {
            await dwellPage.click(dwellPage.closeButton);
        });

        it("Again, the 'Dropped Trailer Summary' screen will reappear with the Load details still displayed at the button of the screen", async () => {
            expect(await dwellPage.verifySearchResults(dwellPage.searchResult)).toBeTruthy();
        });


    });
});