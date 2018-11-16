import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser } from "protractor";

export class ConfirmationSearchPage extends BasePage {

    readonly fromDateMM: ElementFinder = element(by.id("classFromDate_mm"));
    readonly apptTypeDropDown: ElementFinder = element(by.xpath("//select[@name='apptTypeSelection']"));
    readonly apptTypeDropDownOptions: string = "//select[@name='apptTypeSelection']/option";
    readonly resultList: ElementFinder = element(by.xpath("//table[@class='striped hoverHighlight']/tbody/tr"));

    public async setOptionFromDropDown(optionsList: string, option: string, dropDownName: ElementFinder) {      
        await this.actions.click(dropDownName, "Click on Tab");
        await this.actions.selectByValue(optionsList, option, "select value");
    }
}