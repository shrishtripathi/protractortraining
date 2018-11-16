import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { CommentsPage } from "../../pages/eom/comments.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeltonListingPage = new SkeletonListingPage();
let loadDetailsPage = new DetailsPage();
let commentsPage = new CommentsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let using = require('jasmine-data-provider');

// TC 185027 - EOM Multi Pick/Drop Load Create
using(DataProvider.Tc_185027, async function (data) {
    describe("EOM Multi Pick/Drop Load Create", function () {
        let loadNumber: string;
        let route: string;
        let originRamp: string;
        let destinationRamp: string;

        it("Should open EOM url", () => {
            enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("should enter 'GEEC' in Bill To Code field", async function () {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("should enter 'LGFO18' in Origin field", async function () {
            await enterpriseOrderManagementPage.setOrigin(data.origin);
        });

        it("Should click on Search Skelton button", async () => {
            await enterpriseOrderManagementPage.clickSearchSkeletons();
        });

        it("Verifying that skeltons list will be displayed", async () => {
            await expect(skeltonListingPage.verifySkeltonList(0)).toBeTruthy();
        });

        it("Should find an order that has HJBT JBVAN underneath Division, and TRAIN underneath Mode and click on skelton book load", async () => {
            await skeltonListingPage.clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode();
        });

        it("Verifying that skeltons pick screen will be displayed", async () => {
            await expect<any>(skeltonListingPage.getSkeletonPickScreenTitle()).toBe(data.skeletonPickScreenTitle);
        });

        it("Should click on Next Button in skelton pick screen", async () => {
            await skeltonListingPage.clickOnSkeletonNextButton();
        });

        it("Should click on IM", async () => {
            await skeltonListingPage.clickOnIM();
        });

        it("Verifying that New Load Deatils screen will be displayed", async () => {
            await expect<any>(loadDetailsPage.getStandardNewLoadScreenTitle()).toBe(data.standardNewLoadScreenTitle);
        });

        it("Click on the COMMENTS tab on the EOM load details screen ", async () => {
            await orderDetailsViewPage.commentsTabClick();
        });

        it("Click the dropdown tab underneath Type, click GENERAL.", async () => {
            await commentsPage.commentsTypeValueSelection(data.commentType);
        });
        
        it("In the COMMENT box type, 'THIS IS A TEST ORDER ONLY. DO NOT PROCESS!' ", async () => {
            await commentsPage.setComments(data.comment);
        });

        it("Click on the details tab", async () => {
            await orderDetailsViewPage.detailsTabClick();
        });
       
        it("Should click on dropdown tab next to Load DETAIL", async () => {
            await loadDetailsPage.clickOnMinimizerOrMaximizerOfLoadDetails();
        });

        it("Should select empty from Monitor Code dropdown", async () => {
            await loadDetailsPage.monitorsValueSelection(" ");
        });

        it("Should click on dropdown tab next to Bill To GEEC", async () => {
            await loadDetailsPage.clickOnMinimizerOrMaximizerOfBillToCode();
        });

        it("Verifying no classifications are selected.", async () => {
            await loadDetailsPage.verifyClassificationValue(data.empty);
        });

        it("Should click on add stop button", async () => {
            await loadDetailsPage.clickOnAddStopButton();
        });
        
        it("Should click on add stop button", async () => {
            await loadDetailsPage.clickOnAddStopButton();
        });

        it("Should select Shipper from the drop down to stop2", async () => {
            await loadDetailsPage.setStop2DropDown(data.shipperDropDown)
        });

        it("Should enter the Shipper Code", async () => {
            await loadDetailsPage.enterShipperCode(data.shipperCode);
        });

        it("Should select RECEIVER from the drop down to stop3", async () => {
            await loadDetailsPage.setStop3DropDown(data.ReceiverDropDown)
        });

        it("Should enter the RECEIVER Code", async () => {
            await loadDetailsPage.enterStop3Code(data.ReceiverCode);
        });

        it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop1", async () => {
            await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
        });

        it("Should enter the date 5 days after current date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop2", async () => {
            await loadDetailsPage.setStop2ScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
        });

        it("Should Click the dropdown tab underneath HAZMAT, click to select N.", async () => {
            await loadDetailsPage.setStop2HazmatDropdown(data.hazmatDropDownValue);
        });

        it("Should Click the dropdown tab underneath LOADED ON, click to select FLOOR", async () => {
            await loadDetailsPage.setStop2LoadedOnDropdown(data.loadedOnDropDownOption);
        });

        it("Click the dropdown tab underneath DRIVER COUNT, click to select N", async () => {
            await loadDetailsPage.setStop2DriverCountDropdown(data.driverCountDropDownOption);
        });

        it("Click the dropdown tab underneath LOAD/UNLOADED BY, click to select CUSTOMER", async () => {
            await loadDetailsPage.setStop2LoadAndUnloadedByDropdown(data.loadUnlodedByDropDownOption);
        });

        it("Should enter the date 5 days after the date on STOP 2 date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop2", async () => {
            await loadDetailsPage.setStop3ScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
        });

        it("Click the dropdown tab underneath DRIVER COUNT, click to select N", async () => {
            await loadDetailsPage.setStop3DriverCountDropdown(data.driverCountDropDownOption);
        });

        it("Click the dropdown tab underneath LOAD/UNLOADED BY, click to select CUSTOMER", async () => {
            await loadDetailsPage.setStop3LoadAndUnloadedByDropdown(data.loadUnlodedByDropDownOption);
        });

        it("Should enter the date 5 days after the date on STOP 3 date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time for stop2", async () => {
            await loadDetailsPage.setLastStopScheduledAppointmentTodayDateAndTime(data.stopOneBeginTime, data.stopOneEndTime);
        });

        it("Should click on Create Load button", async () => {
            await loadDetailsPage.clickOnCreateLoad();
            await orderDetailsViewPage.clickOnOverRideSelectButton();
        });

        it("Should take note of the load number at the top of the page", async () => {
            loadNumber = await loadDetailsPage.focusLoadNumber();
        });

        it("Should take note of the destination details at bottom of the page", async () => {
             originRamp=await loadDetailsPage.getOriginRamp();
        });
    });
});
