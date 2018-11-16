import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper, protractor } from "protractor";
import { BasePage } from "../base.po";
import { CommonFunctions } from "../../utilities/common-functions";

export class ItemMasterPage extends CommonFunctions {

    readonly findItem = element(by.id("quicksearch"));
    readonly selectAction = element(by.id("toolbar2_tbs_1_tbcb_0_action-img"));
    readonly yaddItemToStoreroom = element(by.xpath("//span[contains(text(),'Add Items To Storeroom')]"));
    readonly firstTablePopUp = element(by.id("additems-dialog_inner"));
    readonly storeRoom = element(by.xpath("//label[text()='Storeroom:']/../following-sibling::td/input[1]"));
    readonly okButton = element(by.xpath("//button[text()='OK']"));
    readonly secondTablePopUp = element(by.xpath("//table[@id='additemstostoreroom-dialog_inner']"));
    readonly verifyItemNumber = element(by.xpath("(//input[@class='fld text   ttfld fld_req'])[1]"));
    readonly standardCost = element(by.xpath("//input[contains(@id,'tdrow_[C:4]')]"));
    readonly currentBalance = element(by.xpath("//input[contains(@id,'tdrow_[C:7]')]"));
    readonly magnifyingGlassIcon = element(by.xpath("//img[contains(@id,'tdrow_[C:9]')]"));
    readonly orderUnitIcon = element(by.xpath("//img[contains(@id,'tdrow_[C:10]')]"));
    readonly issueUnitName: string = "//span[text()='CYL']";
    readonly searchImage = element(by.id("quicksearchQSImage"));
    readonly imageTypeIcon = element(by.xpath("//img[@id='mc996a88d-img']"));
    readonly addItemToStoreRoom = element(by.xpath("//span[contains(@id,'ADDITEMS_OPTION')]"))
    readonly successMessage = element(by.xpath("//td[contains(text(),'Items have been added to the storeroom')]"));

    readonly newItem_Icon: ElementFinder = element(by.xpath("//img[contains(@id, 'toolactions_INSERT-tbb_image')]"));
    readonly itemTextBox: ElementFinder = element(by.xpath("//input[contains(@id,'maa8ad01-tb') and contains(@class, 'fld text text  fld fld_req')]"));
    readonly descriptionTextBox: ElementFinder = element(by.xpath("//input[contains(@id,'maa8ad01-tb2') and contains(@class, 'fld text')]"));
    readonly commodityGroup_Icon: ElementFinder = element(by.xpath("//img[contains(@id,'me4a6cc2d-img') and contains(@class,'dButton ') and contains(@title,'Select Value')]"));
    readonly commodityGroup_Element: ElementFinder = element(by.xpath("//span[text()='BATTERY']"));
    readonly quoteClassID_Icon: ElementFinder = element(by.id("m828f1f36-img"));
    readonly quoteClassID_Element: ElementFinder = element(by.xpath("//span[text()='141']"));
    itemValue: string = null;

    public async clickNewItemIcon() {
        await this.actions.click(this.newItem_Icon, 'click icon');
    }

    public async enterItemNumber() {
        this.itemValue = await this.randomNumberGenarator(6);
        await this.actions.waitUntilElementVisible(this.itemTextBox, "");
        await this.actions.setText(this.itemTextBox, this.itemValue, "Enter item value");
    }

    public async enterDescription(description: string) {
        await this.actions.waitUntilElementClickable(this.descriptionTextBox, "")
        await this.actions.setText(this.descriptionTextBox, description, 'enter description');
    }


    public async selectCommodityGroupIcon() {
        await this.actions.click(this.commodityGroup_Icon, 'click commodity group magnifying glass');
    }

    public async selectCommodityGroup() {
        await this.actions.waitUntilElementVisible(this.commodityGroup_Element, 'click on commodity group')
        await this.actions.click(this.commodityGroup_Element, 'click on commodity group');
        await this.actions.waitUntilElementInVisible(this.commodityGroup_Element, "")
    }

    public async selectQuoteClassIDIcon() {
        await this.actions.waitUntilElementClickable(this.quoteClassID_Icon, 'click Quote class ID magnifying glass')
        await this.actions.click(this.quoteClassID_Icon, 'click Quote class ID magnifying glass');
    }

    public async selectQuoteClassID() {
        await this.actions.waitUntilElementVisible(this.quoteClassID_Element, 'click on ID')
        await this.actions.click(this.quoteClassID_Element, 'click on ID');
        await this.actions.waitUntilElementInVisible(this.quoteClassID_Element, "")
    }

    public async enterInFindItem(value: string) {
        await console.log("item value is " + value);
        await this.actions.waitUntilElementVisible(this.findItem, "")
        await this.actions.setText(this.findItem, value, "give item number");
    }
    public async hitEnter() {
        await this.actions.click(this.searchImage, "search image");
        await console.log("test starts ");
        let itemWait = element(by.xpath("(//label[text()='Item:'])[1]"));
        await this.actions.waitUntilElementVisible(itemWait, "item to be wait");
    }
    public async hitEnterAndwaitforLink() {
        await this.actions.click(this.searchImage, "search image");
        await console.log("test starts ");
        let itemWait = element(by.xpath("(//label[text()='Item:'])[1]"));
        await this.actions.waitUntilElementVisible(itemWait, "item to be wait");
    }


    public async selectActionDropDown() {
        console.log("test");
        try {
            await this.actions.click(this.selectAction, "click on dropdown");
            await this.actions.waitUntilElementVisible(this.addItemToStoreRoom, "Select Option")
            await this.actions.click(this.addItemToStoreRoom, "Select Option");
        } catch (error) {
            console.log("error select " + error);
        }

    }
    public async selectStandardCost() {
        let inventory = element(by.xpath("//span[contains(text(),'Inventory Adjustments')]"))
        let standardCost = element(by.xpath("//span[contains(text(),'Standard Cost')]"))
        try {
            await browser.sleep(5000)
            await this.actions.waitUntilElementVisible(this.selectAction, "Select Option")
            await this.actions.click(this.selectAction, "click on dropdown");
            await this.actions.waitUntilElementVisible(inventory, "Select Option")
            await this.actions.moveMouseToElement(inventory, "Select Option");
            await this.actions.click(standardCost, "click on dropdown");
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
        await this.actions.waitUntilElementVisible(this.storeRoom, "enter value in storeroom");
        await this.actions.shortWait("short wait");
        await this.actions.setText(this.storeRoom, value, "enter value in storeroom")
    }
    public async clickOkButton() {
        await this.actions.click(this.okButton, "click on ok");
        await this.actions.waitUntilElementInVisible(this.okButton, "")
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
        await this.actions.click(element(by.xpath(this.issueUnitName)), "select from issue unit");
        await this.actions.waitUntilElementInVisible(element(by.xpath(this.issueUnitName)), "")
    }
    public async selectFromOrderUnit() {
        await this.actions.click(this.orderUnitIcon, "click magnifying glass icon next to issue unit");
        await this.actions.waitUntilElementVisible(element(by.xpath(this.issueUnitName)), "select from issue unit")
        await this.actions.click(element(by.xpath(this.issueUnitName)), "select from issue unit")
        await this.actions.waitUntilElementInVisible(element(by.xpath(this.issueUnitName)), "")
    }
    public async verifyConfirmationMessage() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.successMessage, "verifying success message")
            flag = await this.actions.isElementDisplayed(this.successMessage, "verifying success message")
            await this.actions.waitUntilElementInVisible(this.successMessage, "")
        } catch (error) {
            console.log("successmessage", +error)
        }
        return await flag;
    }

}