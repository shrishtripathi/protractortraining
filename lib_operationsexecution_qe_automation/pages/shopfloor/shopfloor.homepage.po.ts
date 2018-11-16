import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor'


import { By } from 'selenium-webdriver';
import { BasePage } from '../../pages/base.po';
export class ShopfloorHomePage extends BasePage {
    readonly userName: ElementFinder = element(by.id("j_username"));
    readonly password: ElementFinder = element(by.id("j_password"));
    readonly loginButton: ElementFinder = element(by.xpath("//input[@name='submit']"));
    readonly workOrderInputField: ElementFinder = element(by.xpath("//td[@id='workOrderNumberCriteria-bodyEl']//input"));
    readonly searchButton: ElementFinder = element(by.xpath("//span[@id='searchButton-btnIconEl']"));
    readonly loadingElement: ElementFinder = element(by.xpath("//span[contains(text(),'Loading ...... Please Wait')]"));

    public async login(userName: string, password: string) {
        await this.actions.clearText(this.userName, "Clear Text");
        await this.actions.setText(this.userName, userName, "Set Text");
        await this.actions.clearText(this.password, "Clear Text");
        await this.actions.setText(this.password, password, "Set Text");
        await this.actions.click(this.loginButton, "Click on Login Button");
    }

    public async getPageTitle() {
        return await this.actions.getPageTitle("Page Title");
    }

    public async hoverOnDropdownAndSelectOption(dropdownName: string, optionName: string) {
        let dropdown = element(by.xpath("//font[contains(text(),'" + dropdownName + "')]//parent::a[contains(@onclick,'return')]"))
        await this.actions.moveMouseToElement(dropdown, "Dropdown");
        let option = element(by.xpath("//font[contains(text(),'" + optionName + "') and ancestor::div[contains(@style,'visibility: visible;')]]/parent::a"));
        await this.actions.click(option, "Selecting " + optionName + " ");
        await this.waitForPageLoad();
    }

    public async setInputField(FieldName: ElementFinder, text: string) {
        await this.actions.waitUntilElementVisible(FieldName, "");
        await this.actions.clearText(FieldName, "Clearing " + FieldName + " input field")
        await this.actions.setText(FieldName, text, "Enter " + text + " to " + FieldName + " input field");
    }

    public async click(element: ElementFinder) {
        await this.actions.click(element, "Click on" + element + " ");
    }

    public async verifyWorkOrder(workOrderNumber: string) {
        let xpath = element(by.xpath("//div[text()='" + workOrderNumber + "']"));
        await this.actions.waitUntilElementVisible(xpath, "");
        return await this.actions.getText(xpath, "Work order number");
    }

    public async hoverOnLinksAndClickSubMenu(MenuText: string, subMenuText: string) {
        let quickLinkXPath = element(by.xpath("//font[contains(text(), '" + MenuText + "')]//parent::a"));
        await this.actions.moveMouseToElement(quickLinkXPath, "Quick Link");
        let submenuXPath = element(by.xpath("//font[contains(text(), '" + subMenuText + "')]"));
        await this.actions.waitUntilElementVisible(submenuXPath, "");
        await this.actions.click(submenuXPath, "Sub Menu clicked");
    }

    public async verifySubMenuPage() {
        await this.switchToWindow(1);
        return await browser.getCurrentUrl();
    }

    public async selectwindow() {
        await this.actions.selectWindow(1, "Selecting new window");
    }

    public async verifyNewWindowURL(url: string) {
        if (await ExpectedConditions.urlContains(url)) {
            return true;
        }
        return false;
    }

}