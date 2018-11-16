import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { ASMSplitScreenPage } from '../../pages/freight_manager/asm-splitscreen.po';
import { DataProvider } from "../../data/dataProvider";

let homePage = new MyJbHuntHomePage();
let freightManager = new FreightManager2Page();
let asmSplitScreen = new ASMSplitScreenPage();
let using=require('jasmine-data-provider');
//TC_80868: FM2_Regression_35 ASM spilt screen
using(DataProvider.Tc_80868, async function(data){

describe("User searches for ASM split screen", function () {

    it("should open 'Freight Manager url'",async function() {
        await homePage.openFm2Url();
    });
    
    it("should display 'Freight manager page'", async function () {
        let pageTitle = await freightManager.verifyFreightManagerPage();
        expect(pageTitle).toEqual(data.verifyFreightManagerTitle);
    });

    it("should click on 'Planning' in Freightmanager", async function () {
        await freightManager.mouseOverOnPlanningTab();
    });

    it("should click on 'ASM Split Screen' in Planning", async function () {
        await freightManager.clickOnASMsplitScreen();
    });

    it("should enter text in 'Division text box'", async function () {
        await asmSplitScreen.sendKeysToDivisionTextBox(data.strDivison);
    });

    it("should enter text in 'Area text box'", async function () {
        await asmSplitScreen.sendKeysToAreaTextBox(data.strArea);
    });

    it("should click on search", async function () {
        await asmSplitScreen.clickSearchButton();
    });

    it("should display results related to 'CH'", async function () {
        let flag = await asmSplitScreen.verifyResultsForSearchOrderTable();
        expect(flag).toBeGreaterThan(data.zero);
    });

});
})