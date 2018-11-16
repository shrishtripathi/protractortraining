import { browser, ElementFinder } from "protractor";
import { MyJbHuntHomePage } from "../../Pages/my-jbhunt-home.po";
import { DeliveryPage } from "../../pages/freight_manager/delivery.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let deliveryPage = new DeliveryPage();
let freightManagerPage = new FreightManager2Page();
let using = require('jasmine-data-provider');

//TC 85413 : FM2_Regression_38 Add comments to an order via the PWR/DRVR field using Driver
using(DataProvider.Tc_85413, async function (data) {

  describe("Add comments to an order via the PWR/DRVR field using Driver", function () {
    let object_notes: ElementFinder;

    it("should open homepage", async () => {
      await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
    });

    it("Hover Planning Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on Delivery Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.option);
    });

    it("Refresh the page to reflect parameters", async () => {
      await freightManagerPage.refreshPage();
    });

    it("Enter parameters on delivery view screen", async () => {
      await deliveryPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strArea, data.strFleetType);
    });

    it("Click search on delivery view page", async () => {
      await deliveryPage.clickSearchButton();
    });

    it("Find empty driver notes and set valid data", async () => {
      this.object_notes = await deliveryPage.setValuesIntoDriverNotes(data.driverNotes);
    });

    it("Click Notes on delivery view page", async () => {
      await deliveryPage.clickOnNotes();
    });

    it('Verify driver notes success message for valid data', async () => {
      let verify_message: string = await deliveryPage.verifyEventMessages(data.successMessage);
      await expect(verify_message).toBe(data.successMessage);
    });

    it('Verify saved note under driver notes', async () => {
      await deliveryPage.checkNewlySavedDriverNote(this.object_notes, data.driverNotes);
    });

  });
});