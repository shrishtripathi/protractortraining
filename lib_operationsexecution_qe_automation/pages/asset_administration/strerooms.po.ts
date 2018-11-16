import { ElementFinder, element, by } from "protractor";
import { BasePage } from "../base.po";


export class StoreRommsPage extends BasePage {

    readonly locationTextBox: ElementFinder = element(by.xpath("//input[contains(@id, 'm6a7dfd2f_tfrow_[C:1]')and contains(@class, 'fld text')]"));
    readonly locationHyperLink: ElementFinder = element(by.xpath("//td[@class='tc cd']//span[text()='AT2GA-INV']"))
    readonly selectActionDropDownButton: ElementFinder = element(by.xpath("//input[@promptvalue='Select Action']/parent::td/following-sibling::td/img[contains(@alt,'Drop-down')]"));
    readonly addToBookmarks: ElementFinder = element(by.xpath("//span[contains(text(),'Add to Bookmarks')]"));
    readonly successMessage: ElementFinder = element(by.xpath("//td[contains(text(),'Record has been')]"));
    public async clickLocationTextBox() {
        await this.actions.click(this.locationTextBox, 'click location text box');
    }

    public async hitEnter() {
        await this.actions.sendKeysEnter("press enter");
    }

    public async clickOnLocationHyperlink() {
        await this.actions.waitUntilElementClickable(this.locationHyperLink, 'wait unti table is present')
        await this.actions.click(this.locationHyperLink, "click location hyper link");
    }

    public async selectActionDropDown() {
        await this.actions.waitUntilElementClickable(this.selectActionDropDownButton, 'wait')
        await this.actions.click(this.selectActionDropDownButton, "click on dropdown");
        await this.actions.click(this.addToBookmarks, "Select Option");
    }

    public async verifySavedMessage() {
        await this.actions.waitUntilElementVisible(this.successMessage, "");
        let success_MessageDisplayed: boolean = await this.successMessage.isPresent();
        if (success_MessageDisplayed) {
            return true;
        }
        return false;
    }
}