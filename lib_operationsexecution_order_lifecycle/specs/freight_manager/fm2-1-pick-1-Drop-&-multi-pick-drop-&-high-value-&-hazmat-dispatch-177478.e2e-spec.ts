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

//TC #177478: FM2 1Pick/1Drop & Multi Pick/Drop & High Value & Hazmat Dispatch
describe('FM2 1Pick/1Drop & Multi Pick/Drop & High Value & Hazmat Dispatch', async () => {
    let loadNumber: string;
    let tractorNumber: string;
    let equipmentNo: string;
    let chassisNo: string;

    using(DataProvider.Tc_184948, async (data) => {

        it("Should open Eom url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl)
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
            await loadDetailsPage.setScheduledAppointmentTodayDateAndTime(data.beginTime, data.endTime)
        });

        it('Should set Stop99 Scheduled Appointment Date And Time', async () => {
            await loadDetailsPage.setStop99ScheduledAppointmentTommorowDateAndTime(data.startTime, data.endingTime);
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
            loadNumber = await loadDetailsPage.focusLoadNumber();
            loadNumber = loadNumber.trim();
            console.log("data.loadNumber:" + loadNumber);
        });
    });

    using(DataProvider.Tc_187034, async (data) => {

        it('Should Navigate to Freight Manager2 url', async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
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
            tractorNumber = await unitViewPage.getAvailableTractor(data.dSPSTT, data.oBCError);
            tractorNumber = tractorNumber.trim();
            console.log("data.tractorNumber:" + tractorNumber);
        });

        it("Verify the other columns data from Serach results", async () => {
            await expect<any>(unitViewPage.validateBarCodeSearchResults(tractorNumber)).toBeTruthy();
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

        it("Click the radial button next to Tractor", async () => {
            await orderSegmentPage.selectRadioPreplanType(data.radialValue);
        });

        it("In the white text box underneath Tractor enter the earlier noted driver number.", async () => {
            await orderSegmentPage.enterTractorNumber(tractorNumber);
        });

        it("Click all check boxes.", async () => {
            await orderSegmentPage.clickcheckbox();
        });

        it("In the white text box underneath TCall Location, enter the origin ramp (for this example my origin ramp is D?). ", async () => {
            await orderSegmentPage.EnterTcall(data.TCall_Location_origenmap, " Origin Ramp value");
        });

        it("Click the Create preplan button. IF REQUIRED, click the Continue button). ", async () => {
            await orderSegmentPage.clickOnCreatePreplanButton();
        });

    });

    using(DataProvider.Tc_185250, async (data) => {

        it("Should open homepage", async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
        });

        it("Should click on Customer Pool option under Equipment tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.equipmentTab, data.optionCustomerPool);
        });

        it("Should set values in customer pool page", async () => {
            await customerPoolPage.setValuesInEquipmentPoolLookup(data.customerPool_Division, data.customerPool_CustCode, "", "");
        })

        it("Should click on search button on customer Pool screen", async () => {
            await customerPoolPage.clickSearchButton();
        });

        it("Should find equipment number with prefix JBHU and LT St Empty", async () => {
            equipmentNo = await customerPoolPage.getEquipmentNumberFromCustomerPoolTable(data.customerPool_Column1, data.customerPool_Column1Value, data.customerPool_Column2, data.customerPool_Column2Value, data.customerPool_RequiredColumn);
        });

        it("Should click on Order Segment Option", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.optionOrderSegment);
        });

        it("Should enter the order Number on Order Segment screen", async () => {
            await orderSegmentPage.enterOrderNumber(loadNumber, "Order Number");
        });

        it("Should click on Search button on Order Segment screen", async () => {
            await orderSegmentPage.clickSearchButton();
        });

        it("Should click the driver number hyperlink underneath Power Driver", async () => {
            await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(tractorNumber);
        });

        it("verify Check Calls Details screen opens", async () => {
            await checkCallDetailsPage.verifyCheckCallDetailsPage();
        });

        it("Should hover status Option from header", async () => {
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });

        it("Should click on Comment option", async () => {
            await freightManager2Page.clickHeaderDropDownOption(data.headerDropDownOptionComment);
        });

        it("Wait till Comment window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Should enter details in Comment Tab", async () => {
            await customerPoolPage.enterDetailsInCommentPopup(data.commentPopup_TrlrCode, equipmentNo);
        });

        it("Should click on update button on Comment window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Should hover status Option from header", async () => {
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });

        it("Should click on dispatch option", async () => {
            await freightManager2Page.clickHeaderDropDownOption(data.headerDropDownOptionDispatch);
        });

        it("Wait till dispatch window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Should click on update button on dispatch window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Verify Dispatch is completed", async () => {
            let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.transactionValue);
            await expect(result).toBeTruthy();
        });

        it("Should take note of the Chassis number", async () => {
            chassisNo = await checkCallDetailsPage.getElementText(checkCallDetailsPage.chassisNumber);
            expect(chassisNo).not.toBeUndefined();
        });

    });

});
