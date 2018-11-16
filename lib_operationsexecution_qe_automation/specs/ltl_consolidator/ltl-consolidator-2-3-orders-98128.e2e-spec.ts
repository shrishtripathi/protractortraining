import { browser } from 'protractor';
import { FuelSurchargeSystemHomePage } from '../../pages/fuel_surcharge/fuel-surcharge-system-home.po';
import { ShipmentConsolidation } from '../../pages/ltl_consolidator/shipment-consolidation.po';
import { EOMBasePage } from '../../pages/ltl_consolidator/eom-home-page.po';
import { DataProvider } from '../../data/dataProvider';
import { BasePage } from '../../pages/base.po';

let basePage = new BasePage();
let shipmentConsolidation = new ShipmentConsolidation();
let eomPage = new EOMBasePage();
let orderNumber_TC_98128: string = null;
let using = require('jasmine-data-provider');

//TC#87217 -LTL Consolidator_Regression_2 3 orders
using(DataProvider.Tc_98128, async function (data) {
    describe("LTL Consolidator_Regression_2 3 Order", () => {
        it("Should open LTL Consolidation url", async () => {
            await shipmentConsolidation.navigateToAppHome(shipmentConsolidation.ltlConsolidatorUrl);
        });
        it("Should Make sure the search type is 'BILL TO'", async () => {
            let flag: boolean = await shipmentConsolidation.verifySearchType();
            expect(flag).toBeTruthy();
        });
        it("Should set text to 'value: CLELA2'", async () => {
            await shipmentConsolidation.setTextToValueTextBox(data.textBoxValue);
        });

        it("Should set the beginning date to two months prior the current date", async () => {
            await shipmentConsolidation.clickPickUpBegCalender();
            await shipmentConsolidation.setMonthsPriorAndSelectDate(2);
        });

        it("Should click 'search button'", async () => {
            await shipmentConsolidation.clickSearch();
        });

        it("Should verify if the screen populated 'CR's", async () => {
            let results: number = await shipmentConsolidation.verifyCrSearchResults();
            console.log("results is " + results);
            expect(results).toBeGreaterThanOrEqual(data.crSearchResults);
        });
        it("Should Select 3 CR's (make sure there are no errors) and change their IB Dock and OB Dock to RTE1 ", async () => {
            await shipmentConsolidation.selectCustomerRequests((data.customerRequests));
        });
        it("Should click 'consolidate' button", async () => {

            await shipmentConsolidation.clickConsolidateButton();
        });
        it("Should verify and confirm 'orders'", async () => {
            await shipmentConsolidation.verifyAndConfirmOrders();
        });
        it("Should change the date and times for each order", async () => {
            await shipmentConsolidation.setDateForEachOrder();
        });
        it("Should fleet code to 'RAIL'", async () => {
            await shipmentConsolidation.selectFleetCode(data.fleetCode);
        });
        it("Should click 'Create Orders'", async () => {
            await shipmentConsolidation.clickCreateOrders();
        });
        it("Should make note of 'Project Code','Bill-to-code','Fleet-code'", async () => {
            await shipmentConsolidation.makeNoteOfCodes();
            await shipmentConsolidation.makeNoteOfCustomerCodes();
        });
        it("Should create 'Order Number'", async () => {
            let orderNumber: string = await shipmentConsolidation.verifyOrderNumberForLoads();
            orderNumber_TC_98128 = orderNumber;
            console.log("order num i9s " + orderNumber_TC_98128)
            expect(orderNumber).not.toBeNull();
        });
        it("Should open eom  url", async () => {
            await shipmentConsolidation.navigateToAppHome(shipmentConsolidation.eomUrl);
        });
        it("Should enter 'Order Number'", async () => {
            await eomPage.setValueInSearchInputBox(orderNumber_TC_98128);
        });
        it("Should click 'Search Loads'", async () => {
            await eomPage.clickSearchLoadsButton();
        });
        it("Should click on 'order number link'", async () => {
            await eomPage.clickOnOrderNumberLink(orderNumber_TC_98128);
        });
        it("Should Compare the stops on this detail page with your consolidation page to make sure they all line up appropriately.", async () => {
            await eomPage.verifyStopSForLoads();
            expect(shipmentConsolidation.customerCodes).toEqual(eomPage.customersCodeEOM);
        });
        it("Should click the drop down arrow on the 'Bill To' row. Check and make sure the classification is 'LTL'.", async () => {
            let text: string = await eomPage.verifiyClassificationsDropdownValue();
            expect(text).toEqual(data.classificationDropDownText);
        });
    });
})