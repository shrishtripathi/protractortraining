import { browser } from "protractor";
import { IPayHomePage } from "../../pages/iPay/iPay-home.po";
import { ActivityWorkFlowPage } from "../../pages/iPay/activity-workflow.po";
import { DataProvider } from "../../data/dataProvider";

let iPayHomePage = new IPayHomePage();
let activityWorkFlowPage = new ActivityWorkFlowPage();
let using = require('jasmine-data-provider');

//Tc#124807 - IPAY_Regression_10 Miscellaneous Adjustment
using(DataProvider.Tc_124807, async function (data) {

    describe("IPAY_Regression_10 Miscellaneous Adjustment", function () {

        let payPeriod: string;

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
            payPeriod = await iPayHomePage.payPeriodDropDown.getText();
        });

        it("Should click on Save Button", async () => {
            await iPayHomePage.clickOnSaveButton();
        });

        it("Verifying that Driver Activity Menu is displayed", async () => {
            let element = iPayHomePage.text(data.driverActivityMenuText);
            await expect<any>(iPayHomePage.getElementText(element)).toBe(data.driverActivityMenuText);
        });

        it("Should click on Miscellaneous Adjustment button under the Workflow Menu", async () => {
            await iPayHomePage.clickOnLinkMenu(data.miscellaneousAdjustmentLink);
            await activityWorkFlowPage.switchToWindow(data.windowNumber);
            await activityWorkFlowPage.waitForPageLoad();
        });

        it("Verifying that Pay Period is populated as same", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.activityPayPeriod)).toContain(payPeriod);
        });

        it("Should select 'N3A' option from Board drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.boardOptions, data.activityBoard, activityWorkFlowPage.board);
        });

        it("Should select 'ALLD9' option from Driver drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.driverDropDownOptions, data.activityDriver, activityWorkFlowPage.driverDropDown);
            await activityWorkFlowPage.waitForPageLoad();
        });

        it("Should enter pay period in Date Of Occurence field", async () => {
            await activityWorkFlowPage.setTextInInputField(activityWorkFlowPage.dateOfOccurrence, payPeriod);
        });

        it("Should select DETENT option from Activity Type drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityTypeDropDownOptions, data.activityTypeOption, activityWorkFlowPage.activityTypeDropDown);
        });

        it("Should select 'HOUR' option from Measure drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityMeasureOptions, data.measure, activityWorkFlowPage.activityMeasure);
        });

        it("Verifying that a rate did appear under 'Standard Rate'", async () => {
            await expect(activityWorkFlowPage.verifyRateStandard()).toBeTruthy();
        });

        it("Should enter '5' in Quantity field", async () => {
            await activityWorkFlowPage.setText(activityWorkFlowPage.quantity, data.quantity);
        });

        it("Should enter '0' in Actual Rate field", async () => {
            await activityWorkFlowPage.setText(activityWorkFlowPage.actualRate, data.actualRate);
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
            await activityWorkFlowPage.waitForPageLoad();
        });

    });

});
