import { by, element, ElementFinder, browser } from 'protractor';
import { BasePage } from "../base.po";

export class EnterpriseDashBoardHomePage extends BasePage {
    readonly manageView: ElementFinder = element(by.xpath("//div[text()='Manage Views']"));
    readonly inProgressImage:ElementFinder=element(by.xpath("//div[@id='loading-spinner']//ancestor::body//div[@class='x-container jb-page-body-container x-border-item x-box-item x-container-default']"));
    readonly appointmentsTab: ElementFinder = element(by.xpath("//div[text()='Appointments']"));
    readonly newVieweTab: ElementFinder = element(by.xpath("//div[text()='New View']"));
    readonly monitorTab: ElementFinder = element(by.xpath("//div[contains(text(),'Monitor')]"));
    
    public async clickOnManageViews() {
        await this.actions.click(this.manageView, "Clicking on manage view");
    }

    public async waitForLoading() {
        return await browser.wait(async () => {
            let style: string = await this.inProgressImage.getAttribute('style');
            console.log("style",style)
            return style === "right: auto; left: 190px; top: 64px; margin: 0px; height: 549px; width: 1174px;";
        }, 5000);
    }
    
    public async clickOnAppointmentsTab() {
        await this.actions.click(this.appointmentsTab, "Clicking On Appointments");
    }

    public async clickOnNewVieweTab() {
        await this.actions.click(this.newVieweTab, "Clicking On New View");
    }

    public async clickOnMonitorTab() {
        await this.actions.click(this.monitorTab, "Clicking On Monitor");
    }
}

