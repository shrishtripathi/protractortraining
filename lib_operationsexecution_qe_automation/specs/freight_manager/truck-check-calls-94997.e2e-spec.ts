import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { DeliveryPage } from "../../pages/freight_manager/delivery.po";
import { MultiplePrePlanPage } from "../../pages/freight_manager/multiple-preplan.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { CustomerPoolPage } from "../../pages/freight_manager/customer-pool.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let unitViewPage = new UnitViewPage();
let deliveryPage = new DeliveryPage();
let freightManagerPage = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let orderSegmentPage = new OrderSegmentPage();
let multiplePrePlanPage = new MultiplePrePlanPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let customerPoolPage = new CustomerPoolPage();
let using = require('jasmine-data-provider');

//TC 94997 :FM2_Regression_39 Truck Check Calls
using(DataProvider.Tc_94997, async function (data) {

    describe("Truck Check Calls", function () {
        let text_tractorNo: string;
        let text_OrderNos: string[];
        let val_Equipment: string;
        let text_OrderNO: string;
        it("should open homepage", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
        });

        it("Navigate to Unit View screen", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.optionUnitView,data.unitViewtitle);
        });

        it("Enter board code on unit view page", async () => {
            await unitViewPage.sendDataToBoardCodeTextBoxes(data.BoardCode1, data.BoardCode2, data.BoardCode3, data.BoardCode4);
        });

        it("Click on search button", async () => {
            await unitViewPage.clickSearchButton();
        });

        it("Find available tractor with Trailer Number and no PP", async () => {
            text_tractorNo = await unitViewPage.getAvailableTractor(data.availableTractocolumnText1, data.availableTractocolumnText2);
            await expect(text_tractorNo).not.toBeUndefined();
        });


        it("Navigating to Pick up view screen", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.pickUpOption,data.pickUpViewtitle);
        });

        it("Set search parameters on Pick up view screen", async () => {
            await pickupviewPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strArea, data.strTranMd);
        });

        it("Click on Search button on Pick Up screen", async () => {
            await pickupviewPage.clickSearchButton();
        });

        it("Finding two order numbers with blank notes", async () => {
            await pickupviewPage.getorderNumbersForEmptyBox(2);
            text_OrderNos = await pickupviewPage.orderNumbers;
            await expect(text_OrderNos).not.toBeUndefined();
        });

        it("Navigating to Multiple Preplan option", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.multiPrePlanOption,data.multiplePreplanViewtitle);
        });

        it("Enter Tractor Number on Multiple Preplan screen", async () => {
            await multiplePrePlanPage.enterTractorNumber(text_tractorNo, "Tractor Number");
        });

        it("Click on Search button on Multiple Preplan screen", async () => {
            await multiplePrePlanPage.clickOnButton(data.buttonTextValueSearch);
        });

        it("Enter the first  order Number on Multiple preplan screen", async () => {
            await multiplePrePlanPage.enterOrderNumber(text_OrderNos[0], "Order Number");
        });

        it("Click on Add Segment button on Multiple Preplan screen", async () => {
            await multiplePrePlanPage.ClickAddSegmentButton();
        });

        it("Verify the segment got added to tractor", async () => {
            await multiplePrePlanPage.VerifySegmentPresence(text_OrderNos[0]);
        });

        it("Enter the  second order Number on Multiple preplan screen", async () => {
            await multiplePrePlanPage.enterOrderNumber(text_OrderNos[1], "Order Number");
        });

        it("Click on Add Segment button on Multiple Preplan screen", async () => {
            await multiplePrePlanPage.ClickAddSegmentButton();
        });

        it("Verify the segment got added to tractor", async () => {
            await multiplePrePlanPage.VerifySegmentPresence(text_OrderNos[1]);
        });

        it("change index of segments in multiple preplan screen", async () => {
            await multiplePrePlanPage.verifyOrderSequenceInDropdown(text_OrderNos[1]);
        });

        it("Click on Update button on Multiple Preplan screen", async () => {
            await multiplePrePlanPage.clickUpdateButton();
        });

        it("Check success message for updation", async () => {
            let verify_message: string = await multiplePrePlanPage.verifyEventMessages(data.update_Message);
            await expect(verify_message).toBe(data.update_Message);
        });

        it("Should click on Customer Pool option under Equipment tab", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.equipmentTab, data.optionCustomerPool,data.custPoolViewtitle);
        });

        it("set values in customer pool page", async () => {
            await customerPoolPage.setValuesInEquipmentPoolLookup(data.customerPool_Division, data.customerPool_CustCode, "", "");
        })

        it("Click on Search button on customer Pool screen", async () => {
            await multiplePrePlanPage.clickSearchButton();
        });

        it("Find Equipment number with prefix JBHU and LT St Empty", async () => {
            val_Equipment = await customerPoolPage.getEquipmentNumberFromCustomerPoolTable(data.customerPool_Column1, data.customerPool_Column1Value, data.customerPool_Column2, data.customerPool_Column2Value, data.customerPool_RequiredColumn);
        });

        it("Should click on Truck Check call Pool option under Driver tab", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.headerOptionDriver, data.dropDownOptionTruckCheckCall,data.trueCheckCallViewtitle);
        });

        it("Navigate to Truck Check Call window", async () => {
            await checkCallDetailsPage.verifyCheckCallDetailsPage();
        });

        it("Enter tractor number in Check call details screen ", async () => {
            await checkCallDetailsPage.enterTractorNumber(text_tractorNo);
        });

        it("Click on update button", async () => {
            await checkCallDetailsPage.clickUpdateButton();
        });

        it("Hover status Option from header", async () => {
            await freightManagerPage.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });

        it("Click on Comment option", async () => {
            await freightManagerPage.clickHeaderDropDownOption(data.headerDropDownOptionComment);
        });

        it("Wait till Comment window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Enter details in Comment Tab", async () => {
            await customerPoolPage.enterDetailsInCommentPopup(data.commentPopup_TrlrCode, val_Equipment);
        });

        it("Click on update button on Comment window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Hover status Option from header", async () => {
            await freightManagerPage.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });

        it("Click on dispatch option", async () => {
            await freightManagerPage.clickHeaderDropDownOption(data.dropDownOptionDispatch);
        });

        it("Wait till dispatch window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Click on update button on dispatch window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Verify Dispatch is completed", async () => {
            let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.transactionValue);
            await expect(result).toBeTruthy();
        });

        it("close check call details page", async () => {
            await customerPoolPage.closeCurrentWindow();
        });

        it("Should click on pick up option under planning tab", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.pickUpOption,data.pickUpViewtitle);
        });

        it("Set search parameters on Pick up view screen", async () => {
            await pickupviewPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strArea, data.strTranMd);
        });

        it("Click on Search button on Pick Up screen", async () => {
            await pickupviewPage.clickSearchButton();
        });

        it("Find order number with blank notes and enter tractor number in driver notes", async () => {
            text_OrderNO = await pickupviewPage.setValueIntoDriverNotesOnPickUpViewWith3Condition(text_tractorNo);
            await expect(text_OrderNO).not.toBe("");
        });

        it("click create preplan button in pick up view screen", async () => {
            await orderSegmentPage.clickCreatePreplanButton();
        });

        it("click on update button in multiple preplan screen", async () => {
            await pickupviewPage.clickUpdateButton();
        });

        it("Verify update is successfull", async () => {
            let verify_Message: string = await multiplePrePlanPage.verifyEventMessages(data.update_Message);
            await expect(verify_Message).toBe(data.update_Message);
        })

        it("Should click on Truck Check call option under Driver tab", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.headerOptionDriver, data.dropDownOptionTruckCheckCall,data.trueCheckCallViewtitle);
        });

        it("Select Check call details screen", async () => {
            await checkCallDetailsPage.verifyCheckCallDetailsPage();
        });

        it("Enter tractor number in Check call details screen ", async () => {
            await checkCallDetailsPage.enterTractorNumber(text_tractorNo);
        });

        it("Click on update button", async () => {
            await checkCallDetailsPage.clickUpdateButton();
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
            await checkCallDetailsPage.enterDetailsInArrivalORLoaded();
        });

        it("Click on update button on Arrival/Loaded window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Close Arrival/Loaded popup Window if exist", async () => {
            await checkCallDetailsPage.closePopUpWindow();
        });

        it("Hover status Option from header", async () => {
            await freightManagerPage.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });

        it("Click on dispatch option", async () => {
            await freightManagerPage.clickHeaderDropDownOption(data.headerDropDownOptionTerminate);
        });

        it("Waittill Terminate window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Enter details in Terminate Tab", async () => {
            await checkCallDetailsPage.enterDetailsInTerminate(data.terminate_CustomerNo);
        });

        it("Click on update button on Terminate window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Verify terminate is successfull", async () => {
            let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.transactionValueT);
            await expect(result).toBeTruthy();
        });

        it("close check call details page", async () => {
            await customerPoolPage.closeCurrentWindow();
        });

        it("Navigate to Order segment screen", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.optionOrderSegment,"");
        });

        it("Enter the order Number on Order Segment screen", async () => {
            await orderSegmentPage.enterOrderNumber(text_OrderNos[1], "Order Number");
        });

        it("Click on Search button on Order Segment screen", async () => {
            await deliveryPage.clickSearchButton();
        });

        it("Verify Stop Stat in First Segment", async () => {
            let verify_message: boolean = await orderSegmentPage.verifyStopStatusInOrderSegment();
            await expect(verify_message).toBeTruthy();
        });
    });
})