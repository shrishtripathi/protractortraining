import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { ItemPage } from "../../pages/simon_now/item.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { SimonNowHomePage } from "../../pages/simon_now/simon-now-home.po";

let simonNowHomePage = new SimonNowHomePage();
let itemPage = new ItemPage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//Tc#92617 - SimonNow_Regression_4 Create a new Item and editing
using(DataProvider.Tc_92617, async function (data) {

    describe("Create a new Item and editing", function () {
        let itemCode = null;
        let itemDescription = null;
        

        it("Should open Simon Now url", async () => {
            await simonNowHomePage.navigateToAppHome(simonNowHomePage.simonNowUrl);            
        });

        it("Verifying that redirected to Simon Now Page", async () => {
            await expect<any>(simonNowHomePage.getPageTitle()).toBe(data.simonNowPageTitle);
        });

        it("Should select Publication option from Search Type Drop Down", async () => {
            await simonNowHomePage.setOptionFromDropDown(data.searchTypeDropDownOption, simonNowHomePage.searchTypeDropDown);
        });

        it("Should select Active option from Date Basis", async () => {
            await simonNowHomePage.setOptionFromDropDown(data.dateBasisDropDownOption, simonNowHomePage.dateBasisDropDown);
        });

        it("Should enter dan test in Pub Name", async () => {
            await simonNowHomePage.setText(simonNowHomePage.pubName, data.pubName);
        });

        it("Should click on DAN TEST COMPANY in Pub Name Field", async () => {
            await simonNowHomePage.clickOnAutopopulatedText(data.pubNameText);
        });

        it("Should click on Item Tab", async () => {
            await simonNowHomePage.clickOnTab(data.tabName);
        });

        it("Should select 123456789 - DAN (2018-04-09) option from Section drop down", async () => {
            await simonNowHomePage.setOptionFromDropDown(data.sectionOption, simonNowHomePage.sectionDropDown);
            await simonNowHomePage.waitForPageLoad();
        });

        it("Should click on New Item Button", async () => {
            await simonNowHomePage.clickOnButton(data.newItemButton);
        });

        it("Should enter item Code in Code Field", async () => {
            itemCode = await commonFunctions.randomNumberGenarator(9);
            await itemPage.setText(itemPage.itemCode, itemCode);
        });

        it("Should enter item description in Description Field", async () => {
            itemDescription = await commonFunctions.randomNameGenarator(6);
            await itemPage.setText(itemPage.itemDescription, itemDescription);
        });


        it("Should change the date", async () => {
            await itemPage.setText(itemPage.expiryDate,data.expiryDate);
        });

        it("Should click on Update Button", async () => {
            await itemPage.clickOnButton(data.updateButton);
        });

        it("Verifying that New Item is Saved", async () => {
            let savedText = await itemPage.getElementText(itemPage.text(data.itemSavedText));
            await expect(savedText).toBe(data.itemSavedText);
        });

        it("Should click on anywhere on the entered Item", async () => {
            await itemPage.clickOnItem(itemCode);
        });

        it("Should click on Update Button", async () => {
            await itemPage.clickOnButton(data.updateButton);
        });

        it("Verifying that New Item is Edited", async () => {
            let savedText = await itemPage.getElementText(itemPage.text(data.itemSavedText));
            await expect(savedText).toBe(data.itemSavedText);
        });

    });

});