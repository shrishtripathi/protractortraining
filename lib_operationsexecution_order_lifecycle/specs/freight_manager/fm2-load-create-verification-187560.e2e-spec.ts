import { DataProvider } from "../../data/dataProvider";
import { DetailsPage } from "../../pages/eom/details.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { CustomerPoolPage } from "../../pages/freight_manager/customer-pool.po";
import { BasePage } from '../../pages/base.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { CommentsPage } from '../../pages/eom/comments.po';

let basePage = new BasePage();
let loadDetailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let unitViewPage = new UnitViewPage();
let customerPoolPage = new CustomerPoolPage();
let using = require('jasmine-data-provider');
let fleetDecisionPage = new FleetDecisionPage();
let commentsPage = new CommentsPage();
//let detailsPage = new DetailsPage();

//TC #187560: FM2 Load Create Verification
describe('FM2 Load Create Verification', async () => {
    let loadNumber: string;
    

    using(DataProvider.Tc_184961, async function (data) {
            
        
        it("Should open EOM Search page url ", async () => {
            await basePage.navigateToAppHome(basePage.eomUrl);
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

        it("should Click Next button", async () => {
            await skeletonListingPage.clickOnSkeletonNextButton();
        });

        it("Should Click IM ", async () => {
            await fleetDecisionPage.pickTruckOrIMBasedOnMode(data.mode);
        });

        it("should Click Load details extension tab", async () => {
            await orderDetailsViewPage.loadDetailsClick();
        });

        it("Should select H in monitor dropdown ", async () => {
            await orderDetailsViewPage.monitorsValueSelection(data.monitorValue);
        });

        it("Should click Bill to GEEC extension tab ", async () => {
            await orderDetailsViewPage.billToClick();
        });

        it("should click On Classification Lens Icon ", async () => {
            await orderDetailsViewPage.clickOnClassificationLensIcon();
        });

        it("Should click On High Value ", async () => {
            await orderDetailsViewPage.clickOnHighValueCheckbox();
        });

        it("Should click On Close window button ", async () => {
            await orderDetailsViewPage.clickOncloseWindowButton();
        });

        it("Should set Start time and End Time for Stop 1 ", async () => {
            await orderDetailsViewPage.scheduledAppointmentTimeSet(data.startTime, data.endTime);
        });

        it("Should clear appoinment date Time for Stop 99 ", async () => {
            await orderDetailsViewPage.clearScheduleAppointmentDateTimeForStop99();
        });

        it("Click on the COMMENTS tab  ", async () => {
            await orderDetailsViewPage.commentsTabClick();
        });

        it("Click the dropdown tab underneath Type, click GENERAL.", async () => {
            await commentsPage.commentsTypeValueSelection(data.commentType);
        });

        it("In the COMMENT box type, 'THIS IS A TEST ORDER ONLY. DO NOT PROCESS!' and Click on 'SAVE COMMENTS' IF SAVE COMMENTS BUTTON IS AVAILABLE,", async () => {
            await commentsPage.setComments(data.comment);
            await commentsPage.clickonSaveCommentsIfSaveButtonExists();

        });

        it("Click on the details tab", async () => {
            await orderDetailsViewPage.detailsTabClick();
        });

        it("Should click on create load button ", async () => {
            await orderDetailsViewPage.clickOnCreateLoadButton();
        });

        it("Should note the Load Number ", async () => {
            loadNumber = await orderDetailsViewPage.loadNumberCreateLoad();
        });

       
    });   
    
    using(DataProvider.Tc_185221, async (data) => {
        it("open browser and enter url' ", async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
        });

        it("Hover over the Planning tab, click Order Segment to select.", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
        });

        it("In the white text box underneath Order#, enter the earlier noted load number,", async () => {
            await orderSegmentPage.enterOrderNumber(loadNumber, 'Order #');
        });

        it("Click on Search button", async () => {
            await orderSegmentPage.clickOnSearchButton();
        });

        it("Verify Order Number is displayed", async () => {
            expect(orderSegmentPage.verifyOrderNumber(loadNumber)).toBeTruthy();
        });
         

    });

});
   

