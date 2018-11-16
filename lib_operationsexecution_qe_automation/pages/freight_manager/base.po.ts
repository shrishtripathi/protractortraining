import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, protractor } from 'protractor';
import { ActionLibrary } from "../../utilities/action-library";
import { By } from 'selenium-webdriver';

let userName = browser.params.user.userName;
let password = browser.params.user.password;
let shouldLogin = browser.params.user.shouldLogin;

export class BasePage {
    actions: ActionLibrary;
    readonly buttonDetach: ElementFinder = element(by.buttonText('Detach'));
    readonly buttonAttach: ElementFinder = element(by.buttonText('Attach'));
    readonly inProgressImage: ElementFinder = element(by.css('.iceOutConStatActv'));
    readonly myJbhuntUrl: string = "https://my.jbhunt.com/";
    readonly fm2Url: string = 'http://fm.jbhunt.com/FreightManager2/common/index.iface';
    readonly buttonSearch = element(by.buttonText('Search'));
    readonly searchResultLoading = element(By.xpath(".//div[@id='form:j_id714:connection-working' and @style='visibility: visible;']"));
    readonly buttonSavePrefs = element(by.buttonText('Save Prefs'));
    readonly buttonNotes = element(by.buttonText('Notes'));
    readonly eventMessage = element(by.xpath("//div[@id='contentHolder']//li/span[contains(@class,'iceMsgs')]"));
    readonly okButton = element(by.buttonText('Ok'));
    readonly updateButton = element(by.buttonText('Update'));
    readonly buttonExit = element(by.buttonText('Exit'));
    readonly loginScreenUserName = element(by.id('username'));
    readonly loginScreenPassword = element(by.id('password'));
    readonly loginScreenLogInButton = element(by.className('light-primary-solid-button black-text'));

    constructor() {
        this.actions = new ActionLibrary();
    }

    public async getPageTitle() {
        return await this.actions.getPageTitle("Page Title");
    }

    async navigateToLoginScreen() {
        await this.loginScreenUserName.sendKeys(userName);
        await this.loginScreenPassword.sendKeys(password);
        await this.loginScreenPassword.sendKeys(protractor.Key.TAB)
        await this.loginScreenLogInButton.sendKeys(protractor.Key.ENTER);
    }

    async loginIfRequired() {
        try {
            await browser.wait(ExpectedConditions.presenceOf(this.loginScreenUserName), 15000);
            let usernameDispalyed: boolean = await this.loginScreenUserName.isDisplayed();
            if (usernameDispalyed) {
                console.log("inside shouldlogin: " + shouldLogin);
                await this.navigateToLoginScreen();
            }
        } catch (e) { }
    }

    public async WaitForSearchResultLoading() {
        await this.actions.waitUntilElementInVisible(this.searchResultLoading, "Search menu")
    }

    public async openFm2Url() {
        return await this.actions.get(this.fm2Url, "Opening My jbhunt url");
    }

    public VerifyFirstRowIsAppearing(firstRowSearchResult: any) {
        browser.wait(ExpectedConditions.presenceOf(firstRowSearchResult), 5000).then(function () {
            firstRowSearchResult.isDisplayed().then(function (isDisplayedd) {
                console.log("search result is appearing");
            });
        });
    };

    public aspanText(text: string): ElementFinder {
        var xpath = element(by.xpath("//a/span[text()='" + text + "']"));
        return xpath;
    }

    public async clickSearchButton() {
        try {
            await this.actions.waitUntilElementPresenceOf(this.buttonSearch, "Wait for element")
            await this.actions.click(this.buttonSearch, "Click on Search Button on FM2 Page");
            await this.waitForPageLoad();
            await this.waitForActionToComplete();
        } catch (error) {

        }

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

    public async clickOkButton() {
        await this.actions.click(this.okButton, "Clicking OK Button");
        await this.waitForActionToComplete();
    }

    public async clickUpdateButton() {
        await this.actions.click(this.updateButton, "Clicking Update Button");
        await this.waitForActionToComplete();
    }

    public async boardCodeTable(text1: string, text2: string, text3: string, text4: string, locator: string) {
        let boardCodeTableLocator: ElementFinder;
        let textArr = [text1, text2, text3, text4];
        let count = 0;
        for (let index = 1; index <= 5; index++) {
            if (index == 3) {
                index++;
            }
            boardCodeTableLocator = element(by.xpath(locator + "[" + index + "]"));
            this.actions.setText(boardCodeTableLocator, textArr[count], "setText for " + textArr[count]);
            count++;
        }
    }

    public async setText(element: ElementFinder, text: string) {
        await this.actions.clearText(element, "Clear text");
        await this.actions.setText(element, text, "Enter text in input field");
    }

    public async clearText(element: ElementFinder) {
        await this.actions.clearText(element, "Clearing text");
    }

    public async clearTextForBoardCodeTable(locator: string) {
        let boardCodeTableLocator: ElementFinder;

        for (let index = 1; index <= 5; index++) {

            boardCodeTableLocator = element(by.xpath(locator + "[" + index + "]"));
            if (this.actions.getText(boardCodeTableLocator, "board table") != null) {
                this.actions.clearText(boardCodeTableLocator, "clear text");
            }
        }
    }


    public clickOnSavePrefButton() {
        this.actions.click(this.buttonSavePrefs, "Click on Save Prefs button");
        this.actions.mediumWait("waiting..");
    }

    public clickOnNotesButton() {
        this.actions.click(this.buttonNotes, "Click on Notes button");
        browser.sleep(5000);
    }

    public async navigateBack() {
        await browser.navigate().back();
    }


    public spanText(text: string): ElementFinder {
        var spanText = element(by.xpath("//span[contains(text(),'" + text + "')]"));
        return spanText;
    }

    public async verifyEventMessages(text_message: any) {
        let counter: number = 1;
        let ele_Message: ElementFinder = await this.spanText(text_message);
        do {
            await this.actions.shortWait("waiting");
            counter++;
        } while (! await ele_Message.isPresent() && await counter <= 10)
        if (await ele_Message.isPresent()) {
            return await ele_Message.getText();
        }

        return "";
    }

    public clickOnDetachButton() {
        this.actions.click(this.buttonDetach, "Click on Detach button");
        this.actions.longWait("Wait for to detach the text");
    }


    public clickOnAttachButton() {
        this.actions.click(this.buttonAttach, "Click on Attach button");
        this.actions.longWait("Wait for to attach the text");
    }

    public numberInPagination(index: number): ElementFinder {
        var enabledNumberLinkInPagination = element(by.xpath("//table[@class='iceDatPgrTbl']//a[text()=" + index + "]/parent::td[@class='iceDatPgrScrCol']"));
        return enabledNumberLinkInPagination;
    }

    public async  getColmnDataByColmnIndex(tblId: string, tblIndex: number) {

        var columnDatalist: string[] = new Array();
        try {
            let tableHeaders: ElementArrayFinder = element.all(By.xpath("//*[@id='form:" + tblId + "']//td[" + tblIndex + "]"));
            let tableHeadersCount = await tableHeaders.count();
            for (let i: number = 0; i < tableHeadersCount; i++) {
                let colmnData: string = await tableHeaders.get(i).getText();
                console.log("colmnData of i:" + i + " is " + colmnData)
                await columnDatalist.push(colmnData);

            }
            await console.log("size:" + columnDatalist.length);
        } catch (e) {
            await console.log("error" + e);
        }
        return await columnDatalist;
    }

    async waitForInProgressTobeVisible() {
        return await browser.wait(async () => {
            let style: string = await this.inProgressImage.getAttribute('style');
            return style === "visibility: visible;";
        }, 5000);
    }

    async waitForInProgressTobeInVisible() {
        return await browser.wait(async () => {
            let style: string = await this.inProgressImage.getAttribute('style');
            return style === "visibility: hidden;";
        }, 90000);
    }

    async waitForActionToComplete() {
        try {
            await this.waitForInProgressTobeVisible();
            await this.waitForInProgressTobeInVisible();
        } catch (e) { }
    }

    public async pagination() {

        let nextButtonEnabled: ElementFinder = await element(By.xpath("//td/a[text()='Next']"));
        let nextButtonIsDisable: boolean = await element(By.xpath("//a[text()='Next' and contains(@onclick,'return false')]")).isPresent();

        if (!nextButtonIsDisable) {
            console.log("inside next button enabled");

            if (await nextButtonEnabled.isDisplayed()) {
                await nextButtonEnabled.click();
                await browser.sleep(10000);
                console.log("sleep...")
                return true;
            }
            else {
                console.log("Next button is not present because retrieved data is less then one page,completed pagination");
                return false;
            }

        }
        else {
            console.log("completed pagination, next button is disabled no data is found with given criteria");
            return false;
        }

    }
    public async getColumnIndexForEmptyBoxTable(columnName: any) {
        let columnIndex: number = -1;
        this.actions.mediumWait("waiting...");
        let numberOfColumns: ElementArrayFinder = element.all(by.xpath("(//thead[@id='form:r:thead']/tr/th/abbr)"));
        let size: number = await numberOfColumns.count();
        let index: number = 1;
        try {
            for (index = 1; index <= size; index++) {
                if (await element(by.xpath("(//thead[@id='form:r:thead']/tr/th/abbr)[" + index + "]")).getAttribute("title") === columnName) {
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

    public async sendDataToTable(locator: string, arr) {
        let boardCodeTableLocator: ElementArrayFinder = element.all(by.xpath(locator));
        let textBox: ElementFinder;
        let count: number = 0;
        let size: number = await boardCodeTableLocator.count();
        for (let index = 1; index <= size; index++) {
            textBox = await element(by.xpath(locator + "[" + index + "]"));
            await this.actions.setText(textBox, arr[count], "setText for " + arr[count]);
            count++;
        }
    }

    public async getColumnIndex(columnName: any) {
        let columnIndex: number = -1;
        this.actions.mediumWait("waiting...");
        let numberOfColumns: ElementArrayFinder = element.all(by.xpath("(//tr[@class='iceDatTblColGrpHdrRow lnfMultipleHeadersRow']/th)"));
        let size: number = await numberOfColumns.count();
        let index: number = 1;
        try {
            for (index = 1; index <= size; index++) {
                if (await element(by.xpath("((//tr[@class='iceDatTblColGrpHdrRow lnfMultipleHeadersRow']/th)[" + index + "]//span)[3]")).getText() === columnName) {
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

    async refreshPage() {
        await this.actions.shortWait('wait after refresh ');
        await browser.driver.navigate().refresh();
        await this.actions.mediumWait('wait after refresh ');
        await this.waitForPageLoad();
    }

    public async clickOnButton(buttonTextValue: string) {
        let button = await element(by.buttonText(buttonTextValue));
        await this.actions.click(button, "Click On " + buttonTextValue + " Button ");
    };

    public async closeWindow() {
        browser.driver.close();
    }
    public async waitUntillsearchTableLoads(searchTable: ElementFinder) {
        let counter: number = 1;
        do {
            await this.actions.waitUntilElementVisible(searchTable, "")
        } while (! await searchTable.isPresent() && await counter <= 10)

    }

    public async waitForLoading() {
        console.log("loading....")
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(await element(by.xpath("//*[@class='iceOutConStatInactv' and @style='visibility: visible;']"))), 300000);
    };
}
