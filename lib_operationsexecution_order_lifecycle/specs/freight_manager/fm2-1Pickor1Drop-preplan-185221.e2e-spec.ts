import { DataProvider } from "../../data/dataProvider"
import { DeliveryPage } from "../../pages/freight_manager/delivery.po";
import { UnitViewPage } from '../../pages/freight_manager/unit-view.po';
import { UnitViewParameterPage } from "../../pages/freight_manager/unit-view-parameter.po";
import { BasePage } from "../../pages/base.po";
import { FleetDecisionPage } from "../../pages/eom/fleet-decision.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { DetailsPage } from "../../pages/eom/details.po";
import { async } from 'q'
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { browser } from "protractor";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";

let unitViewPage = new UnitViewPage();
let deliveryPage = new DeliveryPage();
let unitViewParameterPage = new UnitViewParameterPage()
let freightManager2Page = new FreightManager2Page();
let myJbHuntHomePage = new MyJbHuntHomePage();
let skeletonListingPage = new SkeletonListingPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let detailsPage = new DetailsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let basePO = new BasePage();
let OrderSegmentPag = new OrderSegmentPage();
let details = new DetailsPage();
let using = require('jasmine-data-provider');
let createdLoadNumber: string;
let unitNumber: string;


using(DataProvider.Tc_184948, async function (data) {
    describe("EOM 1Pick/1Drop Load Create", () => {

        it("Should open Eom url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.eomUrl)
        });

        it('Should Enter Bill to Code', async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.code)
        });

        it('Should Enter Origin Code', async () => {
            await enterpriseOrderManagementPage.setOrigin(data.originCode)
        });

        it('Should Click on Search Skeletons Button', async () => {
            await enterpriseOrderManagementPage.clickOnEOMButton(data.searchSkeletonButtonId)
        });

        it('Should Click on Book load icon having Mode as Train', async () => {
            await skeletonListingPage.clickOnBookLoadIconHavingTrainMode();
        });

        it('Should Click on Next in Select Pick Up Date Screen', async () => {
            await skeletonListingPage.clickNextONSelectPickUpDateScreen()
        });

        it('Should Click on IM Under Current Date', async () => {
            await skeletonListingPage.clickOnIcsUnderCurrentDate(data.mode);
        });

        it('Should Set Time under Scheduled Appointmnet', async () => {
            await detailsPage.setScheduledAppointmentTodayDateAndTime(data.beginTime, data.endTime)
        });

        it('Should set Stop99 Scheduled Appointment Date And Time', async () => {
            await detailsPage.setStop99ScheduledAppointmentTommorowDateAndTime(data.startTime, data.endingTime);
            await browser.sleep(10000);
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

        it('Should Click on Create Load Button', async () => {
            await orderDetailsViewPage.clickOnCreateLoadButton()
        });

        it('Should Note Load Number', async () => {
            createdLoadNumber = await orderDetailsViewPage.loadNumberCreateLoad();
        });
    });
})

using(DataProvider.Tc_187034, async function (data) {
    describe("Finding a JBC driver", () => {

        it('Should Navigate to Freight Manager2 url', async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
        });

        it("Should select 'Unit View' under planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
        });

        it("should enter Board Codes", async () => {
            await unitViewPage.enterBarCodes(data.boardCode1, 1);
            await unitViewPage.enterBarCodes(data.boardCode2, 2);
            await unitViewPage.enterBarCodes(data.boardCode3, 3);
            await unitViewPage.enterBarCodes(data.boardCode4, 4);
            await unitViewPage.clickOnSearchButton();
            
        });

        it("Select driver from the displayed search results", async () => {
            unitNumber = await unitViewPage.getAvailableTractor(data.dSPSTT, data.oBCError);
        });

        it("Verify the other columns data from Serach results", async () => {
            await expect<any>(unitViewPage.validateBarCodeSearchResults(unitNumber)).toBeTruthy();
        });
    });
});

using(DataProvider.Tc_185221, async function (data) {
    describe("FM2 1Pick/1Drop Preplan", () => {

        it("open browser and enter url' ", async () => {
            await basePO.navigateToAppHome(basePO.freightManager2);
        });

        it("Hover over the Planning tab, click Order Segment to select.", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
        });

        it("In the white text box underneath Order#, enter the earlier noted load number,", async () => {
            await OrderSegmentPag.enterOrderNumber(createdLoadNumber, 'Order #');
        });

        it("Click on Search button", async () => {
            await OrderSegmentPag.clickOnSearchButton();       
        });

        it("Click the radial button next to Tractor", async () => {
            await OrderSegmentPag.selectRadioPreplanType(data.radialValue);
        });

        it("In the white text box underneath Tractor enter the earlier noted driver number.", async () => {
            await OrderSegmentPag.enterTractorNumber(unitNumber);
        });

        it("Click all check boxes.", async () => {
            await OrderSegmentPag.selectAllCheckBox();
        });

        it("In the white text box underneath TCall Location, enter the origin ramp (for this example my origin ramp is D?). ", async () => {
            await OrderSegmentPag.EnterTcall(data.TCall_Location_origenmap, " Origin Ramp value");
        });

        it("Click the Create preplan button. IF REQUIRED, click the Continue button). ", async () => {
            await OrderSegmentPag.clickOnCreatePreplanButton();            
        });
    });
});

















