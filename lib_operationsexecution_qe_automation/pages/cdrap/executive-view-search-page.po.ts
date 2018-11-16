import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser } from "protractor";

export class ExecutiveViewSearchPage extends BasePage {
    readonly ssn: ElementFinder = element(by.xpath("//input[@name='ssn']"));
    readonly submitButton: ElementFinder = element(by.xpath("//input[@name='dpsubmit']"));
    readonly candidateName: ElementFinder = element(by.xpath("//table[@class='striped']/tbody/tr[1]/td[2]/a"));
    readonly driverAppLink:ElementFinder=element(by.xpath("//a[contains(text(),'DRIVER APP')]"))
    readonly executiveViewComments:ElementFinder=element(by.xpath("//textarea[@name='comments']"));
    readonly saveButton:ElementFinder=element(by.xpath("//input[@value='Save']"));
    currentWindow: string;

    public async setText(elementToGetText: ElementFinder, textToEnter: string) {
        await this.actions.setText(elementToGetText, textToEnter, "Getting text")
    }

    public async click(elementName: ElementFinder) {
        await this.actions.click(elementName, "Clicking on element");
    }

    public async clickOnHyperlinks(linkText: string) {
        this.currentWindow = await browser.getWindowHandle();
        let hyperlink = element(by.linkText("" + linkText + ""));
        await this.actions.click(hyperlink, 'Clicking on Hyperlinks');
        await this.actions.mediumWait("")
    }

    public async switchToNewWindow() {
        await this.actions.selectWindow(1,"");
        await this.loginIfRequired();
        let title = await this.actions.getPageTitle("Get page Title");
        return title;
    }

    public async closeWindow() {
        await browser.driver.close();
    }

    public async switchToParentWindow() {
        browser.driver.switchTo().window(this.currentWindow);
    }

    public async clickOnDriverAppLink(){
        await this.actions.click(this.driverAppLink,"Clicking on driver app");
    }
}