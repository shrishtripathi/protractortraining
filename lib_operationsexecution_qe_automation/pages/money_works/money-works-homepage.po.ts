import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';
import { async } from 'q';

export class MoneyWorksHomePage extends BasePage {
    readonly viewTransactionsTab: ElementFinder = element(By.xpath("//span[text()='View Transactions']"));
    readonly loadNumber: ElementFinder = element(by.xpath("//span[text()='Load Number:']//parent::div//input"));
    readonly magnifyingGlass: ElementFinder = element(by.xpath("//span[text()='Load Number:']//parent::div//a"));
    readonly signOut: ElementFinder = element(by.xpath("//a[text()='Sign Out']"));
    readonly clickHereLink: ElementFinder = element(by.xpath("//a[text()='Click here']"));
    readonly searchValueInputFiled: ElementFinder = element(by.xpath("//h6[contains(text(),'Search Value')]//parent::td//div/input"));
    readonly magnifyingGlassUnderSearchValue: ElementFinder = element(by.xpath("//h6[contains(text(),'Search Value')]//parent::td//a"));
    readonly modifyButton: ElementFinder = element(by.xpath("//input[@value='Modify']"));
    readonly vendorRecipentTitle: ElementFinder = element(by.xpath("//h4[@class='lnfCategoryHeader']"));
    readonly cancelButton: ElementFinder = element(by.xpath("//button[text()='Cancel']"));
    readonly welcomeScreen: ElementFinder = element(by.xpath("//a[text()='Welcome Screen >']"));
    readonly companyNameLink: ElementFinder = element(by.xpath("//table[@id='form:recipientsToChooseTable']/tbody/tr[1]/td[2]/a"));
    readonly createNew: ElementFinder = element(by.xpath("//button[text()='Create New']"));
    readonly fedTaxId: ElementFinder = element(by.xpath("//select[@id='form:searchTypes']//option[text()='FED_TAX_ID']"));
    readonly expressCode: ElementFinder = element(by.xpath("//td[contains(text(),'Express Code')]"));
    readonly employeeSearch: ElementFinder = element(by.xpath("//label[text()='Employee Search']//parent::div"));
    readonly searchValue: ElementFinder = element(by.xpath("//input[@id='form:iptSearchValue']"));
    readonly searchButton: ElementFinder = element(by.xpath("//button[text()='Search' and @id='form:searchPerson']"));
    readonly alphaCodeValue: ElementFinder = element(by.xpath("//h6[contains(text(),'Alpha Code :')]//parent::td//parent::tr//td[2]"));
    readonly searchType: string = "//select[@id='form:searchTypesPerson']//option";
    readonly employeeIdValue: ElementFinder = element(by.xpath("//h6[contains(text(),'Employee Id :')]//parent::td//parent::tr//td[2]"));
    readonly userIdValue: ElementFinder = element(by.xpath("//h6[contains(text(),'User Id :')]//parent::td//parent::tr//td[2]"));
    readonly loadingStatus: ElementFinder = element(by.xpath(`//div[@class='iceOutConStatInactv' and @style='visibility: visible;' ]`));
    readonly loadIcon: ElementFinder = element(by.xpath(`//div[@class='iceOutConStatInactv' ]`));
    readonly openStatus: ElementFinder = element(by.xpath(`//label[text()='Employee Search']/ancestor::div[@class='icePnlClpsblColpsdHdr']`));

    public async loginIntoMoneyWorksApplication(user: string, pass: string) {
        await this.actions.setText(element(by.xpath("//input[@name='j_username']")), user, "username");
        await this.actions.setText(element(by.xpath("//input[@name='j_password']")), pass, "password");
        await this.clickOnButton("Submit");
        await this.actions.waitUntilElementVisible(element(by.xpath("//img[@class='iceGphImg']")), "money works");
    }

    public async gettingDropdownStatus() {
        let status = await this.openStatus.getAttribute('onclick')
        status = status.match(/Expanded'].value=([^;]+)/)[1];
        status = status.replace(/['"]+/g, '')
        await this.actions.shortWait('')
        return status
    }

    public async selectOptionFromDropDown(lable) {
        let optionXpath = element(by.xpath(`//select[@id='form:searchTypesPerson']//option[text()='` + lable + `']`));
        await element(by.id('form:searchTypesPerson')).click();
        await optionXpath.click()
    }

    public async clickOnsearchButton() {
        await this.searchButton.isDisplayed().then(async (text) => {
            await this.actions.waitUntilElementPresenceOf(this.searchButton)
            await this.actions.waitUntilElementVisible(this.searchButton, '')
            await this.searchButton.click()
            return;
        })
    }

    public async click(elementToClick: ElementFinder) {
        if (await this.loadIcon.isPresent()) {
            await this.actions.waitUntilElementPresenceOf(this.loadingStatus, '')
        }
        await this.actions.click(elementToClick, 'Clicking on the Element')
    }

    public async setText(elementToClick: ElementFinder, textToEnter: string) {
        await this.actions.setText(elementToClick, textToEnter, 'Entering Text');
    }

    public async waitForLoading() {
        let spinnerImage = element(by.xpath("//div[@id='lnfLoadingCoverScreen']"))
        return await browser.wait(async () => {
            let style: string = await spinnerImage.getAttribute('style');
            return style === "display: none; visibility: visible; top: 409.5px; left: 530px;";
        }, 20000);

    }

    public async getText(elementToGetText: ElementFinder) {
        await this.actions.waitUntilElementVisible(elementToGetText, "Waiting");
        return await this.actions.getText(elementToGetText, "Get text");
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
    }

    public async selectDropDown(ElementToSelect: string, valueToSelect: string) {
        await this.actions.selectByValue(ElementToSelect, valueToSelect, "Selecting option");
    }
}