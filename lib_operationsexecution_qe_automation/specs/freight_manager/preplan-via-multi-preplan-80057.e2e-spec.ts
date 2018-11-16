import {MyJbHuntHomePage} from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { UnitViewPage } from '../../pages/freight_manager/unit-view.po';
import { MultiplePrePlanPage } from '../../pages/freight_manager/multiple-preplan.po';
import { PickupviewPage } from '../../pages/freight_manager/pick-up-view.po';
import { DataProvider } from "../../data/dataProvider";
import { browser } from 'protractor';
import { UnitViewParameterPage } from '../../pages/freight_manager/unit-view-parameter.po';


let homePage = new MyJbHuntHomePage();
let freightManager = new FreightManager2Page();
let unitView = new UnitViewPage();
let unitViewParameterPage = new UnitViewParameterPage();
let multiplePreplan = new MultiplePrePlanPage();
let picpUpPage=new PickupviewPage();
let using=require('jasmine-data-provider');
//TC_80057 :FM2_Regression_19 Preplan via multiple preplan 
using(DataProvider.Tc_80057, async function(data){
    
describe("Preplan via multiple preplan", function(){
    it("should open 'Freight Manager Page'",async function() {
        await homePage.openFm2Url();
    });
    
    it("should display 'Freight manager page'",async function() {
        let  pageTitle= await freightManager.verifyFreightManagerPage();  
        expect(pageTitle).toEqual(data.verifyFreightManagerTitle);
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
    it("should display 'List of drivers'",async function() {
        let flag:boolean=await unitView.verifyListOfDrivers();
        expect(flag).toBeTruthy();
    });
    it("should Click the up/down arrows underneath ETA DATE twice, to sort the drivers list by most recent ETA. ",async function() {
        await unitView.clickUpAndDownArrowsForETADate();
        console.log("test");
    });
    it("should Look for a driver with MTY NO PP, underneath OBC ERROR. Take note of the driver number.  ",async function() {
        await unitView.mtyNoPPDriverNumber();    
    });
    it("should click on 'Planning' in Freightmanager",async function() {
        await freightManager.mouseOverOnPlanningTab();
    });
    it("should click on 'Pick Up' in Planning",async function() {
        await unitView.clickOnPickUp();
    });
    it("should Verify parameters are, Type, A - Area; Division, HJBT JBVAN; Area Type, MKT; Area, DA; Tran Md, I, ",async function() {
       let flag:boolean= await picpUpPage.verifyParamatersForSearchCriteria(data.verifyAreaType);
       expect(flag).toBeTruthy();
    });
    it("should click on 'Search Button",async function() {
        await picpUpPage.clickSearchButton();
    });
    it("should Make note of two orders.",async function() {
        await picpUpPage.orderNumberForEmptyBox();
    });
    it("should click on 'Planning' in Freightmanager",async function() {
        await freightManager.mouseOverOnPlanningTab();
    });
    it("should click on 'Pick Up' in Planning",async function() {
        await freightManager.clickOnMultiplePreplan();
    });
    it("should enter tractor number on 'Muktiple Preplan'", async function() {
        await multiplePreplan.sendDataToTractorTextBox(unitView.driverNumber);
    });
    it("should click on 'Search Button",async function() {
        await multiplePreplan.clickOnSearchButton();
    });
    it("should display 'Tractor Number'",async function() {
       let flag:boolean= await multiplePreplan.verifyTractorNumber(unitView.driverNumber);
       expect(flag).toBeTruthy();
    });
    it("should enter first orderNumber in the empty text box and click on add segment",async function() {
       let flag:boolean= await multiplePreplan.sendOrderNumbers(picpUpPage.orderNumbers[0]);
       expect(flag).toBeTruthy();
    });
    it("should enter second orderNumber in the empty text box and click on add segment",async function() {
        let flag:boolean= await multiplePreplan.sendOrderNumbers(picpUpPage.orderNumbers[1]);
        expect(flag).toBeTruthy();
    });
    it("should click on dropdown and change the order sequence then Order sequence will change",async function() {
       let flag:boolean= await multiplePreplan.verifyOrderSequenceInDropdown(picpUpPage.orderNumbers[1]);
       expect(flag).toBeTruthy();
    });
    it("should click on 'update Button'",async function() {
        await multiplePreplan.clickOnUpdateButton();
        await multiplePreplan.waitForActionToComplete();
        await multiplePreplan.waitForLoading();
    });
    it("should display 'Successfully updated.'",async function() {
        let flag:boolean= await multiplePreplan.verifySuccessMessage();
        console.log("suc mes"+flag);
        expect(flag).toBeTruthy();
     });


});
})