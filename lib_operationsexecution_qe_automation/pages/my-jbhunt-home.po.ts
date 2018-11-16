import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from './base.po';

export class MyJbHuntHomePage extends BasePage {
    readonly linkShowMoreApp: ElementFinder = element(by.xpath("//a[@class='showMoreApps']"));
    readonly draynet = element(by.xpath("(//a[@title='Draynet 4.0'])[1]"));
    readonly hawkOne = element(by.xpath("//a[@title='Hawk One Screen Application']"));
    readonly platform360 = element(by.xpath("//a[@title='360 Platform']"));
    readonly userName: ElementFinder = element(By.xpath("//li[@class='screen-name']"));
    readonly paceLink: ElementFinder = element(by.xpath("//a[text()='PACE']"));

    public async openUrl(url: string) {
        return await this.actions.get(url, "Opening My jbhunt url");
    }

    public async getUserName() {
        return await this.actions.getText(this.userName, "Get system user name");
    }

    public async clickOnShowMoreAppLink() {
        return await this.actions.click(this.linkShowMoreApp, "Click on Show my app link");
    }

    public async click360PlatformLink() {

        await this.actions.selectWindow(1, "Navigate to Latest Window")
        return await this.actions.click(this.platform360, "clicking on 360 platform");
    }

    public async clickOnAppLink(appName: string) {
        await this.actions.click(element(by.xpath("//a[@title='" + appName + "']")), "Click on application link");
        await this.actions.selectWindow(1, "EOM Tab");
        await this.loginIfRequired();
    }

    public async clickOnHawkOne() {
        await this.actions.click(this.hawkOne, "click on HawkOne");
    }

    public async loginIntoPaceApplication(user: string, pass: string) {
        await this.actions.setText(element(by.xpath("//input[@name='j_username']")), user, "username");
        await this.actions.setText(element(by.xpath("//input[@name='j_password']")), pass, "password");
        await this.clickOnButton("Login");
        await this.actions.waitUntilElementVisible(element(by.xpath("//center[contains(text(),'Welcome')]")), "welcome");
    }

    public async clickonPaceLink() {
        await this.actions.click(this.paceLink, "Click on PACE");

    }

    public async clickonDraynet() {
        await this.actions.click(this.draynet, "Click on Draynet 4.0 link");
        await this.actions.selectWindow(1, "Draynet 4.0 Tab");
        await this.loginIfRequired();

    }

    public async loginIntoCarrier360(user: string, pass: string) {
        await this.actions.setText(element(by.xpath("//input[@id='username']")), user, "username");
        await this.actions.setText(element(by.xpath("//input[@id='password']")), pass, "password");
        await this.actions.shortWait("")
        await this.actions.click(element(by.className('light-primary-solid-button black-text')), '');
        await this.actions.waitUntilElementInVisible(element(by.xpath("//div[contains(@id,'loading-screen')]")), "welcome");
        await this.actions.waitUntilElementVisible(element(by.xpath("//h1[text()='Load Board']")), "");
        if (await element(by.xpath('//h1[text()=Load Board]')).isPresent()) {
            return true;
        }
        return false;
    }
}
