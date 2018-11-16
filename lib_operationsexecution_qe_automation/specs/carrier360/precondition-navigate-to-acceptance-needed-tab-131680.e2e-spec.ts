import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { DataProvider } from '../../data/dataProvider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { CommonFunctions } from '../../utilities/common-functions';
import { FreightManager2Page } from '../../pages/eom/freight-manager-2.po';
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';
import { TenderControlPage } from '../../pages/freight_manager/tender-control.po';
import { LoadBoardPage } from '../../pages/carrier360/load-board.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { DetailsPage } from '../../pages/eom/details.po';


let myJbHuntHomePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let loadDetailsPage = new DetailsPage();
let freightManagerPage = new FreightManager2Page();
let commonFunctions = new CommonFunctions();
let orderSegmentPage = new OrderSegmentPage();
let tenderControlPage = new TenderControlPage();
let loadBoardCarrierPage = new LoadBoardPage();

let using = require('jasmine-data-provider');
//TC #131680 :C360 | C360 | Navigate to Acceptance needed Tab
using(DataProvider.Tc_131689, async function (data) {

    describe(" Navigate to Acceptance needed Tab", () => {
        let projectCode: string;
        let loadNumber: string;

        // TC #131654: Open IE- Select EOM
        it('Should open EOM url', async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.enterPriceOrderManagementUrl);
        });

        // TC #131655: EOM | Search Skeleton - Book order
        it('Search Skeleton - Book order', async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
            await enterpriseOrderManagementPage.setSearchRestrictions(false, true, false);
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeltonButton);
            await enterpriseOrderManagementPage.waitTillProcessing(data.waitTillProcessingValue);
            await expect(skeletonListingPage.verifySkeltonList(0)).toBeTruthy();
            await skeletonListingPage.clickOnBookIconHavingRequiredBillTo(data.billToCode);
        });

        // TC #131658 :EOM | Choose reason code- Choose shipment method
        it('Choose reason code- Choose shipment method', async () => {
            await skeletonListingPage.clickNextONSelectPickUpDateScreen();
            await skeletonListingPage.selectRateCode(data.rateCode);
            await skeletonListingPage.clickBookLoadWithoutRate();
            await skeletonListingPage.clickTodayICS();
        });

        // TC #131660 :EOM | Set appointment times - Check monitor codes
        it('Set appointment times - Check monitor codes', async () => {
            await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.scheduledAppointmentBeginTime, data.scheduledAppointmentEndTime);
            await loadDetailsPage.receiverScheduledAppointmentEmptyCheck();
            await loadDetailsPage.loadDetailsClick();
            await loadDetailsPage.monitorsValueSelection('');
            projectCode = await loadDetailsPage.getProjectCodeValue();
            await loadDetailsPage.clickOnInputButton(loadDetailsPage.createLoadButton);
            loadNumber = await loadDetailsPage.getLoadNumber();
            await expect(loadNumber).not.toBe('');
        });

        // TC #131662 : TOAD | Set up toad - Check project Carrier query
        it('Set up toad - Check project Carrier query', async () => {
            let User: string = data.userID;
            let sql_Query_Update = await (data.sql_Query_Update).replace('#UserID', User.toUpperCase()).replace('#ProjectCode', projectCode);
            console.log(sql_Query_Update);
            let dbOutput = await commonFunctions.DBQueryHandler(data.DBName, data.conn_String, sql_Query_Update, true);
            console.log(JSON.parse(dbOutput));
            let sql_Query_Select = await (data.sql_Query_Select).replace('#UserID', User.toUpperCase()).replace('#ProjectCode', projectCode);
            let dbOutput_select = await commonFunctions.DBQueryHandler(data.DBName, data.conn_String, sql_Query_Select, true);
            console.log(JSON.parse(dbOutput_select));
        });

        // TC #131664 : FM2 | Order Segment
        it('Order Segment', async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.option, data.orderSegmentTitle);
        });

        // TC #131667 : FM2 | Create Preplan
        it('Create Preplan', async () => {
            await orderSegmentPage.enterOrderNumber(loadNumber, 'Order Number');
            await orderSegmentPage.clickSearchButton();
            await orderSegmentPage.clickRefreshButton();
            await orderSegmentPage.enterProjectCarrierNumber(projectCode, data.carrierCode);
            await orderSegmentPage.clickCreatePreplanButton();
            let verify_msg: string = await orderSegmentPage.verifyEventMessages(data.carrierPreplanMessage);
            await expect(verify_msg).toContain(data.sucessMesage);
        });

        // TC #131669 : FM2 | Tender Create
        //TC #156948 : C360 | Carrier Tender Control Screen
        it('Tender Create', async () => {
            await orderSegmentPage.selectOrderRadioButton1();
            await orderSegmentPage.clickTenderControlButton();
            await tenderControlPage.waitUntilPageLoads();
            await tenderControlPage.enterCarrierDetails(data.type, data.firstName, data.lastName, data.phone);
            await tenderControlPage.handleCarrierApprovalFlow(data.approvalValue);
            await tenderControlPage.clickCreateTenderButton();
            let verify_msg: string = await tenderControlPage.verifyEventMessages(data.tenderSucessMsg);
            await expect(verify_msg).toContain(data.tenderSucessMsg);
        });

        // TC #131672 : IE | Turn off Windows Integrated Authority
        /*         it('IE-Turn off Windows Integrated Authority', async () => {
                    let result: boolean = await myJbHuntHomePage.chanegIESettings(data.registryPath);
                    await expect(result).toBeTruthy();
                }); */

        // TC #131674 :C360 | Log in to C360
        it('Login into C360', async () => {
            await myJbHuntHomePage.navigateTo360HomePortal(myJbHuntHomePage.carrier360Url);
        });

        it("Click on Manage Loads", async () => {
            await loadBoardCarrierPage.clickOnCarrierTabs(loadBoardCarrierPage.manageBoard);
            await loadBoardCarrierPage.browserRefresh();
            await loadBoardCarrierPage.clickOnCarrierTabs(await loadBoardCarrierPage.manageBoard);
        });

        it("Click on Acceptance Needed tab", async () => {
            await loadBoardCarrierPage.clickOnCarrierTabs(loadBoardCarrierPage.acceptanceNeeded);
        });

    });
    
});





