import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { DataProvider } from "../../data/dataProvider";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { LTLInformationPage } from "../../pages/eom/ltl-information.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let enterpriseOrderManagement = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let detailPage = new DetailsPage();
let ltlInfoPage = new LTLInformationPage();

let using = require('jasmine-data-provider')

using(DataProvider.Tc_80529, async function (data) {

    //TC 80529: EOM_Regression_12 Adding LTL lines and booking 
    describe("Adding LTL lines and booking", () => {
        let loadNumber: string;

        it("Should open Enterprise Order Management lin url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.eomUrl);
        });

        it("Should select FLEET CODE from Search Option drop down", async () => {
            await enterpriseOrderManagement.setValuesInDataSpecificSearch(data.searchOptionValue, data.searchValue);
        });

        it("Should click on Search skeleton button", async () => {
            await enterpriseOrderManagement.clickOnEOMButton(data.searchSkeleton);
        });

        it("Verifying that skeltons list will be displayed", async () => {
            await enterpriseOrderManagement.waitTillProcessing(data.waitTillProcessingValue);
            await expect(skeletonListingPage.verifySkeltonList(0)).toBeTruthy();
        });

        it("Should find without rate skelton and click on skelton book load", async () => {
            await skeletonListingPage.clickOnSkeltonBookLoad();
        });

        it("Verifying that skeltons pick screen will be displayed", async () => {
            await expect<any>(skeletonListingPage.getSkeltonPickScreenTitle()).toBe(data.verifyPickScreenTitle);
        });

        it("Should click on Next Button in skelton pick screen", async () => {
            await skeletonListingPage.clickOnInputButton(skeletonListingPage.skeltonPickNextButton);
        });


        it("Should click on ICS under current Date", async () => {
            await skeletonListingPage.selectRateCode(data.rateCode)
            await skeletonListingPage.clickBookLoadWithoutRate();
        });

        it("Change the project code to LTL7", async () => {
            await detailPage.loadDetailsClick();
            await detailPage.changeProjectCode(data.projectCode);
        });

        it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time", async () => {
            await detailPage.setScheduledAppointmentTodayDateAndTime(data.scheduledAppointmentBeginTime, data.scheduledAppointmentEndTime);

        });
        it("Should empty the receiver appointment details", async () => {
            await detailPage.receiverScheduledAppointmentEmptyCheck();
        });

        it("Should click on LTL tab", async () => {
            await detailPage.clickOnLtlTab();
            await detailPage.actions.waitBrowserTitleEqualsTo(data.ltlTitle);
        });

        it("Enter values into new line items on EOM page", async () => {
            let arr: string[] = [data.productDescription, data.hdlQuantity, data.boxesOption, data.hdlQuantity, data.totalWeight];
            await ltlInfoPage.setValuesIntoNewLineItems(arr);
        });

        it("Should click on + sign at the end of the line to add another line", async () => {
            await ltlInfoPage.clickOnAddNewLineSign(0);
        });

        it("Enter values into another line items on EOM page", async () => {
            let arr: string[] = [data.productDescription, data.hdlQuantity, data.boxesOption, data.hdlQuantity, data.totalWeight];
            await ltlInfoPage.setValuesIntoNewLineItems2(arr);
        });

         it("Should click on + sign at the end of the line to add another line", async () => {
             await ltlInfoPage.clickOnAddNewLineSign(1);
         });

        it("Click on details tab", async () => {
            await detailPage.clickOnEOMTabs(data.detailsTab);
        });

        it("Should click on LTL tab again", async () => {
            await detailPage.clickOnLtlTab();
        });

        it("Verifying that the lines are added", async () => {
            await expect<any>(await ltlInfoPage.getNewLineDataListSize()).toBe(2);
        });

        it("Click on details tab again", async () => {
            await detailPage.clickOnEOMTabs(data.detailsTab);
        });

        it("Should click on Create Load Button", async () => {
            await detailPage.clickOnInputButton(detailPage.createLoadButton);
            loadNumber = await detailPage.getLoadNumber();
            await expect(loadNumber).not.toBe('');
        });

        it("In the Search Value box type your Order Number", async () => {
            await detailPage.clickOnSearchLink()
        });

        it("Should select LOAD # from Search Option drop down and  load value in search input field", async () => {
            await enterpriseOrderManagement.setValuesInDataSpecificSearch(data.loadText, loadNumber);
        });

        it("Should click on Search Loads button", async () => {
            await enterpriseOrderManagement.clickOnEOMButton(data.searchLoadButton);
        });

        it("Waiting till processing", async () => {
            await enterpriseOrderManagement.waitTillProcessing(data.searchingLoadText);
        });

        it("Verifying that loads will be displayed", async () => {
            await expect<any>(await skeletonListingPage.verifyLoadValue()).toBe(loadNumber);
        });

        it("should click on load number", async function () {
            await enterpriseOrderManagement.clickOnLoadNumber();
        });

        it("Should click on LTL tab again", async () => {
            await detailPage.clickOnLtlTab();
        });

        it("Verifying that the lines are added", async () => {
            await expect<any>(ltlInfoPage.getLTLLinesAddedToLoad()).toBe(2);
        });

    });

});