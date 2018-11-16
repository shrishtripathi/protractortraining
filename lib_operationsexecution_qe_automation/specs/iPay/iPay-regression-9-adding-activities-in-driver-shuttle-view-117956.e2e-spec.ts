import { browser, by } from "protractor";
import { IPayHomePage } from "../../pages/iPay/iPay-home.po";
import { ActivityWorkFlowPage } from "../../pages/iPay/activity-workflow.po";
import { DataProvider } from "../../data/dataProvider";

let iPayHomePage = new IPayHomePage();
let activityWorkFlowPage = new ActivityWorkFlowPage();
let using = require('jasmine-data-provider');

//Tc #117956 - IPAY_Regression_9 Adding Activities in Driver Shuttle View
using(DataProvider.Tc_117956, async function (data) {

    describe("IPAY_Regression_9 Adding Activities in Driver Shuttle View", function () {

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

        //TC #: 136080

        it("Should click on Activity Workflow under the Workflow Menu", async () => {
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

        it("Should select ALLD9 option from Activity Driver drop down", async () => {
            await activityWorkFlowPage.setOptionFromDropDown(activityWorkFlowPage.activityDriverOptions, data.activityDriver, activityWorkFlowPage.activityDriver);
        });

        it("Should click on Search button", async () => {
            await activityWorkFlowPage.clickOnButton(data.search);
        });

        it("Verifying that should show 7 days for that pay period along with the tractor, begin time, end time, begin hub, end hub, and will be green if information is entered. If not it will be red", async () => {
            await expect(activityWorkFlowPage.verifySevenDaysInPayPeriod()).toBeTruthy();
        });

        //TC #: 117956
        
        it("Should enter tractor number '123456',you are using for that driver", async () => {
            await activityWorkFlowPage.setTextInRedColorDriverAlphaCode(activityWorkFlowPage.activityDates,activityWorkFlowPage.tractorNumbersInputFields, data.tractorNumber);
        });

        it("Should enter begin time '01:00',you are using for that driver", async () => {
            await activityWorkFlowPage.setTextInRedColorDriverAlphaCode(activityWorkFlowPage.activityDates,activityWorkFlowPage.beginTimeInputFields, data.beginTime);
        });

        it("Should enter end time '16:00',you are using for that driver", async () => {
            await activityWorkFlowPage.setTextInRedColorDriverAlphaCode(activityWorkFlowPage.activityDates,activityWorkFlowPage.endTimeInputFields, data.endTime);
        });

        it("Should enter begin hub '10',you are using for that driver", async () => {
            await activityWorkFlowPage.setTextInRedColorDriverAlphaCode(activityWorkFlowPage.activityDates, activityWorkFlowPage.beginHubputFields, data.beginHub);
        });

        it("Should enter end hub '100',you are using for that driver", async () => {
            await activityWorkFlowPage.setTextInRedColorDriverAlphaCode(activityWorkFlowPage.activityDates, activityWorkFlowPage.endHubInputFields, data.endHub);
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