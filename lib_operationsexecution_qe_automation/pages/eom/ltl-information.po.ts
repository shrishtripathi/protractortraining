import { by, element, ElementFinder, ElementArrayFinder, browser } from 'protractor';
import { BasePage } from '../base.po';

export class LTLInformationPage extends BasePage {

    readonly search_option: ElementArrayFinder = element.all(by.xpath("//select[@id='eomSearchMain:baseSearchList']/option"));
    readonly search_value: ElementFinder = element(by.xpath("//input[@id='eomSearchMain:baseSearchVal']"));
    readonly newLineDataList: ElementArrayFinder = element.all(by.xpath("//table[@id='frmLtlInformation:dtNewLtlLineItemTable']/tbody/tr/td/input[@value= '-']"));
    readonly ltlLinesAddedToLoad: ElementArrayFinder = element.all(by.xpath("//table[@id='frmLtlInformation:lLtlLineItemsListTable']/tbody/tr"));
    readonly input_field: ElementFinder = element(by.xpath("(//input[contains(@name,'frmLtlInformation:dtNewLtlLineItemTable')])[4]"));
    readonly input_field1: ElementFinder = element(by.xpath("(//input[contains(@name,'frmLtlInformation:dtNewLtlLineItemTable:1')])[1]"));


    public async setValuesIntoNewLineItems(arr_values: string[]) {
        console.log("array length : " + arr_values.length);
        if (arr_values[0].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("(//input[contains(@name,'frmLtlInformation:dtNewLtlLineItemTable')])[1]"));
            await this.actions.clearText(input_field, "product desc");
            await this.actions.setText(input_field, arr_values[0], "product desc");
        }

        if (arr_values[1].length >= 1) {
            await this.actions.selectByValue("(//select[contains(@name,'frmLtlInformation:dtNewLtlLineItemTable')])[1]/option", arr_values[1], "class code");
        }
        if (arr_values[2].length >= 1) {
            await this.actions.selectByValue("(//select[contains(@name,'frmLtlInformation:dtNewLtlLineItemTable')])[2]/option", arr_values[2], "Hdl unit");
        }

        if (arr_values[3].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("(//input[contains(@name,'frmLtlInformation:dtNewLtlLineItemTable')])[2]"));
            await this.actions.clearText(input_field, "Hdl Qty");
            await this.actions.setText(input_field, arr_values[3], "Hdl Qty");
        }
        if (arr_values[4].length >= 1) {

            await this.actions.clearText(this.input_field, "tot Wgt");
            await this.actions.setText(this.input_field, arr_values[4], "tot Wgt");
        }
        await this.actions.SendKeysTab("Tab");
    }

    public async setValuesIntoNewLineItems2(arr_values: string[]) {
        console.log("array length : " + arr_values.length);
        if (arr_values[0].length >= 1) {

            await this.actions.clearText(this.input_field1, "product desc");
            await this.actions.setText(this.input_field1, arr_values[0], "product desc");
        }

        if (arr_values[1].length >= 1) {
            await this.actions.selectByValue("(//select[contains(@name,'frmLtlInformation:dtNewLtlLineItemTable:1')])[1]/option", arr_values[1], "class code");
        }
        if (arr_values[2].length >= 1) {
            await this.actions.selectByValue("(//select[contains(@name,'frmLtlInformation:dtNewLtlLineItemTable:1')])[2]/option", arr_values[2], "Hdl unit");
        }

        if (arr_values[3].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("(//input[contains(@name,'frmLtlInformation:dtNewLtlLineItemTable:1')])[2]"));
            await this.actions.clearText(input_field, "Hdl Qty");
            await this.actions.setText(input_field, arr_values[3], "Hdl Qty");
        }
        if (arr_values[4].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("(//input[contains(@name,'frmLtlInformation:dtNewLtlLineItemTable:1')])[4]"));
            await this.actions.clearText(input_field, "tot Wgt");
            await this.actions.setText(input_field, arr_values[4], "tot Wgt");
        }
        await this.actions.SendKeysTab("Tab");
    }

    public async clickOnAddNewLineSign(index: number) {
        let addNewLineSign: ElementFinder = element(by.xpath("//input[@id='frmLtlInformation:dtNewLtlLineItemTable:" + index + ":cmdbtnAdd']"));
        await this.actions.click(addNewLineSign, "Click on + Sign");
    }

    public async getNewLineDataListSize() {
        return await this.newLineDataList.count();
    }

    public async getLTLLinesAddedToLoad() {
        return await this.ltlLinesAddedToLoad.count();
    }
}
