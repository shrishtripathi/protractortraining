import { browser, ElementFinder, element, by } from "protractor";
import { BasePage } from "../base.po";

export class OBCExceptionsPage extends BasePage {

  readonly savePreferencesButton = element(by.xpath("//button[contains(text(),'Save Preference')]"));
  readonly boardCodeTableTextBoxes = "(//div[@class='icePnlClpsblCnt']//table[@class='icePnlGrd']//input)";
  readonly emptyPreplanText = element(by.xpath("(//td[text()='MTY PP'])[1]"));
  readonly nextLink = element(by.xpath("//a[text()='Next']"));
  readonly verifySavePreferences = element(by.xpath("//span[text()='Preference Saved']"));
  readonly miniCheckCall = element(by.xpath("//tr[@class='iceDatTblRow2']/following-sibling::tr[@style='display:']"));
  readonly tractorNumberUnderMiniCheckCall = element(by.xpath("(//span[text()='Tractor ']/following-sibling::a[contains(@style,'color')])[2]"));
  readonly searchButton = element(by.xpath("//button[contains(text(),'Search')]"));
  readonly searchResults = element.all(by.xpath("//table[@id='form:boardExceptionPageResult']/child::tbody/tr[contains(@class,'iceDatTblRow')]"));
  readonly boardCodeTextBox = element(by.xpath("(//div[@class='icePnlClpsblCnt']//table[@class='icePnlGrd']//input)[1]"));
  readonly emptyPreplanText2 = element(by.xpath("(//td[text()='MTY PP'])[2]"));
  readonly verifyMiniCheckCall = element(by.xpath("((//td[text()='MTY PP'])[2]/ancestor::tr/preceding-sibling::tr[@style='display:'])"));
  readonly miniCheckCallForSelectedDriver = element(by.xpath("//tr[@class='iceDatTblRow2']/following-sibling::tr[@style='display:']//span[text()='Tractor ']"));

  public async isMiniCheckCallPresent() {
    let flag: boolean = false;
    try {
      await this.waitForActionToComplete();
      await this.actions.waitUntilElementVisible(this.miniCheckCall, "mini check call");
      flag = await this.actions.isElementDisplayed(this.miniCheckCall, "mini check call");
    } catch (error) {
       console.log("error is "+error)
    }
    return await flag;
  }

  public async isMiniCheckCallPresentforSelectedDriver() {
    let flag: boolean = false;
    try {
      await this.waitForActionToComplete();
      await browser.sleep(5000);
      flag = await this.actions.isElementDisplayed(this.miniCheckCallForSelectedDriver, "mini check call");
    } catch (error) {
       console.log("erro is "+error)
    }
    return await flag;
  }

  public async clickOnTractorNumberUnderMiniCheckCall() {
    await this.actions.shortWait("wait");
    await this.actions.click(this.tractorNumberUnderMiniCheckCall, "Tractor Number Under Mini Check Call");
  }

  public async clickOnSavePreferences() {
    let flag: boolean = false;
    try {
      await this.actions.click(this.savePreferencesButton, "SavePreferences Button");
      await this.waitForActionToComplete();
      await this.actions.waitUntilElementVisible(this.verifySavePreferences, "verify Save Preferences...");
      flag = await this.actions.isElementDisplayed(this.verifySavePreferences, "verify Save Preferences");
    } catch (error) {

    }
    return await flag;
  }

  public async doubleClickOnMTYPP() {
    do {
      await this.waitForActionToComplete();
      await this.actions.waitUntilElementVisible(this.emptyPreplanText, "MTY PP");
      if (await this.actions.isElementDisplayed(this.emptyPreplanText, "MTY PP")) {
        await this.actions.doubleClick(this.emptyPreplanText, "MTY PP");
        break;
      }
    } while (await this.pagination())
  }

  public async verifySearchResults() {
    let count: number = 0;
    try {
      await this.waitForActionToComplete();
      count = await this.searchResults.count();
      console.log("count is "+count);
    } catch (error) {
    }
    return await count;
  }

  public async verifyMiniCheckCallAbsence() {
    await this.actions.doubleClick(this.emptyPreplanText2, "Double click");
    await this.waitForActionToComplete();
    return this.actions.isElementNotDisplayed(this.verifyMiniCheckCall, "Mini check call");
  }

}