import { FreightManager2Page } from "../../pages/eom/freight-manager-2.po";
import { DataProvider } from "../../data/dataprovider";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CustomerPoolPage } from "../../pages/eom/customer-pool.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { TenderControlPage } from "../../pages/freight_manager/tender-control.po";
import { EomSearchPage } from "../../pages/eom/eom-search-page.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManagerPage = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let customerPoolPage = new CustomerPoolPage();
let unitViewPage = new UnitViewPage();
let eomPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsPage = new OrderDetailsViewPage();
let detailPage = new DetailsPage()
let eomSearchPage = new EomSearchPage();
let commonFunctions = new CommonFunctions();
let tenderControlPage = new TenderControlPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let using = require('jasmine-data-provider');

//TC 131858 :PACE_Regression_6 Part 2
using(DataProvider.Tc_131858, async function (data) {
    describe("PACE_Regression_6 Part 2 Dispatching a load", function () {
        let orderNumber: string;
        let orderNumbers: string[];
        let equipmentNumber: string;
        let tractorNumber: string;
        let projectCode: string;

        //TC#131857 -Create Dcs Truck Load
        using(DataProvider.Tc_131857, async function (data) {
            it("Should open Eom Url", async () => {
                await eomPage.openEomUrl();
            });

            it("In the text box underneath Origin, enter LGFO18. Check the box next to HJBT JBDCS, make sure the boxes next to HJBT JBHA and HJBT JBVAN are UNCHECKED'", async () => {
                await eomPage.setDataInInputField(eomPage.originInputBox, data.originValue);
                await eomPage.setSearchRestrictions(true, false, false);
            });

            it("Should Click the Search Skeletons button", async () => {
                await eomPage.click(eomPage.searchSkeletonButton);
            });

            it("Should Look for a skeleton that has TRUCK underneath the Mode column. Click the green mouse icon underneath the Actions column'", async () => {
                await eomSearchPage.click(eomSearchPage.greenMouseIcon);
            });

            it("Should Click the NEXT>> button. (If no rate is found on the chosen skeleton", async () => {
                await skeletonListingPage.click(skeletonListingPage.nextButtonOnSelectPickUpDateScreen)
            });

            it("Should Click the dropdown tab next to Choose Reason Code,click to select ANY reason", async () => {
                await skeletonListingPage.selectRateCode(data.value);
            });

            it("Should Click the Book load without a rate button.", async () => {
                await skeletonListingPage.clickBookLoadWithoutRate();
            });

            it("Wait for load details page to load", async () => {
                await skeletonListingPage.waitForElementIsVisible(skeletonListingPage.loadDetailsTab);
            });

            it("Should Click the dropdown tab next to Load DETAIL.", async () => {
                await orderDetailsPage.click(orderDetailsPage.loadDetailsExtention);
            });

            it("Should Click the dropdown tab underneath FLEET, click to select DCS LDC833. Verify NO MONITORS are selected", async () => {
                await orderDetailsPage.selectValueFormFleetDropdown(data.fleetValue);
            });

            it("Should Click the dropdown tab next to Bill To", async () => {
                await orderDetailsPage.click(orderDetailsPage.billToExtention);
            });

            it("Should Verify NO CLASSIFICATIONS are selected.", async () => {
                let text = await orderDetailsPage.verifyClassificationText();
                expect(text.length).toBe(data.zero)
            });

            it("Should In the white text boxes for STOP 1, underneath SCHEDULED APPOINTMENT, and next to the current date, enter an appointment time. EXAMPLE 19:00 23:00", async () => {
                await orderDetailsPage.setScheduleAppointmentDate(data.zero);
                await orderDetailsPage.scheduledAppointmentTimeSet(data.startTime, data.endTime);
            });

            it("Should In the white text boxes for STOP 99 underneath SCHEDULED APPOINTMENT, enter the day after tomorrows date, then enter an appointment time. EXAMPLE 19:00 23:00. ", async () => {
                await orderDetailsPage.setScheduleAppointmentDateEnd();
                await orderDetailsPage.scheduledAppointmentEndTimeSet(data.startTime, data.endTime);

            });

            it("Should At the top of the page, click the CREATE LOAD button", async () => {
                await orderDetailsPage.click(orderDetailsPage.createLoadButton)
            });

            it("Should Take note of the Load number.", async () => {
                orderNumber = await orderDetailsPage.loadNumber();
                console.log("laodnumber:" + orderNumber);
                expect(orderNumber).not.toBeNull();
            });

            it("Click on load details tab", async () => {
                await orderDetailsPage.loadDetailsClick();
            });

            it("Select JBHA from devision dropdown", async () => {
                await orderDetailsPage.selectDivisionFromLoadDetails(data.divisionValue);
            });

            it("Find project Code", async () => {
                projectCode = await detailPage.getProjectCodeValue();
            });

            it("Click on Save changes button", async () => {
                await orderDetailsPage.click(orderDetailsPage.saveChangesButton);
            });

            it("Verify success message", async () => {
                let message: string = await orderDetailsPage.verifyLoadSuccessMessage();
                expect(message.trim()).toBe(data.LoadSucessMessage);
            });

        });

        it("Launch freight Manager 2", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
        });

        it("Verifying that Freight Manger page is displayed", async function () {
            await expect(freightManagerPage.actions.waitBrowserTitleEqualsTo(data.freightManagerTitle));
        });

        it("Should click on Customer Pool option under Equipment tab", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.equipmentTab, data.optionCustomerPool, data.customerPoolPageTitle);
        });

        it("set values in customer pool page", async () => {
            await customerPoolPage.setValuesInEquipmentPoolLookup(data.customerPool_Division, data.customerPool_CustCode, data.customerPool_EquipementCLass, "");
        });

        it("Click on Search button on customer Pool screen", async () => {
            await customerPoolPage.clickSearchButton();
        });

        it("Find Equipment number with prefix JBHU and LT St Empty", async () => {
            equipmentNumber = await customerPoolPage.getEquipmentNumberFromCustomerPoolTable(data.customerPool_Column1, data.customerPool_Column1Value, data.customerPool_Column2, data.customerPool_Column2Value, data.customerPool_RequiredColumn);
            console.log("equipment : " + equipmentNumber);
        });

        it("Should click on Unit View option under Planning tab", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.planningTab, data.unitViewOption, data.unitViewPageTitle);
        });

        it('SetUp Parameter', async () => {
            await freightManagerPage.clickOnParameterButton();
            await freightManagerPage.setParameterRadioAndChechBox(data.setParameterRadioAndChechBoxFieldName, data.setParameterRadioAndChechBoxOption)
            await freightManagerPage.enterSelectTypeCode(data.codeName, 1, data.BoardCode1);
            await freightManagerPage.enterSelectTypeCode(data.codeName, 2, data.BoardCode2);
            await freightManagerPage.enterSelectTypeCode(data.codeName, 3, data.BoardCode3);
            await freightManagerPage.enterSelectTypeCode(data.codeName, 4, data.BoardCode4);
            await freightManagerPage.clickOnSaveParameterButton();
            await freightManagerPage.clickOnExitButton();
        });

        it('Click on Search Button', async () => {
            await freightManagerPage.clickSearchButton();
        });

        it("Find available tractor with no PP", async () => {
            tractorNumber = await unitViewPage.getAvailableTractorWithoutTrailerType();
            console.log("Tractor Number : " + tractorNumber);
            expect(tractorNumber).not.toBeUndefined();
        });

        it('Getting project code if not assigned', async () => {
            let User: string = data.userID;
            let sql_Query_Update = await (data.sql_Query_Update).replace('#UserID', User.toUpperCase()).replace('#ProjectCode', projectCode);
            console.log(sql_Query_Update);
            let dbOutput = await commonFunctions.DBQueryHandler(data.DBName, data.conn_String, sql_Query_Update, true);
            console.log(JSON.parse(dbOutput));
            let sql_Query_Select = await (data.sql_Query_Select).replace('#UserID', User.toUpperCase()).replace('#ProjectCode', projectCode);
            let dbOutput_select = await commonFunctions.DBQueryHandler(data.DBName, data.conn_String, sql_Query_Select, true);
            console.log(JSON.parse(dbOutput_select));
        });

        it("Go to Planning tab ", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.optionOrderSegment, data.orderSegmentTitle);
        });

        it("Put your Order number in the blank space under the Planning tab ", async () => {
            await orderSegmentPage.enterOrderNumber(orderNumber, "Order Number");
        });

        it("Click on Search ", async () => {
            await orderSegmentPage.clickSearchButton();
        });

        it("Click Tractor and put in your tractor number (driver number) ", async () => {
            await orderSegmentPage.enterProjectCarrierNumber("S001", data.carrierCode);
        });

        it("Click on create preplan button on Order Segment screen", async () => {
            await orderSegmentPage.clickCreatePreplanButton();
        });

        it("Enure a preplan was made by the blue box at the top", async () => {
            let verify_message: string = await orderSegmentPage.verifyEventMessages(data.message);
            await expect(verify_message).toContain(data.verifyMessage);
        });

        it('Tender Create', async () => {
            await orderSegmentPage.selectOrderRadioButton1();
            await orderSegmentPage.clickTenderControlButton();
            await tenderControlPage.waitUntilPageLoads();
            await tenderControlPage.enterCarrierDetails(data.type, data.firstName, data.lastName, data.phone);
            await tenderControlPage.enterDriverDetails(data.type1, data.firstName, data.lastName, data.phone);
            await tenderControlPage.handleCarrierApprovalFlow(data.approvalValue);
            await tenderControlPage.clickCreateTenderButton();
            let verify_msg: string = await tenderControlPage.verifyEventMessages(data.tenderSucessMsg);
            await expect(verify_msg).toContain(data.tenderSucessMsg);
        });

        it('Approve Tender', async () => {
            await tenderControlPage.approveTender();
            let verify_msg: string = await tenderControlPage.verifyEventMessages(data.tenderapproveMsg);
            await expect(verify_msg).toContain(data.tenderapproveMsg);
        });

        it("Go to carrier check call tab ", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.carrierTabName, data.optionCarrier, data.carrierCheckCallTitle);
        });

        it("Put your Order number in the blank space under the check call", async () => {
            await orderSegmentPage.enterOrderNumber(orderNumber, "Order Number");
        });

        it("Click on Update button", async () => {
            await checkCallDetailsPage.clickOnUpdate();
        });

        it("Hover status Option from header", async () => {
            await freightManagerPage.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });
        
        it("Click on dispatch option", async () => {
            await freightManagerPage.clickHeaderDropDownOption(data.dropDownOptionDispatch);
        });

        it("Wait untill dispatch window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Click on update button on dispatch window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Verify dispatch row under check call history", async () => {
            let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.checkCallHistoryText);
            expect(result).toBeTruthy();
        });

        it("Hover status Option from header", async () => {
            await freightManagerPage.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });

        it("Click on Arrival/Loaded option", async () => {
            await freightManagerPage.clickHeaderDropDownOption(data.headerDropDownOptionArrivalLoaded);
        });

        it("Waittill Arrival/Loaded window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Enter details in Arrival/Loaded Tab", async () => {
            await checkCallDetailsPage.enterDetailsInArrivalORLoadedORUnloaded(data.typeOfLoad);
        });

        it("Click on update button on Arrival/Loaded window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Verify Arrival loaded is successfull", async () => {
            let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.checkCallHistoryText2);
            expect(result).toBeTruthy();
        });

        it("Hover status Option from header", async () => {
            await freightManagerPage.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });

        it("Click on Arrival/Unloaded option", async () => {
            await freightManagerPage.clickHeaderDropDownOption(data.headerDropDownOptionArrivalUnLoaded);
        });

        it("Waittill Arrival/unLoaded window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Enter details in Arrival/Unloaded Tab", async () => {
            await checkCallDetailsPage.enterDetailsInArrivalORLoadedORUnloaded(data.UnloadedTab);
        });

        it("Click on update button on Arrival/Loaded window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Verify Arrival unloaded is successfull", async () => {
            let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.checkCallHistoryText3);
            expect(result).toBeTruthy();
        });

    });
});
