import { browser, by } from "protractor";
import { IPayHomePage } from "../../pages/iPay/iPay-home.po";
import { ActivityWorkFlowPage } from "../../pages/iPay/activity-workflow.po";
import { DataProvider } from "../../data/dataProvider";

let iPayHomePage = new IPayHomePage();
let activityWorkFlowPage = new ActivityWorkFlowPage();
let using = require('jasmine-data-provider');

//Tc #117954 - IPAY_Regression_8 Adding Activities in Daily Shuttle View
using(DataProvider.Tc_117954, async function (data) {

    describe("IPAY_Regression_8 Adding Activities in Daily Shuttle View", function () {

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

        //TC #: 117954
        
        it("Should enter tractor number '123456',you are using for that driver", async () => {
            await activityWorkFlowPage.setTextInRedColorDriverAlphaCode(activityWorkFlowPage.driverAlphaCodes, activityWorkFlowPage.tractorNumbersInputFields, data.tractorNumber);
        });

        it("Should enter begin time '01:00',you are using for that driver", async () => {
            await activityWorkFlowPage.setTextInRedColorDriverAlphaCode(activityWorkFlowPage.driverAlphaCodes, activityWorkFlowPage.beginTimeInputFields, data.beginTime);
        });

        it("Should enter end time '16:00',you are using for that driver", async () => {
            await activityWorkFlowPage.setTextInRedColorDriverAlphaCode(activityWorkFlowPage.driverAlphaCodes, activityWorkFlowPage.endTimeInputFields, data.endTime);
        });

        it("Should enter begin hub '10',you are using for that driver", async () => {
            await activityWorkFlowPage.setTextInRedColorDriverAlphaCode(activityWorkFlowPage.driverAlphaCodes, activityWorkFlowPage.beginHubputFields, data.beginHub);
        });

        it("Should enter end hub '100',you are using for that driver", async () => {
            await activityWorkFlowPage.setTextInRedColorDriverAlphaCode(activityWorkFlowPage.driverAlphaCodes, activityWorkFlowPage.endHubInputFields, data.endHub);
        });

        it("Verifying that '15.0' hours will popualted in Calc.Hours ,you are using for that driver", async () => {
            await expect(activityWorkFlowPage.getElementText(activityWorkFlowPage.hoursInputFields.get(0))).toBe(data.hours);
        });

        it("Verifying that '90' miles will popualted in Calc.Hours ,you are using for that driver", async () => {
            await activityWorkFlowPage.click(activityWorkFlowPage.beginHubputFields.get(0));
            await expect(activityWorkFlowPage.getElementText(activityWorkFlowPage.milesInputFields.get(0))).toBe(data.miles);
        });

        it("Should click on 'Validate and Save' button", async () => {
            await activityWorkFlowPage.clickOnButton(data.validateAndSave);
        });

        it("Verifying that Green message saying 'Successfully Saved 1 Shuttle Entries.'", async () => {
            await expect(activityWorkFlowPage.getElementText(await activityWorkFlowPage.text(data.savedMessage))).toContain(data.savedMessage);
        });

    });

});