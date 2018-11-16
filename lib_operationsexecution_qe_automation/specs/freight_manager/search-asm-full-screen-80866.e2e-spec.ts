import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { ASMFullScreenPage } from '../../pages/freight_manager/asm-fullscreen.po';
import { DataProvider } from "../../data/dataProvider";

let homePage = new MyJbHuntHomePage();
let freightManager = new FreightManager2Page();
let asmFullScreen = new ASMFullScreenPage();
let using=require('jasmine-data-provider');
//TC_80866: FM2_Regression_34 ASM Full Screen 
using(DataProvider.Tc_80866, async function(data){

describe("User searchs ASM full screen", function () {

    it("should open 'Freight manager Url'", async function () {
        await homePage.openFm2Url();
    });

    it("should display 'Freight manager page'", async function () {
        let pageTitle = await freightManager.verifyFreightManagerPage();
        expect(pageTitle).toEqual(data.verifyFreightManagerTitle);
    });

    it("should click on 'Planning' in Freightmanager", async function () {
        await freightManager.mouseOverOnPlanningTab();
    });

    it("should click on 'ASM Full Screen' in Planning", async function () {
        await freightManager.clickOnASMfullScreen();
    });

    it("should enter text in 'Division text box'", async function () {
        await asmFullScreen.sendKeysToDivisionTextBox(data.strDivison);
    });

    it("should enter text in 'Area text box'", async function () {
        await asmFullScreen.sendKeysToAreaTextBox(data.strArea);
    });

    it("should click on search", async function () {
        await asmFullScreen.clickSearchButton();
    });

    it("should display results related to 'CH'", async function () {
        let count = await asmFullScreen.verifyResultsForSearchOrderTable();
        expect(count).toBeGreaterThan(data.zero);
    });

});
})
