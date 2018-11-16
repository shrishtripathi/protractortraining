import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper, protractor } from "protractor";
import { BasePage } from "../base.po";

export class MaximoHomePage extends BasePage {

    readonly menuIcon = element(by.id("titlebar-tb_gotoButton"));
    readonly homeIcon = element(by.id("titlebar-tb_homeButton"));
    readonly inventory = element(by.xpath("//span[text()='Inventory']"));
    readonly assets = element(by.xpath("//span[text()='Assets']"));
    readonly itemMaster = element(by.xpath("(//span[contains(@id,'PLUSTITM_a_tnode')])"));
    readonly locations = element(by.xpath("//span[text()='Locations (Tr)']"));

    readonly userName: ElementFinder = element(by.id("username"));
    readonly password: ElementFinder = element(by.id("password"));
    readonly loginButton: ElementFinder = element(by.id("loginbutton"));
    readonly welcomeScreen: ElementFinder = element(by.id("titlebar-tb_appname"));
    readonly itemElement: ElementFinder = element(by.xpath("(//table[@summary='Inventory']//td//input)[1]"));
    readonly threelineIcon: ElementFinder = element(by.xpath("//*[contains(@id, 'titlebar-tb_gotoButton')]"));
    readonly inventory_Element: ElementFinder = element(by.xpath("//span[contains(@id, 'menu0_INVENTOR_MODULE_a_tnode')]"));
    readonly itemlistElement: ElementFinder = element(by.xpath("//span[contains(@id, 'menu0_INVENTOR_MODULE_sub_changeapp_PLUSTITM_a_tnode')]"));
    readonly inventoryNode: ElementFinder = element(by.xpath("//span[contains(@id,'PLUSTINV_a_tnode')]"));
    readonly purchasingElementNode: ElementFinder = element(by.xpath("//span[contains(@id, 'menu0_PURCHASE_MODULE_a_tnode')]"));
    readonly purchasing_requisitions_Element: ElementFinder = element(by.xpath("//span[contains(@id, 'PLUSTREC_a')]"));
    readonly purchasing: ElementFinder = element(by.xpath("//span[contains(@id, 'menu0_PURCHASE_MODULE_a_tnode')]"));
    readonly companies: ElementFinder = element(by.xpath("//span[contains(text(), 'Companies')]"));
    readonly purchasingElement: ElementFinder = element(by.xpath("//span[contains(text(),'Purchasing')]"));
    readonly purchaseOrderElement: ElementFinder = element(by.xpath("//span[contains(text(),'Purchase Orders')]"));
    readonly adminstration: ElementFinder = element(by.xpath("//span[contains(text(),'Administration')]"));
    readonly resources: ElementFinder = element(by.xpath("//span[contains(text(),'Resources')]"));
    readonly personGroups: ElementFinder = element(by.xpath("//span[contains(text(),'Person Groups')]"));

    public async login(userName: string, password: string) {
        await this.actions.clearText(this.userName, "Clear Text");
        await this.actions.setText(this.userName, userName, "Set Text");
        await this.actions.clearText(this.password, "Clear Text");
        await this.actions.setText(this.password, password, "Set Text");
        await this.actions.click(this.loginButton, "Click on Login Button");
    }

    public async waitUntillWelcomeScreenLoad() {
        await this.actions.waitUntilElementVisible(this.welcomeScreen, "waiting");
    }

    public async clickonLeftFavoriteLink(link_Name: string) {
        let favorite_Link: ElementFinder = element(by.xpath("//a[contains(@id,'FavoriteApp') and contains(@title,'" + link_Name + "')]"))
        await this.actions.click(favorite_Link, "click link");

    }

    public async enetrItemNumberInInventory(item_Value: string) {
        await this.actions.setText(this.itemElement, item_Value, "waiting");
        await this.itemElement.sendKeys(protractor.Key.ENTER);
    }

    public async clickonThreeLineIcon() {
        await this.actions.click(this.threelineIcon, 'click icon');
    }


    public async selectItemList() {
        await this.actions.moveMouseToElement(this.inventory_Element, 'hover on inventory');
        await this.actions.click(this.itemlistElement, 'click item_list');
    }
    public async selectInventory() {
        await this.actions.moveMouseToElement(this.inventory_Element, 'hover on inventory');
        await this.actions.click(this.inventoryNode, 'click item_list');
    }

    public async selectPurchasingRequisitions() {
        let purchasing_Element: ElementFinder = element(by.xpath("//span[contains(@id, 'menu0_PURCHASE_MODULE_a_tnode')]"));
        let purchasing_requisitions_Element: ElementFinder = element(by.xpath("//span[contains(@id, 'PLUSTPR_a_tnode')]"));
        await this.actions.waitUntilElementVisible(purchasing_Element, 'hover on purchasing');
        await this.actions.moveMouseToElement(purchasing_Element, 'hover on purchasing');
        await this.actions.click(purchasing_requisitions_Element, 'click purchasing_requisitions');
    }
    public async selectRecieving() {

        await this.actions.moveMouseToElement(this.purchasingElementNode, 'hover on purchasing');
        await this.actions.click(this.purchasing_requisitions_Element, 'click purchasing_requisitions');
    }
    public async selectCompanies() {
        await this.actions.moveMouseToElement(this.purchasing, 'hover on purchasing');
        await this.actions.click(this.companies, 'click purchasing_requisitions');
    }

    public async selectPurchaseOrders() {
        await this.actions.moveMouseToElement(this.purchasingElement, 'hover on purchasing');
        await this.actions.waitUntilElementVisible(this.purchaseOrderElement, '')
        await this.actions.click(this.purchaseOrderElement, 'click purchasing_requisitions');
    }
    public async selectPersonGroups() {
        await this.actions.moveMouseToElement(this.adminstration, 'hover on Admintration');
        await this.actions.waitUntilElementVisible(this.resources, '')
        await this.actions.moveMouseToElement(this.resources, 'hover on Admintration');
        await this.actions.waitUntilElementVisible(this.personGroups, '')
        await this.actions.click(this.personGroups, 'click person groups');
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
        try {
            await this.actions.waitUntilElementVisible(this.itemMaster, "click on item master")
            await this.actions.click(this.itemMaster, "click on item master")
        } catch (error) {
            console.log("item click " + error)
        }

    }
    public async clickLocations() {
        await this.actions.click(this.locations, "click on locations")
    }
}