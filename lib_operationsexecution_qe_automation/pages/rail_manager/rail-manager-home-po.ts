
import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, protractor } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";
let EC = protractor.ExpectedConditions;

export class RailManagerHomePage extends BasePage {

    readonly freightManagerTitleXpath = element(by.id("pageTitle"));
    readonly pageTitleXpath = element(by.id("pageTitle"));
    readonly valueSearchXPath: ElementFinder = element(by.xpath("//a[@title='Perform Search']"));
    readonly searchValidationXpath: ElementFinder = element(by.xpath("//div[@id='pageContent']/ul/li/span"));
    readonly resetButton: ElementFinder = element(by.buttonText("Reset"));
    readonly trainTableXpath = element(by.xpath("//table[@class='iceDatTbl']"));
    readonly loadingXpath: ElementFinder = element(by.xpath("//*[contains(.,'Loading Empty Plan Data...')]"));
    readonly mtPlanTitleTextXpath: ElementFinder = element(by.id("titleText"));
    readonly specificPageTitleXpath: ElementFinder = element(by.xpath("//div[@class='icePnlGrp']/a"));



    public async selectTab(tabName: string, optionName: string) {
        await this.waitForPageLoad();
        await this.actions.moveMouseToElement(this.aspanText(tabName), "Mouse hover on '+tabName+'");
        await this.actions.waitUntilElementPresenceOf(this.aspanText(optionName), "Waiting");
        await this.actions.click(this.aspanText(optionName), "Click on '+option+'");
    }
    public async clickOnOption(text: string) {
        await this.actions.click(this.aspanText(text), "Click on" + text);
    }
    public async verifyTrainScreen() {
        let text: string = null;
        try {
            await this.actions.waitUntilElementVisible(this.specificPageTitleXpath, "")
            text = await this.specificPageTitleXpath.getText();
        } catch (error) {

        }
        return text;
    }
    public async getFm2Title() {
        let fm2Title = await this.actions.getText(this.freightManagerTitleXpath, "Get FM2 Title");
        console.log(fm2Title)
        return fm2Title;
    };

    public async getPageTitle() {
        let pageTitle = await this.actions.getText(this.pageTitleXpath, "Get Rail Manager Title");
        return pageTitle;
    };

    public async clickOnValueSearch() {
        await this.actions.click(this.valueSearchXPath, "Click on Value Search in Rail Manager Home Page");
    };

    public async validateSearchSuccessMessage() {
        let searchText = await this.actions.getText(this.searchValidationXpath, "Get Search Text");
        console.log(searchText);
        return searchText;
    };



    public async selectEdiTab(tabName: string, optionName: string) {
        await this.actions.moveMouseToElement(this.aspanText(tabName), "Mouse hover on '+tabName+'");
        await this.actions.click(this.aspanText(optionName), "Click on" + optionName);
    }

    public async verifyBreadcrumbTitle() {
        let breadcrumbTitle = element(by.xpath("//div[@id='breadcrumbs_container']//a"));
        await this.actions.waitUntilElementVisible(breadcrumbTitle, "Waiting");
        return await this.actions.getText(breadcrumbTitle, "Verifying Breadcrumb Title");
    }

    public async verifyScheduleAssignmentTitle() {
        let scheduleAssignmentTitle = element(by.xpath("//a[text()='Schedule Assignment']"));
        return await this.actions.getText(scheduleAssignmentTitle, "Verifying schedule assignment title");
    }

    public async listOfTrains() {
        await this.actions.waitUntilElementPresenceOf(element(by.xpath("//table[@id='form:ETAConsolidatedList']/tbody/tr[1]")), "waiting for train list");
        let trainList = await element.all(by.xpath("//table[@id='form:ETAConsolidatedList']/tbody/tr"));
        let count = trainList.length;
        console.log("count is " + count);
        return count;
    }

    public async verifyTableResultsInTrainsScreen() {
        return (await this.actions.isElementPresent(this.trainTableXpath, "table results"));
    }

    public async clickSearchButton() {
        let searchButton = element(by.xpath("//button[text()='Search']"));
        await this.actions.click(searchButton, "Clicking on search button");
    }

    public async switchToLatestWindow() {
        var handles: string[] = await browser.getAllWindowHandles();
        await this.actions.selectWindow(handles.length - 1, "")
    };

    public async clickOnResetButton() {
        await this.actions.waitUntilElementVisible(this.resetButton, "wait for button");
        await this.actions.click(this.resetButton, "Click on reset button");
    }

    public async verifyNetworksDefaultPage() {
        await this.actions.waitUntilElementVisible(this.specificPageTitleXpath,"Wait fo element");
        let pageTitle = this.specificPageTitleXpath.getText();
        return pageTitle;
    }
}

















