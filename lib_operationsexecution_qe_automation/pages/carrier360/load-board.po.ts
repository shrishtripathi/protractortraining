import { browser, by, element, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';
import { protractor } from 'protractor';
import { By } from "selenium-webdriver";
import { BasePage } from '../base.po';
import { CommonFunctions } from '../../utilities/common-functions';
import { AcceptanceNeededPage } from './acceptance-needed.po';

let acceptanceNeededPage = new AcceptanceNeededPage();

export class LoadBoardPage extends BasePage {

    readonly manageBoard: ElementFinder = element(By.xpath("//div[text()='Manage Loads']/ancestor :: li[contains(@class,'x-treelist-item x-treelist-item-with-icon x-treelist-item-expandable x-treelist-item-collapsed')]"));
    readonly acceptanceNeeded: ElementFinder = element(by.xpath("//div[text()='Acceptance Needed']/ancestor :: li[@class='x-treelist-item']"));
    readonly billToCode: ElementFinder = element(by.xpath("//input[@id='eomSearchMain:billto']"));
    readonly searchSkeletons: ElementFinder = element(by.xpath("//input[@id='eomSearchMain:advNext']"));
    readonly search_value: ElementFinder = element(by.xpath("//input[@id='eomSearchMain:baseSearchVal']"));

    public async clickOnCarrierTabs(tabElement: ElementFinder) {
        await this.actions.waitUntilElementInVisible(element(by.xpath("(//div[@role='presentation' and text()='Loading...'])[1]")), "");
        await this.actions.waitUntilElementVisible(tabElement, "");
        await this.actions.click(tabElement, "");
    }

    public async findRecordInAcceptanceTable() {
        await this.actions.waitUntilElementVisible(element(by.xpath("(//div[@class='x-grid-item-container']/table[1])[1]")), "")
        await this.actions.waitUntilElementInVisible(acceptanceNeededPage.loadingElement, "")
        let rowTobeSelect: ElementFinder = element(by.xpath("(//div[@class='grid-long-text caution-class' and text()='Past Due' or contains(text(),'Hours')])[1]"))
        console.log("row : " + await rowTobeSelect.isPresent())
        try {
            if (await rowTobeSelect.isPresent()) {
                let elementTobeClick: ElementFinder = element(by.xpath("(//div[@class='grid-long-text caution-class' and text()='Past Due' or contains(text(),'Hours')])[1]/../../following-sibling :: td//span[text()='View and Respond']"))
                await this.actions.waitUntilElementClickable(elementTobeClick, "");
                await this.actions.click(elementTobeClick, "");
                await this.actions.waitUntilElementInVisible(acceptanceNeededPage.loadingElement, "");
                if (!await element(by.xpath("(//div[contains(@id,'component') and contains(text(),'Tender Agreement')])[1]")).isPresent()) {
                    await this.actions.click(elementTobeClick, "");
                }
                let counter: number = 1;
                do {
                    await this.actions.shortWait("");
                    counter++;
                } while (! await element(by.xpath("(//div[contains(@id,'component') and contains(text(),'Tender Agreement')])[1]")).isPresent() && await counter <= 15)
                await this.actions.waitBrowserTitleEqualsTo("J.B. Hunt 360 - Tender Agreement");
                if (await element(by.xpath("(//div[contains(@id,'component') and contains(text(),'Tender Agreement')])[1]")).isPresent()) {
                    return true;
                }
            }
        } catch (e) {
            console.log("timestamp row not found" + e);

        }
        return false;
    }

    public async browserRefresh() {

        await browser.refresh();
        await this.waitForPageLoad();

    }
}