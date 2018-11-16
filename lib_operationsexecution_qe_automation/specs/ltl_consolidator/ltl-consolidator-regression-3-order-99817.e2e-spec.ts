import { browser } from 'protractor';
import { FuelSurchargeSystemHomePage } from '../../pages/fuel_surcharge/fuel-surcharge-system-home.po';
import { ShipmentConsolidation } from '../../pages/ltl_consolidator/shipment-consolidation.po';
import { DataProvider } from '../../data/dataProvider';
import { BasePage } from '../../pages/base.po';

let basePage=new BasePage();
let shipmentConsolidation = new ShipmentConsolidation();

let using= require('jasmine-data-provider');

//TC#99817 -LTL Consolidator_Regression_3 Order
using(DataProvider.Tc_99817, async function(data){
describe("LTL Consolidator_Regression_3 Order", () => {
    
        it("Should open LTL Consolidation url", async () => {
            await shipmentConsolidation.navigateToAppHome(shipmentConsolidation.ltlConsolidatorUrl);
        });
        it("Should Make sure the search type is 'BILL TO'", async () => {
           let flag:boolean= await shipmentConsolidation.verifySearchType();
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
            let results:number=await shipmentConsolidation.verifyCrSearchResults();
            console.log("results is "+results);
            expect(results).toBeGreaterThanOrEqual(data.crSearchResults);
        });
        it("Should Select 2 CR's (make sure there are no errors) and change their IB Dock and OB Dock to RTE1 ", async () => {
            await shipmentConsolidation.selectCustomerRequests(data.customerRequests);
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
        it("Should create 'Order Number'", async () => {
            let orderNumber:string=await shipmentConsolidation.verifyOrderNumberForLoads();
            expect(orderNumber).not.toBeNull();
        });
    });
});