import { BasePage } from "../base.po";
import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { ActionLibrary } from "../../utilities/action-library";

export class PositionPipeLineSummaryPage extends BasePage {

    readonly pipelineStateDropDown: ElementFinder = element(by.xpath("//select[@name='criteria.stateId']"));
    readonly pipelineStateDropDownOptions: string = "//select[@name='criteria.stateId']/option";
    readonly jobDescriptionLink: ElementFinder = element(by.xpath("//table[@id='results']/tbody/tr[1]//td[4]/a"));
    readonly hrJobHyperLink: ElementFinder = element(by.xpath("//table/tbody/tr[3]/td[1]/a"));
    readonly hrPositionsTab: ElementFinder = element(by.xpath("//li/a/span[text()='HR Position']/parent::a"));
    readonly pipelineLocationDropDown: ElementFinder = element(by.xpath("//select[@name='subposition.locationName']"));
    readonly pipelineLocationDropDownOptions: string = "//select[@name='subposition.locationName']/option";
    
        
    public async setOptionFromDropDown(optionsList: string, option: string, dropDownName: ElementFinder) {
        await this.actions.click(dropDownName, "Click on Tab");
        await this.actions.selectByValue(optionsList, option, "select value");
    }

}