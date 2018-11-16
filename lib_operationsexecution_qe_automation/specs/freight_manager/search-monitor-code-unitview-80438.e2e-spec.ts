
import { browser, element, promise } from 'protractor';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { UnitViewPage } from '../../pages/freight_manager/unit-view.po';
import { UnitViewParameterPage } from "../../pages/freight_manager/unit-view-parameter.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let unitViewPage = new UnitViewPage();
let unitViewParameterPage = new UnitViewParameterPage();
let using=require('jasmine-data-provider');
//TC_80438:FM2_Regression_24 Search by Monitor codes in Unit View
using(DataProvider.Tc_80438, async function(data){

describe("User searchs by monitor codes in unit view", function () {

  it("Open My JBHunt url", async () => {
    await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
  });

  it("Hover Planning Option from header",async () => {
    await freightManager2Page.hoverOverFM2PageHeaderOption(data.tabName);
  });

  it("Click on Unit View Option",async () => {
    await freightManager2Page.clickHeaderDropDownOption(data.optionUnitView);
  });

  it("Click on Parameter button Option",async () => {
    await unitViewPage.clickOnParameterButton();
    await unitViewParameterPage.selectType(data.type);
  });

  it("Enter Board Codes in text boxes",async () => {
    await unitViewParameterPage.enterSelectTypeCode(data.codeName, 1, data.typeCode1);
    await unitViewParameterPage.enterSelectTypeCode(data.codeName, 2, data.typeCode2);
    await unitViewParameterPage.enterSelectTypeCode(data.codeName, 3, data.typeCode3);
    await unitViewParameterPage.enterSelectTypeCode(data.codeName, 4, data.typeCode4);
  });

  it('Click on Save Prefrences button', async () => {
    await unitViewParameterPage.clickOnSaveParameterButton();
    expect(await unitViewParameterPage.getEventMessage()).toEqual(data.eventMessage);
    await unitViewParameterPage.clickOnExitButton();
  });

});
})