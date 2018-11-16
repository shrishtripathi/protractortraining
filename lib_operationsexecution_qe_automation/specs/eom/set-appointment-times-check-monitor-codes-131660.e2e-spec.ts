
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

//TC #131660: Set appointment times - Check monitor codes
using(DataProvider.Tc_131660, async function (data) {

    describe("Set appointment times - Check monitor codes", () => {

        it("Open My JBHunt url", async () => {
            await myJbHuntHomePage.openEomUrl();
        });

        it("On the EOM home page enter 'GEEC' in ''BILL TO CODE'' field", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("Click ''SEARCH SKELETON'' BUTTON", async () => {
            await myJbHuntHomePage.clickOnEOMButton(data.searchSkeltonButton);
        });

        it("Click green ''BOOK ORDER'' icon of chosen skeleton having rate ", async () => {
            await skeletonListingPage.clickOnBookIconHavingRequiredDivison(data.division);
        });

        it("Click ''NEXT'' ", async () => {
            await skeletonListingPage.clickNextONSelectPickUpDateScreen();
        }); 
       
        it("Should Click ''TRUCK'' under current date", async ()=> {
            await skeletonListingPage.clickOnIcsUnderCurrentDate(data.modeType);       
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
        
        it("Should click on Create Load button", async () => {
            await detailsPage.clickOnCreateLoad();
            let laodnumber: string = await detailsPage.loadNumberMessage();
       });

    });

});
