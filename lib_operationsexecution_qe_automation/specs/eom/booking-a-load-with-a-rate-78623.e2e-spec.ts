import { browser } from 'protractor';
import { DataProvider } from '../../data/dataprovider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { CommentsPage } from '../../pages/eom/comments.po';
import { AccessorialsPage } from '../../pages/eom/accessorials.po';
import { DetailsPage } from '../../pages/eom/details.po';
import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let commentsPage = new CommentsPage();
let accessorialsPage = new AccessorialsPage();
let detailsPage = new DetailsPage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let using = require('jasmine-data-provider');

//TC #78623: EOM_Regression_3 Booking a load with a rate
using(DataProvider.Tc_78623, async function (data) {

    describe("Booking a load with a rate", () => {

        it("Open My JBHunt url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("On the EOM home page enter 'DAMAC8' in ''BILL TO CODE'' field", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("Click ''SEARCH SKELETON'' BUTTON", async () => {
            await myJbHuntHomePage.clickOnEOMButton(data.searchSkeltonButton);
        });

        it("Click green ''BOOK ORDER'' icon of chosen skeleton having rate ", async () => {
            await skeletonListingPage.bookOrderHavingRate();
        });

        it("Click ''NEXT'' ", async () => {
            await skeletonListingPage.clickNextONSelectPickUpDateScreen();
        });

        it("Click ''TRUCK'' under current date ", async () => {
            await skeletonListingPage.clickTodayTruck();
        });

        it("Set shipper scheduled appointment time to 19:00-23:00", async () => {
            await orderDetailsViewPage.scheduledAppointmentTimeSet(data.scheduledAppointmentBeginTime, data.scheduledAppointmentEndTime);
        });

        it("Should check receiver scheduled appointment date fields are empty", async () => {
            await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
            await orderDetailsViewPage.receiverSuggestedAppointmentEmptyCheck();
            await orderDetailsViewPage.receiverCustomerRequestedEmptyCheck();
        });

        it("Should click on load detail tab", async () => {
            await orderDetailsViewPage.loadDetailsClick()
        });

        it("Should change monitor code to blank space", async () => {
            await orderDetailsViewPage.monitorsValueSelection("");
        });

        it("Should click on Reference Numbers", async () => {
            await orderDetailsViewPage.referenceNumbersTabClick();
        });

        it("Select select any  code from the STOP CODE drop down box", async () => {
            await orderDetailsViewPage.selectAnyValueFromStopCodeDropDown(data.stopCodeOne);
        });

        it("Select SHIPID from TYPE  dropdown ", async () => {
            await orderDetailsViewPage.typeValueSelection(data.shippingID);
        });

        it("set New referenc Fields", async () => {
            await orderDetailsViewPage.setNewreferencFields(data.referenceNumber, data.quantity, data.weight, data.volume);
        });

        it("Should click on the comments tab", async () => {
            await orderDetailsViewPage.commentsTabClick();
        });

        it("Should select GENERAL under Type field", async () => {
            await commentsPage.commentsTypeValueSelection(data.typeFieldOption);
        });

        it("Should type lowar under Location field", async () => {
            await commentsPage.setLocation(data.locationFieldValue);
        });

        it("Should enter HELLO FROM THE OTHER SIDE in comment field", async () => {
            await commentsPage.setComments(data.commentValue);
        });

        it("Should click on ACCESSORIALS", async () => {
            await accessorialsPage.accessorialsTabClick();
        });

        it("Should select 1 from STOP#", async () => {
            await accessorialsPage.stopDropDownValueSelection(data.stopCodeOne);
        });

        it("Should select DETENTION from CHARGE CODE", async () => {
            await accessorialsPage.chargeCodeDropDownValueSelection(data.chargeCode);
        });

        it("set New Accessorial Fields", async () => {
            await accessorialsPage.setNewAccessorialFields(data.quantityFifty, data.unitRate, data.referenceNumber, data.authFirstName, data.authLastName);
        });

        it("Should click on details ", async () => {
            await accessorialsPage.detialsTabClick()
        });

        it("Should click on Create Load button", async () => {
            await detailsPage.clickOnCreateLoad();
            let laodnumber: string = await detailsPage.getLoadNumber();
            console.log("laodnumber: " + laodnumber);
        });
     
    });

});
