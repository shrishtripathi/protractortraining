import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { DataProvider } from "../../data/dataProvider";
import { CommentsPage } from "../../pages/eom/comments.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let loadDetailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let skeletonListingPage = new SkeletonListingPage();
let commentsPage = new CommentsPage();
let using = require('jasmine-data-provider');
//TC 192187: eom-ICS-Maritime-Food-Safety-Load-Create-192187
using(DataProvider.Tc_192187, async function (data) {
    describe("EOM ICS Maritime Food safety load create", function () {
        let loadNumber: string;

        it("Should open EOM url", () => {
            enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Should enter KNJE1 in Bill To Code field", async function () {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("Should enter PIMC9 in Origin field", async function () {
            await enterpriseOrderManagementPage.setOrigin(data.origin);
        });

        it("Should enter BTBA46 in Destination Code", async () => {
            await enterpriseOrderManagementPage.setValueToDestination(data.destinationCode)
        });
        it("Should click on Search Skelton button", async () => {
            await enterpriseOrderManagementPage.clickSearchSkeletons();
        });

        it("Verifying that skeltons list will be displayed", async () => {
            await expect(skeletonListingPage.verifySkeltonList(data.zero)).toBeTruthy();
        });

        it("Should Click green 'BOOK ORDER' icon of chosen skeleton", async () => {
            await skeletonListingPage.bookOrderIconClick();
        });

        it("Verifying that skeltons pick screen will be displayed", async () => {
            await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
        });

        it("Should click on Next Button in skelton pick screen", async () => {
            await skeletonListingPage.clickOnSkeletonNextButton();
        });

        it('Should click on ICS Under Current Date', async () => {
            await skeletonListingPage.clickOnIcsUnderCurrentDate(data.mode);
        });

        it("Should click on dropdown tab next to Load DETAIL", async () => {
            await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
        });

        it("Should change project code to DALT", async () => {
            await loadDetailsPage.changeProjectCode(data.projectCode);
        });

        it("Should select F in monitor dropdown ", async () => {
            await orderDetailsViewPage.monitorsValueSelection(data.monitorValue);
        });

        it("Should click on dropdown tab next to Bill To GEEC", async () => {
            await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
        });

        it("Should select 'N' option from dropdown under Hazmat ", async () => {
            await loadDetailsPage.selectOptionFromHazmatDropDown(data.hazmatDropDownValue);
        });

        it("Verifying no classifications are selected.", async () => {
            await loadDetailsPage.verifyClassificationValue(data.empty);
        });

        it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time", async () => {
            await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
        });

        it("Should clear date and time in Scheduled Appointment Time for Stop 99", async () => {
            await loadDetailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
        });

        it("Should Click On COMMENTS Tab", async () => {
            await orderDetailsViewPage.commentsTabClick()
        });

        it("Click the dropdown tab underneath Type, click GENERAL.", async () => {
            await commentsPage.commentsTypeValueSelection(data.commentType);
        });

        it("Should Add 'THIS IS A TEST ORDER ONLY DO NOT PROCESS!' In The Comment Section", async () => {
            await commentsPage.setComments(data.comment);
            await commentsPage.setComments(data.comment);
        });

        it("Click On The 'Details' Tab", async () => {
            await orderDetailsViewPage.detailsTabClick();
        });

        it("Verifying The Comments Tab Is Now COMMENTS (1)", async () => {
            await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
        });

        it("Should click on Create Load button", async () => {
            await loadDetailsPage.clickOnCreateLoad();
        });

        it("Should take note of the load number at the top of the page", async () => {
            loadNumber = await loadDetailsPage.getLoadNumber();
            console.log("loadNumber", loadNumber)
        });

    });
});