import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper, protractor } from "protractor";
import { BasePage } from "../base.po";
import { PaymentHistoryPage } from "../draynet/payment-history.po";
import { String } from "typescript-string-operations";

export class PurchaseOrders extends BasePage {
    readonly companyTextBox: ElementFinder = element(by.xpath("//label[contains(text(),'Company')]/parent::td/following-sibling::td/input[1]"));
    readonly companyDetailsDisplayIcon: ElementFinder = element(by.xpath("//label[contains(text(),'Company')]/parent::td/following-sibling::td/input[1]/following-sibling::img"));
    readonly companyDescription: ElementFinder = element(by.xpath("//tr[contains(@id,'tr[R:0]')]/td[3]/span"))
    readonly requiredDateCalendar: ElementFinder = element(by.xpath("//label[contains(text(),'Required Date')]/parent::td/following-sibling::td/img"))
    readonly calendarOkButton: ElementFinder = element(by.xpath("//button[@dojoattachpoint='okButtonNode']"))
    readonly poCategoryMagnifyingGlassIcon: ElementFinder = element(by.xpath("//label[contains(text(),'PO Category:')]/parent::td/following-sibling::td/img"));
    readonly newRowButton: ElementFinder = element(by.xpath("//button[contains(text(),'New Row')]"));
    readonly itemTextBox: ElementFinder = element(by.xpath("//label[contains(text(),'Item')]/parent::td/following-sibling::td/input[1]"));
    readonly conversionFactor: ElementFinder = element(by.xpath("//label[contains(text(),'Conversion Factor')]/parent::td/following-sibling::td/input[1]"));
    readonly changeStatusButton: ElementFinder = element(by.xpath("//img[contains(@role,'button') and contains(@id,'toolactions_STATUS-tbb_image')]"));
    readonly newStatus: ElementFinder = element(by.xpath("//label[contains(text(),'New Status')]/parent::td/following-sibling::td/img"));
    readonly waitingXPath: ElementFinder = element(by.xpath("//div[@id='wait']"));
    readonly itemArrow: ElementFinder = element(by.xpath("//img[@id='m52839185-img']"));

    public async enterCompanyValue(companyValue: string) {
        await this.actions.shortWait("");
        await this.actions.setText(this.companyTextBox, companyValue, 'enter companyValue');
    }

    public async clickCompanyDetailsIcons() {
        await this.actions.click(this.companyDetailsDisplayIcon, "")
    }

    public async clickCompanyDescription() {
        await this.actions.click(this.companyDescription, "");
    }

    public async clickPoCategoryMagnifyingGlassIcon() {
        await this.actions.shortWait(";;;")
        await this.actions.click(this.poCategoryMagnifyingGlassIcon, "")
    }

    public async clickRequiredDateCalendar() {
        await this.actions.waitUntilElementInVisible(this.waitingXPath, "");
        await this.actions.click(this.requiredDateCalendar, "");
        await this.actions.waitUntilElementVisible(this.calendarOkButton, "")
        await this.actions.shortWait("...")
        await this.actions.click(this.calendarOkButton, "")
    }

    public async selectCategory(categoryValue: string) {
        let prNumberHyperLink: ElementFinder = element(by.xpath("//span[contains(text(),'" + categoryValue + "')]"));
        await this.actions.click(prNumberHyperLink, '')
    }

    public async selectTab(TabName: string) {
        let tabElement: ElementFinder = element(by.xpath(" //a[contains(@title,'" + TabName + "')]"));
        await this.actions.shortWait("...")
        await this.actions.click(tabElement, '')
    }

    public async clickNewRowButton() {
        await this.actions.waitUntilElementInVisible(this.waitingXPath, "");
        await this.actions.click(this.newRowButton, '')
    }

    public async enterItemValue(itemNumber: string) {
        let xpath = element(by.xpath("//span[contains(text(),'" + itemNumber + "')]"))
        await this.actions.waitUntilElementVisible(this.itemTextBox, '');
        await this.actions.clearText(this.itemTextBox, '')
        await this.actions.setText(this.itemTextBox, itemNumber, 'enter itemNumber');
        await this.actions.shortWait("...");
        await this.actions.sendKeysTab("enterItemValue");
        await this.actions.shortWait("...");
        if (await xpath.isPresent()) {
            await this.actions.click(xpath, "")
            await console.log("clicked...");
            await this.actions.waitUntilElementInVisible(xpath, "")
        }
    }

    public async enterConversionFactorValue(conversionFactor: string) {
        await this.actions.setText(this.conversionFactor, conversionFactor, 'enter ConversionFactor');
        await this.conversionFactor.sendKeys(protractor.Key.TAB);
    }

    public async clickOnChangeStatusButton() {
        await this.actions.click(this.changeStatusButton, 'click on change status button');
    }

    public async selectStatus(status: string) {
        await this.actions.waitUntilElementInVisible(this.waitingXPath, ""); +
            await this.actions.click(this.newStatus, 'new status click');
        let statusEle: ElementFinder = element(by.xpath("//span[text()='" + status + "']"));
        await this.actions.click(statusEle, 'new status click');
    }

}



