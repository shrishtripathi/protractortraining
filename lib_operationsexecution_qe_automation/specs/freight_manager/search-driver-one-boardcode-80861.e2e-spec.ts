import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { OBCExceptionsPage } from '../../pages/freight_manager/obc-exception.po';
import { DataProvider } from "../../data/dataProvider";

let homePage = new MyJbHuntHomePage();
let freightManager = new FreightManager2Page();
let obcExceptions = new OBCExceptionsPage();
let using=require('jasmine-data-provider');
//TC_80861: FM2_Regression_31 Search for a driver by 1 board code
using(DataProvider.Tc_80861, async function(data){

describe("User searches for a driver by 1 board code", function () {
    it("should open 'Freight Manager url'",async function() {
        await homePage.openFm2Url();
    });

    it("should display 'Freight manager page'", async function () {
        let pageTitle = await freightManager.verifyFreightManagerPage();
        expect(pageTitle).toEqual(data.freightManagerTitle);
    });

    it("should click on 'Driver Tab' in Freightmanager", async function () {
        await freightManager.mouseOverToDriverTab();
    });

    it("should click on 'OBC Exception' Under Driver tab", async function () {
        await freightManager.clickOnOBCExceptions();
    });

    it("should send data to 'Board Code Text Box'", async function () {
        await obcExceptions.sendDataToBoardTextBox(data.BoardCode1);
    });

    it("should click on 'Search Button", async function () {
        await obcExceptions.clickOnSearchButton();
    });

    it("should display list of drivers related to search", async function () {
        let count:number=await obcExceptions.verifySearchResults();
        expect(count).toBeGreaterThan(data.zero);

    });

});
})