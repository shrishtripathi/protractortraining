import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { browser } from 'protractor';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { DetailsPage } from '../../pages/eom/details.po';
import { LTLInformationPage } from '../../pages/eom/ltl-information.po';


let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');
let detailsPage = new DetailsPage();
let ltlInfoPage = new LTLInformationPage();
let orderDetailsViewPage = new OrderDetailsViewPage();

// TC #188102: EOM LTL-Load Create
using(DataProvider.Tc_188102, async function (data) {

    describe("EOM LTL-Load Create", () => {
        let loadNumber: string;
        let originRamp: string;

        it("Should open EOM page", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
            await expect<any>(browser.getTitle()).toBe(data.enterpriseOrderManagementTitle);
        });

        it("Should select 'PROJECT CODE' and enter value 'LTL7'", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.searchOption, data.searchValue);
        });

        it("Should click search skeleton button ", async () => {
            await enterpriseOrderManagementPage.clickSearchSkeletons();
        });

        it('Should select the last skeleton by clicking on the green button', async () => {
            await skeletonListingPage.clickOnLastSkeletonGreenButton();
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

        it("Should click on LTL tab", async () => {
            await detailsPage.clickOnLtlTab();
        });

        it("Enter values into another line items on EOM page", async () => {
            let arr: string[] = [data.productDescription, data.hdlQuantity, data.boxesOption, data.hdlQuantity, data.totalWeight];
            await ltlInfoPage.setValuesIntoNewLineItems(arr);
        });

        it("Click on details tab", async () => {
            await detailsPage.clickOnEOMTabs(data.detailsTab);
        });

        it("Should click on dropdown tab next to Bill To GEEC", async () => {
            await detailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
        });

        it("Should click On Classification Lens Icon ", async () => {
            await orderDetailsViewPage.clickOnClassificationLensIcon();
        });

        it("Should click On reefer checkbox ", async () => {
            await orderDetailsViewPage.clickOnReeferCheckbox();
        });

        it("Should click On Close window button ", async () => {
            await orderDetailsViewPage.clickOncloseWindowButton();
        });

        it("Should enter today date and begin time as 08:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
            await detailsPage.setScheduledAppointmentTodayDateAndTime(data.startTime, data.endTime);
        });

        it("Should 5 days from now and begin time as 08:00 and end time as 23:00 in Scheduled Appointment Time for stop99 ", async () => {
            await detailsPage.setStop99ScheduledAppointmentFiveDaysLaterDateAndTime(data.startTime, data.endTime);
        });

        it("Should click on Create Load button", async () => {
            await detailsPage.clickOnCreateLoad();
        });

        it("Should take note of the load number at the top of the page", async () => {
            loadNumber = await detailsPage.getLoadNumber();
        });


    });
});