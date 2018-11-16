
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { FleetManagerView } from '../../pages/freight_manager/fleet-manager-view.po';
import { browser, element } from 'protractor';
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let fleetManagerView = new FleetManagerView();
let using=require('jasmine-data-provider');
//TC_80869:FM2_Regression_36 Add board code through fleet manager view
using(DataProvider.Tc_80869, async function(data){

describe("Add board code through fleet manager view", function () {

  it("Open My JBHunt URL", async () => {
    await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
  });

  it("Hover Over Driver Option from Header Options", async () => {
    await freightManager2Page.hoverOverFM2PageHeaderOption(data.tabName);
  });

  it("Click on Fleet Manager View Option from Driver Header Option", async () => {
    await freightManager2Page.clickHeaderDropDownOption(data.optionFleetManager);
  });

  it("Enter Board Codes in Text boxes on Fleet Manager View Page", async () => {
    await fleetManagerView.enterBoardCode(1, data.BoardCode1, "First Text Box");
    await fleetManagerView.enterBoardCode(2, data.BoardCode2, "Second Text Box");
    await fleetManagerView.enterBoardCode(3, data.BoardCode3, "Third Text Box");
    await fleetManagerView.enterBoardCode(4, data.BoardCode4, "Fourth Text Box");
  });

  it('Click on Save Prefrences button', async () => {
    await fleetManagerView.clickOnSavePrefsButton();
  });

  it('Verify saved Prefrence success message', async () => {
    await fleetManagerView.verifySavePreferenceSuccessMessage();
  });

  it("Click on Search Button on FM2 Page", async () => {
    await fleetManagerView.clickSearchButtonInFM2Page();
  });

});})