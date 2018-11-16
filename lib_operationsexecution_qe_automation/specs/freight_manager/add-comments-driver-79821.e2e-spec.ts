import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { PickupviewPage } from '../../pages/freight_manager/pick-up-view.po';
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let using = require('jasmine-data-provider');

//TC_79821:FM2_Regression_14 Add comments to an order via the PWR/DRVR field in Pickup
using(DataProvider.Tc_79821, async function (data) {

    describe("User adds comments to an order view the Driver field in Pick up", function () {

        it("Should open Freight Manager2 url", async () => {
            await myJbHuntHomePage.openFm2Url();
        });

        it("Verifying that Freight Manger page is displayed", async function () {
            await expect(await freightManager2Page.verifyFreightManagerPage()).toBe(data.freightManager);
        });

        it("Should click on Pick Up option under Planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option)
        });

        it("Should enter 'HJBT JBVAN' in division field ", async () => {
            await pickupviewPage.enterDataInInputField(data.divisionId, 1, data.divisionInput);
        });

        it("Should enter 'MKT' in Area type field ", async () => {
            await pickupviewPage.setAreaType(data.areaText, data.areaType);
        });

        it("Should enter 'DA' in Area field ", async () => {
            await pickupviewPage.enterDataInInputField(data.areaId, 1, data.area);
        });

        it("Should enter 'I' in Tran Md field ", async () => {
            await pickupviewPage.enterDataInInputField(data.transitModeId, 1, data.empty);
            await pickupviewPage.enterDataInInputField(data.transitModeId, 2, data.tranMdText);
        });

        it("Should click on 'Save Prefs' button", async () => {
            await pickupviewPage.clickOnSavePrefButton();
        });

        it("Should click on 'Search' button", async () => {
            await pickupviewPage.clickSearchButton();
        });

        it("Should find an order where power/driver notes box is editable and enter invalid notes", async () => {
            await pickupviewPage.findEmptyNoteBox(data.invalidText, data.tableId);
        });

        it("Should click on 'Notes' button", async () => {
            await pickupviewPage.clickOnNotesButton();
        });

        it("Verifying that Notes cannot be numeric is displayed", async () => {
            var text = await pickupviewPage.getErrorMessage(data.errorMessage);
            await expect<any>(text).toBe(data.errorMessage);
        });

        it("Should find an order where power/driver notes box is editable and enter valid notes", async () => {
            await pickupviewPage.findEmptyNoteBox(data.emptyNoteBox, data.tableId);
        });

        it("Should click on 'Notes' button", async () => {
            await pickupviewPage.clickOnNotesButton();
        });

        it("Verifying that notes has been updated sucessfully", async () => {
            var text = await pickupviewPage.getErrorMessage(data.successMessage);
            await expect<any>(text).toBe(data.successMessage);
        });

    });

});
