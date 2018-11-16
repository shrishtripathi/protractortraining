import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser, ElementArrayFinder } from "protractor";

export class TravelSearchPage extends BasePage {

    readonly searchResultTableHeaderXpath: ElementFinder = element(by.xpath(`//tr[ td[text()='SSN']]`));

    public async enterTravelDate(toOrFrom: string, mm, dd, yyyy) {
        let mmXpath: ElementFinder = element(by.id('class' + toOrFrom + 'Date_mm'));
        let ddXpath: ElementFinder = element(by.id('class' + toOrFrom + 'Date_dd'));
        let yyyyXpath: ElementFinder = element(by.id('class' + toOrFrom + 'Date_yyyy'));

        await mmXpath.clear();
        await this.setText(mmXpath, mm)
        await ddXpath.clear();
        await this.setText(ddXpath, dd)
        await yyyyXpath.clear();
        await this.setText(yyyyXpath, yyyy)
    }

    public async getColumnIndexOfModeOfTravelTable(columnLable: string) {
        let tableHeaderXpath: ElementArrayFinder = element.all(by.xpath(`(//tr[ td[text()='` + columnLable + `']])[1]/td`))
        let requiredColumnIndex: number
        for (let index = 1; index <= await tableHeaderXpath.count(); index++) {
            let columnXpath: ElementFinder = element(by.xpath(`(//tr[ td[text()='` + columnLable + `']])[1]/td[` + index + `]`));
            if (await columnXpath.getText() == columnLable) {
                requiredColumnIndex = index;
                console.log(`requiredColumnIndex: ` + requiredColumnIndex)
            }
        }
        return requiredColumnIndex;
    }

    public async clickOnModeOfTravelLink(columnLable) {
        let ssnColumnIndex = await this.getColumnIndexOfModeOfTravelTable(columnLable)
        let ssnLinkXpath: ElementFinder = element(by.xpath(`(//tr[@valign='bottom']/td[` + ssnColumnIndex + `][a])[1]`));
        await this.click(ssnLinkXpath)
    }
}