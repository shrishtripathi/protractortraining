import { BasePage } from '../../pages/base.po';
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { CrossTownPage } from '../../pages/freight_manager/cross-town.po';
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from 'protractor';

let basePage = new BasePage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let crossTownPage = new CrossTownPage();
let orderSegmentPage = new OrderSegmentPage();
let using = require('jasmine-data-provider');
//TC_80023: FM2_Regression_16 Create preplan via cross town / order segment
using(DataProvider.Tc_80023, async function (data) {
    describe("Create preplan via Cross Town", function () {

        it('Open Freight Manager2 Page', async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
        });

        it('Hover Over Planning Option from header And Click on Cross Town DropDown Option', async () => {
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.headerOption);
            await freightManager2Page.clickHeaderDropDownOption(data.downOption);
        });

        it('Enter Division Code in the text Box', async () => {
            await crossTownPage.enterDivisionCode();
        });

        it('Enter Area Type code in text Box', async () => {
            await crossTownPage.enterAreaType();
        });

        it('Enter Area code in text Box', async () => {
            await crossTownPage.enterArea();
        });
        it('Enter Fleet code in text Box', async () => {
            await crossTownPage.enterFleetCode();
        });

        it('Click on Save Pref Button', async () => {
            await crossTownPage.clickOnButton(data.buttonTextValueSavePref);
        });

        it('Click on Search Button', async () => {
            await crossTownPage.clickOnButton(data.buttonTextValueSearch);
        });

        it('Wait for Search Result', async () => {
            await crossTownPage.waitForSearchResult();
        });

        it('Click on Reload Button', async () => {
            await crossTownPage.clickOnReloadButton();
        });

        it('Click On Color Box', async () => {
            await crossTownPage.clickColorBoxWithEmptyTextBox();
        });

        it('Enter Project and Carrier Codes in Order Segment', async () => {
            await orderSegmentPage.enterCodesInOrderSegment(data.ProjectCodeName, data.projectCode);
            await orderSegmentPage.enterCodesInOrderSegment(data.carrierCodeName, data.carrierCode);            
        });

        it('Click on Create Preplan Button', async () => {
            await orderSegmentPage.click(orderSegmentPage.button_CreatePreplan)
            await crossTownPage.waitForSearchResult();
        });

        it('Validating Success Message', async () => {
            let sucessMessage = await orderSegmentPage.validateSuccessMessage();            
            await expect(sucessMessage).toContain(data.message);
        });

    });
})