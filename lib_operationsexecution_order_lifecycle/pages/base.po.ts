import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, protractor } from "protractor";
import { ActionLibrary } from "../utilities/action-library";
import { By } from 'selenium-webdriver';
import { String } from 'typescript-string-operations';
import { relative } from "path";
import { BrowserStack } from "protractor/built/driverProviders";
import { async } from "q";

const environment = browser.params.user.environment;
const loginURL = "https://ssoauth" + environment + ".jbhunt.com/cas-server/login";
let userName = browser.params.user.userName;
let password = browser.params.user.password;
let shouldLogin = browser.params.user.shouldLogin;

export class BasePage {

    actions: ActionLibrary;

    readonly inProgressImage: ElementFinder = element(by.css('.iceOutConStatActv'));
    readonly freightManager2: string = "http://fm.jbhunt" + environment + ".com/FreightManager2/common/index.iface";
    readonly inProgressImageXpath: string = '//div[contains(@id,"{0}")]//div[id*="loadmask"]';
    readonly loginScreenUserName = element(by.id('username'));
    readonly loginScreenPassword = element(by.id('password'));
    readonly loginScreenLogInButton = element(by.className('light-primary-solid-button black-text'));
    readonly carrier360Url: string = "https://carrier.jbhunt" + environment + ".com/360/";
    readonly searchResultLoading = element(By.xpath(".//div[@id='form:j_id714:connection-working' and @style='visibility: visible;']"));
    readonly linkEnterpriseOrderMangaement = element(by.xpath("//a[@title='Enterpise Order Management']"));
    readonly enterPriseOrderManagementPageTitle = element(by.xpath("//div[text()='Enterprise Order Management']"))
    readonly shipper360Url: string = "https://tms" + environment + ".jbhunt.com/tms?doAs=JBHASHI1"
    readonly eomUrl: string = "http://eom.jbhunt" + environment + ".com/eom/search/eomSearch.face";
    readonly buttonSearch = element(by.buttonText('Search'));
    readonly safetyBriefingUrl: string = "http://safetybriefing" + environment + ".jbhunt.com/safetybriefing/";
    readonly centerScreenUrl: string = "http://centerscreen" + environment + ".jbhunt.com/centerScreen/";
    readonly filenetUrl: string = "http://jbhecmprod" + environment + ".jbhunt.com/WorkplaceXT/Browse.jsf";
    readonly accountsUrl: string = "https://account.jbhunt" + environment + ".com/account/";
    readonly payVerificationUrl: string = "//workday/Workday/ExternalFTP_QA/Outbound/FIN/CustomerInvoices/Staging";    
    readonly enterpriseDashoboardUrl: string = "http://dash.jbhunt" + environment + ".com/app_mkt_dash/index.html#monitor"
    readonly orderManagementUrl:string="https://order.jbhunt" + environment + ".com/order/tasks"
    constructor() {
        this.actions = new ActionLibrary();
    }

    public async navigateToLoginScreen() {
        await this.loginScreenUserName.sendKeys(userName);
        await this.loginScreenPassword.sendKeys(password);
        await this.loginScreenPassword.sendKeys(protractor.Key.TAB)
        await this.loginScreenLogInButton.sendKeys(protractor.Key.ENTER);
    }

    public async loginIfRequired() {
        try {
            await browser.wait(ExpectedConditions.presenceOf(this.loginScreenUserName), 15000);
            let usernameDispalyed: boolean = await this.loginScreenUserName.isDisplayed();
            if (usernameDispalyed) {
                console.log("inside shouldlogin: " + shouldLogin);
                await this.navigateToLoginScreen();
            }
        } catch (e) { }
    }

    public async navigateToAppHome(url: string) {
        console.log("URL: " + url);
        await this.actions.get(url, "Opening  url");
        await this.loginIfRequired();
        await browser.wait(ExpectedConditions.urlContains(url), 30000);
    }

    public async closeWindow() {
        // await browser.driver.close();
    }

    public async browserBackButton() {
        await browser.navigate().back();
    }

    public async mouseOverToTab(element: ElementFinder) {
        await this.actions.moveMouseToElement(element, "mouse over to element")
    }

    public async selectOptionFromTab(tabName: string, option: string) {
        await this.actions.moveMouseToElement(this.aspanText(tabName), "Mouse hover on '+tabName+'");
        await this.actions.click(this.aspanText(option), "Click on '+option+'");
    }

    public async scrollDown() {
        await browser.executeScript('window.scrollTo(0,400);');
    }

    public async navigateToBrowserBack() {
        await browser.navigate().back();
    }

    public async clickOnLinkButton(text: string) {
        let xpath: ElementFinder = element(By.linkText(text));
        await this.actions.click(xpath, "Click on link");
    }

    public aspanTxt(text: string): ElementFinder {
        let xpath = element(by.xpath("//a/span[text()='" + text + "']"));
        return xpath;
    }

    public async waitUntilLoading() {
        console.log("loading....")
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(await element(by.xpath("//*[@class='iceOutConStatInactv']"))), 50000);
    };

    public async waitTillProcessing(text_load: string) {
        let Object_Processing: ElementFinder = element(by.xpath("//label[text()='" + text_load + "']"));
        await this.actions.waitUntilElementInVisible(Object_Processing, "stop table");
    }

    public numberInPagination(index: number): ElementFinder {
        let enabledNumberLinkInPagination = element(by.xpath("//table[@class='iceDatPgrTbl']//a[text()=" + index + "]/parent::td[@class='iceDatPgrScrCol']"));
        return enabledNumberLinkInPagination;
    }

    public labelText(text: string): ElementFinder {
        let labelText = element(by.xpath("//label[contains(text(),'" + text + "')]"));
        return labelText;
    }

    public async scrollUp() {
        await browser.executeScript('window.scrollTo(0,0);');
    }

    public async scrollintoView(webElement: ElementFinder) {
        let location = await webElement.getLocation();
        await browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
    }

    public async waitForInProgressTobeVisible() {
        return await browser.wait(async () => {
            let style: string = await this.inProgressImage.getAttribute('style');
            return style === "visibility: visible;";
        }, 5000);
    }

    public async waitForInProgressTobeInVisible() {
        return await browser.wait(async () => {
            let style: string = await this.inProgressImage.getAttribute('style');
            return style === "visibility: hidden;";
        }, 120000);
    }

    public async waitForActionToComplete() {
        await this.waitForInProgressTobeVisible();
        await this.waitForInProgressTobeInVisible();
    }

    public async waitForActionComplete(gridName: string) {
        await this.waitForInProgressToVisible(gridName);
        await this.waitForInProgressToInVisible(gridName);
    }

    public async openEnterpriseDashboardUrl(){
        await this.actions.get(this.enterpriseDashoboardUrl,"Open enterprise dashboard url");
        await this.loginIfRequired();

    }

    public getLoadingElement(loadingArea: string) {
        let loadingXpath = String.Format(this.inProgressImageXpath, loadingArea);
        console.log("loadingXpat: h" + loadingXpath);
        let loadingImage = element(by.xpath(loadingXpath));
        return loadingImage;
    }

    public async waitForInProgressToVisible(gridName: string) {
        try {
            return await browser.wait(async () => {
                let style: string = await this.getLoadingElement(gridName).getAttribute('aria-hidden');
                console.log("Expected style : false; And Current Style: " + style);
                return style === "false";
            }, 2000);
        } catch (e) { }
    }

    public async waitForInProgressToInVisible(gridName: string) {
        try {
            return await browser.wait(async () => {
                let style: string = await this.getLoadingElement(gridName).getAttribute('aria-hidden');
                console.log("Expected style : true; and current style : " + style);
                return style === "true";
            }, 60000);
        } catch (e) { }
    }

    public spanText(text: string): ElementFinder {
        var spanText = element(by.xpath("//span[contains(text(),'" + text + "')]"));
        return spanText;
    }

    public aspanText(text: string): ElementFinder {
        var xpath = element(by.xpath("//a/span[text()='" + text + "']"));
        return xpath;
    }

    public async clickOnButton(buttonName: string) {
        var xpath = element(by.xpath("//input[@value='" + buttonName + "']"));
        await this.actions.click(xpath, "Clicking on " + buttonName + "");
    }

    public text(text: string): ElementFinder {
        let textXpath = element(by.xpath("//*[contains(text(),'" + text + "')]"));
        return textXpath;
    }

    public async getColumnIndexForCustomerPoolTable(column: string) {

        let columnIndex: number = -1;
        this.actions.mediumWait("waiting...");
        let numberOfColumns: ElementArrayFinder = element.all(by.xpath("(//table[@id='form:equipmentPoolTable']//th//a/span)"));
        let size: number = await numberOfColumns.count();
        console.log("size of TH : " + size);
        let index: number = 1;
        try {
            for (index = 1; index <= size; index++) {
                let column_Name: string = await element(by.xpath("(//table[@id='form:equipmentPoolTable']//th//a/span)[" + index + "]")).getText();
                console.log("clumn name : " + column_Name);
                if (column_Name.trim() === column.trim()) {
                    columnIndex = index;
                    break;
                }
            }
        }
        catch (err) {
            console.log('---error---for index ' + index);
        }
        return await columnIndex;

    }

    public async pagination() {

        let nextButtonEnabled: ElementFinder = await element(By.xpath("//td/a[text()='Next']"));
        let nextButtonIsDisable: boolean = await element(By.xpath("//a[text()='Next' and contains(@onclick,'return false')]")).isPresent();
        if (!nextButtonIsDisable) {
            console.log("inside next button enabled");
            await nextButtonEnabled.click();
            await this.waitForActionToComplete();
            return true;
        }
        else {
            console.log("completed pagination, next button is disabled no data is found with given criteria");
            return false;
        }
    }

    public async clickOnDropDown(lableText: string) {
        let orderLookUp: ElementFinder = element(by.xpath("(//td[contains(text(),'" + lableText + "')]//following-sibling::td/select)[1]"));
        await this.actions.click(orderLookUp, "click on " + lableText);
        await browser.sleep(3000);
    }

    public async getPageTitle() {
        return await this.actions.getPageTitle("Page Title");
    }

    public async getElementText(element: ElementFinder) {
        return await this.actions.getText(element, "Get element Text");
    }

    public async switchToWindow(windowNumber: number) {
        let handles: any = await browser.getAllWindowHandles();
        await browser.switchTo().window(handles[windowNumber]);
    }

    public async closeCurrentWindow() {
        let handle: string[] = await browser.getAllWindowHandles();
        // await browser.driver.switchTo().window(handle[handle.length - 1]);
        // await browser.driver.close();
        // await browser.driver.switchTo().window(handle[handle.length - 2]);
    }

    public async switchToCurrentWindow(window: string) {
        await browser.switchTo().window(window);
    }

    public async switchToActiveElement() {
        await browser.switchTo().activeElement();
    }

    public async waitForPageLoad() {
        try {
            await browser.wait(async () => {
                console.log("Inside page wait")
                let pageLoadStatus = await browser.executeScript("return document.readyState");
                console.log("pageLoadStatus: " + pageLoadStatus);
                return pageLoadStatus === "complete";
            }, 10000);
        } catch (e) { }
    }

    public async checkBackgroundColorOfElement(element: ElementFinder) {
        let color: any = await element.getCssValue('background-color')
        console.log("background : " + color);
        return await color;
    }

    public async checkFontColorOfElement(element: ElementFinder) {
        let color: any = await element.getCssValue('color')
        console.log("font : " + color);
        return await color;
    }

    public async checkBorderColorOfElement(element: ElementFinder) {
        let color: any = await element.getCssValue('border')
        console.log("Border : " + color);
        return await color;
    }

    public async clickSearchButton() {
        try {
            await this.actions.waitUntilElementPresenceOf(this.buttonSearch, "Wait for element")
            await this.actions.click(this.buttonSearch, "Click on Search Button on FM2 Page");
            await this.waitForActionToComplete();
            await this.waitForPageLoad();
        } catch (error) {

        }
    }    

    public async verifyEnvironment() {
        const shell = require('node-powershell');
        let ps = await new shell({
          executionPolicy: 'Bypass',
          noProfile: true
        });
    
        let result = "";
        try {
          await ps.addCommand('(get-item env:JBH_ENV).value');
          result = await ps.invoke();
        } catch (e) {
          try {
            await ps.addCommand('test-path \\\\ci\\cideliverables');
            result = await ps.invoke();
          } catch (e) { }
        }
    
        await ps.dispose();
        
        console.log("Result--->: " + result);   
    
        if (result.trim() === "True" || result.trim().toUpperCase() === "PROD") {
          await process.abort();
          return false;
        }
        else if(result.trim() === "False") {
            return true;
        }

    }

    public async openPayVerfication(url: string) {
        this.actions.get(url, "Opening Pay Verification Url");
        this.waitForPageLoad();
        }

    public async copyPayVerficationUrl() {
        return await browser.getCurrentUrl();
    }


}
