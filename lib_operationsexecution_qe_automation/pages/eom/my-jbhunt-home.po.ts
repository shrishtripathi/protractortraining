import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";

export class MyJbHuntHomePage extends BasePage {

    readonly linkShowMoreApp: ElementFinder = element(by.xpath("//a[@class='showMoreApps']"));
    readonly linkFreightManager2: ElementFinder = element(by.xpath("//a[@title='Freight Manager 2']"));
    readonly linkCarrierManagement: ElementFinder = element(by.xpath("//a[@title='Carrier Management']"));
    readonly linkEOM: ElementFinder = element(by.xpath("//a[@title='Enterprise Order Management']"));
    readonly linkCenterScreen: ElementFinder = element(by.xpath("//a[@title='Center Screen']"));
    readonly enterPriseOrderManagementPageTitle: ElementFinder = element(by.xpath("//div[text()='Enterprise Order Management']"));
    readonly myJbhuntUrl: string = "https://my.jbhunt.com/";
    
    linkLeftNavigation: ElementFinder;

    public async clickOnEomLink() {
        this.actions.click(this.linkEOM, "Click on application link");
        return await this.actions.selectWindow(2, "EOM Tab");
    }

    public async clickOnShowMoreAppLink() {
        return await this.actions.click(this.linkShowMoreApp, "Click on Show my app link");
    }

    public async clickonFreightManager2() {
        await this.actions.click(this.linkFreightManager2, "Click on FreightManager2 link");
        return await this.actions.selectWindow(1, "Freight Manager Tab");
    }

    public async clickonEnterpriseOrderManagement() {
        await this.actions.click(this.linkEOM, "Click on Enterprise Order Mangement link");
        await this.actions.selectWindow(1, "Enterprise Order Mangement");
        return await browser.getTitle();
    }

    public async clickonCarrierManagement() {
        await this.actions.click(this.linkCarrierManagement, "Click on Carrier Management link");
        return await this.actions.selectWindow(1, "Carrier Management Tab");
    }

    public async clickonEOM() {
        await this.actions.click(this.linkEOM, "Click on EOM link");
        this.actions.mediumWait("medium wait");
        return await this.actions.selectWindow(1, "EOM Tab");
    }

    public async clickOnCenterScreen() {
        await this.actions.click(this.linkCenterScreen, "Click on Center screen link");
        return await this.actions.selectWindow(1, "Center Screen Tab");

    }

    public async navigateToFM2Page() {
       
        await this.openUrl(this.myJbhuntUrl);
        await this.clickOnShowMoreAppLink();
        await this.clickonFreightManager2();
    }

    public async clickLinkFormLeftNavigation(linkText: string) {
        this.linkLeftNavigation = element(by.xpath("//a[@title='" + linkText + "']"))
        await this.actions.click(this.linkLeftNavigation, "Click on " + linkText + " link");
        await this.actions.selectWindow(1, "Switch on " + linkText + " Tab");
        return await browser.getTitle();
    }

    public async clickOnShowMoreApp_thenClickOnLeftNavigationLinkPage(linkText: string) {
        await this.navigateToAppHome(this.myJbhuntUrl);
        await this.clickOnShowMoreAppLink();
        let title: string = await this.clickLinkFormLeftNavigation(linkText);
        return title;
    }

}