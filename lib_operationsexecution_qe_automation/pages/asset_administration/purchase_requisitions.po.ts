import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper, protractor } from "protractor";
import { BasePage } from "../base.po";
import { PaymentHistoryPage } from "../draynet/payment-history.po";

export class PurchaseRequisitionsPage extends BasePage {
    prNumber: any;
    readonly newPurchaseRequisition_Icon: ElementFinder = element(by.xpath("//img[contains(@id,'toolactions_INSERT-tbb_image')]"));
    readonly prCategory_Icon: ElementFinder = element(by.xpath("//img[contains(@id,'m830d8541-img') and contains(@class,'dButton ')]"));
    readonly category_Element: ElementFinder = element(by.xpath("//td[contains(@id,'lookup_page1_tdrow_[C:0]-c[R:4]')]"));
    readonly prLinesTab: ElementFinder = element(by.xpath("//a[contains(@id,'mbecdd814-tab_anchor') and contains(@class,'text tablabeloff off')]"));
    readonly newRowButton: ElementFinder = element(by.xpath("//button[contains(@id,'mf66f4c27_bg_button_addrow-pb') and contains(@class,'text pb default')]"));
    readonly itemTextBox: ElementFinder = element(by.xpath("//input[contains(@id,'m91683e9c-tb') and contains(@class,'fld text text   ibfld fld_req')]"));
    readonly storeRoomValue: ElementFinder = element(by.xpath("(//label[text()='Storeroom:']/../following-sibling::td/input)[1]"));
    readonly orderUnitValue: ElementFinder = element(by.xpath("(//label[text()='Order Unit:']/../following-sibling::td/input)"));
    readonly unitCost: ElementFinder = element(by.xpath("(//label[contains(text(),'Unit Cost:')]/parent::td/following-sibling::td/input[1])[1]"));
    readonly prTab: ElementFinder = element(by.xpath("//a[contains(@id,'mbf28cd64-tab_anchor') and contains(@class,'text tablabeloff off')]"));
    readonly prNumberTextBox: ElementFinder = element(by.xpath("(//input[contains(@class,'fld text tablefilterfield')])[1]"));
    readonly approveTickMark: ElementFinder = element(by.xpath("//a[contains(@eventtype,'APPROVE')]"));
    readonly okButton = element(by.xpath("//button[text()='OK']"));
    readonly card = element(by.xpath("//img[@id='m5d60c475-img']"));
    readonly selectActionDropDown: ElementFinder = element(by.xpath("//input[@promptvalue='Select Action']/parent::td/following-sibling::td/img[contains(@alt,'Drop-down')]"));
    readonly createPo: ElementFinder = element(by.xpath("//span[text()='Create PO']"));
    readonly orderItemsButton = element(by.xpath("//button[text()='Select Ordered Items']"));
    readonly itemCheckBox = element(by.id("mf9bb799f_tdrow_[C:0]_tbselrow-gr[R:0]"))
    readonly createPoText: ElementFinder = element(by.xpath("//input[@aria-label='PO description']"));
    readonly waitingXPath: ElementFinder = element(by.xpath("//div[@id='wait']"));

    public async clickNewPurchaseRequisitionsItemIcon() {
        await this.actions.waitUntilElementVisible(this.newPurchaseRequisition_Icon, 'click icon')
        await this.actions.click(this.newPurchaseRequisition_Icon, 'click icon');
        await this.actions.shortWait("...");
    }

    public async notePRNumber() {
        let number: string = null;
        try {
            let PRNumber: ElementFinder = element(by.xpath("//input[contains(@id,'m8ee1358-tb') and contains(@class,'fld text text   ib readonlyfld fld_ro')]"));
            await this.actions.waitUntilElementVisible(PRNumber, "");
            number = await PRNumber.getAttribute("value");
        } catch (error) {

        }
        return number;
    }

    public async notePONumber() {
        let number: string = null;
        try {
            let PRNumber: ElementFinder = element(by.xpath("//input[@id='maa8ad01-tb']"));
            await this.actions.waitUntilElementVisible(PRNumber, "");
            number = await PRNumber.getAttribute("value");
        } catch (error) {

        }
        return number;
    }

    public async selectPRCategoryIcon() {
        await this.actions.waitUntilElementVisible(this.prCategory_Icon, 'click PR category magnifying glass')
        await this.actions.click(this.prCategory_Icon, 'click PR category magnifying glass');
    }

    public async selectCategory() {
        let category: ElementArrayFinder = element.all(by.xpath("//tr[contains(@id,'lookup_page1_tbod_tdrow-tr')]"));
        await this.actions.waitUntilElementVisible(category.get(0), "")
        let category_count: number = await category.count();
        console.log("category_count :" + category_count)
        if (await category_count >= 1) {
            let category_Element: ElementFinder = element(by.xpath("//span[text()='DOWN TERMINAL']"));
            await this.actions.click(category_Element, 'click on category');
            await this.actions.waitUntilElementInVisible(category_Element, 'click on category')
        } else {
            console.log("No category present");
            await this.actions.click(element(by.xpath("//button[@ctype='pushbutton' and text()='Cancel']")), "");
        }
    }

    public async clickPRLinesTab() {
        await this.actions.click(this.prLinesTab, 'click on Tab');
    }

    public async clickNewRowButton() {
        await this.actions.waitUntilElementInVisible(this.waitingXPath, "");
        await this.actions.click(this.newRowButton, 'click on button');
        await this.actions.waitUntilElementVisible(this.itemTextBox, "")
    }

    public async enterItemValue(itemNumber: string) {
        await this.actions.waitUntilElementClickable(this.itemTextBox, "")
        await this.actions.setText(this.itemTextBox, itemNumber, 'enter itemNumber');
        await this.itemTextBox.sendKeys(protractor.Key.TAB);
        try {
            if (await this.isSelectValuePopUpDisplayed()) {
                let xpath = element(by.xpath("//table[contains(@id,'dialog_inner')]//td/span[contains(text(),'" + itemNumber + "')]"));
                await this.actions.click(xpath, "click element");
                await this.actions.waitUntilElementInVisible(xpath, "")
            }
        }
        catch (error) {

        }
    }

    public async enterStoreroomValue(storeRoomValue: string) {
        await this.actions.waitUntilElementVisible(this.storeRoomValue, "")
        await this.actions.setText(this.storeRoomValue, storeRoomValue, 'Set Text');
        await this.actions.sendKeysTab("");
        try {
            if (await this.isSelectValuePopUpDisplayed()) {
                let xpath = element(by.xpath("//table[contains(@id,'dialog_inner')]//td/span[contains(text(),'" + storeRoomValue + "')]"));
                await this.actions.click(xpath, "click element");
            }
        }
        catch (error) {

        }
    }

    public async enterOrderUnitValue(orderUnit: string) {
        await this.actions.shortWait("waiting for browser sync");
        await this.actions.clearText(this.orderUnitValue, '');
        await this.actions.setText(this.orderUnitValue, orderUnit, 'set Text');
        await this.actions.shortWait("waiting for browser sync")
    }

    public async enterUnitCostValue(unitCost: string) {
        console.log("Unit Cost  - ", unitCost);
        await this.actions.shortWait("waiting for browser sync")
        await this.actions.clearText(this.unitCost, "")
        await this.actions.setText(this.unitCost, unitCost, 'set Text');
        await this.actions.shortWait("waiting for browser sync")
    }

    public async selectDebitCard() {
        let count = 0;
        let xpath = element(by.xpath("//td[@id='lookup_page1_tdrow_[C:0]-c[R:0]']"))
        try {
            await this.actions.click(this.card, "");
            let cardDetails = element.all(by.xpath("//span[@id='m2fc9df1a-gln_segments']/a"));
            await this.actions.waitUntilElementVisible(cardDetails.get(0), "");
            count = await cardDetails.count();
            await console.log("count is " + count)
            for (let index = 0; index < count; index++) {
                await this.actions.click(xpath, "");
                await this.actions.shortWait("wait..")
                await console.log("count....")
                await this.actions.waitUntilElementClickable(xpath, "")
            }
            await this.actions.click(element(by.xpath("//button[text()='OK']")), "")

        } catch (error) {
            console.log("error " + error)
        }
    }

    public async clickPRTab() {
        await this.actions.waitUntilElementVisible(this.prTab, 'click on tab')
        await this.actions.click(this.prTab, 'click on tab');
        await this.actions.waitUntilElementVisible(element(by.xpath("//h1//label[contains(text(),'Vendor')]")), "");
    }

    public async setPrNumber(prNumberValue: string) {
        await this.actions.clearText(this.prNumberTextBox, "")
        await this.actions.setText(this.prNumberTextBox, prNumberValue, 'set Text');
        await this.actions.sendKeysEnter("Enter after prNumber");
    }

    public async clickPrNumberHyperLink(prNumberValue: string) {
        let prNumberHyperLink: ElementFinder = element(by.xpath("//span[contains(text(),'" + prNumberValue + "')]"));
        await this.actions.waitUntilElementVisible(prNumberHyperLink, "Prnumber hyper link visible")
        await this.actions.click(prNumberHyperLink, "Prnumber hyper link click")
    }

    public async clickApproveTickMark() {
        await this.actions.mediumWait("...");
        await this.actions.waitUntilElementVisible(this.approveTickMark, 'clickApproveTickMark')
        await this.actions.click(this.approveTickMark, 'clickApproveTickMark');
    }

    public async clickOkButton() {
        await this.actions.click(this.okButton, 'clickOkButton');
        await this.actions.waitUntilElementInVisible(this.okButton, "");
    }

    public async verifyApproveStatus() {
        let xpath = element(by.xpath("//td[contains(text(),'status changed to APPR')]"));
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(xpath, "")
            flag = true;
            await this.actions.waitUntilElementInVisible(xpath, "")
        } catch (error) {

        }
        return await flag;
    }

    public async clickOnCreatepo() {
        await this.actions.waitUntilElementInVisible(this.okButton, 'selectActionDropDown');
        await this.actions.waitUntilElementInVisible(this.waitingXPath, "");
        await this.actions.click(this.selectActionDropDown, 'select action dropdown');
        await this.actions.waitUntilElementVisible(this.createPo, 'clickOnCreatepo');
        await this.actions.click(this.createPo, 'click on create po');
    }

    public async setTextInCreatePoTextBox() {
        await this.actions.waitUntilElementVisible(this.createPoText, 'wait for element');
        await this.actions.clearText(this.createPoText, 'clear Text In CreatePoTextBox');
        await this.actions.setText(this.createPoText, 'Test', 'setTextInCreatePoTextBox');
    }

    public async verifyFinalSuccessMessage() {
        let success_Message: ElementFinder = await element(by.xpath("//td[contains(text(),'Process JBH MAINPO started.')]"));
        await this.actions.waitUntilElementVisible(success_Message, "");
        let success_MessageDisplayed: boolean = await success_Message.isPresent();
        if (success_MessageDisplayed) {
            await this.actions.waitUntilElementInVisible(success_Message, "")
            return true;
        }
        return false;
    }

}