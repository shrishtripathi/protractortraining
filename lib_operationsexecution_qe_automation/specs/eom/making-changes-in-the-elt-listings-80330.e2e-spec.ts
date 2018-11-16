import { browser } from 'protractor';
import { DataProvider } from '../../data/dataprovider';
import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { PickUpDateScreenPage } from '../../pages/eom/pickup-date-screen.po';
import { RateCheckDetailsPage } from '../../pages/eom/rate-check-details.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { StandardNewLoadPage } from '../../pages/eom/standard-new-load.po';
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { DetailsPage } from '../../pages/eom/details.po';

let homePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let pickUpDatePage = new PickUpDateScreenPage;
let rateCheckDetailsPage = new RateCheckDetailsPage();
let fleetDecisionPage = new FleetDecisionPage();
let standardNewLoadPage = new StandardNewLoadPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let detailsPage = new DetailsPage();
let using = require('jasmine-data-provider');

//TC# 80330: EOM_Regression_11 Making changes in the ELT listings
using(DataProvider.Tc_80330, async function (data) {

    describe("Making changes in the ELT listings ", function () {
        let modeType: string = "";
        it("should open 'homepage'", async function () {
            await homePage.openEomUrl()
        });

        it("Search for ELT Load Tenders by entering a Company Id in the Company Field under the Load Tender Search Section in EOM. Enter a company id in the search value", async function () {
            await enterpriseOrderManagementPage.loadTenderSearch(data.company, data.kraft)
        });

        it("Click ''Search Tenders'' Button.", async function () {
            await enterpriseOrderManagementPage.clickOnbutton(data.editButton, data.searchTenders);
        });

        it("Accept a Load Tender under the action section by Selecting Accept in dropdown", async function () {
            await skeletonListingPage.selecttActionsFromDropDown(data.accept)
        });

        it("Click 'PROCESS LOADS' Button", async function () {
            await enterpriseOrderManagementPage.clickOnbuttontwice(data.button,data.loads);
        });

        it(" Select a skeleton", async function () {
            modeType = await skeletonListingPage.getModeType();
            console.log("mode type :" + modeType);
            await skeletonListingPage.bookOrderIconClick()
        });

        it("Should Click ''TRUCK'' under current date", async ()=> {
            await skeletonListingPage.clickOnIcsUnderCurrentDate(modeType);       
        });

        it("Set shipper scheduled appointment time to '19:00'-'23:00'", async function () {
            await orderDetailsViewPage.scheduledAppointmentTimeSet(data.scheduledAppointmentBeginTime, data.scheduledAppointmentEndTime);
        });
        it("set receiver appointment details", async () => {
            let date_Value2: string = await detailsPage.getRequiredCalenderDate(5);
            console.log("date2 : " + date_Value2);
            await detailsPage.setAppointmentScheduledDetails(data.receiverAppointmentScheduledDetailsField, date_Value2);
            await detailsPage.setStopCode2(data.stopCode);
            await detailsPage.stop2ReasonCode(data.reasonCode);
        });

        it("Click 'Create Load' Button", async function () {
            await standardNewLoadPage.clickCreateLoad();
        });

        it("should create 'new load'", async function () {
            let flag: boolean = await standardNewLoadPage.verifyLoad();
            console.log("flag: " + flag)
            expect(flag).toBeTruthy();
        });

        it("Search for ELT Load Tenders by entering a Company Id in the Company Field under the Load Tender Search Section in EOM. Enter a company id in the search value", async function () {
            await detailsPage.clickOnSearchTab();
        });

        it("Click ''Search Tenders'' Button.", async function () {
            await enterpriseOrderManagementPage.clickOnbutton(data.buttonId, data.searchTenderButton);
        });

        it("Reject a Load Tender in QA ", async function () {
            await skeletonListingPage.selecttActionsFromDropDown(data.rejectTender)
        });


        it("Click 'PROCESS LOADS' Button ", async function () {
            await enterpriseOrderManagementPage.clickOnbutton(data.processLoadsButtonId, data.searchTenderButton);
        });

        it("Select reject reason code ", async function () {
            await skeletonListingPage.selectRejectReason(data.rejectReasonCode);
        });

        it(" Click Reject ELT ", async function () {
            await enterpriseOrderManagementPage.clickOnbutton(data.rejectButtonId, data.rejectbuttonText);
        });

        it("Search for ELT Load Tenders by entering a Company Id in the Company Field under the Load Tender Search Section in EOM. Enter a company id in the search value", async function () {
            await detailsPage.clickOnSearchTab();
        });

        it("Change Load Tender Types to Rejected  ", async function () {
            await skeletonListingPage.selectOnlyRequiedTenderTypeCheckBox(data.loadTenderType);
        });

        it("Click ''Search Tenders'' Button.", async function () {
            await enterpriseOrderManagementPage.clickOnbutton(data.searchButtonId,data.searchButtonText);
        });

        it("Click 'PROCESS LOADS' Button ", async function () {
            await enterpriseOrderManagementPage.clickOnbutton(data.processLoadsButtonId, data.searchButtonText);
        });

    });

});