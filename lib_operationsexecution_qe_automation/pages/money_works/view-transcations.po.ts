import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';

export class ViewTranscationsPage extends BasePage {
    readonly startDateInputField: ElementFinder = element(by.xpath("//input[@id='form:startDate']"));
    readonly endDateInputField: ElementFinder = element(by.xpath("//input[@id='form:endDate']"));

    readonly searchButton: ElementFinder = element(by.xpath("//button[text()='Search']"));
    readonly nextButton: ElementFinder = element(by.xpath("//span[text()='Next']//parent::a"));
    readonly pageNumberText: ElementFinder = element(by.xpath("//div[@class='lnfTableFooter']/table/tbody/tr/td[2]//span"));
    readonly previousButton: ElementFinder = element(by.xpath("//span[text()='Previous']//parent::a"));
    readonly lastButton: ElementFinder = element(by.xpath("//span[text()='Last']//parent::a"));
    readonly firstButton: ElementFinder = element(by.xpath("//span[text()='First']//parent::a"));


    public async loginIntoMoneyWorksApplication(user: string, pass: string) {
        await this.actions.setText(element(by.xpath("//input[@name='j_username']")), user, "username");
        await this.actions.setText(element(by.xpath("//input[@name='j_password']")), pass, "password");
        await this.clickOnButton("Submit");
        await this.actions.waitUntilElementVisible(element(by.xpath("//img[@class='iceGphImg']")), "money works");
    }

    public async click(elementToClick: ElementFinder) {
        await this.actions.click(elementToClick, 'Clicking on the Element')
    }

    public async setText(elementToClick: ElementFinder, textToEnter: string) {
        await this.actions.setText(elementToClick, textToEnter, 'Entering Text');
    }

    public async setTransactionTypeDropdown(valueToSelect: string) {
        let xpath = element(by.xpath("(//h4[text()='Transaction Type']//parent::td//parent::tr//select[@class='iceSelOneMnu'])[3]"));
        await this.actions.click(xpath, "");
        let transactionTypeDropDownOptions: string = "(//h4[text()='Transaction Type']//parent::td//parent::tr//select[@class='iceSelOneMnu'])[3]//option";
        await this.actions.selectByValue(transactionTypeDropDownOptions, valueToSelect, 'selecting value from transaction type dropdown');

    }

    public async verifyTransactionsList() {
        let transcations = await element.all(by.xpath("//table[@id='form:transactionTable']//tbody//tr"));
        let rows = await transcations.length;
        console.log("rows", rows);
        return rows;
    }

    public async waitForLoading() {
        let spinnerImage = element(by.xpath("//div[@id='lnfLoadingCoverScreen']"))
        return await browser.wait(async () => {
            let style: string = await spinnerImage.getAttribute('style');
            return style === "display: none; visibility: visible; top: 412px; left: 530px;";
        }, 20000);
    }

    public async setTransactionStatusDropdown(valueToSelect: string) {
        let xpath = element(by.xpath("//h4[text()='Transaction Status']//parent::td//parent::tr//select[@class='iceSelOneMnu']"));
        await this.actions.click(xpath, "");
        let transactionStatusDropDownOptions: string = "//h4[text()='Transaction Status']//parent::td//parent::tr//select[@class='iceSelOneMnu']//option";
        await this.actions.selectByValue(transactionStatusDropDownOptions, valueToSelect, 'selecting value from transaction type dropdown');

    }

    public async getText(elementToGetText: ElementFinder) {
        await this.actions.waitUntilElementVisible(elementToGetText, "Get text")
        return await this.actions.getText(elementToGetText, "Get text");
    }

    public async startingPageNumber() {
        let xpath: ElementFinder = element(by.xpath("//div[@class='lnfTableFooter']/table/tbody/tr/td[2]//span"));
        let pageNumberText = await this.actions.getText(xpath, "Get text");
        let page = pageNumberText.substring(63, 64);
        return page;
    }

    public async endingPageNumber() {
        let xpath: ElementFinder = element(by.xpath("//div[@class='lnfTableFooter']/table/tbody/tr/td[2]//span"));
        let pageNumberText = await this.actions.getText(xpath, "Get text");
        let length = pageNumberText.length;
        let lastpage = pageNumberText.substring(67, length - 1);
        return lastpage;
    }

    public async hoveoverToSettingAndSelectOption(optionToSelect: string) {
        let settings = element(By.xpath("//div[text()='Settings']"));
        await this.actions.moveMouseToElement(settings, "Hover on settings");
        let option = element(by.xpath("//a[text()='" + optionToSelect + "']"));
        await this.actions.click(option, "Click on options");
    }

    public async verifyBanner() {
        let banner = element(by.xpath("//img[@class='iceGphImg']"));
        return await this.actions.isElementPresent(banner, "Banner")
    }

    public async verifyFontSize() {
        let xpath = element(by.css(".iceOutLbl"));
        let fontSize = await xpath.getCssValue("font-size");
        return fontSize;
    }

    public async pageTitle() {
        console.log(await browser.getTitle());
        return await browser.getTitle();
    };
}