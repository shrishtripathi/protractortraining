import { browser } from "protractor";
import { IPayHomePage } from "../../pages/iPay/iPay-home.po";
import { ActivityWorkFlowPage } from "../../pages/iPay/activity-workflow.po";
import { DataProvider } from "../../data/dataProvider";

let iPayHomePage = new IPayHomePage();
let activityWorkFlowPage = new ActivityWorkFlowPage();
let using = require('jasmine-data-provider');

//Tc#136081 - iPay_Regression_2 Daily Shuttle View
using(DataProvider.Tc_136081, async function (data) {

    describe("iPay_Regression_2 Daily Shuttle View", function () {

    //TC#136076

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

        //TC#136081

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

    
    });

});
