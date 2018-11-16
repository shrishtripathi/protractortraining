import { DataProvider } from "../../data/dataProvider";
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { DetailsPage } from "../../pages/eom/details.po";
import { browser } from 'protractor';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { CommentsPage } from '../../pages/eom/comments.po';

let skeletonListingPage = new SkeletonListingPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let detailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let commentsPage = new CommentsPage();
let using = require('jasmine-data-provider');

//TC 188212: EOM ICS Temp Control Load Create
using(DataProvider.Tc_188212, async function (data) {
    describe("EOM ICS Temp Control Load Create", () => {
        let loadNumber: string;

        it("Should Launch EOM Search Page Application And Login If Required", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
        });

        it("Verifying That Enterprise Order Management Page Is Displayed", async function () {
            await expect<any>(browser.getTitle()).toBe(data.enterpriseOrderManagementTitle);
        });

        it("Should Enter Bill To Code", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode)
        });

        it("Should Click On Search Skeletons Button", async () => {
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeletonButtonId)
        });

        it("Should Click On Book Load Icon Having Mode As Train", async () => {
            await skeletonListingPage.clickOnBookLoadIconHavingTruckMode();
        });

        it("Verifying That Skeltons Pick Screen Will Be Displayed", async () => {
            await expect<any>(skeletonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
        });

        it("Should Click On Next In Select Pick Up Date Screen", async () => {
            await skeletonListingPage.clickOnSkeletonNextButton();
        });

        it("Should Click On ICS ", async () => {
            await skeletonListingPage.clickOnIcsUnderCurrentDate(data.mode);
        });

        it("Should Click Load Details Extension Tab", async () => {
            await orderDetailsViewPage.loadDetailsClick();
        });

        it("Should Click On Project And Change Project Code To 'DALT'", async () => {
            await detailsPage.changeProjectCode(data.projectCode);
        });

        it("Should Enter Today Date And Begin Time As 19:00 And End Time As 23:00 In Scheduled Appointment Time", async () => {
            await detailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
        });

        it("Should Clear Date And Time In Scheduled Appointment Time For Stop 99", async () => {
            await detailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
        });

        it("Verifying No Monitor Codes Are Selected.", async () => {
            await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
        });

        it("Should Click On Bill To Dropdown Tab", async () => {
            await orderDetailsViewPage.billToClick();
        });

        it("Verifying There Are No Classifications Selected", async () => {
            await orderDetailsViewPage.verifyClassificationText();
        });

        it("Should Click On COMMENTS Tab", async () => {
            await orderDetailsViewPage.commentsTabClick()

        });

        it("Should Click On The Dropdown Tab Underneath Type, Click GENERAL.", async () => {
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

        it("Should Click On Create Load Button", async () => {
            await detailsPage.clickOnCreateLoad();
        });

        it("Should Take Note Of The Load Number At The Top Of The Page", async () => {
            loadNumber = await detailsPage.getLoadNumber();
            console.log("loadNumber:" + loadNumber);
            loadNumber = loadNumber.trim();
        });

    });
});