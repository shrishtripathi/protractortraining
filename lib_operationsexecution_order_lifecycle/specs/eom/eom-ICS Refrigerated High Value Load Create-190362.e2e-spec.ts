import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { browser } from 'protractor';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { DetailsPage } from '../../pages/eom/details.po';
import { CommentsPage } from '../../pages/eom/comments.po';


let basePage = new BasePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');
let fleetDecisionPage = new FleetDecisionPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let detailsPage = new DetailsPage();
let commentsPage = new CommentsPage();

// TC #180497: EOM Refrigerated High value load create
using(DataProvider.Tc_190362, async function (data) {

    describe("EOM High value load create ", () => {
let loadNumber: string;
        it("Should open EOM Search page url ", async () => {
            await basePage.navigateToAppHome(basePage.eomUrl);            
        });

        it("Should enter the Bill of Code Text ", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("Should click search skeleton button ", async () => {
            await enterpriseOrderManagementPage.clickSearchSkeletons();
        });

        it("Should Click the Book load order that contains division as HJBT JBHA and Truck as mode", async () => {
            await skeletonListingPage.clickOnBookLoadWithDivisionHJBTJBHAandTruckMode();
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
  
        it("Should click Bill to MOCHBA extension tab ", async () => {
            await orderDetailsViewPage.billToClick();
        });

        it("Should click On Classification Lens Icon ", async () => {
            await orderDetailsViewPage.clickOnClassificationLensIcon();
        });

        it("Should click On High Value ", async () => {
            await orderDetailsViewPage.clickOnHighValueCheckbox();
        });

        it("Should click On Reefer ", async () => {
            await orderDetailsViewPage.clickOnReeferCheckbox();
        });

         
        it("Should click On Close window button ", async () => {
            await orderDetailsViewPage.clickOncloseWindowButton();
        });

        //Pending
        it("Should set Start time and End Time for Stop 1 ", async () => {
            await orderDetailsViewPage.scheduledAppointmentTimeSet(data.startTime, data.endTime);
        });

        it("Should clear appoinment date Time for Stop 99 ", async () => {
            await orderDetailsViewPage.clearScheduleAppointmentDateTimeForStop99();
        });

        it("Should click on create load button ", async () => {
            await orderDetailsViewPage.clickOnCreateLoadButton();
            await orderDetailsViewPage.ClickOnContinueButtonClass();
        });

        it('Should Note Load Number', async () => {
            loadNumber = await detailsPage.getLoadNumber();              
        });

        
    })
});