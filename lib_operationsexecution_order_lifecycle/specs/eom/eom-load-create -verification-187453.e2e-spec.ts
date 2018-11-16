import { DataProvider } from "../../data/dataProvider";
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { DetailsPage } from "../../pages/eom/details.po";
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { CommentsPage } from '../../pages/eom/comments.po';

let skeletonListingPage = new SkeletonListingPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let detailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let commentsPage = new CommentsPage();
let using = require('jasmine-data-provider');

//TC 187353:eom load create verification
using(DataProvider.Tc_187437, async function (data) {

    describe("eom load create verification", () => {

        let loadNumber: string

        it('Should open Eom url', async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
        });

        it('Should enter Bill to Code', async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.code)
        });

        it('Should enter Origin Code', async () => {
            await enterpriseOrderManagementPage.setOrigin(data.originCode)
        });

        it('Should click on Search Skeletons Button', async () => {
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeletonButtonId)
        });

        it('Should click on Book load icon having Mode as Truck', async () => {
            await skeletonListingPage.clickOnBookIconHavingTruckMode();
        });

        it("Should click on Next Button in skelton pick screen", async () => {
            await skeletonListingPage.clickOnSkeletonNextButton();
        });

        it('Should select option for reason code', async () => {
            await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
        });

        it('Should click on book load with rate button', async () => {
            await skeletonListingPage.clickOnBookLoadWithoutRateButton();
        });

        it('Should click on Truck Under Current Date', async () => {
            await detailsPage.clickOnTruck();
        });

        it('Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time', async () => {
            await detailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
        });

        it('Should clear date and time in Scheduled Appointment Time for Stop 99', async () => {
            await detailsPage.setScheduledAppointmentTodayDateAndTimeInStop99(data.stop99Date, data.stop99BeginTime, data.stop99EndTime);
        });

        it('Should click on Load Detail Dropdown Tab', async () => {
            await orderDetailsViewPage.loadDetailsClick();
        });

        it('Should not contain any data in Monitor Dropdown', async () => {
            await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
        });

        it('Should Click on Bill To Dropdown Tab', async () => {
            await orderDetailsViewPage.billToClick();
        });

        it('Should Verify text in Classification tab', async () => {
            await orderDetailsViewPage.verifyClassificationText();
        });

        it('Should Click On COMMENTS Tab', async () => {
            await orderDetailsViewPage.commentsTabClick()
        });

        it('Should Click On The Dropdown Tab Underneath Type, Click GENERAL.', async () => {
            await commentsPage.commentsTypeValueSelection(data.commentType);
        });

        it('Should Add THIS IS A TEST ORDER DO NOT PROCESS In The Comment Section', async () => {
            await commentsPage.setComments(data.comment);
            await commentsPage.setComments(data.comment);
        });

        it('Should click On The Details Tab', async () => {
            await orderDetailsViewPage.detailsTabClick();
        });

        it('Verifying that the Comments Tab Is Now COMMENTS (1)', async () => {
            await expect<any>(orderDetailsViewPage.commentsTab.getText()).toBe(data.commentsText);
        });

        it('Should click on Create Load button', async () => {
            await detailsPage.clickOnCreateLoad();
        });

        it('Should Note Load Number', async () => {
            loadNumber = await detailsPage.focusLoadNumber();
            console.log(loadNumber);
            loadNumber = loadNumber.trim();
        });

        using(DataProvider.Tc_187453, async function (data) {

            it('Should open Eom url', async () => {
                await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
            });

            it('In the white text box next to LOAD#, enter load number', async () => {
                await enterpriseOrderManagementPage.setValuesInDataSpecificSearch(data.searchOption, loadNumber);
            });

            it("Should click on Search Skelton button", async () => {
                await enterpriseOrderManagementPage.clickSearchLoadsButton();
            });
            
             it("Verify your load populates in the search results. ", async () => {
                await expect<any>(enterpriseOrderManagementPage.verifyLoadnumberInLoadColum()).toContain(loadNumber);
            });

        })

    });

});