import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { CommentsPage } from "../../pages/eom/comments.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { CustomerPoolPage } from "../../pages/freight_manager/customer-pool.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeltonListingPage = new SkeletonListingPage();
let loadDetailsPage = new DetailsPage();
let commentsPage = new CommentsPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let unitViewPage = new UnitViewPage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let customerPoolPage = new CustomerPoolPage();
let using = require('jasmine-data-provider');

describe("FM2 Multi Pick/Drop Dispatch", function () {

    // TC 180979 - EOM Multi Pick/Drop Load Create
    using(DataProvider.Tc_185243, async function (data) {
        let unitNumber: string;
        let loadNumber: string;
        let route: string;
        let originRamp: string;
        let destinationRamp: string;
        let chassisNo: string;
        let equipmentNo: string;


        describe("EOM Multi Pick/Drop Load Create", function () {

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
                await commentsPage.setComments(data.comment);
            });

            it("Verifying comments", async () => {
                await expect<any>(commentsPage.verifyCommentsTab()).toBe(data.commentsText);
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
                console.log("loadNumber",loadNumber)
            });

            it("Should take note of the destination details at bottom of the page", async () => {
                originRamp = await loadDetailsPage.getOriginRamp();
            });
        });

        //TC 187034: Finding a JBC Driver
        using(DataProvider.Tc_187034, async function (data) {

            describe('Finding a JBC Driver', () => {

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
                    console.log("unitNumber", unitNumber);
                });

                it("Verify the other columns data from Serach results", async () => {
                    await expect<any>(unitViewPage.validateBarCodeSearchResults(unitNumber)).toBeTruthy();
                });

            })
        });

        using(DataProvider.Tc_185243, async function (data) {

            describe("FM2 Multi Pick/Drop Preplan", function () {

                it("Should open browser and enter url' ", async () => {
                    await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
                });

                it("Should hover over the Planning tab, click Order Segment to select.", async () => {
                    await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
                });

                it("SHould enter in the white text box underneath Order#, enter the earlier noted load number,", async () => {
                    await orderSegmentPage.enterOrderNumber(loadNumber, 'Order #');
                });

                it("Should click on Search button", async () => {
                    await orderSegmentPage.clickOnSearchButton();
                    await orderSegmentPage.clickOnSearchButton();
                });

                it("Should click the radial button next to Tractor", async () => {
                    await orderSegmentPage.selectRadioPreplanType(data.radialValue);
                });

                it("Should enter in the white text box underneath Tractor enter the earlier noted driver number.", async () => {
                    await orderSegmentPage.enterTractorNumber(unitNumber);
                });

                it("Should click the first two check boxes.", async () => {
                    await orderSegmentPage.selectAllCheckBox();
                });

                it("Should enter in the white text box underneath TCall Location, enter the origin ramp (for this example my origin ramp is D?). ", async () => {
                    await orderSegmentPage.EnterTcall(originRamp, " Origin Ramp value");
                });

                it("Should click the Create preplan button. IF REQUIRED, click the Continue button). ", async () => {
                    await orderSegmentPage.clickOnCreatePreplanButton();
                });

            })
        });

        //TC-185250 :FM2 1Pick/1Drop & Multi Pick/Drop & High Value & Hazmat Dispatch
        using(DataProvider.Tc_185250, async function (data) {

            describe("1Pick/1Drop & Multi Pick/Drop & High Value & Hazmat Dispatch", function () {
                
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
                    await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(unitNumber);
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



    });

});
