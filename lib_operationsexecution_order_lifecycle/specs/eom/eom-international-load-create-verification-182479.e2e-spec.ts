import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { browser } from 'protractor';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { DetailsPage } from '../../pages/eom/details.po';

let basePage = new BasePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');
let fleetDecisionPage = new FleetDecisionPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let detailsPage = new DetailsPage();
// TC #182749:EOM International Load Create Verification
describe("EOM International Load Create Verification", () => {
    let loadNumber: string;
    let originRamp: string;

    // EOM International Load Create
    using(DataProvider.Tc_185029, async function (data) {
       
        it("Should open EOM page", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Should enter the Bill of Code Text ", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("Should enter the origin Text and destination text ", async () => {
            await enterpriseOrderManagementPage.setValuesCustomerGeographicalSearch(data.origin, data.destination);
        });

        it("Should click search skeleton button ", async () => {
            await enterpriseOrderManagementPage.clickSearchSkeletons();
        });

        it("Should Click the Book load order that contains division as HJBT JBVAN and TRAIN asw mode", async () => {
            await skeletonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
        });

        it("should Click Next button", async () => {
            await skeletonListingPage.clickOnSkeletonNextButton();
        });

        it("Should select option for reason code", async () => {
            await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
        });

        it("Should click on book load with rate button", async () => {
            await skeletonListingPage.clickOnBookLoadWithoutRateButton();
        });

        it("Should click on IM", async () => {
            await skeletonListingPage.clickOnIM();
        });

        it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
            await detailsPage.setScheduledAppointmentTodayDateAndTime(data.startTime, data.endTime);
        });

        it("Should check receiver scheduled appointment date fields are empty", async () => {
            await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
        });

        it("should Click Load details extension tab", async () => {
            await orderDetailsViewPage.loadDetailsClick();
        })

        it("Verifying NO monitor codes are selected", async () => {
            await expect<any>(orderDetailsViewPage.monitorValueCheck()).toBe("");
        })

        it("Should click on dropdown tab next to Bill To GEEC", async () => {
            await detailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
        });

        it("Verifying no classifications are selected.", async () => {
            await detailsPage.verifyClassificationValue(data.empty);
        });

        it("Should enter 'CCBDA' to solictor ", async () => {
            await detailsPage.setSolictor(data.solictor);
        });

        it("Should click on create load button ", async () => {
            await orderDetailsViewPage.clickOnCreateLoadButton();
            await orderDetailsViewPage.clickOnOverrideButton();
        });

        it("Should take note of the load number at the top of the page", async () => {
            loadNumber = await detailsPage.focusLoadNumber();
        });

        it("Should take note of the destination details at bottom of the page", async () => {
            originRamp = await detailsPage.getOriginRamp();
        });
    });

    using(DataProvider.Tc_182479, async function (data) {
       
        it("Should open EOM page", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Should Click the drop down box under 'Search Option' and ensure ''LOAD#'' is selected.", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.load,loadNumber);
        });

        it("Should click on search load button", async () => {
            await enterpriseOrderManagementPage.clickSearchLoadsButton();
        });

        it("Should click on load number", async () => {
            await enterpriseOrderManagementPage.clickLoadNumber(loadNumber.trim());
        });

        it("Verifying broker is there", async () => {
            await expect<any>(detailsPage.verifyBroker()).not.toBe(null);
        });

        it("Verifying solictor is there", async () => {
            await expect<any>(detailsPage.verifySolictor()).not.toBe(null);
        });

    });

});