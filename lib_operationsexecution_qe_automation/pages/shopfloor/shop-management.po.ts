import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder, protractor } from 'protractor'


import { By } from 'selenium-webdriver';
import { BasePage } from '../../pages/base.po';
export class ShopManagementPage extends BasePage {
    readonly primaryWorkLocation: string = "//td[contains(text(),'Primary Work Location')]//parent::tr//td[3]//select//option";
    readonly myHomePage: string = "//td[contains(text(),'My Home Page')]//parent::tr//td[3]//select//option";
    readonly deafultLocation: string = "//td[contains(text(),'Default Location')]//parent::tr//td[5]//select//option";
    readonly savebutton: ElementFinder = element(by.xpath("//a[text()='Save']"));

    public async setDropdown(dropdownXpath: string, dropdownOption: string) {
        await this.actions.selectByValue(dropdownXpath, dropdownOption, "Selecting option to dropdown");
    }

    public async acceptingAlert() {
        try {
            var EC = protractor.ExpectedConditions;
            if (await browser.wait(EC.alertIsPresent(), 5000))
                console.log("inside if");
            await this.actions.switchToAlertAndAccept("");
            await this.actions.mediumWait("");

        }
        catch (error) {
            console.log("Alert", error)
        }
    }
}