import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser, ExpectedConditions } from "protractor";

export class CustomerRequestPage extends BasePage {

    readonly editRequestCancelButton: ElementFinder = element(by.xpath("//button[@title='Cancel this action']"));;

    public async clickOnLink(linkName: string) {
        let link: ElementFinder = element(by.xpath("//a[text()='"+linkName+"']"));
        await this.actions.click(link, "Click on link name");
    }
}