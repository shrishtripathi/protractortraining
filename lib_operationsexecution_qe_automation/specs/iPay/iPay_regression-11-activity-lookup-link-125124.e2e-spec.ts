import { browser } from "protractor";
import { IPayHomePage } from "../../pages/iPay/iPay-home.po";
import { ActivityWorkFlowPage } from "../../pages/iPay/activity-workflow.po";
import { DataProvider } from "../../data/dataProvider";

let iPayHomePage = new IPayHomePage();
let activityWorkFlowPage = new ActivityWorkFlowPage();
let using = require('jasmine-data-provider');

//Tc #125124 - IPAY_Regression_11 Activity Lookup link
using(DataProvider.Tc_125124, async function (data) {

    describe("IPAY_Regression_11 Activity Lookup link", function () {

        it("Should open I Pay url", async () => {
            await iPayHomePage.openUrl(iPayHomePage.iPayUrl);
        });

        it("Verifying that I Pay page is displayed", async () => {
            await expect(iPayHomePage.getPageTitle()).toBe(data.iPayTitle);
        });

        it("Should select ALBANY --- (JBI ANLA) option from Location drop down", async () => {
            await iPayHomePage.setOptionFromDropDown(iPayHomePage.locationDropDownOptions, data.locationDropDownValue, iPayHomePage.locationDropDown);
        });

        it("Should select a pay period you would like to work on from Pay Period drop down", async () => {
            await iPayHomePage.setOptionFromDropDown(iPayHomePage.payPeriodDropDownOptions, data.payPeriodDropDownValue, iPayHomePage.payPeriodDropDown);
        });

        it("Should click on Save Button", async () => {
            await iPayHomePage.clickOnSaveButton();
        });

        it("Verifying that Driver Activity Menu is displayed", async () => {
            let element = iPayHomePage.text(data.driverActivityMenuText);
            await expect<any>(iPayHomePage.getElementText(element)).toBe(data.driverActivityMenuText);
        });

        it("Should click on Activity Lookup under the Workflow Menu", async () => {
            await iPayHomePage.clickOnLinkMenu(data.activityLookUpLink);
        });

        it("Verifying that iPay - Pay Driver Quickly page is displayed", async () => {
            await expect<any>(iPayHomePage.getPageTitle()).toBe(data.iPayTitle);
        });

        it("Should select pay period from Pay period drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityPayPeriodOptions, data.payPeriodValue, activityWorkFlowPage.activityPayPeriod);
        });

        it("Should select N3A option from Activity Board drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.boardOptions, data.activityBoard, activityWorkFlowPage.board);     
        });

        it("Should click on Driver radio button", async () => {
            await activityWorkFlowPage.clickOnRadiButton(activityWorkFlowPage.driverRadioButton);
        });

        it("Should select ALLD9 option from Activity Driver drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.driverDropDownOptions, data.activityDriver, activityWorkFlowPage.driverDropDown);
        });

        it("Should click on Search button", async () => {
            await activityWorkFlowPage.clickOnButton(data.search);
        });

        it("Should click on 'Exit' button", async () => {
            await activityWorkFlowPage.clickOnButton(data.exit);
        });

        it("Verifying that Driver Activity Menu is displayed", async () => {
            let element = iPayHomePage.text(data.driverActivityMenuText);
            await expect<any>(iPayHomePage.getElementText(element)).toBe(data.driverActivityMenuText);
        });

    });

});
