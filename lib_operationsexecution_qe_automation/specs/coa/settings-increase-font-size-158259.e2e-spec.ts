import { DataProvider } from "../../data/dataProvider";
import { COAHomePage } from "../../pages/coa/coa-home-page.po";

let coaHomePage = new COAHomePage();
let using = require('jasmine-data-provider');

//TC- 158259 COA_Regression_8 Settings, increase font size
describe("Settings, increase font size to COA", () => {

    let initialFontSize: number;
    let increaseFontSize1: number;
    let increaseFontSize2: number;

    //PreCondition TC #156016: Login to COA
    using(DataProvider.Tc_156016, async function (data) {

        it("Should open COA url", async () => {
            await coaHomePage.navigateToAppHome(coaHomePage.coaUrl);
        });

        it("Verifying that COA Home page is displayed", async () => {
            await expect(coaHomePage.getPageTitle()).toBe(data.coaPageTitle);
        });

    });
    //TC-158259
    using(DataProvider.Tc_158259, async function (data) {

        it('Hover over the Settings button', async () => {
            initialFontSize = await coaHomePage.getFontSize(coaHomePage.homeTabOnmenuBarXpath)
            await coaHomePage.mouseOverToTab(await coaHomePage.headerOptionElements(data.settings))
        });

        it('click to select Increase Font Size', async () => {
            await coaHomePage.clickOnLink(data.increaseFontSize)
        });

        it("validate Font size.", async () => {
            increaseFontSize1 = await coaHomePage.getFontSize(coaHomePage.homeTabOnmenuBarXpath)
            expect(increaseFontSize1).toBeGreaterThan(initialFontSize)
        });

        it('Hover over the Settings button', async () => {
            await coaHomePage.mouseOverToTab(await coaHomePage.headerOptionElements(data.settings))
        });

        it('click to select Increase Font Size', async () => {
            await coaHomePage.clickOnLink(data.increaseFontSize)
        });

        it("validate Font size.", async () => {
            increaseFontSize2 = await coaHomePage.getFontSize(coaHomePage.homeTabOnmenuBarXpath)
            expect(increaseFontSize2).toBeGreaterThan(increaseFontSize1)
        });

        it('Hover over the Settings button', async () => {
            await coaHomePage.mouseOverToTab(await coaHomePage.headerOptionElements(data.settings))
        });

        it('click to select decrease Font Size', async () => {
            await coaHomePage.clickOnLink(data.decreaseFontSize)
        });

        it("validate Font size.", async () => {
            increaseFontSize1 = await coaHomePage.getFontSize(coaHomePage.homeTabOnmenuBarXpath)
            expect(increaseFontSize1).toBeLessThan(increaseFontSize2)
        });

        it('Hover over the Settings button', async () => {
            await coaHomePage.mouseOverToTab(await coaHomePage.headerOptionElements(data.settings))
        });

        it('click to select decrease Font Size', async () => {
            await coaHomePage.clickOnLink(data.decreaseFontSize)
        });

        it("validate Font size.", async () => {
           let fontSize = await coaHomePage.getFontSize(coaHomePage.homeTabOnmenuBarXpath)
            expect(fontSize).toBe(initialFontSize)
        });

    });

});