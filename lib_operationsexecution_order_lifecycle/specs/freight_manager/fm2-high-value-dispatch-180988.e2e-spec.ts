import { DataProvider } from "../../data/dataProvider";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { browser } from "protractor";
import { CustomerPoolPage } from "../../pages/freight_manager/customer-pool.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";


let FreightManager2Pag = new FreightManager2Page();
let CustomerPoolP = new CustomerPoolPage();
let orderseg = new OrderSegmentPage();
let checkCallDetailsPag  = new CheckCallDetailsPage();
let using = require('jasmine-data-provider');

using(DataProvider.Tc_180988, async function (data) {

    describe("FM2 High Value Dispatch", function () {

        it("open browser and enter url' ", async () => {
            await FreightManager2Pag.navigateToAppHome(FreightManager2Pag.freightManager2);
        });

        it("Hover over the Equipment tab, click Customer Pool to select.", async () => {
            await FreightManager2Pag.selectOptionFromFreightManager2(data.tabName, data.tabOption);
        });

        it("Click the dropdown tab next to Division, click to select HJBT JBVAN", async () => {
            await CustomerPoolP.selectDivision(data.division);
        });

        it("In the white text box next to Cust Code, enter LGFO18.", async () => {
            await CustomerPoolP.enterCustCode(data.Cust_code);
        });

       it("Click on Search button", async () => {
            await CustomerPoolP.clickOnSearchButton();
        });

        it("Find a piece of equipment that is has JBHU underneath the Prefix column, and EMPTY underneath LT St. and has equipment attached to it. Take note of the equipment number.", async () => {
            await CustomerPoolP.getEquipmentNumberFromCustomerPoolTable(data.headerprefix, data.prefixcolvalue, data.headerLT_St, data.LT_StColvalue, data.Equipmen);    
        });

        it(" Hover over the Planning tab, click to select Order Segment. ", async () => {
            await FreightManager2Pag.selectOptionFromFreightManager2(data.planingTab, data.Orderseg);
        });

        it(" In the text box underneath Order#, enter your order number", async () => {
            await orderseg.enterOrderId(data.orderNumber);
        });

        it(" click the Search button. ", async () => {
            await orderseg.clickOnSearchButton();
        });

        it("  Click the driver number hyperlink underneath Power Driver. ", async () => {
             await  orderseg.clickDriverLink();
        });

        it(" Hover over the Status tab, click to select Comment. ", async () => {
            await checkCallDetailsPag.mouseOverToStatus();
            await FreightManager2Pag.clickHeaderDropDownOption(data.headerDropDownOptionComment);
        });
        it("In the white text box next to Trlr/Cntr, enter JBHU. Next to JBHU enter the equipment number. In the white text box next to Customer, enter LGFO18, press the TAB key on your keyboard to auto fill Location. ", async () => {
            await checkCallDetailsPag.waitTillDispatchWindowLoad();
            await checkCallDetailsPag.enterTrailerNumber(data.tcode,data.tnumber,data.customerNumber);
        });

        it(" Click the Update button", async () => { 
           await checkCallDetailsPag.clickOnUpdateOnPopup();       
         });

         it("Hover over the Status tab, click to select Dispath", async () => {
            await checkCallDetailsPag.mouseOverToStatus();
            await FreightManager2Pag.clickHeaderDropDownOption(data.headerDropDownOptionDispatch);            
             //await checkCallDetailsPag.clickonDispatch();
          });
         
        it(" Click the Update button, twice if necessary.", async () => {
            await checkCallDetailsPag.clickOnUpdate();       
          });
        
    })
});