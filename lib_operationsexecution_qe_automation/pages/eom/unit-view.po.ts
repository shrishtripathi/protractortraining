import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { protractor } from 'protractor';
import { FreightManager2Page } from './freight-manager-2.po';
import { basename } from 'path';
import { BasePage } from '../base.po';
import { CommonFunctions } from '../../utilities/common-functions';

let commonFunctions = new CommonFunctions();
let freightManager2Page = new FreightManager2Page();

export class UnitViewPage extends BasePage {

    readonly boardCodesTableTextBoxes = "(//td[text()='Board codes ']/following::table[@class='icePnlGrd']//td/input)";
    readonly obcErrorFlag = element(by.xpath("//a[text()='ERROR']"));

    public async sendDataToBoardCodeTextBoxes(text1: string, text2: string, text3: string, text4: string) {
        let textArr: string[] = [text1, text2, text3, text4];
        await this.clearTextBoxesForTable(this.boardCodesTableTextBoxes);
        await this.sendDataToTable(this.boardCodesTableTextBoxes, textArr);
    }
    public async clickObcErrorFlag() {
        try {
            await this.actions.click(this.obcErrorFlag, "click on flag");
            await this.waitForPageLoad();
            await this.waitForActionToComplete();
            await this.waitForPageLoad();
        } catch (error) {

        }
    }
    public async secondRefresh() {
        try {
            await this.waitForActionToComplete();
            await this.waitForPageLoad();
            await this.waitForPageLoad()
        } catch (error) {

        }
    }
    public async clearTextBoxesForTable(tableXpathLocator: string) {

        let textBoxes: ElementArrayFinder = element.all(by.xpath(tableXpathLocator));
        let textBox: ElementFinder;
        let size: number = 0;

        size = await textBoxes.count();

        for (let index = 1; index <= size; index++) {
            textBox = await element(by.xpath(tableXpathLocator + "[" + index + "]"));
            if (await this.actions.getText(textBox, "board table") != null) {
                await this.actions.clearText(textBox, "clear text");
            }
        }
    }
    public async sendDataToTable(locator: string, arr) {
        let boardCodeTableLocator: ElementArrayFinder = element.all(by.xpath(locator));
        let textBox: ElementFinder;
        let count: number = 0;
        let size: number = await boardCodeTableLocator.count();
        for (let index = 1; index <= size; index++) {
            textBox = await element(by.xpath(locator + "[" + index + "]"));
            await this.actions.setText(textBox, arr[count], "setText for " + arr[count]);
            count++;
        }
    }
    public async getDriverNumber() {
        let xpath = "//*[text()='MTY NO PP']/ancestor::tr[contains(@class,'iceRowSel')]/td/*[text()='A']/ancestor::tr/td[32]//span[contains(text(),'JBC')]/ancestor::tr/td[26]//span[@class='iceOutTxt']"
        let cellValueXpath: ElementArrayFinder = element.all(by.xpath(xpath));
        let requiredText: string = null;

        do {
            let elementIsPresent: boolean = await element(by.xpath(xpath)).isPresent();
            console.log("elementIsPresent :" + elementIsPresent);
            if (elementIsPresent) {
                let size: number = await cellValueXpath.count();
                console.log("number is " + size);
                for (let index = 0; index < size; index++) {
                    let text = await this.actions.getText(cellValueXpath.get(index), "getting text for xpath" + xpath);
                    await console.log("driver number test " + text)
                    if (await text.length === 0) {
                        let myxpath = xpath + "/ancestor::tr/td[2]//a/span";
                        console.log("xpath is " + myxpath);
                        let driverNumberXpath = element(by.xpath(myxpath));
                        requiredText = await this.actions.getText(driverNumberXpath, "getting text for xpath" + xpath);
                        console.log("required text " + requiredText);
                        break;
                    }
                }


            }
            if (await requiredText !== null) {
                console.log("testing ...")
                break;
            }
        } while (await this.pagination());

        return await requiredText;
    }

}