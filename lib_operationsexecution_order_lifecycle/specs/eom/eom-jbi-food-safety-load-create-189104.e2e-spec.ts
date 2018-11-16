import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';

let basePage = new BasePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');
let fleetDecisionPage = new FleetDecisionPage();
let orderDetailsViewPage = new OrderDetailsViewPage();

// TC #189104: EOM JBI Food Safety Load Create
using(DataProvider.Tc_189134, async function (data) {

    describe("EOM JBI Food Safety Load Create", () => {

        it("Should open EOM Search page url ", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(basePage.eomUrl);            
        });

        it("Should enter the Bill of Code Text ", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("Should enter the origin Text ", async () => {
            await enterpriseOrderManagementPage.setOrigin(data.origin);
        });

        it("Should click search skeleton button ", async () => {
            await enterpriseOrderManagementPage.clickSearchSkeletons();
        });

        it("Should Click the Book load order that contains division as HJBT JBVAN and TRAIN asw mode", async () => {
            await skeletonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
        });

        it("Should Click Next button", async () => {
            await skeletonListingPage.clickOnSkeletonNextButton();
        });

        it("Should Click IM ", async () => {
            await fleetDecisionPage.pickTruckOrIMBasedOnMode(data.mode);
        });

        it("Should Click Load details extension tab", async () => {
            await orderDetailsViewPage.loadDetailsClick();
        });

        it("Should select F in monitor dropdown ", async () => {
            await orderDetailsViewPage.monitorsValueSelection(data.monitorValue);
        });

        it("Should click Bill to GEEC extension tab ", async () => {
            await orderDetailsViewPage.billToClick();
        });

        it("Should set Start time and End Time for Stop 1 ", async () => {
            await orderDetailsViewPage.scheduledAppointmentTimeSet(data.startTime, data.endTime);
        });

        it("Should clear appoinment date Time for Stop 99 ", async () => {
            await orderDetailsViewPage.clearScheduleAppointmentDateTimeForStop99();
        });

        it("Should click on create load button ", async () => {
            await orderDetailsViewPage.clickOnCreateLoadButton();
        });

        it("Should note the Load Number ", async () => {
            expect(await orderDetailsViewPage.loadNumberCreateLoad()).not.toBe('');
        });
    })
});