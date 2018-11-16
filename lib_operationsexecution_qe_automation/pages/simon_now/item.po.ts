import { browser, by, element, ElementFinder, ExpectedConditions, protractor } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';

export class ItemPage extends BasePage {

    readonly itemCode = element(by.xpath("//input[@name='itemCode']"));
    readonly itemDescription = element(by.xpath("//input[@name='itemDsc']"));
    readonly rowEditor: ElementFinder = element(by.xpath("//div[contains(@id,'roweditor')]"));
    readonly expiryDate: ElementFinder = element(by.xpath("//input[@name='endItemDate']"));

    public async setText(element: ElementFinder, text: string) {
        await this.actions.clearText(element, "Clear Text");
        await this.actions.setText(element, text, "Set Text");
    }

    public async clickOnItem(text: string) {
        let result: boolean = true;
        let item: boolean = true;
        let nextElement: ElementFinder = element(by.xpath("//a[contains(@data-qtip,'Next Page')]/span/parent::a[@aria-disabled='false']"));
        while (result) {
            item = await this.text(text).isPresent();
            if (item) {
                await this.actions.waitUntilElementVisible(this.text(text), "Wait untill element visibile");
                await this.actions.click(this.text(text), "click on item");
                await this.actions.waitUntilElementVisible(this.rowEditor, "Wait untill row editor is displayed ");
                result = false;
            } else {
                if (await nextElement.isPresent()) {
                    await this.actions.click(nextElement, "Click on next button");
                } else {
                    return await console.log("completed pagination, next button is disabled no data is found with given criteria");
                }
            }
        }
    }

    public async clickOnButton(buttonName: string) {
        let button = element(by.xpath("//*[contains(text(),'" + buttonName + "')]//ancestor::a"));
        await this.actions.click(button, "Click on Button");
    }

}