
import { FreightManager2Page } from "../../pages/eom/freight-manager-2.po";
import { DataProvider } from "../../data/dataprovider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CustomerPoolPage } from "../../pages/eom/customer-pool.po";
import { DetailsPage } from "../../pages/eom/details.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";


let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManagerPage = new FreightManager2Page();
let customerPoolPage = new CustomerPoolPage();
let detailsPage = new DetailsPage();
let unitViewPage = new UnitViewPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let using = require('jasmine-data-provider');

//TC 131544 :EOM_Regression_20 Finding a trailer 
using(DataProvider.Tc_131544, async function (data) {

    describe("Finding a trailer", function () {
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
                console.log("loadnumber: " + orderNumber);
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

            it("Find available tractor with no PP", async () => {
                tractorNumber = await unitViewPage.getAvailableTractor(data1.filterText1, data1.filterText2);
                console.log("Tractor Number : " + tractorNumber);
                expect(tractorNumber).not.toBe("");
            });

        });

        it("Should click on Customer Pool option under Equipment tab", async () => {
            await myJbHuntHomePage.actions.waitBrowserTitleEqualsTo(data.unitTestTitle);
            await freightManagerPage.selectOptionFromFreightManager2(data.equipmentTab, data.optionCustomerPool, data.customerPoolPageTitle);
        });

        it("set values in customer pool page", async () => {
            await customerPoolPage.setValuesInEquipmentPoolLookup(data.customerPool_Division, data.customerPool_CustCode, "", "");
        });

        it("Click on Search button on customer Pool screen", async () => {
            await customerPoolPage.clickSearchButton();
        });

        it("Find Equipment number with prefix JBHU and LT St Empty", async () => {
            equipmentNumber = await customerPoolPage.getEquipmentNumberFromCustomerPoolTable(data.customerPool_Column1, data.customerPool_Column1Value, data.customerPool_Column2, data.customerPool_Column2Value, data.customerPool_RequiredColumn);
            console.log("equipment : " + equipmentNumber);
        });
    });

});