import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { BasePage } from "../../pages/base.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { TourPage } from "../../pages/freight_manager/tour.po";
import { browser, element } from "protractor";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let pickupviewPage = new PickupviewPage();
let freightManager2Page = new FreightManager2Page();
let basePage = new BasePage();
let orderSegmentPage = new OrderSegmentPage();
let tourPage = new TourPage();
let using=require('jasmine-data-provider');
//TC_80020: FM2_Regression_15 Preplan via WOF/OS button in Pickup, add segments to orders in tour
using(DataProvider.Tc_80020, async function(data){

describe("User create Preplan via WOF/OS button in Pickup, add segments to orders in tour", () => {
    let orderNUmber1: string;
    let orderNUmber2: string;

    it('Open Freight Manager2 Page', async () => {
        await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
    });

    it('Hover Over Planning Option from header And Click on Pick Up DropDown Option', async () => {
        await freightManager2Page.hoverOverFM2PageHeaderOption(data.tabName);
        await freightManager2Page.clickHeaderDropDownOption(data.option);
    });

    it('Select Type from dropdown', async () => {
        await pickupviewPage.selectType();
    });

    it('Enter Division Code in the text Box', async () => {
        await pickupviewPage.enterDivision(data.strDivison);
    });

    it('Enter Area Type code in text Box', async () => {
        await pickupviewPage.enterAreaType(data.strAreaType);
    });

    it('Enter Area code in text Box', async () => {
        await pickupviewPage.enterArea(data.strArea);
    });

    it('Enter Fleet code in text Box', async () => {
        await pickupviewPage.enterTranMd(data.strTranMd);
    });

    it('Click on Save Pref Button', async () => {
        await pickupviewPage.waitForLoading()
        await pickupviewPage.clickOnButton(data.buttonTextValueSavePref);
    });

    it('Click on Search Button', async () => {
        await pickupviewPage.waitForLoading()
        await pickupviewPage.clickOnButton(data.buttonTextValueSearch);
    });

    it('Wait for Search Result', async () => {
        await pickupviewPage.waitForSearchResult();
    });

    it('Search for Order Number', async () => {
        orderNUmber1 = await pickupviewPage.clickWhiteColorBoxWithEmptyBox();
    });

    it('Enter Project Code in Order Segment', async () => {
        await orderSegmentPage.enterCodesInOrderSegment(data.ProjectcodeName, data.projectCode);
    });

    it('Enter Carrier Code in Order Segment', async () => {
        await orderSegmentPage.enterCodesInOrderSegment(data.carriercodeName, data.carrierCode);
    });

    it('Click on Create Preplan Button', async () => {
        await pickupviewPage.clickOnButton(data.buttonTextValueCreatePreplan);
        await pickupviewPage.waitForLoading()
    });

    it('Click on Exit Button', async () => {
        await orderSegmentPage.clickOnExitButton();
        await pickupviewPage.waitForLoading()
        await pickupviewPage.actions.waitBrowserTitleEqualsTo("Pickup View")
    });

    it('Search for Order Number', async () => {
        orderNUmber2 = await pickupviewPage.clickWhiteColorBoxWithEmptyBox();
    });

    it('Enter Project Code in Order Segment', async () => {
        await orderSegmentPage.enterCodesInOrderSegment(data.ProjectcodeName, data.projectCode);
    });

    it('Enter Carrier Code in Order Segment', async () => {
        await orderSegmentPage.enterCodesInOrderSegment(data.carriercodeName,  data.carrierCode);
    });

    it('Click on Create Preplan Button', async () => {
        await pickupviewPage.waitForLoading()
        await pickupviewPage.clickOnButton(data.buttonTextValueCreatePreplan);
        await pickupviewPage.waitForLoading()
    });

    it('Hover Over Carrier Option from header And Click on Tour DropDown Option', async () => {
        await freightManager2Page.hoverOverFM2PageHeaderOption(data.HeaderOptionCarrier);
        await freightManager2Page.clickHeaderDropDownOption(data.DropDownOption);
        await freightManager2Page.actions.waitBrowserTitleEqualsTo("Tour")
    });

    it('Enter Order Number', async () => {
        console.log("orderNUmber1: "+orderNUmber1)
        await tourPage.enterOrderNumber(orderNUmber1);        
        await pickupviewPage.waitForSearchResult();
    });

    it('Click on Add Segment Button', async () => {
        await tourPage.clickOnButton(data.buttonTextValueAddSegment);
        await pickupviewPage.waitForSearchResult();
    });

    it('Enter Order Number', async () => {
        console.log("enterOrderNumner2: "+orderNUmber2)
        await tourPage.enterOrderNumber(orderNUmber2);
    });

    it('Click on Add Segment Button', async () => {
        await tourPage.clickOnButton(data.buttonTextValueAddSegment);
        await pickupviewPage.waitForSearchResult();
    });

    it('Verify success message', async () => {
        let successmessage: string = await orderSegmentPage.getSuccessMessage();
      await  expect(successmessage).toBe(data.message);
    });

});
})