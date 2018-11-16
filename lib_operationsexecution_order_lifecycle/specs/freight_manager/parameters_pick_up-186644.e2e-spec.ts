import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { PickupviewPage } from '../../pages/freight_manager/pick-up-view.po';
import { DataProvider } from "../../data/dataProvider";

let freightManager2Page = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let using = require('jasmine-data-provider');
//TC_186644 - FM2 Parameters Pick Up
using(DataProvider.Tc_186644, async function (data) {

    describe("Save Pickup Parameters", function () {

        it("Should Open FM2 url", async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2)
        });

        it("Should select 'PICK UP' under planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.pickUpOption);
        });

        it("Click the dropdown tab underneath Type, click to select A - Area", async () => {
            await pickupviewPage.selectType();
        });

        it("Should type 'HJBT JBVAN' in division field ", async () => {
            await pickupviewPage.enterDivision(data.strDivison);
        });

        it("Should type 'MKT' in Area type field ", async () => {
            await pickupviewPage.clearAreaType();
            await pickupviewPage.enterAreaType(data.strAreaType);
        });

        it("Should type 'DA' in Area field ", async () => {
            await pickupviewPage.enterArea(data.strArea);
        });

        it("Should type 'I' in Tran Md  field ", async () => {
            await pickupviewPage.enterTranMd(data.strTranMd);
        });

        it("Click save pref on Pick up view page", async () => {
            await pickupviewPage.clickSavePrefsButton();
        });

        it("Verify save preference success message", async () => {
            await pickupviewPage.waitForResult()
            await pickupviewPage.actions.waitUntilElementPresenceOf(pickupviewPage.successOrErrorMessage)
            let verify_message: string = await pickupviewPage.getElementText(pickupviewPage.successOrErrorMessage)
            await expect(verify_message).toBe('');
        });

    });
});
