
import { by, element, ElementFinder } from 'protractor';
import { BasePage } from './base.po';

export class MyJbHuntHomePage extends BasePage {
    readonly linkShowMoreApp: ElementFinder = element(by.xpath("//a[@class='showMoreApps']"));
    readonly draynet = element(by.xpath("(//a[@title='Draynet 4.0'])[1]"));
    readonly hawkOne = element(by.xpath("//a[@title='Hawk One Screen Application']"));
    readonly platform360 = element(by.xpath("//a[@title='360 Platform']"));

    public async clickOnShowMoreAppLink() {
        return await this.actions.click(this.linkShowMoreApp, "Click on Show my app link");
    }

    public async clickOnAppLink(appName: string) {
        this.actions.click(element(by.xpath("//a[@title='" + appName + "']")), "Click on application link");
        await this.actions.selectWindow(1, "EOM Tab");
        await this.loginIfRequired();
    }

}
