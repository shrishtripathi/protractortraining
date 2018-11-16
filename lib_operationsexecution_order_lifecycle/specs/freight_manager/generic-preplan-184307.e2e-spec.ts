import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { DataProvider } from "../../data/dataProvider";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { BasePage } from "../../pages/base.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { CommentsPage } from "../../pages/eom/comments.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { CustomerPoolPage } from "../../pages/freight_manager/customer-pool.po";



let unitViewPage = new UnitViewPage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let basePO = new BasePage();
let orderSegmentPage = new OrderSegmentPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeltonListingPage = new SkeletonListingPage();
let loadDetailsPage = new DetailsPage();
let commentsPage = new CommentsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let customerPoolPage = new CustomerPoolPage();

let using = require('jasmine-data-provider');
let loadNumber: string;
let originRamp: string;
let unitNumber: string;
let equipmentnumber: string

using(DataProvider.Tc_184307, async function (data) {

    describe("Generic Preplan", function () {
        //180979: EOM Multi Pick/Drop Load Create
        using(DataProvider.Tc_185027, async function (data) {

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
                originRamp = await loadDetailsPage.getOriginRamp();
            });
        });

        //TC 187034: Finding a JBC driver
        using(DataProvider.Tc_187034, async function (data) {

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

            });

            it('should click on Search Button', async () => {
                await unitViewPage.clickOnSearchButton();
            });

            it("Select driver from the displayed search results", async () => {
                unitNumber = await unitViewPage.getAvailableTractor(data.dSPSTT, data.oBCError);
                await console.log("Load Number :" + unitNumber);
            });

            it("Verify the other columns data from Serach results", async () => {
                await expect<any>(unitViewPage.validateBarCodeSearchResults(unitNumber)).toBeTruthy();
            });

        });

        using(DataProvider.Tc_180988, async function (data) {

            it("open browser and enter url' ", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Hover over the Equipment tab, click Customer Pool to select.", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });

            it("Click the dropdown tab next to Division, click to select HJBT JBVAN", async () => {
                await customerPoolPage.selectDivision(data.division);
            });

            it("In the white text box next to Cust Code, enter LGFO18.", async () => {
                await customerPoolPage.enterCustCode(data.Cust_code);
            });

            it("Click on Search button", async () => {
                await customerPoolPage.clickOnSearchButton();
            });

            it("Take note of the equipment number.", async () => {
                equipmentnumber = await customerPoolPage.equipmentNumberWithEmptyLoadStausAndPreFix('JBHU');
                console.log('equipmentnumber: '+equipmentnumber)
            });

            //184307:
            using(DataProvider.Tc_184307, async function (data) {

                it("open browser and enter url' ", async () => {
                    await basePO.navigateToAppHome(basePO.freightManager2);
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
                    await orderSegmentPage.enterTractorNumber(unitNumber);
                });

                it("In the white text box underneath TCall Location, enter the origin ramp (for this example my origin ramp is D?). ", async () => {
                    await orderSegmentPage.EnterTcall(originRamp, " Origin Ramp value");
                });

                it("Click the check boxes.", async () => {
                    await orderSegmentPage.clickAllCheckbox();
                });

                it("Click the Create preplan button. IF REQUIRED, click the Continue button). ", async () => {
                    await orderSegmentPage.clickOnCreatePreplanButton();
                });

                it("Should click the driver number hyperlink underneath Power Driver", async () => {
                    await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(data.tractorNo);
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
                    await customerPoolPage.enterDetailsInCommentPopup(data.commentPopup_TrlrCode, equipmentnumber);
                });

                it("Should click on update button on Comment window", async () => {
                    await checkCallDetailsPage.clickOnUpdateOnPopup();
                });
            });

        });
    });
});
