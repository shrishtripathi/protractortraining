import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';


export class ActivityWorkFlowPage extends BasePage {
    readonly dailyShuttleView: ElementFinder = element.all(by.xpath("//input[@name='workflowShuttleTypeSelection']")).get(0);
    readonly driverShuttleView: ElementFinder = element.all(by.xpath("//input[@name='workflowShuttleTypeSelection']")).get(1);
    readonly driverRadioButton: ElementFinder = element.all(by.xpath("//input[@name='option']")).get(0);
    readonly activityPayPeriod: ElementFinder = element(by.xpath("//select[@name='activityPayPeriod']"));
    readonly activityPayPeriodOptions: string = "//select[@name='activityPayPeriod']/OPTION";
    readonly activityDate: ElementFinder = element(by.xpath("//select[@name='workflowDateFilter']"));
    readonly exceptionActivityDate: ElementFinder = element(by.xpath("//select[@name='exceptionReviewDateFilter']"));
    readonly exceptionActivityDateOptions: string = "//select[@name='exceptionReviewDateFilter']/option";
    readonly activityBoard: ElementFinder = element(by.xpath("//select[@name='workflowBoard']"));
    readonly activityDriver: ElementFinder = element(by.xpath("//select[@name='workflowDriver']"));
    readonly activityMeasure: ElementFinder = element(by.xpath("//select[@name='measure']"));
    readonly driver: ElementFinder = element(by.xpath("//select[@name='driver']"));
    readonly board: ElementFinder = element(by.xpath("//select[@name='board']"));
    readonly boardOptions: string = "//select[@name='board']/option";
    readonly driverDropDown: ElementFinder = element(by.xpath("//select[@name='driver']"));
    readonly driverDropDownOptions: string = "//select[@name='driver']/option";
    readonly activityTypeDropDown: ElementFinder = element(by.xpath("//select[@name='activityType']"));
    readonly activityTypeDropDownOptions: string = "//select[@name='activityType']/option";
    readonly payPeriodDropDownOptions: string = "//select[@name='payPeriod']/option";
    readonly activityDateOptions: string = "//select[@name='workflowDateFilter']/option";
    readonly activityBoardOptions: string = "//select[@name='workflowBoard']/option";
    readonly activityDriverOptions: string = "//select[@name='workflowDriver']/option";
    readonly activityMeasureOptions: string = "//select[@name='measure']/option";
    readonly quantity: ElementFinder = element(by.xpath("//input[@name='quantity']"));
    readonly actualRate: ElementFinder = element(by.xpath("//input[@name='flatRate']"));
    readonly description: ElementFinder = element(by.xpath("//textarea[@name='comments']"));
    readonly payrollMonitoringReports: ElementArrayFinder = element.all(by.xpath("//table[@class='reportTable']//tr[contains(@onmouseover,'RowHighlight')]"));
    readonly tractorNumbersInputFields: ElementArrayFinder = element.all(by.xpath("//input[contains(@name,'tractorNumber')]"));
    readonly beginTimeInputFields: ElementArrayFinder = element.all(by.xpath("//input[contains(@name,'beginTime')]"));
    readonly endTimeInputFields: ElementArrayFinder = element.all(by.xpath("//input[contains(@name,'endTime')]"));
    readonly hoursInputFields: ElementArrayFinder = element.all(by.xpath("//div[contains(@id,'hours')]"));
    readonly beginHubputFields: ElementArrayFinder = element.all(by.xpath("//input[contains(@name,'beginHub')]"));
    readonly endHubInputFields: ElementArrayFinder = element.all(by.xpath("//input[contains(@name,'endHub')]"));
    readonly milesInputFields: ElementArrayFinder = element.all(by.xpath("//div[contains(@id,'miles')]"));
    readonly driverAlphaCodes: ElementArrayFinder = element.all(by.xpath("//table[@class='reportTable']//tr[@class='row']//td[contains(@id,'driverAlpha')]"));
    readonly activityDates: ElementArrayFinder = element.all(by.xpath("//table[@class='reportTable']//tr[@class='row']//td[contains(@id,'activityDate')]"));
    readonly rateSection: ElementFinder = element(by.xpath("//span[@id='rateSection' and @style='VISIBILITY: visible']"));
    readonly dateOfOccurrence: ElementFinder = element(by.xpath("//input[@name='activityDate']"));

    public async setOptionFromDropDown(optionsList: string, option: string, dropDownName: ElementFinder) {
        await this.actions.click(dropDownName, "Click on Tab");
        await this.actions.selectByValue(optionsList, option, "select value");
    }

    public async setTextInInputField(fieldName: ElementFinder, text: string) {
        await this.actions.clearText(fieldName, "Clear Text");
        await this.actions.setText(fieldName, text, "Set Text ");
    }

    public async setTextInRedColorDriverAlphaCode(dependantField: ElementArrayFinder, fieldName: ElementArrayFinder, text: string) {
        for (let i = 0; i < await fieldName.count(); i++) {
            let redColor = await dependantField.get(i).getAttribute("style");
            if (redColor === 'BACKGROUND-COLOR: #ff6666') {
                await this.actions.clearText(fieldName.get(i), "Clear Text");
                await this.actions.setText(fieldName.get(i), text, "Set Text ");
                break;
            }
        }
    }

    public async verifyRateStandard() {
        return await this.rateSection.isPresent();
    }

    public async verifySevenDaysInPayPeriod() {
        await this.actions.waitUntilElementVisible(this.tractorNumbersInputFields.get(0), "Wait untill element is visible");
        let tractorInputsCount = await this.tractorNumbersInputFields.count();
        let activityDates: ElementArrayFinder = element.all(by.xpath("//table[@class='reportTable']//tr[@class='row']//td[contains(@id,'activityDate')]"));
        let tractorNumberText: string;
        let result: boolean = true;

        for (let i = 0; i < tractorInputsCount; i++) {
            tractorNumberText = await this.tractorNumbersInputFields.get(i).getAttribute("value");
            if (tractorNumberText !== "") {
                let greenColor = await activityDates.get(i).getAttribute("style");
                if (greenColor !== 'BACKGROUND-COLOR: #66ff66') {
                    result = false;
                }
            } else {
                let redColor = await activityDates.get(i).getAttribute("style");
                if (redColor !== 'BACKGROUND-COLOR: #ff6666') {
                    result = false;
                }
            }
        }

        return result;
    }

    public async setTextInQuantityField(fieldName: ElementFinder, text: string) {
        await this.actions.setText(fieldName, text, "Set Text ");
    }

    public async clickOnRadiButton(radioButtonElement: ElementFinder) {
        await this.actions.click(radioButtonElement, "Click on Tab");
    }

    public async verifyReport(text: string) {
        console.log("text" + text);
        let overHoursReportHistory: ElementFinder = element(by.xpath("//table[@class='reportTable']//tr//td[contains(text(),'" + text + "')]"));
        return await overHoursReportHistory.isPresent();
    }
}