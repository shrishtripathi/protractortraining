
import { BasePage } from '../../pages/base.po';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { AddCommentsPage } from "../../pages/freight_manager/add-comment-popup-window.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { browser, ElementArrayFinder } from 'protractor';
import { DataProvider } from "../../data/dataProvider";

let basePage = new BasePage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let pickUPViewPage = new PickupviewPage();
let addCommentsPage = new AddCommentsPage();
let unitViewPage = new UnitViewPage();
let using = require('jasmine-data-provider');
//TC_80847: Reset appointment in Unit View and Pickup Screens
using(DataProvider.Tc_80847, async function (data) {
  describe("Reset appointment in Unit View and Pickup Screens", () => {
    let orderNumber: string = null;
    let comment: string = null;

    it('Navigate to FM2 Page', async () => {
      await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
    });

    it("Hover Planning Option from header", async () => {
      await freightManager2Page.hoverOverFM2PageHeaderOption('Planning');
    });

    it("Click on Pick Up Option", async () => {
      await freightManager2Page.clickHeaderDropDownOption('Pick Up');
      await freightManager2Page.actions.waitBrowserTitleEqualsTo("Pickup View")
      await expect(await freightManager2Page.actions.getPageTitle("Getting Page Title")).toEqual("Pickup View")
    });

    it('Enter the parameters', async () => {
      await pickUPViewPage.selectType();
      await pickUPViewPage.enterDivision(data.strDivison);
      await pickUPViewPage.enterAreaType(data.strAreaType);
      await pickUPViewPage.enterArea(data.strArea);
      await pickUPViewPage.enterTranMd(data.strTranMd);
    });

    it('Click on Search Button', async () => {
      await pickUPViewPage.clickOnSearchButton();
      await pickUPViewPage.waitForLoading();
    });

    it('Click On Order No HyperLink', async () => {
      orderNumber = await pickUPViewPage.clickOnOrderNumberLink(0);
      await pickUPViewPage.switchToNewWindow();
    });

    it('Validate Title and minimize the window', async () => {
      let title: string = await pickUPViewPage.closePopUpAndSwitchToDefaultWindow();
      expect(title).toEqual("Enterprise Order Management - " + orderNumber);
    });

    it('Hover Over the Load Number Drop Down', async () => {
      await pickUPViewPage.hoverOverOrderNumberDropDown();
    });

    it('Click On Add/View Comments', async () => {
      await pickUPViewPage.clickOnDropDownOptionInOrderNumber(data.orderNumberDropDownIndex, data.orderNumberDropDownOption)
      pickUPViewPage.switchToNewWindow();
    });

    it('Select APPT RESET option from Type', async () => {
      await addCommentsPage.selectTypeDropDown();
    });

    it('Enter Location', async () => {
      await addCommentsPage.enterLocationName(data.location);
    });

    it('Enter Comments', async () => {
      comment = addCommentsPage.randomeStringGenrator(6)
      await addCommentsPage.enterComment(comment);
    });

    it('Click On Save Comments Button', async () => {
      await addCommentsPage.clickOnSaveCommentsButton();
    });

    it('Verify success message', async () => {
      let successmessage: string = await addCommentsPage.validateSuccessMessage();
      console.log(successmessage);
      expect(successmessage).toEqual(data.successMessage);
      await pickUPViewPage.closePopUpAndSwitchToDefaultWindow();
    });

    it('Hover Over the Load Number Drop Down', async () => {
      await pickUPViewPage.hoverOverOrderNumberDropDown();
    });

    it('Click On Reset Appointment', async () => {
      await pickUPViewPage.clickOnDropDownOptionInOrderNumber(data.orderNumberDropDownIndex, data.orderNumberDropDownOptionReset);
      await pickUPViewPage.switchToNewWindow()
      await pickUPViewPage.actions.waitBrowserTitleEqualsTo("Load Appointment Maintenance")
      await expect(await pickUPViewPage.actions.getPageTitle("getting Title")).toEqual(data.title);
      await pickUPViewPage.closePopUpAndSwitchToDefaultWindow();
    });

    it('Hover Over the Load Number Drop Down', async () => {
      await pickUPViewPage.hoverOverOrderNumberDropDown();
    });

    it('Click On Add/View Comments', async () => {
      await pickUPViewPage.clickOnDropDownOptionInOrderNumber(data.orderNumberDropDownIndex, data.orderNumberDropDownOptionReferenceNumber);
      await pickUPViewPage.switchToNewWindow()
      let title: string = await pickUPViewPage.closePopUpAndSwitchToDefaultWindow();
      expect(title).toEqual(data.referenceNumberTitle);
    });

    it("Hover Planning Option from header", async () => {
      await freightManager2Page.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on Unit View Option", async () => {
      await freightManager2Page.clickHeaderDropDownOption(data.optionUnitView);
    });

    it('Send Data to Board Code Text Boxes', async () => {
      await unitViewPage.sendDataToBoardCodeTextBoxes(data.BoardCode1, data.BoardCode2, data.BoardCode3, data.BoardCode4);
      // await unitViewPage.WaitForSearchResultLoading();
      await unitViewPage.waitForLoading();
    });

    it('Click on Search Button', async () => {
      await unitViewPage.clickOnSearchButton();
      // await unitViewPage.WaitForSearchResultLoading();
    });

    it('Search for Order Number noted in Pick Up View Page', async () => {
      await unitViewPage.waitForLoading()
      await unitViewPage.searchForOrderNumber(orderNumber)
    });

    it('Hover over arrow button and click on Add/View Comment', async () => {
      await unitViewPage.hoverArrowIconAndClick(orderNumber, data.orderNumberDropDownOption);
    });

    it('Verify Comment', async () => {
      await pickUPViewPage.switchToNewWindow();
      await browser.sleep(5000)
      let text = await unitViewPage.verifycomment(comment);
      await expect(text.locationText).toEqual(data.location);
      await expect(text.messageText).toEqual(comment);
      await expect(text.typeText).toEqual(data.typeVerify);
      await console.log(text.locationText, text.messageText, text.typeText)
    });
    it('close the popUp window and switch to default window', async () => {
      await browser.close();
      await pickUPViewPage.switchToNewWindow();
    });

    it('Hover over arrow button and Reset Appointment', async () => {
      await unitViewPage.hoverArrowIconAndClick(orderNumber, data.orderNumberDropDownOptionReset);
    });

    it('Hover over arrow button and Reset Appointment', async () => {
      await pickUPViewPage.switchToNewWindow();
      await expect(await browser.getTitle()).toEqual(data.loadAppointmentTitle);

    });

    it('close the popUp window and switch to default window', async () => {
      await browser.close();
      await pickUPViewPage.switchToNewWindow();
    });

    it('Hover over arrow button and click on Reference Numbers', async () => {
      await unitViewPage.hoverArrowIconAndClick(orderNumber, data.orderNumberDropDownOptionReferenceNumber);
    });

    it('Hover over arrow button and click on Reference Numbers', async () => {
      await pickUPViewPage.switchToNewWindow();
      await expect(await browser.getTitle()).toEqual(data.referenceNumberTitle);
    });

  });
})