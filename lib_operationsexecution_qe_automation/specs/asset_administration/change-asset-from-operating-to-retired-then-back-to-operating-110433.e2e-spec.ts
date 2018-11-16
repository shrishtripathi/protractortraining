import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { AssetAdministrationHomePage } from "../../pages/asset_administration/asset-administration-home.po";
import { AssetUpdatePage } from "../../pages/asset_administration/asset-update.po";
import { CommonFunctions } from "../../utilities/common-functions";

let myJbHuntHomePage = new MyJbHuntHomePage();
let assetAdministrationHomePage = new AssetAdministrationHomePage();
let assetUpdatePage = new AssetUpdatePage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC #110433: Maximo_Regression_1 Change asset from operating to retired, then back to operating 
using(DataProvider.Tc_110433, async function (data) {

    describe("Change asset from operating to retired, then back to operating ", () => {

        it("Should open Asset Administration url", async () => {
            await assetAdministrationHomePage.navigateToAppHome(myJbHuntHomePage.assetAdministrationUrl);
        });

        it("Verifying that Asset Administration page is displayed", async () => {
            await expect(assetAdministrationHomePage.getPageTitle()).toBe(data.assetAdministrationTitle);
        });

        it("Should hover over the Asset tab, click to select Asset Update. ", async () => {
            await assetAdministrationHomePage.selectOptionFromTab(data.tabName, data.tabOption);
        });

        it("Verifying that Asset Update page is displayed", async () => {
            await expect(assetUpdatePage.getPageTitle()).toBe(data.assetUpdateTitle);
        });

        it("Should enter 327727 in Asset Number field ", async () => {
            await assetUpdatePage.setTextInInputField(assetUpdatePage.assetNumber, data.assetNumber);
        });

        it("Should click on Search button", async () => {
            await assetUpdatePage.clickOnButton(data.search);
            await assetUpdatePage.waitForActionToComplete();
        });

        it("Verifying that Assets list will populate", async () => {
            await expect(assetUpdatePage.verifyAssetsList()).toBeTruthy();
        });

        it("Should click on asset number 327727", async () => {
            await assetUpdatePage.clickOnAssetNumber(data.assetNumber);
            await assetUpdatePage.waitForActionToComplete();
        });

        it("Should click on Change Status button", async () => {
            await assetUpdatePage.clickOnButtonInAssetUpdate(assetUpdatePage.changeStatusButton);
        });

        it("Verifying that Asset Change Status will populate", async () => {
            await assetUpdatePage.waitForActionToComplete();
            let assetChangeStatusText = await assetUpdatePage.getElementText(assetUpdatePage.text(data.assetChangeStatus));
            await expect(assetChangeStatusText).toBe(data.assetChangeStatus);
        });

        it("Should select WAITRETIRE option from Asset Status drop down", async () => {
            await assetUpdatePage.setOptionFromDropDown(assetUpdatePage.assetStatusOptions, data.assetStatusOption, assetUpdatePage.assetStatus);
        });

        it("Should enter current date in Title Release Date field ", async () => {
            let todayDate = await commonFunctions.getTodayDate();
            await assetUpdatePage.setTextInInputField(assetUpdatePage.titleReleasedate, todayDate);
        });

        it("Should enter Test1 in Title Release To field ", async () => {
            await assetUpdatePage.setTextInInputField(assetUpdatePage.titleReleaseTo, data.titleReleaseTo);
        });

        it("Should select SOLD option from Retire Reason Code drop down", async () => {
            await assetUpdatePage.setOptionFromDropDown(assetUpdatePage.retireReasonCodeOptions, data.retireReasonCodeOptionSOLD, assetUpdatePage.retireReasonCode);
        });

        it("Should enter 1234567890 in Reference Number field ", async () => {
            await assetUpdatePage.setTextInInputField(assetUpdatePage.referenceNumber, data.referenceNumber);
        });

        it("Should click on Save button", async () => {
            await assetUpdatePage.clickOnButtonInAssetUpdate(assetUpdatePage.AssetChangeStatusPopUpSaveButton);
            await assetUpdatePage.waitForActionToComplete();
        });

        it("Verifying that Successfully updated status of the asset is displayed", async () => {
            let successMessage = await assetUpdatePage.getElementText(assetUpdatePage.text(data.successMessage))
            await expect(successMessage).toBe(data.successMessage);
        });

        it("Should click on Change Status button", async () => {
            await assetUpdatePage.clickOnButtonInAssetUpdate(assetUpdatePage.changeStatusButton);
        });

        it("Verifying that Asset Change Status will populate", async () => {
            await assetUpdatePage.waitForActionToComplete();
            let assetChangeStatusText = await assetUpdatePage.getElementText(assetUpdatePage.text(data.assetChangeStatus));
            await expect(assetChangeStatusText).toBe(data.assetChangeStatus);
        });

        it("Should select OPER option from Asset Status drop down", async () => {
            await assetUpdatePage.setOptionFromDropDown(assetUpdatePage.assetStatusOptions, data.retireReasonCodeOptionOPER, assetUpdatePage.assetStatus);
        });

        it("Should click on Save button", async () => {
            await assetUpdatePage.clickOnButtonInAssetUpdate(assetUpdatePage.AssetChangeStatusPopUpSaveButton);
            await assetUpdatePage.waitForActionToComplete();
        });

        it("Verifying that Successfully updated status of the asset is displayed", async () => {
            let successMessage = await assetUpdatePage.getElementText(assetUpdatePage.text(data.successMessage))
            await expect(successMessage).toBe(data.successMessage);
        });

    });

});
