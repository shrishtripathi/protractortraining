import { browser, element, promise } from 'protractor';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { UnitViewPage } from '../../pages/freight_manager/unit-view.po';
import { UnitViewParameterPage } from "../../pages/freight_manager/unit-view-parameter.po";
import { DataProvider } from "../../data/dataProvider";
import { async } from 'q';

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let unitViewPage = new UnitViewPage();
let unitViewParameterPage = new UnitViewParameterPage();
let using = require('jasmine-data-provider');
//TC#79801:FM2_Regression_9 Test changes to parameters in Unit View
using(DataProvider.Tc_79801, async function (data) {

  describe("Test changes to parameters in Unit View", function () {

    it("Open My JBHunt url", async () => {
      await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
    });


    it("Should select 'Unit View' under planning tab", async () => {
      await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
    });

    it("Click on Parameter Button", async () => {
      await unitViewPage.clickOnParameterButton();
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

    it("Click on Parameter Button", async () => {
      await unitViewPage.clickOnParameterButton();
    });

    it("should enter Board Codes", async () => {
      await unitViewParameterPage.enterSelectTypeCode(data.codeName, 1, data.BoardCode5);
      await unitViewParameterPage.enterSelectTypeCode(data.codeName, 2, data.BoardCode6);
      await unitViewParameterPage.enterSelectTypeCode(data.codeName, 3, data.BoardCode7);
      await unitViewParameterPage.enterSelectTypeCode(data.codeName, 4, data.BoardCode8);
    });

    it("Click on Save Parameter Button", async () => {
      await unitViewParameterPage.clickOnSaveParameterButton();
    });

    it("Click on Exit Button", async () => {
      await unitViewParameterPage.clickOnExitButton();
    });

    it("Verifying Board Code Values to 'L1A','L1E','G21','G22'", async () => {
      await expect<any>(unitViewPage.verifyBoardCodes(1)).toBe(data.BoardCode5);
      await expect<any>(unitViewPage.verifyBoardCodes(2)).toBe(data.BoardCode6);
      await expect<any>(unitViewPage.verifyBoardCodes(3)).toBe(data.BoardCode7);
      await expect<any>(unitViewPage.verifyBoardCodes(4)).toBe(data.BoardCode8);
    });

    it("Verifying driver list is updated", async () => {
      await unitViewPage.verifyList();
    });
  });
})