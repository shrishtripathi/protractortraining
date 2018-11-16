import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, protractor } from "protractor";
import { ActionLibrary } from "../utilities/action-library";
import { By } from 'selenium-webdriver';
import { String } from 'typescript-string-operations';
import { relative } from "path";
import { BrowserStack } from "protractor/built/driverProviders";
import { async } from "q";

let environment = browser.params.user.environment;
let loginURL = "https://ssoauth" + environment + ".jbhunt.com/cas-server/login";
let userName = browser.params.user.userName;
let password = browser.params.user.password;
let shouldLogin = browser.params.user.shouldLogin;

export class BasePage {
    actions: ActionLibrary;
    readonly pdtUrl: string = "https://finalmilefleetstatus.jbhunt.com/finalmilefleetstatus/";
    readonly fuelSurchargeUrl: string = "http://fuelsurcharge.jbhunt.com/fuelsurcharge";
    readonly ltlConsolidatorUrl: string = "http://ltlconsolidator.jbhunt.com/app_ltlConsolidator/pages/ltlScreen.iface";
    readonly routingGuideApplicationUrl: string = "http://routingguideadministration" + environment + ".jbhunt.com/app_ldp_routingGuideAdmin";
    readonly enterPriceOrderManagementUrl: string = "http://eom.jbhunt.com/eom/search/eomSearch.face";
    readonly simonNowUrl: string = "http://psft.jbhunt.com/SimonNow/index.html#home";
    readonly assetAdministrationUrl: string = "https://assetadministration.jbhunt.com/assetAdministration/";
    readonly iPayUrl: string = "http://ipay.jbhunt.com/JBIDriverPay/driverActivity.do?action=start&JEBPQV=PEVSF9R&GFQPTRVE=-4&Qrh9vp%2BgTnIawIsmpjJGcQ%3D%3D=zCRXL%2BG%2FGug%3D&THHPTZ=082057&YWMPTLUB=-4&GFQDYEV=9365673799";
    readonly freightManager2: string = "http://fm.jbhunt.com/FreightManager2/common/index.iface";
    readonly myJbhuntUrl: string = "https://my.jbhunt.com/";
    readonly offerManagementUrl: string = "https://offermanagement.jbhunt.com/offerManagement";
    readonly carrierManagementUrl: string = "http://cms.jbhunt.com/cms/main/menu.do?method=init";
    readonly paceUrl: string = "https://dcs.jbhunt.com/pace/login.jsp";
    readonly maximoURL: string = "http://jvpweb00201.jbhunt.com/maximo/webclient/login/login.jsp?welcome=true";
    readonly inProgressImage: ElementFinder = element(by.css('.iceOutConStatActv'));
    readonly doePricesTab = element(by.id("fuelProgramController:icePnlTbSet:0.2"));
    readonly displayPricesButton = element(by.xpath("//input[@value='Display Prices']"));
    readonly hawkOneUrl: string = "http://hawkonescreen.jbhunt.com/HawkOneScreen/authenticate/authenticateAction.do?method=forwardUser";
    readonly carriers: ElementFinder = element(by.xpath("//div[text()='Carriers']"));
    readonly inProgressImageXpath: string = '//div[contains(@id,"{0}")]//div[id*="loadmask"]';
    readonly loginScreenUserName = element(by.id('username'));
    readonly loginScreenPassword = element(by.id('password'));
    readonly stopDetailsColumns: ElementArrayFinder = element.all(by.xpath("//div[@id='stop_section']//tr[@class='resultsHeaderAlt']/td"))
    readonly loginScreenLogInButton = element(by.className('light-primary-solid-button black-text'));
    readonly paceUrl1: string = "http://dcs.jbhunt.com/pace";
    readonly centerScreenUrl: string = "http://centerscreen.jbhunt.com/centerScreen";
    readonly openBoxManagementUrl: string = 'http://boxmanagementsystem.jbhunt.com/BoxManagementSystem';
    readonly carrier360Url: string = "https://carrier.jbhunt" + environment + ".com/360/";
    readonly searchResultLoading = element(By.xpath(".//div[@id='form:j_id714:connection-working' and @style='visibility: visible;']"));
    readonly linkEnterpriseOrderMangaement = element(by.xpath("//a[@title='Enterpise Order Management']"));
    readonly enterPriseOrderManagementPageTitle = element(by.xpath("//div[text()='Enterprise Order Management']"))
    readonly rateCalculator: ElementFinder = element(by.xpath("//div[contains(@class,'market-rate')]//div/span[@class='market-value']")); //element(by.xpath("(//div[contains(@class,'market-rate') and contains(@style,'z-index: 19020')])[1]"))
    readonly cdrapUrl: string = "http://cdpw.jbhunt.com/cdrap/logon.do";
    readonly coaUrl: string = "https://coa.jbhunt.com/COA/";
    readonly fm2Url: string = 'http://fm.jbhunt.com/FreightManager2/common/index.iface';
    readonly shipper360Url: string = "https://tms" + environment + ".jbhunt.com/tms?doAs=JBHASHI1"
    readonly buttonSearch: ElementFinder = element(by.xpath("//button[text()='Search']"));
    readonly roadServiceContactCentreUrl: string = "https://roadservice.jbhunt.com/app_garage_roadservicecontactcenter/";
    readonly shopfloorUrl: string = "http://shopfloor.jbhunt.com/shopfloor/mainpage.do?action=login";
    readonly eomUrl: string = "http://eom.jbhunt.com/eom/search/eomSearch.face";
    readonly vendorPortalUrl: string = "https://vendorportal2.jbhunt.com/app_garage_VendorPortalUI/";
    readonly platform360URL = 'https://scm.jbhunt.com/platform';
    readonly iclpUrl: string = "https://ww3.jbhunt.com/loadboard/#loadboardmap";
    readonly railManagerUrl: string = "http://fm.jbhunt.com/RailManager2/index.iface";
    readonly massPrintURL: string = "http://massprint-tst.jbhunt.com/massprint";
    readonly moneyWorksUrl: string = "http://psft.jbhunt.com/dollarWorks/signin.iface";
    readonly centralCustomerInformation: string = "http://cci.jbhunt.com/cci/authenticate/AuthenticationAction.do?method=forwardUser";
    readonly precallUrl: string = "https://precall.jbhunt.com/PreCall/home.iface";

    constructor() {
        this.actions = new ActionLibrary();
    }

    async navigateToLoginScreen() {
        await this.loginScreenUserName.sendKeys(userName);
        await this.loginScreenPassword.sendKeys(password);
        await this.loginScreenPassword.sendKeys(protractor.Key.TAB)
        await this.loginScreenLogInButton.sendKeys(protractor.Key.ENTER);
    }
    public async isSelectValuePopUpDisplayed() {
        let selectValueXpath = element(by.xpath("//table[contains(@id,'dialog_inner')]"));
        let flag: boolean = false;
        let EC = protractor.ExpectedConditions;
        try {
            await browser.wait(EC.visibilityOf(selectValueXpath), 10000);
            flag = await this.actions.isElementDisplayed(selectValueXpath, "select value xpath");
        } catch (error) {

        }
        return await flag;
    }
    public async getColumnIndexOfStopDetails(columnName: string) {
        let columnIndex;
        let size = await this.stopDetailsColumns.count();
        let num: number = 0;
        for (let index = 0; index < size; index++) {
            let text = await this.stopDetailsColumns.get(index).getText();
            console.log("text is " + text)
            console.log("column name " + columnName)
            if (text.trim() === columnName.trim()) {
                columnIndex = index + 1;
                console.log("inside if index is" + columnIndex);
                break;
            }
        }
        console.log("index is: " + columnIndex)
        return columnIndex;
    }
    public async openPaceUrl1() {
        return await this.actions.get(this.paceUrl, "Opening My pace direct url");
    }

    public async acceptingAlert() {
        await browser.driver.switchTo().alert().accept();
    }

    public async opencentralCustomerInformationUrl() {
        await this.actions.get(this.centralCustomerInformation, "Opening central customer information url");
        await this.loginIfRequired();
    }

    public async openPrecallUrl() {
        await this.actions.get(this.precallUrl, "Opening precall direct url");
        await this.loginIfRequired();
    }

    public async openMassPrintUrl() {
        return await this.actions.get(this.massPrintURL, "Opening mass print url");
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

    async navigateToAppHome(url: string) {
        console.log("URL: " + url);
        await this.openUrl(url);
        await this.loginIfRequired();
        await browser.wait(ExpectedConditions.urlContains(url), 30000);
    }

    async navigateToOms(url: string) {
        await browser.get(url);
        await browser.manage().window().maximize();
        let submitbutton: ElementFinder = element(by.xpath(`//input[@value='Log In' and @type='submit']`));
        try {
            if (await browser.getTitle() == 'Login - CAS – Central Authentication Service') {
                await this.loginScreenUserName.sendKeys(userName);
                await this.loginScreenPassword.sendKeys(password);
                await submitbutton.click()
            }
        } catch (error) {
            console.log(error)
        }
        await browser.wait(ExpectedConditions.urlContains(url), 30000);
    }

    public async navigateToCdrap() {
        let userNameXpath: ElementFinder = element(by.xpath("//input[@name='username']"));
        let passwordXpath: ElementFinder = element(by.xpath("//input[@name='password']"));
        let userName = browser.params.user.userName;
        let password = browser.params.user.password;

        await this.openUrl("http://cdpw.jbhunt.com/cdrap/logon.do");
        try {
            if (await userNameXpath.isPresent() && (await browser.getTitle()) == "CD-RAP - Logon") {
                await this.actions.waitBrowserTitleEqualsTo("CD-RAP - Logon");
                await this.actions.clearText(userNameXpath, "Clear name in User Name");
                await this.actions.setText(userNameXpath, userName, "Enter name in User Name");
                await this.actions.clearText(passwordXpath, "Clear name in User Name");
                await this.actions.setText(passwordXpath, password, "Enter name in User Name");
                await this.clickOnButton("Submit");
                await browser.wait(ExpectedConditions.titleContains("CD-RAP - Welcome"), 10000);
            }

        } catch (error) {
            console.log(error);

        }
    }

    public async closeWindow() {
        await browser.driver.close();
    }

    public async browserBackButton() {
        await browser.navigate().back();
    }

    public async mouseOverToTab(element: ElementFinder) {
        await this.actions.moveMouseToElement(element, "mouse over to element")
    }

    public async chanegIESettings(registryPath: string) {
        let shell: any = require('shelljs');
        let cmd = registryPath;
        let task = shell.exec(cmd);
        if (task.code !== 0) {
            shell.exit(1);
            return false;
        }
        return true;

    }

    public async navigateTo360HomePortal(url: string) {
        let userName = browser.params.carrier360.userName;
        let password = browser.params.carrier360.password;
        await this.openUrl(url);

        try {

            await browser.wait(await ExpectedConditions.presenceOf(this.loginScreenUserName), 5000);
            let usernameDispalyed: boolean = await this.loginScreenUserName.isDisplayed();

            if (usernameDispalyed) {
                await this.loginScreenUserName.sendKeys(userName);
                await this.loginScreenPassword.sendKeys(password);
                await this.loginScreenPassword.sendKeys(protractor.Key.TAB)
                await this.loginScreenLogInButton.sendKeys(protractor.Key.ENTER);

            }

        } catch (e) {
        }
    }
    public async clickonEnterpriseOrderManagement() {
        await this.actions.click(this.linkEnterpriseOrderMangaement, "Click on Enterprise Order Mangement link");
        await this.actions.selectWindow(1, "Carrier Management Tab");
        return await this.actions.getText(this.enterPriseOrderManagementPageTitle, "Page title");
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

    public async openUrl(url: string) {
        return await this.actions.get(url, "Opening  url");
    }
    public async getTodayDate() {
        let today = new Date();
        let myDateString;
        today.setDate(today.getDate());
        myDateString = ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2) + '/' + today.getFullYear();
        return await myDateString;
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

    public async clickOnEOMButton(type_search: string) {
        let search_skeleton: ElementFinder = element(by.xpath("//input[@id='" + type_search + "']"));
        await this.actions.waitUntilElementVisible(search_skeleton, "waiting");
        await search_skeleton.click();
        await this.waitTillProcessing("Searching Skeletons");
    }
    public async clickOnLink(linkText: string) {
        let linkXpath: ElementFinder = element(by.xpath("(//a[.='" + linkText + "'])[1]"));
        console.log("//a[.='" + linkText + "']")
        await this.actions.click(linkXpath, "click on " + linkText + " link");
    }
    public async waitTillProcessing(text_load: string) {

        let Object_Processing: ElementFinder = element(by.xpath("//label[text()='" + text_load + "']"));
        try {
            await this.actions.waitUntilElementVisible(Object_Processing, "stop table", 50000);
        } catch (e) { }

        try {
            await this.actions.waitUntilElementInVisible(Object_Processing, "stop table");
        } catch (e) { }

        await this.waitForPageLoad();
    }
    public numberInPagination(index: number): ElementFinder {
        let enabledNumberLinkInPagination = element(by.xpath("//table[@class='iceDatPgrTbl']//a[text()=" + index + "]/parent::td[@class='iceDatPgrScrCol']"));
        return enabledNumberLinkInPagination;
    }
    public async openFm2Url() {
        return await this.navigateToAppHome(this.fm2Url);
    }
    public async openUrlInNewTab(url) {
        await browser.executeScript("return window.open(arguments[0], '_blank')", url);
        await this.actions.selectWindow(1, "move to new window");

    }
    public labelText(text: string): ElementFinder {
        let labelText = element(by.xpath("//label[contains(text(),'" + text + "')]"));
        return labelText;
    }
    public async openEomUrl() {
        return await this.navigateToAppHome(this.eomUrl);
    }
    public async verifySuccessMessageOnPage(text: string) {
        let ele_Message: ElementFinder = await this.labelText(text);
        return await ele_Message.getText();
    }
    public async getRequiredCalenderDate(date_value) {
        let newdate = new Date();
        newdate.setDate(newdate.getDate() + date_value);

        let newmonth = Number(newdate.getUTCMonth()) + 1;
        let final_month;
        let final_Date: any;
        if (newmonth < 10) { final_month = "0" + newmonth } else  {final_month = newmonth; }
        if (newdate.getUTCDate() < 10) { final_Date = "0" + newdate.getUTCDate() } else { final_Date = newdate.getUTCDate() }
        let requiredDate = (final_month + '/' + final_Date + '/' + newdate.getUTCFullYear())
        return requiredDate;
    }

    public async openMyJbHuntUrl() {
        return await this.actions.get(this.myJbhuntUrl, "Opening My jbhunt url");
    }
    public async openHawkOne() {
        return await this.actions.get(this.hawkOneUrl, "open hawkone url");
    }

    public async scrollUp() {
        await browser.executeScript('window.scrollTo(0,0);');
    }

    public async scrollintoView(webElement: ElementFinder) {
        let location = await webElement.getLocation();
        await browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
    }

    public async waitForElementIsVisible(element: ElementFinder) {
        await this.actions.waitUntilElementVisible(element, "Wait for Element visibility");
    }

    public async waitForElementIsEnabled(element: ElementFinder) {
        return await browser.wait(async () => {
            let style: string = await element.getAttribute('style');
            return style === "display: none;";
        }, 50000);
    }

    async waitForActionToCompleteTT() {
        let spinnerImage = element(by.xpath("//div[@id='spinnerText']"))
        return await browser.wait(async () => {
            let style: string = await spinnerImage.getAttribute('style');
            return style === "display: none;";
        }, 30000);
    }

    public async openFuelSurchargeUrl() {
        return await this.actions.get(this.fuelSurchargeUrl, "Opening My jbhunt url");
    }
    public async clickDoePricesTab() {
        await this.actions.click(this.doePricesTab, "click on Doe prices Tab");
    }
    public async openltlConsolidatorUrl() {
        return await this.actions.get(this.ltlConsolidatorUrl, "Opening My ltl_consolidator url");
    }
    public async openEnterpriseOrderManagementUrl() {
        return await this.actions.get(this.enterPriceOrderManagementUrl, "Opening My jbhunt url");
    }

    async waitForInProgressTobeVisible() {
        return await browser.wait(async () => {
            let style: string = await this.inProgressImage.getAttribute('style');
            return style === "visibility: visible;";
        }, 15000);
    }

    async waitForInProgressTobeInVisible() {
        return await browser.wait(async () => {
            let style: string = await this.inProgressImage.getAttribute('style');
            return style === "visibility: hidden;";
        }, 150000);
    }

    async waitForActionToComplete() {
        await this.waitForInProgressTobeVisible();
        await this.waitForInProgressTobeInVisible();
    }

    async waitForActionComplete(gridName: string) {
        await this.waitForInProgressToVisible(gridName);
        await this.waitForInProgressToInVisible(gridName);
    }

    async waitForInProgressToVisible(gridName: string) {
        try {
            return await browser.wait(async () => {
                let style: string = await this.getLoadingElement(gridName).getAttribute('aria-hidden');
                console.log("Expected style : false; And Current Style: " + style);
                return style === "false";
            }, 2000);
        } catch (e) { }
    }

    async waitForInProgressToInVisible(gridName: string) {
        try {

            return await browser.wait(async () => {
                let style: string = await this.getLoadingElement(gridName).getAttribute('aria-hidden');
                console.log("Expected style : true; and current style : " + style);
                return style === "true";
            }, 60000);
        } catch (e) { }
    }

    public async clickCarriers() {
        await this.actions.click(this.carriers, "Search");
        return await this.actions.isElementDisplayed(this.carriers, "carrier field");
    }

    public getLoadingElement(loadingArea: string) {
        let loadingXpath = String.Format(this.inProgressImageXpath, loadingArea);
        console.log("loadingXpat: h" + loadingXpath);
        let loadingImage = element(by.xpath(loadingXpath));
        return loadingImage;
    }

    public spanText(text: string): ElementFinder {
        let spanText = element(by.xpath("//span[contains(text(),'" + text + "')]"));
        return spanText;
    }

    public aspanText(text: string): ElementFinder {
        let xpath = element(by.xpath("//a/span[text()='" + text + "']"));
        return xpath;
    }

    public async clickOnButton(buttonName: string) {
        let xpath = element(by.xpath("//input[@value='" + buttonName + "']"));
        await this.actions.click(xpath, "Clicking on " + buttonName + "");
    }

    public async verifyText(text: string) {
        await this.actions.waitUntilElementVisible(this.text(text), "");
        let isTextPresent: boolean = await this.actions.isElementPresent(this.text(text), "Is Element present");
        return isTextPresent;
    }

    public text(text: string): ElementFinder {
        let textXpath = element(by.xpath("//*[contains(text(),'" + text + "')]"));
        return textXpath;
    }
    public async getCurrentMonthName(monthInNumber: number) {
        let month: string = null;

        switch (monthInNumber) {
            case 1:
                month = "January";
                break;
            case 2:
                month = "February";
                break;
            case 3:
                month = "March";
                break;
            case 4:
                month = "April";
                break;
            case 5:
                month = "May";
                break;
            case 6:
                month = "June";
                break;
            case 7:
                month = "July";
                break;
            case 8:
                month = "August";
                break;
            case 9:
                month = "September";
                break;
            case 10:
                month = "October";
                break;
            case 11:
                month = "November";
                break;
            case 12:
                month = "December";
                break;
            default:
                break;
        }
        return await month;
    }

    public async clickOnInputButton(buttonName: ElementFinder) {
        await this.actions.waitUntilElementPresenceOf(buttonName, "");
        await this.actions.click(buttonName, "Click on Button");

    }

    public async clickonMenuLink(text: string) {
        let xpath: ElementFinder = element(by.xpath("//a[contains(text(),'" + text + "')]"));
        await this.actions.click(xpath, "Click on menu");
    }

    public async selectRadioButton(text: string) {
        let xpath: ElementFinder = element(by.xpath("//td[contains(text(),'" + text + "')]/preceding-sibling :: td//input"));
        await this.actions.click(xpath, "Account");

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
    public async clickAndSelectDropdownValue(text_label: string, text_value: string) {
        await this.clickOnDropDown(text_label);
        await this.selectDropDownOption(text_value);
    }

    public async clickOnDropDown(lableText: string) {
        let orderLookUp: ElementFinder = element(by.xpath("(//td[contains(text(),'" + lableText + "')]//following-sibling::td/select)[1]"));
        await this.actions.click(orderLookUp, "click on " + lableText);
        await browser.sleep(3000);

    }
    public async selectDropDownOption(optionText: string) {
        try {
            let optionXpath: ElementFinder = element(by.xpath("//select[@name='selectedBillingPeriodServiceGroupId']/option[contains(text(), '" + optionText + "')]"));
            await console.log("xpath is //select[@name='selectedBillingPeriodServiceGroupId'][contains(text(), '" + optionText + "')]")
            await this.actions.click(optionXpath, "Click on " + optionText + " option");
            await browser.sleep(3000);
        } catch (error) {
            console.log("dropdown is " + error);
        }

    };

    public async openPaceUrl() {
        await this.navigateToAppHome(this.paceUrl);
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
        await this.loginIfRequired();
    }

    public async setTextInInputField(element: ElementFinder, text: string) {
        await this.actions.clearText(element, "Clear text");
        await this.actions.setText(element, text, "Enter text in input field");
    }

    public async verifyRateCalculatorDisplayed() {
        let counter: number = 1;
        do {
            await this.actions.waitUntilElementPresenceOf(this.rateCalculator, "");
            counter++;
        } while (! await this.rateCalculator.isPresent() && await counter <= 15)
        if (await this.rateCalculator.isPresent()) {
            return true;
        }
        return false;


    }
    public async click(element: ElementFinder) {
        await this.actions.waitUntilElementVisible(element, "wait until element visible " + element);
        await this.actions.click(element, "clicked on " + element);
    }
    public async getText(element: ElementFinder) {
        let text: string = null;
        try {
            await this.actions.waitUntilElementVisible(element, "wait until element visible " + element);
            text = await this.actions.getText(element, "clicked on " + element);
        } catch (error) {

        }
        return await text;

    }
    public async getCurrentWindowHandle() {
        return await browser.getWindowHandle();
    }

    public async closeCurrentWindow() {
        let handle: string[] = await browser.getAllWindowHandles();
        await browser.driver.switchTo().window(handle[handle.length - 1]);
        await browser.driver.close();
        await browser.driver.switchTo().window(handle[handle.length - 2]);
    }

    public async switchToCurrentWindow(window: string) {
        await browser.switchTo().window(window);
    }
    public async setText(element: ElementFinder, value: string) {
        await this.actions.setText(element, value, "sent text to " + element);
    }
    public async clearText(element: ElementFinder) {
        await this.actions.clearText(element, "clear text to " + element);
    }
    public async switchToActiveElement() {
        await browser.switchTo().activeElement();
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

    public async waitForElementToBeinvisible(element: ElementFinder) {
        await this.actions.waitUntilElementInVisible(element, "");
    }

    public async openURL() {
        return await this.actions.get(this.myJbhuntUrl, "Opening My jbhunt url");
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
    public async openRoadServiceContactCentreUrl() {
        return await this.actions.get(this.roadServiceContactCentreUrl, "Opening road service contact centre url")
    }

    public async openshopfloorURL() {
        return await this.actions.get(this.shopfloorUrl, "Opening My jbhunt url");
    }

    public async openIclpUrl() {
        return await this.actions.get(this.iclpUrl, "Opening ICLP url");
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
    public async verifyAnyParagraphElementOnPage(status: string) {
        let obj_Element: ElementFinder = element(by.xpath("//.//p[contains(text(),'" + status + "')]"))
        await this.actions.waitUntilElementVisible(obj_Element, "");
        try {
            if (await obj_Element.isDisplayed()) {
                return true;
            }
        } catch (e) { return false; }
        return false;
    }

    public async clickOnAnyElement(element: ElementFinder) {
        await this.actions.waitUntilElementVisible(element, "");
        await this.actions.click(element, "");
        await this.waitForPageLoad();

    }

    public async verifyElementPresent(element: ElementFinder) {
        let elementPresence = await this.actions.isElementPresent(element, 'Is element present');
        if (elementPresence) {
            return true;
        } else {
            return false;
        }
    }
}
