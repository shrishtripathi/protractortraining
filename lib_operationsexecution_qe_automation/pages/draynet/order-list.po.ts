
import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class OrderListPage extends BasePage {


    readonly closeCheckcall: ElementFinder = element(by.xpath("//label[contains(text(),'Check Call')]/following-sibling::div/a/div"));
    readonly cancel: ElementFinder = element(by.xpath("//button[contains(text(),'Cancel')]"));
    readonly shipStatus: ElementFinder= element(by.xpath("//label[contains(text(),'Ship Status')]"));
    readonly orderNumberSearch: ElementFinder= element(by.xpath("//tr[@class='icePnlGrdRow1']//span[text()='Division:']/../.."));

    public async clickCheckCall() {
        do {
            let checkCallClickable: ElementArrayFinder = element.all(by.xpath("//button[(text()='CC') and not(contains(@name,'checkcallDisabled'))]"));
            let checkCallClickableCount: number = await checkCallClickable.count();
            console.log("checkCall count " + checkCallClickableCount)
            if (checkCallClickableCount > 0) {
                for (let index: number = 0; index <= checkCallClickableCount; index++) {
                    await checkCallClickable.get(index).click();
                    return true;
                }

            }
        }
        while (true) {
            try {
                await this.pagination();
            } catch (error) {
                console.log(error)
            }
        }
    }


    public async pagination() {

        let nextButtonEnabled: ElementFinder = element(By.xpath("//td/a[text()='Next']"));
        let nextButtonIsDisable: boolean = await element(By.xpath("//a[text()='Next' and contains(@onclick,'return false')]")).isPresent();
        if (!nextButtonIsDisable) {
            console.log("inside next button enabled");
            await nextButtonEnabled.click();
            await this.waitForActionToComplete();
            return true;
        }
        else {
            console.log("completed pagination, next button is disabled no data is found with given criteria");
            return false;
        }
    }

    public async closeCheckCall() {
        await this.waitForElementIsVisible(this.closeCheckcall)
        await this.actions.click(this.closeCheckcall, 'click closeCheckcall');
    }

    public async clickSS() {
        do {
            await this.actions.mediumWait("wait for SS to load")
            let sSClickable: ElementArrayFinder = element.all(by.xpath("//button[contains(text(),'SS') and not(contains(@disabled,'disabled'))]"))
            let sSClickableCount: number = await sSClickable.count();
            console.log("SS count " + sSClickableCount)
            if (sSClickableCount > 0) {
                for (let index: number = 0; index <= sSClickableCount; index++) {
                    await sSClickable.get(index).click();
                    return true;
                }

            }
        }
        while (await this.pagination())

    }

    public async clickCancel() {
        await this.waitForElementIsVisible(this.cancel)
        await this.actions.click(this.cancel, 'cancel click');
    }

}


