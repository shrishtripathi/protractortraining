import { DataProvider } from "../../data/dataProvider";
import { RoutingGuideAdministrationHomePage } from "../../pages/routing_guide/routing-guide-administration-home.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { OrderHistory } from "../../pages/center_screen/order-history.po";


let routingGuideAdministrationHomePage = new RoutingGuideAdministrationHomePage();
let myJbhuntHomePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsViewPage = new DetailsPage();
let orderHistory_CenterScreen = new OrderHistory()

let using = require('jasmine-data-provider');

 //TC_5972 :Routing Guide - 01 Book order via book multiple with 1 missing appointment
using(DataProvider.Tc_5972, async function (data) {
   
    describe("Book order via book multiple with 1 missing appointment", function () {
        let loadNumber: string;
        let loadNumber1: string;

        it("Open EOM", async () => {
            await routingGuideAdministrationHomePage.navigateToAppHome(myJbhuntHomePage.enterPriceOrderManagementUrl);
        });

        it("On the EOM home page enter 'DASPAI' in ''BILL TO CODE'' field", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("Click ''SEARCH SKELETON'' BUTTON", async () => {
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeltonButton);
        });

        it("Waiting till processing", async () => {
            await enterpriseOrderManagementPage.waitTillProcessing(data.waitTillProcessingValue);
        });

        it("Verifying that skeltons list will be displayed", async () => {
            await expect(skeletonListingPage.verifySkeltonList(0)).toBeTruthy();
        });

        it("Click green ''BOOK ORDER'' icon of chosen skeleton", async () => {
            await skeletonListingPage.clickOnBookIconHavingRequiredBillTo(data.billToCode);
        });

        it("Click ''NEXT'' ", async () => {
            await skeletonListingPage.clickNextONSelectPickUpDateScreen();
        });

        it("Click ''CHOOSE REASON CODE '' drop down box ", async () => {
            await skeletonListingPage.selectRateCode(data.rateCode);
        });

        it("Click BOOK LOAD WITHOUT RATE", async () => {
            await skeletonListingPage.clickBookLoadWithoutRate();
        });

        it("Click ICS for the Fleet Decision", async () => {
            await skeletonListingPage.clickTodayICS();
        });

        it("Change the project code to S001", async () => {
            await orderDetailsViewPage.loadDetailsClick();
            await orderDetailsViewPage.changeProjectCode(data.projectCode);
        });

        it("Change shipper appointment date to today and the time to 19:00-23:00", async () => {
            await orderDetailsViewPage.setScheduledAppointmentTodayDateAndTime(data.scheduledAppointmentBeginTime, data.scheduledAppointmentEndTime);
        });

        it("Change receiver appointment date to tomorrows date and the time to 19:00-23:00", async () => {
            await orderDetailsViewPage.setStop99ScheduledAppointmentTommorowDateAndTime(data.scheduledAppointmentBeginTime99, data.scheduledAppointmentEndTime99)
        });

        it("Should click on Create Load button", async () => {
            await orderDetailsViewPage.clickOnInputButton(orderDetailsViewPage.createLoadButton);
        });

        it("Should take note of the load number at the top of the page", async () => {
            loadNumber = await orderDetailsViewPage.getLoadNumber();
            console.log("loadNumber:" + loadNumber);
            await expect(loadNumber).not.toBe("");
        });

        it("In the Search Value box type your Order Number", async () => {
            await orderDetailsViewPage.clickOnSearchLink()
        });

        it("Should select LOAD # from Search Option drop down and  load value in search input field", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.loadText, loadNumber);
        });

        it("Should click on Search Loads button", async () => {
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchLoadButton);
        });

        it("Waiting till processing", async () => {
            await enterpriseOrderManagementPage.waitTillProcessing(data.searchingLoadText);
        });

        it("Verifying that loads will be displayed", async () => {
            await expect<any>(await skeletonListingPage.verifyLoadValue()).toBe(loadNumber);
        });

        it("should click on load number", async function () {
            await enterpriseOrderManagementPage.clickOnLoadNumber();
        });

        it("Should click on Book Multiple button", async () => {
            await orderDetailsViewPage.clickOnInputButton(orderDetailsViewPage.bookMultipleButton);
        });

        it("Click ''NEXT'' ", async () => {
            await skeletonListingPage.clickNextONSelectPickUpDateScreen();
        });

        it("Click ''CHOOSE REASON CODE '' drop down box ", async () => {
            await skeletonListingPage.selectRateCode(data.rateCode);
        });

        it("Click BOOK LOAD WITHOUT RATE", async () => {
            await skeletonListingPage.clickBookLoadWithoutRate();
        });

        it("Click ICS for the Fleet Decision", async () => {
            await skeletonListingPage.clickTodayICS();
        });

        it("Change shipper appointment date to today and the time to 19:00-23:00", async () => {
            await orderDetailsViewPage.setScheduledAppointmentTodayDateAndTime(data.scheduledAppointmentBeginTime, data.scheduledAppointmentEndTime);
        });

        it("Change receiver appointment date to tomorrows date and the time to 11:11-11:12", async () => {
            await orderDetailsViewPage.setStop99ScheduledAppointmentTommorowDateAndTime(data.updatedScheduledAppointmentBeginTime99, data.updatedScheduledAppointmentEndTime99)
        });

        it("Should click on Create Load button", async () => {
            await orderDetailsViewPage.clickOnInputButton(orderDetailsViewPage.createLoadButton);
        });

        it("Should take note of another load number at the top of the page", async () => {
            loadNumber1 = await orderDetailsViewPage.getLoadNumber();
            console.log("loadNumber:" + loadNumber1);
            await expect(loadNumber1).not.toBe("");
        });

        it("Wait for 5 mins before hit the DB query", async () => {
            console.log("waiting for 5mins for DB to Refresh");
            await orderDetailsViewPage.waitTillDBRefresh(data.timeToWait);
        });

        it("verify in RouteGuideTender table for the new order you created", async () => {
            let sql_Query = (data.sql_Query).replace("#loadNumber", loadNumber1)
            let dbOutput = await routingGuideAdministrationHomePage.verifyRouteGuideTenderTable(data.DBName, data.conn_String, sql_Query);
            console.log(dbOutput);
            let databaseOutput = await JSON.parse(dbOutput);
            await expect(databaseOutput.length).not.toBe(0);
        });

        it("In the Search Value box type your Order Number", async () => {
            await orderDetailsViewPage.clickOnSearchLink()
        });

        it("Should select LOAD # from Search Option drop down and  load value in search input field", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.loadText, loadNumber1);
        });

        it("Should click on Search Loads button", async () => {
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchLoadButton);
        });

        it("Waiting till processing", async () => {
            await enterpriseOrderManagementPage.waitTillProcessing(data.searchingLoadText);
        });

        it("Verifying that loads will be displayed", async () => {
            await expect<any>(await skeletonListingPage.verifyLoadValue()).toBe(loadNumber1);
        });

        it("should click on load number", async function () {
            await enterpriseOrderManagementPage.clickOnLoadNumber();
        });

        it("Click BILL TO drop down box arrow", async () => {
            await orderDetailsViewPage.billToClick();
        });

        it("Verify classification is blank ", async () => {
            let result: boolean = await orderDetailsViewPage.verifyClassificationValue(data.classificationValue);
            await expect(result).toBeTruthy();
        });

        it("Go to center screen", async () => {
            await myJbhuntHomePage.navigateToAppHome(myJbhuntHomePage.centerScreenUrl)
        });

        it("Should click on the Search icon in top left corner", async () => {
            await orderHistory_CenterScreen.clickOnSearchIcon();
        });

        it("Should select 'Order Number' from the first dropdown box ", async () => {
            await orderHistory_CenterScreen.selectSearchCriteria(data.orderIndex);
        });

        it("Should enter the Load number ", async () => {
            await orderHistory_CenterScreen.setSearch(loadNumber1);
        });

        it("Should click on search", async () => {
            await orderHistory_CenterScreen.clickOnSearchButton();
        });

        it("Verify the next stop and available rates status on order history page ", async () => {
            let result: boolean = await orderHistory_CenterScreen.VerifyNextStepAndAvailableRatesStatus(data.nextStepValue, data.availableRates);
            await expect(result).toBeTruthy();
        });

        it("verify in RouteGuideTender table for tender status description as NONE", async () => {
            let sql_Query = (data.sql_Query).replace("#loadNumber", loadNumber1)
            let dbOutput = await routingGuideAdministrationHomePage.verifyRouteGuideTenderTable(data.DBName, data.conn_String, sql_Query);
            let result:boolean = await routingGuideAdministrationHomePage.verifyDBOutput(dbOutput);
            await expect(result).toBeTruthy();
        });

    });
});