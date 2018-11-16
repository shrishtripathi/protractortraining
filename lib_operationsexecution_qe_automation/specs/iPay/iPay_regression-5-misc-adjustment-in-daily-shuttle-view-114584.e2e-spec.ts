import { browser, by } from "protractor";
import { IPayHomePage } from "../../pages/iPay/iPay-home.po";
import { ActivityWorkFlowPage } from "../../pages/iPay/activity-workflow.po";
import { DataProvider } from "../../data/dataProvider";

let iPayHomePage = new IPayHomePage();
let activityWorkFlowPage = new ActivityWorkFlowPage();
let using = require('jasmine-data-provider');

//Tc #114584 - IPAY_Regression_5 Misc. Adjustment in Daily Shuttle View
using(DataProvider.Tc_114584, async function (data) {

    describe("IPAY_Regression_5 Misc. Adjustment in Daily Shuttle View", function () {

        //TC #: 136076
        it("Should open I Pay url", async () => {
            await iPayHomePage.openUrl(iPayHomePage.iPayUrl);
        });

        it("Verifying that I Pay page is displayed", async () => {
            await expect(iPayHomePage.getPageTitle()).toBe(data.iPayTitle);
        });

        it("Should select ALBANY --- (JBI ANLA) option from Location drop down", async () => {
            await iPayHomePage.setOptionFromDropDown(iPayHomePage.locationDropDownOptions, data.locationDropDownValue, iPayHomePage.locationDropDown);
        });

        it("Should select UPDATE 05/06/2018 - 05/12/2018 option from Pay Period drop down", async () => {
            await iPayHomePage.setOptionFromDropDown(iPayHomePage.payPeriodDropDownOptions, data.payPeriodDropDownValue, iPayHomePage.payPeriodDropDown);
        });

        it("Should click on Save Button", async () => {
            await iPayHomePage.clickOnSaveButton();
        });

        it("Verifying that Driver Activity Menu is displayed", async () => {
            let element = iPayHomePage.text(data.driverActivityMenuText);
            await expect<any>(iPayHomePage.getElementText(element)).toBe(data.driverActivityMenuText);
        });

        //TC #: 136081

        it("Should click on Activity Workflow button under the Workflow Menu", async () => {
            await iPayHomePage.clickOnLinkMenu(data.activityWorkflowLink);
        });

        it("Verifying that Activity Workflow page is displayed", async () => {
            let element = iPayHomePage.text(data.activityWorkflowLink);
            await expect<any>(iPayHomePage.getElementText(element)).toBe(data.activityWorkflowLink);
        });

        it("Should click on Daily Shuttle View radio button", async () => {
            await activityWorkFlowPage.clickOnRadiButton(activityWorkFlowPage.dailyShuttleView);
        });

        it("Should click on Search button", async () => {
            await activityWorkFlowPage.clickOnButton(data.search);
        });

        //TC #:  114584

        it("Should click on Misc. Adjustment button", async () => {
            await activityWorkFlowPage.clickOnButton(data.miscAdjustmentButton);
            await activityWorkFlowPage.switchToWindow(data.windowNumber);
        });

        it("Should click on Save button", async () => {
            await activityWorkFlowPage.clickOnButton(data.save);
        });

        it("Verifying that 'Invalid activity type.Invalid quantity.Invalid rate.' Message is displayed", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.invaldMessage))).toBe(data.invaldMessage);
        });

        it("Should select 'POUN' option from Driver drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.driverDropDownOptions, data.driverOption, activityWorkFlowPage.driverDropDown);
            await activityWorkFlowPage.waitForPageLoad();
        });

        it("Should click on Save button", async () => {
            await activityWorkFlowPage.clickOnButton(data.save);
        });

        it("Verifying that 'Invalid activity type.Invalid quantity.Invalid rate.' Message is displayed", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.invaldMessage))).toBe(data.invaldMessage);
        });

        it("Should select DETENT option from Activity Type drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityTypeDropDownOptions, data.activityTypeOption, activityWorkFlowPage.activityTypeDropDown);
        });

        it("Should select 'EACH' option from Measure drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityMeasureOptions, data.measure, activityWorkFlowPage.activityMeasure);
        });

        it("Should click on Save button", async () => {
            await activityWorkFlowPage.clickOnButton(data.save);
        });

        it("Verifying that 'Invalid quantity.Invalid rate.' Message is displayed", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.invalidQuantityAndRateMessage))).toBe(data.invalidQuantityAndRateMessage);
        });

        it("Should enter '5' in Quantity field", async () => {
            await activityWorkFlowPage.setTextInQuantityField(activityWorkFlowPage.quantity, data.quantity);
        });

        it("Should click on Save button", async () => {
            await activityWorkFlowPage.clickOnButton(data.save);
        });

        it("Verifying that 'Invalid rate.' Message is displayed", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.invalidRate))).toBe(data.invalidRate);
        });

        it("Should enter '20' in Actual Rate field", async () => {
            await activityWorkFlowPage.setTextInQuantityField(activityWorkFlowPage.actualRate, data.actualRate);
        });

        it("Should click on Save button", async () => {
            await activityWorkFlowPage.clickOnButton(data.save);
        });

        it("Verifying that 'Invalid Description. A description of payment is required.' Message is displayed", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.invalidDescription))).toBe(data.invalidDescription);
        });

        it("Should enter 'QA Test123' in Description field", async () => {
            await activityWorkFlowPage.setTextInInputField(activityWorkFlowPage.description, data.description);
        });

        it("Should click on Save button", async () => {
            await activityWorkFlowPage.clickOnButton(data.save);
        });

        it("Verifying that 'Adjustment created successfully.' Message is displayed", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.adjustemntCreatedMessage))).toBe(data.adjustemntCreatedMessage);
        });

        it("Should click on 'Exit' button", async () => {
            await activityWorkFlowPage.clickOnButton(data.exit);
        });

    });

});