import { by, element, ElementFinder } from 'protractor';
import { BasePage } from "../base.po";

export class OrderHistory extends BasePage {

    readonly searchIcon: ElementFinder = element(by.xpath("//img[contains(@onclick,'showAdvSearchBox')]"));
    readonly searchCriteriaDropDown: ElementFinder = element(by.xpath("//select[@id='searchBy']"));
    readonly searchCriteriaOptions: string = "//select[@id='searchBy']/option";
    readonly searchTextBox: ElementFinder = element(by.xpath("//input[@id='searchByValue']"));
    readonly searchButton: ElementFinder = element(by.xpath("//input[@onclick='doSearch();']"));
    readonly tenderHyperLink = element(by.xpath("//tr[contains(@class,'row')]//a[contains(.,'TENDER') ]"));

    public async clickOnSearchIcon() {
        await this.actions.click(this.searchIcon, "click On search icon");
    }
    public async selectSearchCriteria(value: string) {

        await this.actions.selectByValue(this.searchCriteriaOptions, value, "selecting Shipper as search criteria");
    }
    public async setSearch(value: string) {
        await this.actions.clearText(this.searchTextBox, "clear text");
        await this.actions.setText(this.searchTextBox, value, "set search");
    }
    public async clickOnSearchButton() {
        await this.actions.click(this.searchButton, "click On search button");
        await this.actions.shortWait("");
        await this.waitForPageLoad();
    }
    public async verifyNextStep(text: string) {
        let nextStepValue: string = await element(by.xpath("(//td[text()='ORD #']/ancestor :: thead/following-sibling :: tbody//tr//td[3])[1]")).getText();
        if (nextStepValue.trim() === text.trim()) {
            return true;
        }
        return false;
    }

    public async VerifyNextStepAndCARRStatus(next_Stop:string,Carr_Value:string){
        await this.actions.waitUntilElementVisible(element(by.xpath("//tbody//tr[@class='row']")),"");
        let nextStepValue: string = await element(by.xpath("(//td[text()='ORD #']/ancestor :: thead/following-sibling :: tbody//tr//td[3])[1]")).getText();
        console.log("nextStepValue: " + nextStepValue);
        let CarrValue: string = await element(by.xpath("(//td[text()='ORD #']/ancestor :: thead/following-sibling :: tbody//tr//td[9])[1]")).getText();
        console.log("CarrValue: " + CarrValue);
        if(nextStepValue.trim() !== next_Stop.trim()){
            await this.actions.click(element(by.xpath("//img[@onclick='refreshPage();']")),"");
            await this.actions.shortWait("");
        }
        if (nextStepValue.trim() === next_Stop.trim() && CarrValue.trim() === Carr_Value.trim()) {
            return true;
        }
        return false;

    }

    public async VerifyNextStepAndAvailableRatesStatus(next_Stop:string,rate_Value:string){
        let nextStepValue: string = await element(by.xpath("(//td[text()='ORD #']/ancestor :: thead/following-sibling :: tbody//tr//td[3])[1]")).getText();
        let AvailableRateValue: string = await element(by.xpath("(//td[text()='ORD #']/ancestor :: thead/following-sibling :: tbody//tr//td[6])[1]")).getText();
        if (nextStepValue.trim() === next_Stop.trim() && AvailableRateValue.trim() === rate_Value.trim()) {
            return true;
        }
        return false;
    }

}