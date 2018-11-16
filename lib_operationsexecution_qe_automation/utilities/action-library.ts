
import { element, by, ExpectedConditions, browser, protractor, ElementFinder, ElementArrayFinder } from "protractor";

let EC = protractor.ExpectedConditions;

export class ActionLibrary {

        async get(url: string, urlName: string) {
                await browser.get(url);
                await browser.manage().window().maximize();
        }

        async closeCurrentWindow(currentWindow: string) {
                await browser.close();
        }

        async waitUntilElementPresenceOf(element: ElementFinder, logname?: string) {
                return await browser.wait(EC.presenceOf(element), 150000);
        }

        async waitUntiltextToBePresentInElement(element: ElementFinder, actualText: string, logname: string) {
                return await browser.wait(EC.textToBePresentInElement(element, actualText), 15000);
        }

        async waitUntilElementClickable(element: ElementFinder, logname: string) {
                return await browser.wait(EC.elementToBeClickable(element), 5000);
        }

        async waitUntilElementVisible(element: ElementFinder, logname: string, waitTime=120000) {
                return await browser.wait(EC.visibilityOf(element), waitTime);
        }

        async waitUntilElementInVisible(element: ElementFinder, logname: string, waitTime=90000) {
                return await browser.wait(EC.not(EC.visibilityOf(element)), waitTime);
        }

        async setText(element: ElementFinder, value: string, logname: string) {
                await this.waitUntilElementPresenceOf(element, logname);
                return await element.sendKeys(value);
        }

        async verifyText(element: ElementFinder, actualText: string, logname: string) {

                await this.waitUntilElementPresenceOf(element, logname);
                let message: string;
                let elementText: string = await element.getText();
                if (elementText == actualText) {
                        message = 'ElementText is matching for element ' + logname;
                        return await message;
                }
                else {
                        message = 'ElementText is not matching for element ' + logname
                        return await message;

                }
        }

        async click(element: ElementFinder, logName: string) {
               await this.waitUntilElementClickable(element, logName);
                return await element.click();
        }

        async waitUntilAlertPresent() {
                return await browser.wait(EC.alertIsPresent(), 15000);
        }

        async SendKeysTab(logName: string) {
                var tab = await browser.actions().sendKeys(protractor.Key.TAB);
                await tab.perform();
        }

        async doubleClick(element: ElementFinder, logName: string) {
                await this.waitUntilElementClickable(element, logName);
                return await browser.actions().doubleClick(element).perform();
        }

        async moveMouseToElement(element: ElementFinder, logName: string) {
                await this.waitUntilElementClickable(element, logName);
                return await browser.actions().mouseMove(element).perform();
        }

        async SelectByVisibleText(optionElements: ElementArrayFinder, textOption: string, logName: string) {

                let size: number = await optionElements.count();
                for (let i = 0; i < size; i++) {
                        var optionText: string = await optionElements.get(i).getText();
                        if (optionText === textOption) {
                                await optionElements.get(i).click();
                        }
                }

        }

        public async selectByValue(optionElements: string, name: string, logName: string) {
                
                let dropDownXpath: ElementArrayFinder = element.all(by.xpath(optionElements));
                let size: number = await dropDownXpath.count();               
                for (let index = 1; index <= size; index++) {
                        let optionElement:ElementFinder = element(by.xpath(optionElements + "[" + index + "]"));
                        let text: string = await optionElement.getAttribute("value");
                        if (text.trim() === name.trim()) {
                                await optionElement.click();
                                break;
                        }
                }
        }
        public async selectByVisibleText(optionElements: ElementArrayFinder, textOption: string, logName: string) {

                let size: number = await optionElements.count();
                console.log("count is " + size);
                for (let i = 0; i < size; i++) {
                        var optionText: string = await optionElements.get(i).getText();
                        if (optionText === textOption) {
                                await optionElements.get(i).click();
                                break;
                        }
                }

        }

        async selectByIndex(optionElements: ElementArrayFinder, index: number, logName: string) {
                console.log( await optionElements.count())
                await optionElements.get(index).click();
        }

        async clearText(element: ElementFinder, logName: string) {
                await this.waitUntilElementPresenceOf(element, logName);
                return await element.clear();
        }

        async getText(element: ElementFinder, logName: string) {
                await this.waitUntilElementPresenceOf(element, logName);
                return await element.getText();
        }

        async selectWindow(window: any, logName: string) {
                await browser.driver.sleep(2000);
                var handles: any = await browser.getAllWindowHandles();
                await browser.driver.switchTo().window(handles[window]);
        }

        async isElementDisplayed(element: ElementFinder, logName: string) {
                return await element.isDisplayed();
        }

        async isElementSelected(element: ElementFinder, logName: string) {
                return await element.isSelected();
        }

        async isElementPresent(element: ElementFinder, logName: string) {
                return await element.isPresent();
        }

        async isElementEnabled(element: ElementFinder, logName: string) {
                return await element.isEnabled();
        }

        async switchToAlert(logName: string) {

                await browser.driver.sleep(3000);
                await browser.switchTo().alert().then(() => { });
        }

        async getAlertText(logName: string) {

                await browser.driver.sleep(3000);
                return await browser.switchTo().alert().getText();
        }

        async switchToAlertAndAccept(logName: string) {
                console.log("Inside switchToAlertAndAccept");
                await browser.driver.sleep(3000);
               await browser.switchTo().alert().then(async (alert)=>{
                        console.log("After switching to Alert");
                        return await alert.accept();                        
                });
        }

        async switchToAlertAndDismiss(logName: string) {
                await browser.driver.sleep(3000);
                return await browser.switchTo().alert().dismiss();
        }

        async shortWait(logName: string) {
                await browser.driver.sleep(2000);
        }

        async mediumWait(logName: string) {
                await browser.driver.sleep(5000);
        }

        async longWait(logName: string) {
                await browser.driver.sleep(25000);
        }

        async sendKeysEnter(logName: string) {
                var enter = await browser.actions().sendKeys(protractor.Key.ENTER);
                await enter.perform();
        }

        async sendKeysTab(logName: string) {
                var tab = await browser.actions().sendKeys(protractor.Key.TAB);
                await tab.perform();
        }
        async sendKeysAltAndX(logName: string) {
                var altPlusx = await browser.actions().sendKeys(protractor.Key.chord(protractor.Key.ALT, "x"));
                await altPlusx.perform();
        }

        async scrollToBottomOfThePage(logName: string) {
                await browser.executeScript("window.scrollTo(0, document.body.scrollHeight)");
        }

        public async waitBrowserTitleEqualsTo(expectedTitle: string) {
                await browser.wait(ExpectedConditions.titleIs(expectedTitle), 10000);
        }
        /**
         * 
         * @description: verfies if element present or not
         * @param {ElementFinder} element 
         * @param {string} logName 
         * @returns boolean value
         * @memberof ActionLibrary
         */
        async isElementNotDisplayed(element: ElementFinder, logName: string) {
                let flag: boolean = true;
                try {
                        flag = await element.isDisplayed();
                }
                catch (err) {
                        flag = false;
                }
                return flag;

        }
        /**
         * 
         * @description: Get the current page titl
         * @param {string} logName 
         * @returns text of page title
         */
        async getPageTitle(logName: string) {
                return await browser.getTitle();
        }
        public async getRequiredCalenderDate(date_value) {
                let newdate = new Date();
                newdate.setDate(newdate.getDate() + date_value);
               
                let newmonth = Number(newdate.getUTCMonth()) + 1;
                let final_month;
                let final_Date:any;
                if (newmonth < 10) { final_month = "0" + newmonth }
                if (newdate.getUTCDate() < 10) { final_Date = "0" + newdate.getUTCDate() }
                let requiredDate = (final_month + '/' + final_Date + '/' + newdate.getUTCFullYear())
                return requiredDate;
            }

            public async dateInmmddyyyyFormat() {
                let today = new Date();
                let dd:any = await today.getDate();
                let mm: any = await today.getMonth() + 1;
                let yy: any = await today.getFullYear()
                if (dd < 10) dd = '0' + dd;
                if (mm < 10) mm = '0' + mm;
                return (mm + "/" + dd + "/" + yy);
        }

}


