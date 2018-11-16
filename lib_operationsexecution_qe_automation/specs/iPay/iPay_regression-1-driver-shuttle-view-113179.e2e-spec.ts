import { browser, by } from "protractor";
import { IPayHomePage } from "../../pages/iPay/iPay-home.po";
import { ActivityWorkFlowPage } from "../../pages/iPay/activity-workflow.po";
import { DataProvider } from "../../data/dataProvider";

let iPayHomePage = new IPayHomePage();
let activityWorkFlowPage = new ActivityWorkFlowPage();
let using = require('jasmine-data-provider');

//Tc#113179 - iPay_Regression_1 Driver Shuttle View
using(DataProvider.Tc_113179, async function (data) {

    describe("iPay_Regression_2 Driver Shuttle View", function () {

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
            let element = await iPayHomePage.text(data.driverActivityMenuText);
            await expect(await iPayHomePage.getElementText(element)).toBe(data.driverActivityMenuText);
        });

        it("Should click on Activity Workflow button under the Workflow Menu", async () => {
            await iPayHomePage.clickOnLinkMenu(data.activityWorkflowLink);
        });

        it("Verifying that Activity Workflow page is displayed", async () => {
            let element = iPayHomePage.text(data.activityWorkflowLink);
            await expect<any>(iPayHomePage.getElementText(element)).toBe(data.activityWorkflowLink);
        });

        it("Should select UPDATE 05/06/2018 - 05/12/2018 option from Pay Period drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.payPeriodDropDownOptions, data.activityPayPeriod, activityWorkFlowPage.activityPayPeriod);
        });

        it("Should select 05/06/2018 -- SUN option from Activity Date drop down", async () => {
            await iPayHomePage.setOptionFromDropDown(activityWorkFlowPage.activityDateOptions, data.activityDate, activityWorkFlowPage.activityDate);
        });

        it("Should select N3A option from Activity Board drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityBoardOptions, data.activityBoard, activityWorkFlowPage.activityBoard);
        });

        it("Should click on Driver Shuttle View radio button", async () => {
            await activityWorkFlowPage.clickOnRadiButton(activityWorkFlowPage.driverShuttleView);
        });

        it("Should select POUN option from Activity Driver drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityDriverOptions, data.driverOption, activityWorkFlowPage.activityDriver);
        });

        it("Should click on Search button", async () => {
            await activityWorkFlowPage.clickOnButton(data.search);
        });

        it("Should click on Exception Pay button", async () => {
            await activityWorkFlowPage.clickOnButton(data.exceptionPay);
            await activityWorkFlowPage.switchToWindow(data.windowNumber);
        });

        it("Verifying that Pay Period is populated as same", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.activityPayPeriod)).toContain(payPeriod);
        });

        it("Verifying that Board code is populated as same ", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.board)).toContain(data.activityBoard);
        });

        it("Verifying that Driver Alpha is populated as same ", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.driver)).toContain(data.activityDriver);
        });

        it("Should select DETENT option from Activity Type drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityTypeDropDownOptions, data.activityTypeOption, activityWorkFlowPage.activityTypeDropDown);
        });

        it("Should select 'EACH' option from Measure drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityMeasureOptions, data.measure, activityWorkFlowPage.activityMeasure);
        });

        it("Should enter '1' in Quantity field", async () => {
            await activityWorkFlowPage.setTextInQuantityField(activityWorkFlowPage.quantity, data.quantity);
        });

        it("Should enter 'QA Test123' in Description field", async () => {
            await activityWorkFlowPage.setTextInInputField(activityWorkFlowPage.description, data.description);
        });

        it("Should click on Save button", async () => {
            await activityWorkFlowPage.clickOnButton(data.save);
        });

        it("Verifying that Activity Updated Successfully Message", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.updateMessage))).toBe(data.updateMessage);
        });

        it("Should click on 'Save & New' button", async () => {
            await activityWorkFlowPage.clickOnButton(data.saveAndNew);
        });

        it("Verifying that Activity Updated Successfully Message", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.updateMessage))).toBe(data.updateMessage);
        });

        it("Should click on Save button", async () => {
            await activityWorkFlowPage.clickOnButton(data.save);
        });

        it("Verifying that Invalid activity type.Invalid quantity.Invalid Either an order number or a short description is required Message is displayed", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.invalidActivityCreationMessage))).toBe(data.invalidActivityCreationMessage);
        });

        it("Should click on 'Save & New' button", async () => {
            await activityWorkFlowPage.clickOnButton(data.saveAndNew);
        });

        it("Verifying that Invalid activity type.Invalid quantity.Invalid Either an order number or a short description is required Message is displayed", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.invalidActivityCreationMessage))).toBe(data.invalidActivityCreationMessage);
        });

        it("Should click on 'Exit' button", async () => {
            await activityWorkFlowPage.clickOnButton(data.exit);
        });

    });

});