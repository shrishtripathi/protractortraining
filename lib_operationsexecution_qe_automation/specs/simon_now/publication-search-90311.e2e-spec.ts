import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { SimonNowHomePage } from "../../pages/simon_now/simon-now-home.po";

let simonNowHomePage = new SimonNowHomePage();
let using = require('jasmine-data-provider');

//Tc#90311 - SimonNow_Regression_1 Publication search
using(DataProvider.Tc_90311, async function (data) {

    describe("Publication search", function () {

        it("Should open Simon Now url", async () => {
            await simonNowHomePage.navigateToAppHome(simonNowHomePage.simonNowUrl);            
        });

        it("Verifying that redirected to Simon Now Page", async () => {
            await expect<any>(simonNowHomePage.getPageTitle()).toBe(data.simonNowPageTitle);
        });

        it("Should select Publication option from Search Type Drop Down", async () => {
            await simonNowHomePage.setOptionFromDropDown(data.searchTypeDropDownOption, simonNowHomePage.searchTypeDropDown);
        });

        it("Should select Currently Active option from Date Basis", async () => {
            await simonNowHomePage.setOptionFromDropDown(data.dateBasisDropDownOption, simonNowHomePage.dateBasisDropDown);
        });

        it("Should enter danco in Pub Name", async () => {
            await simonNowHomePage.setText(simonNowHomePage.pubName, data.pubName);
        });

        it("Should click on DANCO in Pub Name Field", async () => {
            await simonNowHomePage.clickOnAutopopulatedText(data.pubNameText);
        });

        it("Should click on Reset Form Button", async () => {
            await simonNowHomePage.clickOnButton(data.resetForm);
        });     

    });
});