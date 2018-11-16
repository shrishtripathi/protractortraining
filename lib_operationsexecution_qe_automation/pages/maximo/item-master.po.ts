import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

import { By } from 'selenium-webdriver';
import { ElementArrayFinder } from 'protractor/built/element';
import { BasePage } from '../base.po';
import { connect } from 'net';

export class ItemMasterPage extends BasePage {
    readonly findItem = element(by.id("quicksearch"));
    readonly selectAction = element(by.id("toolbar2_tbs_1_tbcb_0_action-img"));
    readonly addItemToStoreroom = element(by.xpath("//span[contains(text(),'Storeroom(s)')]"));
    readonly firstTablePopUp = element(by.id("additems-dialog_inner"));
    readonly storeRoom = element(by.xpath("//label[text()='Storeroom:']/../following-sibling::td/input[1]"));
    readonly okButton = element(by.xpath("//button[text()='OK']"));
    readonly secondTablePopUp = element(by.xpath("//table[@id='additemstostoreroom-dialog_inner']"));
    readonly verifyItemNumber = element(by.xpath("(//input[@class='fld text   ttfld fld_req'])[1]"));
    readonly standardCost = element(by.xpath("//input[contains(@id,'tdrow_[C:4]')]"));
    readonly currentBalance = element(by.xpath("//input[contains(@id,'tdrow_[C:7]')]"));
    readonly magnifyingGlassIcon = element(by.xpath("//img[contains(@id,'tdrow_[C:9]')]"));
    readonly issueUnitName: string = "//span[text()='LBS']";
    readonly searchImage = element(by.id("quicksearchQSImage"));
    readonly successMessage = element(by.xpath("//td[contains(text(),'Items have been added to the storeroom')]"));

    public async enterInFindItem(value: string) {
        await this.actions.setText(this.findItem, value, "give item number");
    }
    public async hitEnter() {
        await this.actions.click(this.searchImage, "search image");
    }
    public async selectActionDropDown() {
        await browser.sleep(5000);
        console.log("test");
        try {
            await this.actions.click(this.selectAction, "click on dropdown");
            await browser.sleep(5000);
            await this.actions.click(this.addItemToStoreroom, "Select Option");
        } catch (error) {
            console.log("error select " + error);
        }

    }
    public async verifyFirstPopUP() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.firstTablePopUp, "verifying if the poup opens");
            flag = await this.actions.isElementDisplayed(this.firstTablePopUp, "verifying if the poup opens")
        } catch (error) {
            console.log("verifyFirstPopUP" + error)
        }
        return await flag;
    }
    public async enterInStoreRoom(value: string) {
        console.log("store room " + value);
        await this.actions.setText(this.storeRoom, value, "enter value in storeroom")
    }
    public async clickOkButton() {
        await this.actions.click(this.okButton, "click on ok")
    }
    public async verifySecondPopUP() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.secondTablePopUp, "verifying if the poup opens")
            flag = await this.actions.isElementPresent(this.secondTablePopUp, "verifying if the poup opens")
        } catch (error) {
            console.log("verifySecondPopUP" + error)
        }
        return await flag;
    }

    public async verifyItemNumberIsSame() {
        let flag: boolean = false;
        try {
            flag = await this.actions.isElementPresent(this.verifyItemNumber, "verifying if the item number is same as previously entered")
        } catch (error) {
            console.log("verifyItemNumberIsSame", +error)
        }
        return await flag;
    }
    public async enterStandardCost(value: string) {
        await this.actions.clearText(this.standardCost, "clear text");
        await this.actions.setText(this.standardCost, value, "enter value");
    }
    public async enterCurrentBalance(value: string) {
        await this.actions.clearText(this.currentBalance, "clear text");
        await this.actions.setText(this.currentBalance, value, "enter value");
    }
    public async selectFromIssueUnit() {
        await this.actions.click(this.magnifyingGlassIcon, "click magnifying glass icon next to issue unit");
        await this.actions.waitUntilElementVisible(element(by.xpath(this.issueUnitName)), "select from issue unit")
        await this.actions.click(element(by.xpath(this.issueUnitName)), "select from issue unit")
    }
    public async verifyConfirmationMessage() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.successMessage, "verifying success message")
            flag = await this.actions.isElementPresent(this.successMessage, "verifying success message")
        } catch (error) {
            console.log("successmessage", +error)
        }
        return await flag;
    }


}