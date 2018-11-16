import { browser } from "protractor";
import { IPayHomePage } from "../../pages/iPay/iPay-home.po";
import { ActivityWorkFlowPage } from "../../pages/iPay/activity-workflow.po";
import { DataProvider } from "../../data/dataProvider";

let iPayHomePage = new IPayHomePage();
let activityWorkFlowPage = new ActivityWorkFlowPage();
let using = require('jasmine-data-provider');

//Tc#113180 - iPay_Regression_2 Daily Shuttle View
using(DataProvider.Tc_113180, async function (data) {

    describe("iPay_Regression_2 Daily Shuttle View", function () {

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

        it("Should click on Exception Pay button", async () => {
            await activityWorkFlowPage.clickOnButton(data.exceptionPay);
            await activityWorkFlowPage.switchToWindow(data.window);
        });
         
        it("Verifying that Pay Period is populated", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.activityPayPeriod)).not.toBe("");
        });

        it("Verifying that Board is populated", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.board)).not.toBe("");
        });

        it("Should select DAVRS1 option from Driver drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.driverDropDownOptions, data.driverOption, activityWorkFlowPage.driverDropDown);
        });

        it("Should select CROSS1 option from Activity Type drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityTypeDropDownOptions, data.activityTypeOption, activityWorkFlowPage.activityTypeDropDown);
        });

        it("Should enter '50' in Quantity field", async () => {
            await activityWorkFlowPage.setTextInQuantityField(activityWorkFlowPage.quantity, data.quantity);
        });

        it("Should enter 'Payment' in Description field", async () => {
            await activityWorkFlowPage.setTextInInputField(activityWorkFlowPage.description, data.description);
        });

        it("Should click on Save button", async () => {
            await activityWorkFlowPage.clickOnButton(data.save);
        });

        it("Verifying that Activity Updated Successfully Message", async () => {
            await expect<any>(activityWorkFlowPage.getElementText(activityWorkFlowPage.text(data.updateMessage))).toBe(data.updateMessage);
        });

        it("Should click on Exit button", async () => {
            await activityWorkFlowPage.clickOnButton(data.exit);
        });

    });

});
