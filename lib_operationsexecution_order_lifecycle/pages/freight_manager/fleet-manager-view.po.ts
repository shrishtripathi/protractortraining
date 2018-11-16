import { browser, by, element, ElementFinder, ExpectedConditions, By } from 'protractor';
import { BasePage } from '../base.po';

export class FleetManagerView extends BasePage {

    textBoxBoardCode: ElementFinder;
    readonly dropDownOption = element(by.xpath("//option[@value='Board Code']"));
    readonly buttonSavePrefs = element(by.xpath("//button[@type='submit' and contains(., 'Save Preferences')]"));
    readonly buttonSearchOnFM2 = element(by.xpath("//button[text()='Search' or @id='form:search']"));
    readonly firstRowSearchResult = element(by.xpath("//tr[@id='form:boardExceptionPageResult:0']"));
    readonly textmessageInfo = element(by.xpath("//span[@id='form:j_id3023']"));

    public enterBoardCode(boardCodeIndex: number, boardCodeValue: string, logName: string) {
        this.textBoxBoardCode = element(by.xpath("//input[@id='form:search" + boardCodeIndex + "']"));
        this.textBoxBoardCode.clear();
        this.actions.setText(this.textBoxBoardCode, boardCodeValue, "Enter Board text in " + logName);
    }
    
    public verifySavePreferenceSuccessMessage() {
        this.actions.verifyText(this.textmessageInfo, "Set prefrence message is displayed", "Search Values saved as defaults")
    }

    public async clickSearchButtonInFM2Page() {
        this.actions.click(this.buttonSearchOnFM2, "Click on Search Button on FM2 Page");
        await this.actions.longWait("Waiting to load");
        let nextButtonEnabled: ElementFinder = await element(By.xpath("//td/a[text()='Next']"));
        await this.actions.waitUntilElementClickable(nextButtonEnabled, "Next Button");
    }
}