import { DataProvider } from '../../data/dataProvider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { DetailsPage } from "../../pages/eom/details.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let loadDetailsPage = new DetailsPage();
let using = require('jasmine-data-provider');

// TC #189134: EOM ICS Food Safety load create verification
using(DataProvider.Tc_189134, async function (data) {
    let orderNumber: string;    
    describe("EOM ICS Food Safety Load Create Verification", () => {

        it("Should open EOM Search page url ", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);            
        });

        it("Should enter the Bill of Code Text ", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("Should click search skeleton button ", async () => {
            await enterpriseOrderManagementPage.clickSearchSkeletons();
        });

        it("Should Click the Book load order that contains division as 'HJBT JBHA' and 'TRUCK' as mode", async () => {
            await skeletonListingPage.clickOnBookLoadWithDivisionAndMode(data.division, data.vMode);
        });

        it("Should Click Next button", async () => {
            await skeletonListingPage.clickOnSkeletonNextButton();
        });

        it("Should Click ICS ", async () => {
            await skeletonListingPage.clickOnIcsUnderCurrentDate(data.mode);
        });

        it("Should Click Load details extension tab", async () => {
            await orderDetailsViewPage.loadDetailsClick();
        });

        it("Should select H in monitor dropdown ", async () => {
            await orderDetailsViewPage.monitorsValueSelection(data.monitorValue);
        });

        it("Should set Start time and End Time for Stop 1 ", async () => {
            await orderDetailsViewPage.scheduledAppointmentTimeSet(data.startTime, data.endTime);
        });

        it("Should clear appoinment date Time for Stop 99 ", async () => {
            await orderDetailsViewPage.clearScheduleAppointmentDateTimeForStop99();
        });

        it("Should click on create load button ", async () => {
            await orderDetailsViewPage.clickOnCreateLoadButton();
            await orderDetailsViewPage.clickContinueButton();
        });

        it("Should note the Load Number ", async () => {
            orderNumber = await loadDetailsPage.getLoadNumber();
        });

        it("Should Navigate  Back To EOM Search Page And Login If Required", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Should Ensure LOAD# Is Selected And Enter Load Number In The Search Value Box", async () => {
            await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.searchOption, orderNumber);
        });

        it("Should Click The Search Loads Button", async function () {
            await enterpriseOrderManagementPage.clickSearchLoadsButton();
        });

        it("Should Click On Load Number Hyperlink", async () => {
            await enterpriseOrderManagementPage.clickLoadNumber(orderNumber);
        });

        it("Should Click load details extension tab", async function () {
            await orderDetailsViewPage.loadDetailsClick();
        });

        it("Verify Monitor Value", async function () {
            await expect(enterpriseOrderManagementPage.verifyMonitorCode()).toBe(data.monitorValue);
        });

        it("Verify Mode", async function () {
            await expect(enterpriseOrderManagementPage.verifyMode()).toBe(data.vMode);
        }); 

    });
    
});