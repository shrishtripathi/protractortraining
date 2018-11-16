import { browser, ElementFinder, element, by } from "protractor";
import { BasePage } from "./base.po";
import { By } from "selenium-webdriver";
import { ElementArrayFinder } from "protractor/built/element";


export class ASMFullScreenPage extends BasePage {

  readonly ordersDivisionTextBox = element(by.xpath("(//div[text()='Division']/../input)[1]"));
  readonly ordersAreaTextBox = element(by.xpath("(//div[text()='AREA']/../input)[1]"));
  readonly searchButton = element(by.xpath("//button[contains(text(),'Search')]"))
  readonly verifySearchResultsForOrder = element.all(by.xpath("//td[contains(@class,'iceDatTblCol1') and text()='CH']"));

  async sendKeysToDivisionTextBox(data) {
    await this.actions.clearText(this.ordersDivisionTextBox, "clear text");
    await this.actions.setText(this.ordersDivisionTextBox, data, "sending " + data + " to division text box");

  }
  async sendKeysToAreaTextBox(data) {
    await this.actions.clearText(this.ordersAreaTextBox, "clear text");
    await this.actions.setText(this.ordersAreaTextBox, data, "sending " + data + " to Area text box");

  }
  async clickOnSearchButton() {
    await this.actions.click(this.searchButton, "Search Button");

  }
  async verifyResultsForSearchOrderTable() {
    let count: number = 0;
    try {
      await browser.sleep(5000);
      await this.actions.waitUntilElementVisible(this.verifySearchResultsForOrder.get(0), "wait till element found");
      count = await this.verifySearchResultsForOrder.count();
      console.log("count is " + count);
    } catch (error) {
      console.log("test " + error)
    }
    return await count;

  }
}