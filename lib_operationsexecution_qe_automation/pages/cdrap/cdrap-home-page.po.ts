import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser, ExpectedConditions } from "protractor";

export class CdrapHomePage extends BasePage {

    readonly userName: ElementFinder = element(by.xpath("//input[@name='username']"));
    readonly password: ElementFinder = element(by.xpath("//input[@name='password']"));
    readonly orientationLocationSearch: ElementFinder = element(by.xpath("//a[text()='Orientation Location Search']"));
    readonly companyAdminLink:ElementFinder=element(by.xpath("//a[text()='Company Admin']"));
    readonly locationLookUpLink: ElementFinder=element(by.linkText(" Location Lookup "))
    readonly topLevelXpath:ElementFinder=element(by.xpath(`//*[@id="specialSkillsAdminForm"]//td[a/text()='Top level']`));
    readonly textMessageTemplatesButton=element(by.xpath("//span[contains(text(),'Text Message Templates')]"));
    readonly createNewTemplateButton=element(by.name("newTemplateButton"))

    public async loginIntoCdrap(userName: string, password: string, submitButton: string) {
        await this.actions.clearText(this.userName, "Clear name in User Name");
        await this.actions.setText(this.userName, userName, "Enter name in User Name");
        await this.actions.clearText(this.password, "Clear name in User Name");
        await this.actions.setText(this.password, password, "Enter name in User Name");
        await this.clickOnButton(submitButton);
    }

    public async clickOnElement(tabElement: ElementFinder) {
        await this.actions.click(tabElement, "Click Tab");
    }

    public async navigateToCdrap() {
        let userName = browser.params.user.userName;
        let password = browser.params.user.password;
        await this.openUrl("http://cdpw.jbhunt.com/cdrap/logon.do");
        try {
            if (await this.userName.isPresent() && (await browser.getTitle()) == "CD-RAP - Logon") {
                await this.actions.waitBrowserTitleEqualsTo("CD-RAP - Logon");
                await this.actions.clearText(this.userName, "Clear name in User Name");
                await this.actions.setText(this.userName, userName, "Enter name in User Name");
                await this.actions.clearText(this.password, "Clear name in User Name");
                await this.actions.setText(this.password, password, "Enter name in User Name");
                await this.clickOnButton("Submit");
                await browser.wait(ExpectedConditions.titleContains("CD-RAP - Welcome"), 10000);
            }
        } catch (error) {
            console.log(error);

        }
    }

    public async clickOnLink(linkName: string) {
        console.log('linkName' + linkName);
        let linkXpath: ElementFinder = element(by.xpath("//a[text()='" + linkName + "']"));
        await this.actions.click(linkXpath, "click on link")
    }

    public async clickOnCompanyAdmin() {
        await this.actions.click(this.companyAdminLink, 'Clicking on Company Admin Link')
    }

    public async clickOnTab(tabName) {
        let xpath: ElementFinder = element(by.xpath(`//a[span[text()='`+tabName+`']]`));
        await this.click(xpath)
    }
}