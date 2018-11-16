import { browser, by, element, ElementFinder, ExpectedConditions, protractor, ElementArrayFinder } from 'protractor';
import { CommonFunctions } from "../../utilities/common-functions";
import { BasePage } from '../base.po';

let EC = protractor.ExpectedConditions;
let commonFunctions = new CommonFunctions();

export class AreaPoolPage extends BasePage {

    clickOnDivision: ElementFinder;
    selectDivisionType: ElementFinder;
    readonly enterCity = element(by.xpath("//input[@id='form:cityState']"));
    readonly loadingIcon = element(by.id("form:j_id155:connection-idle"));

    public async selectDivision() {
        this.selectDivisionType = element(by.xpath("//select[@id='form:division']/option[contains(., 'HJBT JBVAN')]"))
        await this.actions.click(this.selectDivisionType, "Select the Division Type")
    };

    public async waitForSearchResult() {
        return await browser.wait(EC.visibilityOf(this.loadingIcon), 1000000);
    };

    public async getColumnIndexOfVariableHeaderText(tableid: string, header1: string) {
        let tblIndex: number = 0;
        let flag: boolean = true;
        var chk1: string;
        try {
            let tableHeaders: ElementArrayFinder = element.all(by.xpath("//table[@id='form:" + tableid + "']//th"));
            let tableHeadersCount = await tableHeaders.count();
            for (let i: number = 1; i < tableHeadersCount; i++) {
                chk1 = await element(by.xpath("//table[@id='form:" + tableid + "']//tr[1]//th[" + i + "]")).getText();
                if (chk1.indexOf(header1) >= 0) {
                    tblIndex = i;
                    console.log("tblIndex", tblIndex);
                    break;
                }
            }
        }
        catch (error) {
            console.log("error" + error);
        }

        return await tblIndex;
    }

    public async clickOnCurrentPoolLink() {
        let emptyPoolColumnIndex = await this.getColumnIndexOfVariableHeaderText("inboundLoadViewTable", "Empty Pool")
        let currentPoolColumnIndex = await this.getColumnIndexOfVariableHeaderText("inboundLoadViewTable", "Current Pool")
        let xpath = "//*[@id='form:inboundLoadViewTable']//td[" + emptyPoolColumnIndex + "][.//text()>=10]/ancestor::tr/td[" + currentPoolColumnIndex + "]//a";
        console.log(xpath)

        do {
            let currentPoolElement: ElementFinder = element(by.xpath(xpath));
            if (await currentPoolElement.isPresent()) {
                await currentPoolElement.click();
                await this.actions.waitBrowserTitleEqualsTo("Customer Lookup")
                return ("Element Found")
            }

        } while (await commonFunctions.pagination()); {
            return "";
        }
    }

}