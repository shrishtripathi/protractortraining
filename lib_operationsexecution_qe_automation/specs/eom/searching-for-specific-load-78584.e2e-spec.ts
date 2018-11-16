import { browser } from "protractor";
import { DataProvider } from "../../data/dataprovider";
import { MyJbHuntHomePage } from "../../pages/eom/my-jbhunt-home.po";
import { FreightManager2Page } from "../../pages/eom/freight-manager-2.po";
import { PickupviewPage } from "../../pages/eom/pick-up-view.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";

let freightManager2Page = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');

//TC 78584: EOM_Regression_1 Searching for a specific load
using(DataProvider.Tc_78584, async function (data) {

    describe("EOM_Regression_1 Searching for a specific load", () => {
        let orderNumber: string;

        it("Launch FreightManager URL", async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
        });

        it("Verifying that Freight Manger page is displayed", async function () {
            expect<any>(await freightManager2Page.getPageTitle()).toBe(data.freightManagerTitle);
        });

        it("Should click on PickUp View option under Planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.planningTab, data.pickUpOption, data.pickUpViewPageTitle);
        });

        it("Should select 'A- Area' from Type dropdown field ", async () => {
            await pickupviewPage.selectOptionFromDropDown(pickupviewPage.typeDropDownOptions, pickupviewPage.typeDropDown, data.typeDropdownOptionValue);
        });

        it("Should enter 'HJBT JBVAN' in division field ", async () => {
            await pickupviewPage.enterDataInInputField(data.divisionInput, data.codeOne, data.divisionText);
        });

        it("Should enter 'MKT' in Area type field ", async () => {
            await pickupviewPage.setAreaType(data.areaTypeInput, data.areaTypeText);
        });

        it("Should enter 'DA' in Area field ", async () => {
            await pickupviewPage.enterDataInInputField(data.areaInput, data.codeOne, data.areaText);
        });

        it("Should enter 'I' in Area field ", async () => {
            await pickupviewPage.enterDataInInputField(data.transMdInput, data.codeTwo, data.transMdText);
        });

        it("Should click on 'Search' button", async () => {
            await pickupviewPage.clickSearchButton();
        });

        it("Should find an available load with empty power driver notes boxes ", async () => {
            orderNumber = await pickupviewPage.findAvailableLoadWithEmptyPowerDriverNotes(data.columnPWRDRVR, data.columnTCALL);
        });

        it("Launch EOM", async () => {
            await pickupviewPage.navigateToAppHome(pickupviewPage.eomUrl);
        });

        it("Should select LOAD # from Search Option drop down and  load value in search input field", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.loadText, orderNumber);
        });

        it("Should click on Search Loads button", async () => {
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchLoadButton);
        });

        it("Waiting till processing", async () => {
            await enterpriseOrderManagementPage.waitTillProcessing(data.searchingSkeletonsText);
        });

        it("Verifying that loads will be displayed", async () => {
            expect<any>(await skeletonListingPage.verifyLoadValue()).toBe(orderNumber);
        });

    });

});