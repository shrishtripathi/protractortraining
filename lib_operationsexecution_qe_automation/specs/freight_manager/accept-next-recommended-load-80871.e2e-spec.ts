import { ChasisBeamPage } from '../../pages/freight_manager/chasis-beam-po';
import { BasePage } from '../../pages/base.po';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { UnitViewPage } from '../../pages/freight_manager/unit-view.po';
import { DataProvider } from "../../data/dataProvider";

let basePage = new BasePage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let unitViewPage = new UnitViewPage();
let using=require('jasmine-data-provider');

//TC 80871: FM2_Regression_37 Accept next recommended load
using(DataProvider.Tc_80871, async function(data){

describe("Accept next recommended load", ()=> {
  
    it("Should open Freight Manager2 url", async  ()=> {
        await myJbHuntHomePage.openFm2Url();
    });

    it("Verifying that Freight Manger page is displayed", async function () {
        await expect<any>(freightManager2Page.verifyFreightManagerPage()).toBe(data.verifyFreightManagerTitle);
    });

    it("Should click on Unit View option under Planning tab", async ()=> {
        await freightManager2Page.selectOptionFromFreightManager2(data.tabName,data.option);
    });
  
    it("Should click on Search button", async () => {
        await unitViewPage.clickSearchButton();
    });

    it("Should find tractor with one or two preplans and click on driver number and note of driper alpha code",async ()=>{
        await unitViewPage.findTractorWithOnePreplan(data.findTractorTable,data.findTractorColumn1,data.findTractorColumn2);
    });

    it("Verifying that Successfully added to Tractor multiple preplan list message is displayed",  async ()=> {
        await expect(await unitViewPage.spanText(data.spanText).getText()).toBe(data.successMessage);
    });

})});