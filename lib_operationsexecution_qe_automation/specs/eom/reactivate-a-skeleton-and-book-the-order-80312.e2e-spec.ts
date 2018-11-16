import { browser } from 'protractor';
import { DataProvider } from '../../data/dataprovider';
import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { PickUpDateScreenPage } from '../../pages/eom/pickup-date-screen.po';
import { RateCheckDetailsPage } from '../../pages/eom/rate-check-details.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { StandardNewLoadPage } from '../../pages/eom/standard-new-load.po';

let homePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let pickUpDatePage = new PickUpDateScreenPage;
let rateCheckDetailsPage = new RateCheckDetailsPage();
let fleetDecisionPage = new FleetDecisionPage();
let standardNewLoadPage = new StandardNewLoadPage();
let using = require('jasmine-data-provider');

//TC# 80312: EOM_Regression_10 Reactivate a skeleton and book the order
using(DataProvider.Tc_80312, async function (data) {

    describe("Reactivate a skeleton and book the order ", function () {

        it("Should open My JBHunt url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("should enter 'Bill To Code' in EOM", async function () {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("should click 'Search skeletons' in EOM", async function () {
            await enterpriseOrderManagementPage.clickSearchSkeletons();
        });

        it("should click 'Remove Filter Options' in skeleton listing", async function () {
            await skeletonListingPage.clickRemoveFilterOptions();
        });

        it("should click 'CheckBox' in skeleton listing", async function () {
            await skeletonListingPage.clickCheckBox();
        });

        it("should click 'Activate Button' in skeleton listing", async function () {
            await skeletonListingPage.clickActivateButton();
        });

        it("should click 'BookLoad' in skeleton listing", async function () {
            await skeletonListingPage.clickBookLoad();
        });

        it("should click 'Next' in Pickup date screen", async function () {
            await pickUpDatePage.clickNextButton();
        });

        it("should click rate code dropdown if no rate was found or directly goes to fleet decision page ", async function () {
            await fleetDecisionPage.pickTruckOrIM();
        });

        it("should enter 'Date and Time' in Standard new load", async function () {
            await standardNewLoadPage.enterDateAndTime(data.date, data.scheduledAppointmentBeginTime, data.scheduledAppointmentEndTime);
        });

        it("should click 'Create Load'in Standard new load", async function () {
            await standardNewLoadPage.clickCreateLoad();
        });

        it("should create 'new load'", async function () {
            let flag: boolean = await standardNewLoadPage.verifyLoad();
            expect(flag).toBeTruthy();
        });

    });

});