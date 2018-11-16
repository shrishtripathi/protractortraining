import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

import { By } from 'selenium-webdriver';
import { read } from 'fs';
import { BasePage } from '../base.po';

export class HawkOnePage extends BasePage {



    readonly nextNewLoadButton = element(by.id("nextNwLoadToProcess"));
    readonly nextRecycledLoadButton = element(by.id("nextRecycledLoadToVerify"));
    readonly nextLoadToCloseButton = element(by.id("nextLdToClose"))
    readonly apptChangesTab = element(by.xpath("//span[text()='.APPT CHANGES']"));
    readonly driverOrFacilityTab = element(by.xpath("//span[text()='.DRIVER/FACILITY']"));
    readonly publicationTab = element(by.xpath("//span[text()='.PUBLICATION']"));
    readonly communicationTab = element(by.xpath("//span[text()='.COMMUNICATION']"));
    readonly closingTab = element(by.xpath("//span[text()='.CLOSING']"));
    readonly maintenanceTab = element(by.xpath("//span[text()='.MAINTENANCE']"));
    readonly loadInfoTab = element(by.xpath("//span[text()='.LOAD INFO']"));
    readonly orderInformation = element(by.xpath("//td[@class='success']//b[contains(text(),'No Loads Are Available To Close')]"));

    public async clickNextNewLoad() {
        await this.actions.click(this.nextNewLoadButton, "clicl on next new load button");
    }
    public async verifyOrderInformation() {
        let flag: boolean = false;
        try {
            flag = await this.actions.isElementDisplayed(this.orderInformation, "Verify order information");
            if (flag) {

                await this.clickNextRecycled();
                flag = await this.actions.isElementDisplayed(this.orderInformation, "Verify order information");
                if (flag) {
                    do {
                        await this.clickNextLoadToClose()
                    } while (await this.actions.isElementDisplayed(this.orderInformation, "Verify order information"))
                }
            }
        } catch (error) {
            console.log("element is not visible..." + error);
        }
    }

    public async clickNextRecycled() {
        await this.actions.click(this.nextRecycledLoadButton, "click on next recycled button")
    }
    public async clickNextLoadToClose() {
        await this.actions.click(this.nextLoadToCloseButton, "click next load to close")
    }
    public async clickApptChangesTab() {
        await this.actions.waitUntilElementClickable(this.apptChangesTab, "wait till it is present")
        await this.actions.click(this.apptChangesTab, "click appt changes tab");
    }
    public async clickDriverTab() {
        await this.actions.click(this.driverOrFacilityTab, "click driver or facility tab");
    }
    public async clickPublictaionTab() {
        await this.actions.click(this.publicationTab, "click publication tab");
    }
    public async clickCommunicationTab() {
        await this.actions.click(this.communicationTab, "click communication tab");
    }
    public async clickClosingTab() {
        await this.actions.click(this.closingTab, "click closing tab");
    }
    public async clickMaintenanceTab() {
        await this.actions.click(this.maintenanceTab, "click maintenance tab");
    }
    public async clickLoadInfoTab() {
        await this.actions.click(this.loadInfoTab, "click load info tab")
    }
    public async validateResults(name: string) {
        await element(by.name(name));
    }
}