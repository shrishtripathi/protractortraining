import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';

export class InitiatePayrollPage extends BasePage {


    public async verifyPayrollSummaryDetails(data_Values: string[]) {
        await browser.sleep(5000);
        await this.waitForPageLoad();
        let check_Table: ElementFinder = element(by.xpath("((//table[@class='panelTable'])[3]//tr[@class='resultsRowAlt'])[2]"));
        if (await check_Table.isPresent()) {
            let payItemCode: string = await element(by.xpath("((//table[@class='panelTable'])[3]//tr[@class='resultsRowAlt'])[2]/td[4]")).getText();
            let quantity: string = await element(by.xpath("((//table[@class='panelTable'])[3]//tr[@class='resultsRowAlt'])[2]/td[5]")).getText();
            let measure: string = await element(by.xpath("((//table[@class='panelTable'])[3]//tr[@class='resultsRowAlt'])[2]/td[6]")).getText();
            let rate: string = await element(by.xpath("((//table[@class='panelTable'])[3]//tr[@class='resultsRowAlt'])[2]/td[7]")).getText();
            let amount: string = await element(by.xpath("((//table[@class='panelTable'])[3]//tr[@class='resultsRowAlt'])[2]/td[8]")).getText();
            let rate1 = await rate.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');
            let amount1 = await amount.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');

            if (await data_Values[0].search(payItemCode) !== -1 &&
                await quantity.search(data_Values[1]) !== -1 &&
                await data_Values[2].search(measure) !== -1 &&
                await data_Values[3].search(rate1) !== -1 &&
                await data_Values[4].search(amount1) !== -1) {
                return true;
            }
        }
        return false;
    }

    public async enterCommentOnPaySummary(val_Comment: string) {
        let check_Comment1: ElementArrayFinder = element.all(by.xpath("((//table[@class='panelTable'])[3]//tr//textarea)"));
        console.log("count: " + await check_Comment1.count());
        for (let i = 0; i < await check_Comment1.count(); i++) {
            let check_Comment: ElementFinder = element(by.xpath("((//table[@class='panelTable'])[3]//tr//textarea)[" + (i + 1) + "]"));
            await this.actions.click(check_Comment, "comment");
            await this.actions.setText(check_Comment, val_Comment, "");

        }
    }

    public async verifyPayrollApprovalDetails(data_Values: string[]) {
        let check_Table: ElementFinder = element(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRow']"));
        await this.waitForPageLoad();
        if (await check_Table.isPresent()) {
            let quantity: string = await element(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRow']/td[2]")).getText();
            let measure: string = await element(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRow']/td[3]")).getText();
            let amount: string = await element(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRow']/td[4]")).getText();
            let amount1 = await amount.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');
            if (await data_Values[1].search(quantity) !== -1 &&
                await data_Values[2].search(measure) !== -1 &&
                await data_Values[4].search(amount1) !== -1) {
                return true;
            }
        }
        return false;
    }

    public async verifySuccessMessage(text: string) {
        let counter: number = 1;
        let check_Message: ElementFinder = element(by.xpath("//li[contains(text(),'" + text + "')]"));
        do {
            await this.actions.shortWait("waiting");
            counter++;
        } while (! await check_Message.isPresent() && await counter <= 10)
        if (await check_Message.isPresent()) {
            return true;
        }
        return false;
    }

}