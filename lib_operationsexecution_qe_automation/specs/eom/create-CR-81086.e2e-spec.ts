import { browser, ElementFinder } from 'protractor';
import { DataProvider } from '../../data/dataprovider';
import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { CommentsPage } from '../../pages/eom/comments.po';
import { AccessorialsPage } from '../../pages/eom/accessorials.po';
import { DetailsPage } from '../../pages/eom/details.po';
import { LTLInformationPage } from '../../pages/eom/ltl-information.po';

let myJbHuntHomePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let commentsPage = new CommentsPage();
let accessorialsPage = new AccessorialsPage();
let detailsPage = new DetailsPage();
let ltlInfoPage = new LTLInformationPage();
let using = require('jasmine-data-provider');

//Tc#81086 - EOM_Regression_15 Create a CR in EOM
using(DataProvider.Tc_81086, async function (data) {
    describe("Create a CR in EOM", function () {

        it("Open My JBHunt url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Enter values in data specifc search", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.searchOption, data.searchValue);
        });

        it("Click on search skeleton button", async () => {
            await myJbHuntHomePage.clickOnEOMButton(data.searchSkeltonButton);
        });

        it("Waiting till processing", async () => {
            await myJbHuntHomePage.waitTillProcessing(data.waitTillProcessingValue);
        });

        it("Select skeleton which has create CR", async () => {
           await skeletonListingPage.selectSkeletonWithCR();
        });

        it("Click on LTL tab", async () => {
            await detailsPage.clickOnEOMTabs(data.ltlTab);
        });


        it("Enter values into new line items on EOM page", async () => {
            let arr: string[] = [data.productDescription, data.hdlQuantity, data.boxesOption, data.hdlQuantity, data.totalWeight];
            await ltlInfoPage.setValuesIntoNewLineItems(arr);
        });

        it("Click on details tab", async () => {
            await detailsPage.clickOnEOMTabs(data.detailsTab);
        });

        it("Wait untill stop list getting displayed ", async () => {
            await detailsPage.waitUntillStopDetailsDisplayed();
        });

        it("set shipper appointment details", async () => {
            let date_Value: string = await detailsPage.getRequiredCalenderDate(0);
            console.log("date : " + date_Value);
            await detailsPage.setAppointmentScheduledDetails(data.shipperAppointmentScheduledDetailsField, date_Value);
        });

        it("set receiver appointment details", async () => {
            let date_Value2: string = await detailsPage.getRequiredCalenderDate(5);
            console.log("date2 : " + date_Value2);
            await detailsPage.setAppointmentScheduledDetails(data.receiverAppointmentScheduledDetailsField, date_Value2);
        });

        it("Click on create CR", async () => {
            await myJbHuntHomePage.clickOnEOMButton(data.createCR);
        });

        it("Waiting till processing", async () => {
            await myJbHuntHomePage.waitTillProcessing(data.waitTillProcessing);
        });

        it("Verify newly created CR ", async () => {
            let message: string = await myJbHuntHomePage.verifySuccessMessageOnPage(data.crCreatedMessage);
            expect(message).toContain(data.crCreatedMessage);
        });

    });

});
