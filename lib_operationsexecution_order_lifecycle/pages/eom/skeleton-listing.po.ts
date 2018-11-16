import { browser, by, By, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { BasePage } from '../base.po';

export class SkeletonListingPage extends BasePage {

    readonly skeltonPickNextButton: ElementFinder = element(By.id("frmPickupDate:btnNext"));
    readonly iIcon: ElementFinder = element(by.xpath("//tr[@id='frmSkeletonListing:lSkeletonListing:0']/td[2]/a[1]/img"));
    readonly bookOrderIcon: ElementFinder = element(by.xpath("//tr[@id='frmSkeletonListing:lSkeletonListing:0']/td[2]/a[2]/img"));
    readonly rateText: ElementFinder = element(by.xpath("//td[@class='filterFieldColumnClass']/label[contains(.,'Rate Amount')]/parent::td/following-sibling::td/span"));
    readonly nextButtonOnSelectPickUpDateScreen: ElementFinder = element(by.id("frmPickupDate:btnNext"));
    readonly bookLoadWithoutRate: ElementFinder = element(by.id("frmRateCheck:olnkRsnCodeForNoRate"));
    readonly reasonCodeDropdown: string = "(//select[@name='frmRateCheck:noRateReason']/option)";
    readonly close: ElementFinder = element(by.xpath("//a[text()='Close']"));
    readonly removeFilteroptions: ElementFinder = element(by.xpath("//input[@id='frmSkeletonListing:cmndBtnRemoveskelFilter']"));
    readonly checkBox: ElementFinder = element(by.xpath("((//span[text()='HJBT JBVAN']/../..)[1]/td/a/img)[1]"));
    readonly activateButton: ElementFinder = element(by.xpath("//input[@id='frmSkeletonListing:cmdLnkActivate']"));
    readonly bookLoad: ElementFinder = element(by.xpath("((//span[text()='HJBT JBVAN']/../..)[1]/td/a/img)[3]"));
    readonly JBVANText: ElementFinder = element(by.xpath("//span[text()='HJBT JBVAN']"));
    readonly numberOfcopiesTextBox: ElementFinder = element(by.xpath("//input[contains(@id,'inpNumberOfCopies')]"));
    readonly modeText: ElementFinder = element(by.xpath("//tr[@id='frmSkeletonListing:lSkeletonListing:0']/td[17]/span"));
    readonly loader: ElementFinder = element(by.xpath("//span[@id='frmEltListing:lEltListingLoader']"))
    readonly skeltonPickScreenTitile: ElementFinder = element(By.id("frmPickupDate:scPickupDateTitle"));
    readonly bookLoadWithoutArateButton: ElementFinder = element(By.id("frmRateCheck:olnkRsnCodeForNoRate"));
    readonly newLoadDetailsTitle: ElementFinder = element(By.xpath("//title"));
    readonly loadingBar: ElementFinder = element(by.xpath("//img[@id='frmRateCheck:gimgLoading']"));
    readonly truckSkeletonList: ElementArrayFinder = element.all(by.xpath("//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']/tr/td[17]/span[text()='TRUCK']"));
    readonly loadValue: ElementFinder = element(by.xpath("//table[@id='frmOrderListing:lOrderListingTable']/tbody/tr/td[2]//a[1]"));
    readonly orderHavingNoRate: ElementFinder = element(by.xpath("//td[6][contains(.,'LGFO17')]/../td[7][contains(.,'LGFO18')]/../td[11][contains(.,'DOCHA3')]/../td[2]/a[contains(@name,'BookLd')]"));
    readonly searchLink: ElementFinder = element(by.xpath("//a[@id='eomOrderDetail:Search']"))
    readonly bookLoadIcon: ElementFinder = element.all(by.xpath("(//tr[contains(@id,'SkeletonListing:')]/td//parent::td/following-sibling::td/span[contains(text(),'TRAIN')]/parent::td/preceding-sibling::td/a[contains(@id,'SkeletonBookLd')])")).get(0);
    readonly bookLoadIconTruck: ElementFinder = element.all(by.xpath("(//tr[contains(@id,'SkeletonListing:')]/td//parent::td/following-sibling::td/span[contains(text(),'TRUCK')]/parent::td/preceding-sibling::td/a[contains(@id,'SkeletonBookLd')])")).get(0);

    public async bookOrderIconClick() {
        await this.actions.waitUntilElementPresenceOf(this.bookOrderIcon, "bookOrderIconClick waitP")
        await this.actions.click(this.bookOrderIcon, 'click on bookOrderIcon');
    }

    public async verifySkelitonRate() {
        console.log("under verifySkelitonRate function in SkeletonListingPage");
        // await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')))
        await this.actions.mediumWait("medium wait to go to pop up");
        let rateValueString: string = await this.actions.getText(this.rateText, 'rate value on skeliton info');
        console.log("Rate value string :" + rateValueString);
        let rateValueNumber: number = await Number(rateValueString);
        console.log("Rate value number:" + rateValueNumber);

        if (rateValueNumber > 0) {
            console.log("under if condition of rate value number");
            await browser.switchTo().defaultContent();
            await this.actions.click(this.close, "close frame");
            return true;
        }
        else {
            console.log("under else condition of rate value number");
            await browser.switchTo().defaultContent();;
            await this.actions.click(this.close, "close frame");
            return false;
        }
    }

    public async bookOrderHavingRate() {
        do {
            console.log("started bookOrderHavingRate")
            let table_skeleton: ElementFinder = element(by.xpath("//table[@id='frmSkeletonListing:lSkeletonListingTable']"));
            await this.actions.waitUntilElementVisible(table_skeleton, "skeleton table");
            if (await table_skeleton.isDisplayed()) {
                console.log("table displayed");
                let table_rows: ElementArrayFinder = element.all(by.xpath("//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//tr"));
                let table_rows_count: number = await table_rows.count();
                console.log("table row : " + table_rows_count);
                for (let i = 1; i < table_rows_count; i++) {
                    let element_Info: ElementFinder = await element(by.xpath("(//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//td/span[contains(text(),'TRUCK') and contains(@id,'optxtMode')]/parent::td/parent::tr)[" + i + "]/td[2]/a[contains(@id,'SkeletonInfo')]"))
                    console.log("started for loop and clicked :" + i)
                    await element_Info.click();
                    await this.actions.longWait("waiting");
                    if (await this.verifySkelitonRate()) {
                        console.log("under if condition to click book ")
                        let element_BookLoad: ElementFinder = await element(by.xpath("//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//tr[" + i + "]/td[2]/a[@id='frmSkeletonListing:lSkeletonListing:" + (i - 1) + ":ajaxcmdLnkSkeletonBookLd']"))
                        this.actions.mediumWait("wait before click of book green color menu");
                        await this.actions.click(element_BookLoad, 'Selecting book based on rate value present');
                        return true;

                    }

                }

            }
        } while (await this.actions.click(this.skeltonPickNextButton, ""))

    }

    public async clickOnSkeletonNextButton() {
        await this.actions.click(this.skeltonPickNextButton, "click on skeleton next button");
    }

    public async getSkeletonPickScreenTitle() {
        return await this.actions.getText(this.skeltonPickScreenTitile, "Skelton Pick Screen title");
    }

    public async verifySkelitonNoRate() {
        console.log("under verifySkelitonRate function in SkeletonListingPage");
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')))
        await this.actions.mediumWait("medium wait to go to pop up");
        let rateValueString: string = await this.actions.getText(this.rateText, 'rate value on skeliton info');
        let rateValueNumber: number = Number(rateValueString);
        if (rateValueNumber == 0) {
            console.log("under if condition of rate value number  :" + rateValueNumber);
            await browser.switchTo().defaultContent();
            await this.actions.click(this.close, "close frame");
            return true;
        }
        else {
            console.log("under else condition of rate value number");
            await browser.switchTo().defaultContent();
            await this.actions.click(this.close, "close frame");
            return false;
        }
    }

    public async bookOrderHavingNoRate() {
        do {
            console.log("started bookOrderHavingNoRate")
            console.log("table displayed");
            let table_rows: ElementArrayFinder = element.all(by.xpath("//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//td/span[contains(text(),'TRUCK') and contains(@id,'optxtMode')]/parent::td/parent::tr"));
            let table_rows_count: number = await table_rows.count();
            console.log("table row : " + table_rows_count);
            for (let i = 1; i < table_rows_count; i++) {
                let element_Info: ElementFinder = await element(by.xpath("(//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//td/span[contains(text(),'TRUCK') and contains(@id,'optxtMode')]/parent::td/parent::tr)[" + i + "]/td[2]/a[contains(@id,'SkeletonInfo')]"))
                await element_Info.click();
                await this.actions.longWait("waiting");
                if (await this.verifySkelitonNoRate()) {
                    console.log("under if condition to click book ")
                    //SkeletonBookLd
                    let element_BookLoad: ElementFinder = await element(by.xpath("(//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//td/span[contains(text(),'TRUCK') and contains(@id,'optxtMode')]/parent::td/parent::tr)[" + i + "]/td[2]/a[contains(@id,'SkeletonBookLd')]"))
                    this.actions.waitUntilElementPresenceOf(element_BookLoad)
                    this.actions.mediumWait("wait before click of book green color menu");
                    await this.actions.click(element_BookLoad, 'Selecting book based on rate value present');
                    return true;

                }
            }

        } while (await this.actions.click(this.skeltonPickNextButton, ""))
    }

    public async selectRateCode(text: string) {
        await this.actions.waitUntilElementVisible(element(by.xpath(this.reasonCodeDropdown)), "reason code")
        await this.actions.selectByValue(this.reasonCodeDropdown, text, "reason code dropdown");
    }

    public async clickTodayTruck() {
        console.log("todaydate :" + await this.getRequiredCalenderDate("0"))
        let date: string = await this.getRequiredCalenderDate("0");
        await this.actions.longWait("switch to frame");
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));
        let todayTruckMenu: ElementFinder = await element(by.xpath("//*[@id='eomOrderFleetDec:sifterMainContent']//table[.//td/span[contains(text(),'" + date + "')]]//a[contains(.,'TRUCK')]"));
        await this.actions.click(todayTruckMenu, "click on load");
        await browser.switchTo().defaultContent();
    }

    public async clickOnSkelton(columnName1: string, columnName2: string, column1Data: string, column2Data: string) {
        let columnOneId = await this.getSkeltonListColumnId(columnName1);
        let columnTwoId = await this.getSkeltonListColumnId(columnName2);
        let skelton: ElementArrayFinder = element.all(by.xpath("//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//tr//td[" + columnOneId + "]/span[text()='" + column1Data + "']/ancestor::tr//td[" + columnTwoId + "]/span[text()='" + column2Data + "']/ancestor::tr//td[2]//a[2]"));
        await this.actions.click(skelton.get(0), "Click on skelton");
    }

    public async getSkeltonListColumnId(columnName: string) {
        let columnHeaders: ElementArrayFinder = element.all(by.xpath("//thead[@id='frmSkeletonListing:lSkeletonListingStaticTableHeader']/tr//td/span"));
        let columnsCount = await columnHeaders.count();
        let columnId = -1;
        for (let i = 0; i < columnsCount; i++) {
            if (columnName === await columnHeaders.get(i).getText()) {
                columnId = i + 1;
            }
        }

        return columnId;
    }

    public async getRequiredCalenderDate(date_value: string) {

        let d = new Date;
        let val_date: string = await (d.getDate() + Number(date_value)).toString();
        if (val_date.length != 2) {
            val_date = "0" + val_date;
        }
        let val_Month: string = await (d.getMonth() + 1).toString();
        if (val_Month.length != 2) {
            val_Month = "0" + val_Month;
        }
        let date_val: string = await val_Month + "/" + val_date + "/" + d.getFullYear();
        return date_val;
    }

    public async selectSkeletonWithCR() {
        let table_skeleton: ElementFinder = element(by.xpath("//table[@id='frmSkeletonListing:lSkeletonListingTable']"));
        await this.actions.waitUntilElementVisible(table_skeleton, "skeleton table");
        try {
            if (await table_skeleton.isDisplayed()) {
                console.log("table displayed");
                let table_rows: ElementArrayFinder = element.all(by.xpath("//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//tr"));
                let table_rows_count: number = await table_rows.count();
                console.log("table row : " + table_rows_count);
                for (let i = 1; i < table_rows_count; i++) {
                    let element_BookLoad: ElementFinder = element(by.xpath("//tbody[@id='frmSkeletonListing:lSkeletonListingTableBody']//tr[" + i + "]/td[2]/a[@id='frmSkeletonListing:lSkeletonListing:" + (i - 1) + ":ajaxcmdLnkSkeletonBookLd']"))
                    await element_BookLoad.click();
                    await this.actions.longWait("waiting");
                    let check_PickUpdate: ElementFinder = element(by.xpath("//label[contains(text(),'Load Pickup date')]"));
                    try {
                        if (!await check_PickUpdate.isDisplayed()) {
                            let check_createCR: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:createCR']"));
                            if (await check_createCR.isDisplayed()) {
                                return true;
                            }

                        } else {
                            let link_back: ElementFinder = element(by.xpath("//a[contains(text(),'Go back to the previous page')]"));
                            await link_back.click();
                            await this.actions.mediumWait("waiting..");
                            await this.actions.waitUntilElementVisible(table_skeleton, "skeleton table");
                            await this.actions.mediumWait("waiting..");
                        }
                    } catch (e) { return true; }
                }
            }

        } catch (e) {
            return false;
        }
    }

    public async verifyLoadValue() {
        return await this.actions.getText(this.loadValue, "Get element value");
    }

    public async selectLoadUnderLoadListing(loadValue: string) {
        let loadHyperLink: ElementFinder = await element(By.xpath("//a[contains(.,'" + loadValue + "')]"));
        await this.actions.click(loadHyperLink, 'load HyperLink click');
    }
    public async clickOnBookIconHavingRequiredBillTo(billToCode: string) {
        let bookIcon: ElementFinder = element(by.xpath("(//tr[contains(@id,'SkeletonListing:')]/td/span[contains(text(),'" + billToCode + "')]/parent::td/following-sibling::td/span[contains(text(),'TRUCK')]/parent::td/preceding-sibling::td/a[contains(@id,'SkeletonBookLd')])[1]"));
        await this.actions.waitUntilElementVisible(bookIcon, "");
        await this.actions.click(bookIcon, "checkBoxOption");
    }
    public async setNumberOfCopies(value: string) {
        await this.actions.clearText(this.numberOfcopiesTextBox, "number of copies");
        await this.actions.setText(this.numberOfcopiesTextBox, value, "number of copies")
    }
    public async selecttActionsFromDropDown(value: string) {
        await this.actions.waitUntilElementInVisible(this.loader, 'wait for loader to invisible');
        let waitElement: ElementFinder = await element(by.xpath("//tr[contains(@id,'EltListing:0')]/td[1]/select"));
        await this.actions.waitUntilElementPresenceOf(waitElement, 'selecttActionsFromDropDown wait');
        let actionOptions: string = "//tr[contains(@id,'EltListing:0')]/td[1]/select/option"
        await this.actions.selectByValue(actionOptions, value, "selecttActionsFromDropDown logname")

    }
    public async selectRejectReason(reason: string) {
        let reasonRadioButton: ElementFinder = await element(by.xpath("//label[contains(text(),'" + reason + "')]/input"));
        await this.actions.click(reasonRadioButton, "selectRejectReason")

    }
    public async clickTodayICS() {
        console.log("todaydate :" + await this.getRequiredCalenderDate("0"))
        let date: string = await this.getRequiredCalenderDate("0");
        await this.actions.longWait("switch to frame");
        // await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));
        let todayTruckMenu: ElementFinder = await element(by.xpath("//*[@id='eomOrderFleetDec:sifterMainContent']//table[.//td/span[contains(text(),'" + date + "')]]//a[contains(.,'ICS')]"));
        await this.actions.click(todayTruckMenu, "click on load");
        await browser.switchTo().defaultContent();
        await this.actions.mediumWait("switch to frame");
    }

    public async selectOnlyRequiedTenderTypeCheckBox(optionValue: string) {
        let checkBoxOptions: ElementArrayFinder = element.all(by.xpath("//label[contains(text(),'Load Tender Types')]/parent::td/parent::tr/following-sibling::tr//label/input"));
        let checkBoxOptionsCount: number = await checkBoxOptions.count();
        for (let index = 1; index < checkBoxOptionsCount; index++) {
            let checkBoxOption: ElementFinder = await element(by.xpath("((//label[contains(text(),'Load Tender Types')])[2]/parent::td/parent::tr/following-sibling::tr//label)[" + index + "]"));
            let checkBoxOptionText: string = await this.actions.getText(checkBoxOption, "TenderType checkBoxOptionText")

            console.log("checkBoxOptionText: " + checkBoxOptionText)
            if (checkBoxOptionText === optionValue) {
                if (checkBoxOption.isSelected()) {
                    await this.actions.click(checkBoxOption, "checkBoxOption");
                    await this.actions.click(checkBoxOption, "checkBoxOption");
                } else {
                    await this.actions.click(checkBoxOption, "checkBoxOption");
                }
            } else {
                if (checkBoxOption.isSelected()) {

                    await this.actions.click(checkBoxOption, "checkBoxOption");
                } else {
                    await this.actions.click(checkBoxOption, "checkBoxOption");
                    await this.actions.click(checkBoxOption, "checkBoxOption");
                }
            }
        }

    }
    public async clickOnBookIconHavingRequiredDivison(divisonCode: string) {
        let bookIcon: ElementFinder = element(by.xpath("(//tr[contains(@id,'SkeletonListing:')]/td/span[contains(text(),'" + divisonCode + "')]/parent::td/following-sibling::td/span[contains(text(),'TRUCK')]/parent::td/preceding-sibling::td/a[contains(@id,'SkeletonBookLd')])[1]"));
        await this.actions.click(bookIcon, "checkBoxOption");
    }

    public async setDropDownBesideNumberOfCopies(optionToSelect: string) {
        let dropdown = "//select[@id='frmPickupDate:somBookMultipleTypes']//option";
        await this.actions.selectByValue(dropdown, optionToSelect, "Selecting option");
    }

    public async clickOnSkeltonBookLoad() {
        let withoutRateSkeltonInfoIcon: ElementArrayFinder = element.all(By.xpath("//table[@id='frmSkeletonListing:lSkeletonListingTable']//tbody/tr/td[5][not(.//span[@style='color:red'])]/ancestor::tr/td[2]/a[contains(@name,'SkeletonInfo')]"));
        let withoutRateSkeltonBookLoadImage: ElementArrayFinder = element.all(By.xpath("//table[@id='frmSkeletonListing:lSkeletonListingTable']//tbody/tr/td[5][not(.//span[@style='color:red'])]/ancestor::tr/td[2]/a[contains(@name,'BookLd')]"));
        let skeltonListCount = await withoutRateSkeltonBookLoadImage.count();
        //console.log("count:" + skeltonListCount);
        if (skeltonListCount > 0) {
            for (let i = 1; i <= skeltonListCount; i++) {
                await this.actions.waitUntilElementVisible(withoutRateSkeltonInfoIcon.get(i - 1), "");
                await this.actions.click(withoutRateSkeltonInfoIcon.get(i - 1), "Click on skelton Info");
                if (await this.verifySkeletonNoRate()) {
                    await this.actions.click(withoutRateSkeltonBookLoadImage.get(i - 1), "Click on skelton book load");
                    break;
                }
            }
        }

    }

    public async verifySkeletonNoRate() {
        console.log("under verifySkelitonRate function in SkeletonListingPage");
        await this.actions.waitUntilElementVisible(element(by.xpath("//div[@id='TB_window']")), "loading");
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')))
        let rateValueString: string = await this.actions.getText(this.rateText, 'rate value on skeliton info');
        console.log("rateValueString",rateValueString);
        let rateValueNumber: number = Number(rateValueString);
        if (rateValueNumber == 0) {
            console.log("under if condition of rate value number");
            await browser.switchTo().defaultContent();
            await this.actions.click(this.close, "close frame");
            return true;
        } else {
            console.log("under else condition of rate value number");
            await browser.switchTo().defaultContent();
            await this.actions.click(this.close, "close frame");
            return false;
        }
    }
    public async verifySkeletonListHavingTruck() {
        let noOfPages: ElementFinder = element(by.id("frmSkeletonListing:lSkeletonListingLastPageSpan"));
        let nextPage: ElementFinder = element(by.xpath("//span[@class='nextPage']"));
        let pageCount: number = parseInt(await noOfPages.getText());
        let truckPresence: boolean = false;
        await this.actions.waitUntilElementInVisible(this.loadingBar, "Wait untill element is invisible");
        for (let i = 0; i < pageCount; i++) {
            await this.actions.waitUntilElementInVisible(this.loadingBar, "Wait untill element is invisible");
            truckPresence = await this.truckSkeletonList.get(0).isPresent();
            if (!truckPresence) {
                await this.actions.click(nextPage, "Click on next page link");
                await this.actions.waitUntilElementInVisible(this.loadingBar, "Wait untill element is invisible");
            } else {
                truckPresence = await this.truckSkeletonList.get(0).isPresent();
                break;
            }
        }

        return truckPresence;
    }

    public async verifySkeltonList(index: number) {
        let skeltonBookLoadImg = element(by.xpath("//a[@id='frmSkeletonListing:lSkeletonListing:" + index + ":ajaxcmdLnkSkeletonBookLd']/img"));
        let flag: boolean = await this.actions.isElementPresent(skeltonBookLoadImg, "Is element present");
        return await flag;
    }

    public async verifyBookLoadWithoutRateIsPresent() {
        console.log("book load" + await this.actions.isElementPresent(this.bookLoadWithoutArateButton, "Is Element present"));
        return await this.actions.isElementPresent(this.bookLoadWithoutArateButton, "Is Element present");

    }
    public async selectOptionFromChooseReasonCode(option: string) {
        let optionValue = element(by.xpath("//select[@id='frmRateCheck:noRateReason']/option[contains(@value,'" + option + "')]"));
        await this.actions.click(optionValue, "Click on option");
    }
    public async clickOnBookLoadWithoutRateButton() {
        await this.actions.click(this.bookLoadWithoutArateButton, "Click on Book Load Without aReate Button");
    }

    public async clickOnIcsUnderCurrentDate(modeType: string) {
        await this.actions.longWait("switch to frame");
        let flag: boolean = await this.actions.isElementPresent(this.bookLoadWithoutArateButton, "Is Element present");
        if (flag) {
            await this.selectOptionFromChooseReasonCode("262");
            await this.clickOnBookLoadWithoutRateButton();
        }
        await this.actions.waitUntilElementInVisible(this.loadingBar, "Wait until element is invisible");
        await this.actions.waitUntilElementVisible(element(by.xpath('//iframe[@id="TB_iframeContent"]')), "Wait until element is visible");
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));
        await this.actions.mediumWait("");
        let modeLink: ElementFinder = await element(by.xpath("//*[@id='eomOrderFleetDec:sifterMainContent']//table[@id='eomOrderFleetDec:DayOneRec']//a[contains(.,'" + modeType + "')]"));
        await this.actions.click(modeLink, "");
        await this.actions.mediumWait("Waiting");
    }

    public async clickOnBookLoadWithDivisionHjbtJbvanAndTrainMode() {
        let skeltonBookLoadImage: ElementArrayFinder = element.all(By.xpath("//table[@id='frmSkeletonListing:lSkeletonListingTable']//tbody/tr/td[4]/span[contains(text(),'HJBT JBVAN')]//parent::td//parent::tr//td[17]/span[contains(text(),'TRAIN')]//parent::td//parent::tr//td[2]/a[contains(@name,'BookLd')]"));
        await this.actions.click(skeltonBookLoadImage.get(0), "Click on skelton book load");
    }
    

    public async clickOnBookLoadIconHavingTrainMode() {
        await this.actions.waitUntilElementVisible(this.bookLoadIcon,"Waiting for Book load Icon")
        await this.actions.click(this.bookLoadIcon, "Click on Book load icon having Mode as Train");
    }

    public async clickOnBookIconHavingTruckMode() {
        let bookIcon: ElementFinder = element(by.xpath("(//tr[contains(@id,'SkeletonListing:')]//td/span[contains(text(),'TRUCK')]/parent::td/preceding-sibling::td/a[contains(@id,'SkeletonBookLd')])[1]"));
        await this.actions.waitUntilElementVisible(bookIcon, "");
        await this.actions.click(bookIcon, "click on book Icon");
    }

    public async clickOnlastBookIconHavingTruckMode() {
        let bookIcon: ElementFinder = element(by.xpath("(//tr[contains(@id,'SkeletonListing:')]//td/span[contains(text(),'TRUCK')]/parent::td/preceding-sibling::td/a[contains(@id,'SkeletonBookLd')])[5]"));
        await this.actions.waitUntilElementVisible(bookIcon, "");
        await this.actions.click(bookIcon, "click on book Icon");
    }

    public async clickNextONSelectPickUpDateScreen() {
        await this.actions.waitUntilElementVisible(this.nextButtonOnSelectPickUpDateScreen, "");
        await this.actions.click(this.nextButtonOnSelectPickUpDateScreen, 'click on NextONSelectPickUpDateScreen');
    }

    public async clickOnBookLoadWithDivisionHJBTJBHAandTruckMode() {
        let skeltonBookLoadImage: ElementArrayFinder = element.all(By.xpath("//table[@id='frmSkeletonListing:lSkeletonListingTable']//tbody/tr/td[4]/span[contains(text(),'HJBT JBHA')]//parent::td//parent::tr//td[17]/span[contains(text(),'TRUCK')]//parent::td//parent::tr//td[2]/a[contains(@name,'BookLd')]"));
        await this.actions.click(skeltonBookLoadImage.get(0), "Click on skelton book load");
    }
    public async clickOnBookLoadWithDivisionAndMode(division: string, mode: string) {
        let skeltonBookLoadImage: ElementArrayFinder = element.all(By.xpath("//table[@id='frmSkeletonListing:lSkeletonListingTable']//tbody/tr/td[4]/span[contains(text(),'" + division + "')]//parent::td//parent::tr//td[17]/span[contains(text(),'" + mode + "')]//parent::td//parent::tr//td[2]/a[contains(@name,'BookLd')]"));
        await this.actions.click(skeltonBookLoadImage.get(0), "Click on skelton book load");
    }

    public async clickOnLastSkeletonGreenButton(){
        let skelton=element.all(by.xpath("//table[@id='frmSkeletonListing:lSkeletonListingTable']//tbody/tr"));
        let rows=await skelton.count();
        console.log("rows",rows)
        let lastGreenButtonSkeleton=element(by.xpath("//table[@id='frmSkeletonListing:lSkeletonListingTable']//tbody/tr["+rows+"]//td[2]//a[2]"));
        await this.actions.click(lastGreenButtonSkeleton,"Clicking on last skeleton")
    }

    public async clickOnBookLoadIconHavingTruckMode() {
        await this.actions.waitUntilElementVisible(this.bookLoadIconTruck,"Waiting for Book load Icon")
        await this.actions.click(this.bookLoadIconTruck, "Click on Book load icon having Mode as Train");
    }    

    public async clickOnIM() {
        let flag: boolean = await this.actions.isElementPresent(this.bookLoadWithoutArateButton, "Is Element present");
        if (flag) {
            await this.selectRateCode("262");
            await this.clickOnBookLoadWithoutRateButton();
        }
        await this.actions.waitUntilElementInVisible(element(by.xpath("//img[@id='frmRateCheck:gimgLoading']")), "loading");
        await this.actions.waitUntilElementVisible(element(by.xpath('//iframe[@id="TB_iframeContent"]')), "");
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));
        await this.actions.mediumWait("");
        let imLink: ElementFinder = element(by.xpath("//a[contains(@id,'eomOrderFleetDec:DayOneRec')]/label[contains(text(),'IM')]/parent::a"));
        await this.actions.click(imLink, "");
    }

}