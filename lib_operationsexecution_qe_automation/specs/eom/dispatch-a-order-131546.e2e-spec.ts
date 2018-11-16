import { FreightManager2Page } from "../../pages/eom/freight-manager-2.po";
import { DataProvider } from "../../data/dataprovider";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { CheckCallDetailsPage } from '../../pages/freight_manager/check-call-details.po';
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CustomerPoolPage } from "../../pages/eom/customer-pool.po";
import { PickupviewPage } from "../../pages/eom/pick-up-view.po";
import { browser } from "../../node_modules/protractor";
import { DetailsPage } from "../../pages/eom/details.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { async } from "../../node_modules/@types/q";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManagerPage = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let customerPoolPage = new CustomerPoolPage();
let detailsPage = new DetailsPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let using = require('jasmine-data-provider');

using(DataProvider.Tc_131546, async function (data) {

  //TC 131546 :EOM_Regression_23 Dispatch a order
  describe("Dispatch a order", function () {
    let orderNumber: string;
    let equipmentNumber: string;
    let tractorNumber: string;

    using(DataProvider.Tc_78614, async function (data1) {
      // TC 78614 : finding order NUmber 
      it("Open EOM url", async () => {
        await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.eomUrl);
      });

      it("On the EOM home page enter 'DAMAC8' in ''BILL TO CODE'' field", async () => {
        await enterpriseOrderManagementPage.enterBillToCode(data1.billToCode);
      });

      it("Click ''SEARCH SKELETON'' BUTTON", async () => {
        await myJbHuntHomePage.clickOnEOMButton(data1.searchSkeltonButton);
      });

      it("Click green ''BOOK ORDER'' icon of chosen skeleton having rate ", async () => {
        await skeletonListingPage.bookOrderHavingNoRate2();
      });

      it("Click ''NEXT'' ", async () => {
        await skeletonListingPage.clickNextONSelectPickUpDateScreen();
      });

      it("Should Click ''TRUCK'' under current date", async () => {
        await skeletonListingPage.clickOnIcsUnderCurrentDate("TRUCK");
      });

      it("Set shipper scheduled appointment time to 19:00-23:00", async () => {
        await orderDetailsViewPage.scheduledAppointmentTimeSet(data1.scheduledAppointmentBeginTime, data1.scheduledAppointmentEndTime);
      });

      it("Should check receiver scheduled appointment date fields are empty", async () => {
        await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
        await orderDetailsViewPage.receiverSuggestedAppointmentEmptyCheck();
        await orderDetailsViewPage.receiverCustomerRequestedEmptyCheck();
      });

      it("Should click on Create Load button", async () => {
        await detailsPage.clickOnCreateLoad();
        orderNumber = await detailsPage.getLoadNumber();
        console.log("laodnumber: " + orderNumber);
      });

    });

    //TC 80004 :EOM_Regression_7 Adding a Driver
    using(DataProvider.Tc_80004, async function (data1) {
      it("Launch freight Manager 2", async () => {
        await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
      });

      it("Verifying that Freight Manger page is displayed", async function () {
        await expect(freightManagerPage.actions.waitBrowserTitleEqualsTo(data1.freightManagerTitle));
      });

      it("Should click on Unit View option under Planning tab", async () => {
        await freightManagerPage.selectOptionFromFreightManager2(data1.planningTab, data1.unitViewOption, data1.unitViewPageTitle);
      });

      it('SetUp Parameter', async () => {
        await freightManagerPage.clickOnParameterButton();
        await freightManagerPage.setParameterRadioAndChechBox(data1.setParameterRadioAndChechBoxFieldName, data1.setParameterRadioAndChechBoxOption)
        await freightManagerPage.enterSelectTypeCode(data1.codeName, 1, data1.BoardCode1);
        await freightManagerPage.enterSelectTypeCode(data1.codeName, 2, data1.BoardCode2);
        await freightManagerPage.enterSelectTypeCode(data1.codeName, 3, data1.BoardCode3);
        await freightManagerPage.enterSelectTypeCode(data1.codeName, 4, data1.BoardCode4);
        await freightManagerPage.clickOnSaveParameterButton();
        await freightManagerPage.clickOnExitButton();
      });

      it('Click on Search Button', async () => {
        await freightManagerPage.clickSearchButton();
      });

      it('Click on the "hyper link" of the truck and Get Driver Number', async () => {
        tractorNumber = await freightManagerPage.getDriverNumber(data1.tableId,
          data1.requiredColumnHeaderLable1, data1.requiredColumnHeaderLable2,
          data1.filterColumn3HeaderLable1, data1.filterColumn3HeaderLable2,
          data1.filterColumn2HeaderLable2, data1.filterColumn2HeaderLable1,
          data1.filterText1, data1.filterText2
          , data1.filterText3a, data1.filterText3b);
        console.log(tractorNumber);
        await customerPoolPage.closeCurrentWindow();
      });
    });


    //TC 131544 : EOM_Regression_20 Finding a trailer 
    using(DataProvider.Tc_131544, async function (data1) {
      it("Should click on Customer Pool option under Equipment tab", async () => {
        await myJbHuntHomePage.actions.waitBrowserTitleEqualsTo(data1.unitTestTitle);
        await freightManagerPage.selectOptionFromFreightManager2(data1.equipmentTab, data1.optionCustomerPool, data1.customerPoolPageTitle);
      });

      it("set values in customer pool page", async () => {
        await customerPoolPage.setValuesInEquipmentPoolLookup(data1.customerPool_Division, data1.customerPool_CustCode, "", "");
      });

      it("Click on Search button on customer Pool screen", async () => {
        await customerPoolPage.clickSearchButton();
      });

      it("Find Equipment number with prefix JBHU and LT St Empty", async () => {
        equipmentNumber = await customerPoolPage.getEquipmentNumberFromCustomerPoolTable(data1.customerPool_Column1, data1.customerPool_Column1Value, data1.customerPool_Column2, data1.customerPool_Column2Value, data1.customerPool_RequiredColumn);
        console.log("equipment : " + equipmentNumber);
      });
    });

    //TC 131545 : EOM_Regression_20 Creating a preplan
    using(DataProvider.Tc_131545, async function (data1) {
      it("Go to Planning tab ", async () => {
        await freightManagerPage.selectOptionFromFreightManager2(data1.tabName, data1.optionOrderSegment, data1.orderSegmentTitle);
      });

      it("Put your Order number in the blank space under the Planning tab ", async () => {
        await orderSegmentPage.enterOrderNumber(orderNumber, "Order Number");
      });

      it("Click on Search ", async () => {
        await orderSegmentPage.clickSearchButton();
      });

      it("Click Tractor and put in your tractor number (driver number) ", async () => {
        await orderSegmentPage.enterTractorNumber(tractorNumber);
      });

      it("Click on create preplan button on Order Segment screen", async () => {
        await orderSegmentPage.clickCreatePreplanButton();
      });

      it("Enure a preplan was made by the blue box at the top", async () => {
        let verify_message: string = await orderSegmentPage.verifyEventMessages(data1.message);
        await expect(verify_message).toContain(data1.verifyMessage);
      });
    });

    //TC 131548 :EOM_Regression_22 Adding Equipment to a Load
    using(DataProvider.Tc_131548, async function (data1) {
      it("Click on the blue hyper link under Power Driver on the same screen  ", async () => {
        await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(tractorNumber);
      });

      it("Navigate to Truck Check Call window", async () => {
        await checkCallDetailsPage.verifyCheckCallDetailsPage();
      });
      
      it("Under Driver/Equipment section, under Tractor number go to 'Trt/Ctr' put in your Equipment number and 'JBHZ' for truck", async () => {
        await checkCallDetailsPage.enterEquipmentInformation(data1.divisionCode, equipmentNumber)
      });

      it("Click 'Update'  ", async () => {
        await checkCallDetailsPage.clickOnUpdate();
      });

      it("Verify warning message and put trailer/container details", async () => {
        await checkCallDetailsPage.enterTrailerContainerDetailsHandledComment(data1.divisionCode, equipmentNumber);
      });

      it("Click on update button", async () => {
        await checkCallDetailsPage.clickOnUpdateOnPopup();
      });

    });

    //TC 131546 : EOM_Regression_23 Dispatch a order     
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
      await expect(result).toBeTruthy();
    });

  });
});
