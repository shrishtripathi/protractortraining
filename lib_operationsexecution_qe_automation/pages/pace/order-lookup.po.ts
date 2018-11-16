
import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";


export class OrderLookupPage extends BasePage {
    readonly statusOfOrder: string = "//select[@name='selectedOrderStatus']/option";
    readonly loadClassification = "//select[@name='selectedLoadClasification']/option"
    readonly editTripButton: ElementFinder = element(by.name("editTrip"));

    public async clickRadioButton(radioButtonName: string) {
        let xpath: ElementFinder = element(by.xpath("//input[@value='" + radioButtonName + "']"));
        let status = await xpath.getAttribute("checked");
        console.log("status", status);
        if (status == "true") {
            console.log("CheckBox is cheked");
        }
        else {
            await this.actions.click(xpath, "Click " + xpath + "");
        }
    }

    public async setStatusOfOrderDropdown(value: string) {
        await this.actions.selectByValue(this.statusOfOrder, value, "Selecting value to status of order dropdown");
    }

    public async setLoadClassificationDropdown(value: string) {
        await this.actions.selectByValue(this.loadClassification, value, "Selecting value to load Classification dropdown");
    }

    public async clickOnButton(buttonName: string) {
        let xpath: ElementFinder = element(by.xpath("//input[@value='" + buttonName + "']"));
        await this.actions.click(xpath, "Clicking on " + buttonName + " ");
    }

    public async clickOnRadioButton(lableText: string) {
        let radioButtonXpath: ElementFinder = element(by.xpath("//td[contains(.,'" + lableText + "')]/input"));
        await this.actions.click(radioButtonXpath, "click " + lableText + " radio button");
    }
    public async jbhOrderText(lableText: string, orderNumber: string) {
        let enterJbhOrder: ElementFinder = element(by.xpath("(//td[contains(.,'" + lableText + "')]/following-sibling::td)/input"));
        await this.actions.setText(enterJbhOrder, orderNumber, "enter jbh order ");
    }

    public async selectJBHRadioButton() {
        let radioButtonXpath: ElementFinder = element(by.xpath("//input[@id='radio4']"));
        await this.actions.click(radioButtonXpath, "click radio button");
    }

    public async jbhOrder(orderNumber: string) {
        let enterJbhOrder: ElementFinder = element(by.xpath("//input[@id='radio4']/parent::td/following-sibling::td/input"));
        await this.actions.setText(enterJbhOrder, orderNumber, "enter jbh order ");
    }

}

















