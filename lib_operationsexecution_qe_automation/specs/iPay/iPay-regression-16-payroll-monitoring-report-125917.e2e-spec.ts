import { browser } from "protractor";
import { IPayHomePage } from "../../pages/iPay/iPay-home.po";
import { ActivityWorkFlowPage } from "../../pages/iPay/activity-workflow.po";
import { DataProvider } from "../../data/dataProvider";

let iPayHomePage = new IPayHomePage();
let activityWorkFlowPage = new ActivityWorkFlowPage();
let using = require('jasmine-data-provider');

//Tc #125917 - IPAY_Regression_16 Payroll Monitoring Report
using(DataProvider.Tc_125917, async function (data) {

    describe("IPAY_Regression_16 Payroll Monitoring Report", function () {

        let locationsCount: number;

        it("Should open I Pay url", async () => {
            await iPayHomePage.openUrl(iPayHomePage.iPayUrl);
        });

        it("Verifying that I Pay page is displayed", async () => {
            await expect(iPayHomePage.getPageTitle()).toBe(data.iPayTitle);
        });

        it("Should select ALBANY --- (JBI ANLA) option from Location drop down", async () => {
            locationsCount = await iPayHomePage.locations.count();
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

        it("Should click on Payroll Monitoring Report under the Workflow Menu", async () => {
            await iPayHomePage.clickOnLinkMenu(data.payrollMonitoringReportLink);
        });

        it("Verifying that all locations reports are displayed", async () => {
            let reportsCount = await activityWorkFlowPage.payrollMonitoringReports.count();
            await expect(reportsCount).toEqual(reportsCount);
        });

        it("Should click on 'back' button", async () => {
            await activityWorkFlowPage.navigateToBrowserBack();
        });

        it("Verifying that Driver Activity Menu is displayed", async () => {
            let element = iPayHomePage.text(data.driverActivityMenuText);
            await expect<any>(iPayHomePage.getElementText(element)).toBe(data.driverActivityMenuText);
        });

    });

});