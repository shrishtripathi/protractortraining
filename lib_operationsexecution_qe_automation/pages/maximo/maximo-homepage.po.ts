import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

import { By } from 'selenium-webdriver';
import { ElementArrayFinder } from 'protractor/built/element';
import { BasePage } from '../base.po';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

export class MaximoHomePage extends BasePage {

    readonly menuIcon = element(by.id("titlebar-tb_gotoButton"));
    readonly inventory = element(by.xpath("//span[text()='Inventory']"));
    readonly assets = element(by.xpath("//span[text()='Assets']"));
    readonly itemMaster = element(by.xpath("//span[text()='Item Master (Tr)']"));
    readonly locations = element(by.xpath("//span[text()='Locations (Tr)']"));

    readonly username = element(by.id("username"));
    readonly password = element(by.id("password"));
    readonly signInButton = element(by.xpath("//button[text()='Sign In']"));

    public async loginPage(value1: string, value2: string) {
        console.log("username " + value1);
        await this.actions.setText(this.username, value1, "username");
        await this.actions.setText(this.password, value2, "password");
        await this.actions.click(this.signInButton, "clicking on sign in")
    }
    public async clickMenuIcon() {
        await this.actions.click(this.menuIcon, "click menu icom");
    }
    public async mouseHoverInventory() {
        await this.actions.moveMouseToElement(this.inventory, "mouse hover to inventory");
    }
    public async mouseHoverAssets() {
        await this.actions.moveMouseToElement(this.assets, "mouse hover to Assets");
    }
    public async clickItemMaster() {
        await this.actions.click(this.itemMaster, "click on item master")
    }
    public async clickLocations() {
        await this.actions.click(this.locations, "click on locations")
    }
}
