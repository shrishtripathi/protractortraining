import { BasePage } from "../../pages/base.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { ChasisBeamPage } from "../../pages/freight_manager/chasis-beam-po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { DataProvider } from "../../data/dataProvider";

let basePage = new BasePage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let chasisBeamPage = new ChasisBeamPage();
let unitViewPage = new UnitViewPage();
let using = require('jasmine-data-provider');

//TC_80858: FM2_Regression_29 Detach a chassis and reattach it
using(DataProvider.Tc_80858, async function (data) {

    describe(" Detach a chassis and reattach it", () => {

        let tractorNumber: string;
        let chasisDriverNumber: string;
        let chasisDriverPrefix: string;

        it("Should open Freight Manager2 url", async () => {
            await myJbHuntHomePage.openFm2Url();
        });

        it("Verifying that Freight Manger page is displayed", async function () {
            await expect(await freightManager2Page.verifyFreightManagerPage()).toBe(data.freightManager);
        });

        it("Should click on Unit View option under Planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
        });

        it("Should click on Search button", async () => {
            await unitViewPage.clickSearchButton();
        });

        it("Should find a tractor number and that has chasis number ", async () => {
            let chasisInformation = await unitViewPage.findChasisNumberAvailableTractorNumber(data.tableId, data.trlrTypeColumnName, data.unitNbrColumnName);
            tractorNumber = chasisInformation.tractorNo;
            chasisDriverNumber = chasisInformation.chasisDriverNo;
            chasisDriverPrefix = chasisInformation.chasisDriverPref;
            console.log("tractorNumber:"+tractorNumber);
            console.log("chasisDriverNumber:"+chasisDriverNumber);
            console.log("chasisDriverPrefix:"+chasisDriverPrefix);
        });

        it("Should click on Chassis/Beam option under Equipmnent tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.equipmentTab, data.optionChassisBeam);
        });

        it("Should enter the tractor number in white text box in Container/Chasis page", async () => {
            await chasisBeamPage.setTractorText(tractorNumber);
        });

        it("Should click on Search button", async () => {
            await chasisBeamPage.clickSearchButton();
            await chasisBeamPage.waitForActionToComplete();
        });
        
        it("Should click on Detach button", async () => {
            await chasisBeamPage.clickOnDetachButton();
            await chasisBeamPage.waitForActionToComplete();
        });

        it("Should click on Chassis/Beam under Equipmnent tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.equipmentTab, data.optionChassisBeam);
        });

        it("Should enter the tractor number in white text box in Container/Chasis page", async () => {
            await chasisBeamPage.setTractorText(tractorNumber);
        });

        it("Should click on Search button in Container/Chasis page", async () => {
            await chasisBeamPage.clickSearchButton();
            await chasisBeamPage.waitForActionToComplete();
        });

        it("Should enter the prefix and number in the Chasis to be attached fields", async () => {
            await chasisBeamPage.setChasisPrefixText(chasisDriverPrefix);
            await chasisBeamPage.setChasisNumberText(chasisDriverNumber);
        });

        it("Should click on attach button in Container/Chasis page", async () => {
            await chasisBeamPage.clickOnAttachButton();
            await chasisBeamPage.waitForActionToComplete();
        });

        it("Should verify whether the chasis has been reattached", async () => {
            await expect(await chasisBeamPage.reattachedDriverPrefix.getText()).toBe(chasisDriverPrefix);
            await expect(await chasisBeamPage.reattachedDriverNumber.getText()).toBe(chasisDriverNumber);
        });

    });

})