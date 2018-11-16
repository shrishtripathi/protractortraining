import {MyJbHuntHomePage} from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { UnitViewPage } from '../../pages/freight_manager/unit-view.po';
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';
import { DataProvider } from "../../data/dataProvider";
import { UnitViewParameterPage } from '../../pages/freight_manager/unit-view-parameter.po';


let homePage = new MyJbHuntHomePage();
let freightManager = new FreightManager2Page();
let unitView = new UnitViewPage();
let unitViewParameterPage = new UnitViewParameterPage();
let orderSegment = new OrderSegmentPage();
let using=require('jasmine-data-provider');
//TC_95314: FM2_Regression_40 Free Driver
using(DataProvider.Tc_95314, async function(data){
describe("Free Driver", function(){
    it("should open 'Freight Manager url'",async function() {
        await homePage.openFm2Url();
    });
   
    it("should display 'Freight manager page'",async function() {
        let  pageTitle= await freightManager.verifyFreightManagerPage();  
        expect(pageTitle).toEqual(data.freightManager);
   });
    it("should click on 'Planning' in Freightmanager",async function() {
        await freightManager.mouseOverOnPlanningTab();
    });
    it("should click on 'Unit View' in Planning",async function() {
        await freightManager.clickOnUnitView();    
    });
    it("Click on Parameter Button", async () => {
        await unitView.clickOnParameterButton();
    });

    it("Click on Board radio Button", async () => {
        await unitViewParameterPage.setParameterRadioAndChechBox(data.setParameterRadioAndChechBoxFieldName, data.setParameterRadioAndChechBoxOption)
    });

    it("should enter Board Codes", async () => {
        await unitViewParameterPage.enterSelectTypeCode(data.codeName, 1, data.BoardCode1);
        await unitViewParameterPage.enterSelectTypeCode(data.codeName, 2, data.BoardCode2);
        await unitViewParameterPage.enterSelectTypeCode(data.codeName, 3, data.BoardCode3);
        await unitViewParameterPage.enterSelectTypeCode(data.codeName, 4, data.BoardCode4);
    });

    it("Click on Save Parameter Button", async () => {
        await unitViewParameterPage.clickOnSaveParameterButton();
    });

    it("Click on Exit Button", async () => {
        await unitViewParameterPage.clickOnExitButton();
    });

    it("should click on 'Search Button",async function() {
        await unitView.clickSearchButton();
    });
    it("should Find truck status 'MTY PP' and Take note of Load Number attached to the truck ",async function() {
        await unitView.findTruckStatusAndTakeOrderNumber();  
    });
    it("should click on 'Planning' in Freightmanager",async function() {
        await freightManager.mouseOverOnPlanningTab();
    });
    it("should click on 'Order Segment' in Planning",async function() {
        await freightManager.clickOnOrderSegment();
    });
    it("should send data to 'Order Text Boxes'",async function() {
        await orderSegment.sendDataToOrderTextBox(unitView.orderNumber);
    });
    it("should click on 'Search Button",async function() {
        await orderSegment.clickSearchButton();
    });
    it("should click on 'Radial Button",async function() {
        await orderSegment.clickOnRadialButton();
    });
    it("should click on 'Cancel Preplan Button",async function() {
        await orderSegment.clickOnCancelPreplanButton();
    });
    

});
})