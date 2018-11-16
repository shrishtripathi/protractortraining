import { browser, ElementFinder, element, by, ElementArrayFinder, ExpectedConditions } from "protractor";

import { By } from "selenium-webdriver";
import { protractor } from "protractor";
import { BasePage } from "../base.po";

export class CarrierSearchPage extends BasePage {

    readonly search: ElementFinder = element(by.xpath("//a[text()='Search']"));
    readonly Cancel: ElementFinder = element(by.xpath("//a[text()='Cancel']"));
    readonly searchButton: ElementFinder = element(by.xpath("//td[@class='panelFooter']//a[1]"));
    readonly StateValue: ElementArrayFinder = element.all(by.xpath("//select[@name='state']/option"));
    readonly MKTArea: ElementArrayFinder = element.all(by.xpath("//select[@name='marketingArea']/option"));
    readonly carierStatusTab = element(by.xpath("//a[contains(text(),'Carrier Status')]"));
    readonly divisonDropDown = element(by.xpath("(//select[@name='changeStatus'])[1]/option[2]"));
    readonly projectCarrierAssociation = element(by.xpath("//a[contains(text(),'Project Carrier Association')]"))
    readonly saveLink = element(by.xpath("//a[contains(text(),'Save')]"));


    public async setStateValue(val_State: string) {
        try {
            await this.actions.selectByValue("(//select[@name='state']/option)", val_State, val_State);
            await this.actions.shortWait("waiting");
        } catch{

        }
    }

    public async clickSearchButtonUnderCarrierSearch() {
        try {
            await this.actions.click(this.search, "Search");
            await this.actions.waitUntilElementVisible(element(by.xpath("//strong[text()='View Results:']")), "table")
        } catch{ return false; }
    }

    public async clickcancelButton() {
        try {
            await this.actions.click(this.Cancel, "Cancel");
            await this.actions.waitUntilElementVisible(element(by.xpath("//td[text()='Carrier Search']")), "search");
        } catch{ return false; }
    }

    public async clickSearchButtnOnCarrierSearchPage() {
        await this.actions.click(this.searchButton, "search Button")
    }

    public async clickCarrierNameLink(name: string) {
        await element(by.xpath("//a[contains(text(),'" + name + "')]")).click();
    }

    public async setMKTValue(val_MKT: string) {
        await this.actions.selectByValue("(//select[@name='marketingArea']/option)", val_MKT, val_MKT);
    }

    public async verifyCarrierNamesGrid() {
        let check_element: ElementFinder = element(by.xpath("(//table[@id='carrierTable']//tr)[2]"));
        if (check_element.isDisplayed()) {
            return true;
        } else {
            await this.actions.shortWait("waiting..");
            await this.verifyCarrierNamesGrid();
        }
        return false;
    }

    public async clickCarrierName() {
        let col_index: number = await this.getColumnIndexCarrierSearchTable("Carrier Name");
        let link_Carrier: ElementFinder = element(by.xpath("(//table[@id='carrierTable']//tr[2]//td)[" + col_index + "]"))
        await this.actions.click(link_Carrier, "Carrier Search");

    }

    public async getColumnIndexCarrierSearchTable(columnName: any) {
        let columnIndex: number = -1;
        let carrierTable: ElementFinder = element(by.id("carrierTable"));
        await this.actions.waitUntilElementVisible(carrierTable, "carrierTable");
        let numberOfColumns: ElementArrayFinder = element.all(by.xpath("//table[@id='carrierTable']//tr//td"));
        let size: number = await numberOfColumns.count();
        let index: number = 1;
        try {
            for (index = 1; index <= size; index++) {
                let columnElement = element(by.xpath("(//table[@id='carrierTable']//tr//td)[" + index + "]"));
                if ((await columnElement.getText()).trim() === columnName) {
                    columnIndex = index;
                    break;
                }
            }
        }
        catch (err) {
            console.log('---error---for index ' + index);
        }
        return columnIndex;
    }

    public async clickCarrierNameHavingStatus(status: string) {
        let pageNumber: number = 1;
        do {
            let col1_index: number = await this.getColumnIndexCarrierSearchTable("Status");
            console.log("col1_index : " + col1_index);
            let col2_index: number = await this.getColumnIndexCarrierSearchTable("Carrier Name");
            console.log("col2_index : " + col2_index);
            let carrrierRowsXpath = "//tr[contains(@class,'row')]/td[" + col1_index + "][contains(text(),'" + status + "')]/../td[" + col2_index + "]/a";
            console.log("carrrierRowsXpath : " + carrrierRowsXpath);
            let carrrierRows: ElementArrayFinder = element.all(By.xpath(carrrierRowsXpath))
            let carrrierRowsCount = await carrrierRows.count();
            console.log("carrrier Rows Count " + carrrierRowsCount);
            if (carrrierRowsCount > 0) {
                console.log("under if condition of clickCarrierNameHavingStatus");
                for (let index = 0; index < carrrierRowsCount; index++) {
                    console.log("under for loop of clickCarrierNameHavingStatus index:" + index);
                    await this.actions.click(await carrrierRows.get(index), "click on carier having status")
                    console.log("after click index:" + index);

                    return true;
                }
            }

            pageNumber++;

        }
        while (await this.carrierResultsPagination(pageNumber))

    }

    public async carrierResultsPagination(pageNumber: number) {
        console.log("In Pagination - CMS : Page# " + pageNumber);
        let nextIcon: ElementFinder = element(by.xpath("//a[ @class='pageControl' and contains(@href,'," + pageNumber + "')]"));
        if (await nextIcon.isPresent()) {
            await this.actions.click(nextIcon, "click on page : " + pageNumber);
            return true;
        }
        return false;
    }

    public async clickOnCarrierStatusTab() {
        await this.actions.click(this.carierStatusTab, "Click on Carrier Status tab");
    }

    public async selectDivisionStatus(division: string, statusValue: string) {
        let divisionOption: string = "//td[contains(text(),'" + division + "')]/following-sibling::td/select[contains(@name,'changeStatus')]/option";
        await this.actions.selectByValue(divisionOption, statusValue, "Divison options");
    }

    public async clickOnSave() {
        await this.actions.waitUntilElementVisible(this.saveLink, "")
        await this.actions.click(this.saveLink, "Click on Save");
        await browser.wait(await ExpectedConditions.alertIsPresent(), 5000);
        await this.actions.switchToAlertAndAccept("Click on Okay");
    }

    public async verifySuccessMessage() {
        let successMsgXPath: ElementFinder = element(by.xpath("//table[@class='inner']//font[@class='success']"));
        await this.actions.waitUntilElementVisible(successMsgXPath, "");
        return await this.actions.getText(successMsgXPath, "Suucess Message");
    }

    public async clickOnHome() {
        await browser.executeScript(`document.evaluate("//a[@class='homeLink' ]/img ", document.body, null, 9, null). singleNodeValue.click();  `)
    }

    public async clickOnProjectCarrierAssociation() {
        await this.actions.click(this.projectCarrierAssociation, "Click on carrier association");
    }

    public async selectDisplayOptions() {
        await this.actions.selectByValue("//select[@name='selectedDisplay']/option", "All Project Codes", "display options");
    }

    public async clickOnSearch() {
        await this.actions.click(this.search, "Searach button");
    }

    public async selectDivisonOptions(text: string, option: string) {
        let displayOptions: string = "//select[@name='" + text + "']/option";
        await this.actions.selectByValue(displayOptions, option, "Divison options");
    }

    public async textAreaEnableCheck(status: string) {
        let textAreaElements: ElementArrayFinder = element.all(by.xpath("//td[contains(text(),'" + status + "')]/preceding-sibling::td//textarea[contains(@name,'projCarrComments')]"));
        let checkBoxElements: ElementArrayFinder = element.all(by.xpath("//td[contains(text(),'" + status + "')]/preceding-sibling::td//textarea[contains(@name,'projCarrComments')]/parent::div/parent::td/parent::tr/td/input[@type='checkbox']"));
        let expirydateElements: ElementArrayFinder = element.all(by.xpath("//td[contains(text(),'" + status + "')]/preceding-sibling::td//textarea[contains(@name,'projCarrComments')]/parent::div/parent::td/parent::tr/td//img[contains(@onclick,'onCalendarClick')]"));
        let faxNewNumberElements: ElementArrayFinder = element.all(by.xpath("//td[contains(text(),'" + status + "')]/preceding-sibling::td//textarea[contains(@name,'projCarrComments')]/parent::div/parent::td/parent::tr/td//input[contains(@id,'newELTFaxNumber')]"));
        let newFaxNumberaddButtons: ElementArrayFinder = element.all(by.xpath("//td[contains(text(),'" + status + "')]/preceding-sibling::td//textarea[contains(@name,'projCarrComments')]/parent::div/parent::td/parent::tr/td//input[contains(@id,'newELTFaxNumber')]/following-sibling::a"));
        let textAreaElementsCount: number = await textAreaElements.count();

        for (let index = 0; index < textAreaElementsCount; index++) {
            if (await textAreaElements.get(index).isEnabled()) {

                if (await checkBoxElements.get(index).isSelected()) {
                    await expirydateElements.get(index).click();
                    await textAreaElements.get(index).sendKeys("Testing comments");
                    await faxNewNumberElements.get(index).sendKeys("4793814720");
                    await newFaxNumberaddButtons.get(index).click();
                    return true;
                } else {
                    await checkBoxElements.get(index).click();
                    await expirydateElements.get(index).click();
                    await textAreaElements.get(index).sendKeys("Testing comments");
                    await faxNewNumberElements.get(index).sendKeys("4793814720");
                    await newFaxNumberaddButtons.get(index).click();
                    return true;
                }
            } else {
                return false;
            }
        }
    }

}

