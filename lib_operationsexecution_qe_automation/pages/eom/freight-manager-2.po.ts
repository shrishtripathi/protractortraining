import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from '../base.po';
import { CommonFunctions } from '../../utilities/common-functions';

let commonFunctions = new CommonFunctions();

export class FreightManager2Page extends BasePage {

    readonly freightManagerPageTitle: ElementFinder = element(by.xpath("//div[@id='pageTitle']"));
    readonly prefernceUpdateMessage: ElementFinder = element(by.xpath("//*[@id='innerContent']//span"));
    readonly loadingSearchResult: ElementFinder = element(by.xpath("//div[@class='iceOutConStatInactv' and @style='visibility: visible;']"));
    readonly equipmentTab = element(by.xpath("//span[text()='Equipment']"));
    readonly customerPool = element(by.xpath("//span[text()='Customer Pool']"));
    readonly planningTab = element(by.xpath("//span[text()='Planning']"));
    readonly unitview = element(by.xpath("//span[text()='Unit View']"));
    readonly orderSegment = element(by.xpath("//span[text()='Order Segment']"));
    readonly modifyDivisionButton = element(by.xpath("//button[text()='Modify Division']"))

    public async clickOnButtonHavingText(buttonText: string) {
        let elementXpath: ElementFinder = await element(by.buttonText(buttonText))
        await this.actions.click(elementXpath, "Click on " + buttonText + " Button")
    };

    public async selectOptionFromFreightManager2(tabName: string, option: string, finalPageTitle: string) {
        await this.actions.moveMouseToElement(this.aspanTxt(tabName), "Mouse hover on '+tabName+'");
        await this.actions.click(this.aspanTxt(option), "Click on '+option+'");
        await this.actions.waitBrowserTitleEqualsTo(finalPageTitle)
    }

    public async getFreightManagerPage() {
        this.actions.selectWindow(1, "move to freight manager window");
        return await this.actions.getText(this.freightManagerPageTitle, "Freight Manager Page title");
    }
    public async hoverOverFM2PageHeaderOption(headerOptionText: string) {
        let linkHeaderOptions = element(by.xpath("//span[text()='" + headerOptionText + "']"));
        await this.actions.moveMouseToElement(linkHeaderOptions, headerOptionText + " Option from header");
    }
    public async clickHeaderDropDownOption(headerDrpDwnOptionText: string) {
        let linkHeaderDropDrnOptions = element(by.xpath("//span[text()='" + headerDrpDwnOptionText + "']"));
        await this.actions.click(linkHeaderDropDrnOptions, headerDrpDwnOptionText);
    }

    public async clickOnParameterButton() {
        await this.actions.waitUntilElementPresenceOf(this.loadingSearchResult, "wait for loading")
        await this.clickOnButtonHavingText("Parameter")
        await this.actions.waitUntilElementPresenceOf(this.loadingSearchResult, "wait for loading")
        await this.actions.waitBrowserTitleEqualsTo("Unit View Parameter");
    }
    public async selectDivision(divisionType) {
        try {
            await this.actions.click(this.modifyDivisionButton, "modifyDiviison");
            await browser.switchTo().activeElement();
            await this.actions.click(element(by.xpath("//option[text()='" + divisionType + "']")), "")
            await this.actions.click(element(by.xpath("//*[text()='Ok']")), "")
        } catch (error) {
            console.log("error " + error)
        }

    }

    radioandCheckBox(fieldName: string, option: string) {
        var xpath = element(by.xpath("//tr[./td[contains(text(),'" + fieldName + "')]]/following-sibling::tr//*[text()='" + option + "']/preceding-sibling::input"))
        return xpath;
    }

    public async setParameterRadioAndChechBox(fieldName: string, option: string) {
        await this.actions.click(this.radioandCheckBox(fieldName, option), "Setting parameters");
    }

    public async enterSelectTypeCode(codeName: string, codeIndex: number, codeValue: string) {
        let textBoxCode = await element(by.xpath("(//td[text()='" + codeName + "']/following-sibling::td//input[@type='text'])[" + codeIndex + "]"));
        await this.actions.waitUntilElementPresenceOf(textBoxCode,"wait for element")
        await textBoxCode.clear();
        await this.actions.setText(textBoxCode, codeValue, "Enter Board text in [" + codeIndex + "] text Box");
        await this.waitUntilLoading()
    }

    public async clickOnSaveParameterButton() {
        await this.actions.shortWait("wait for element")
        await this.clickOnButtonHavingText("Save Parameter");
        await this.waitUntilLoading();
        await this.actions.waitUntiltextToBePresentInElement(this.prefernceUpdateMessage, "Preference Updated", "Preference Update");
    }

    public async clickOnExitButton() {
        await this.waitUntilLoading()
        await this.clickOnButtonHavingText("Exit");
       await  this.actions.waitBrowserTitleEqualsTo("Unit View"); 
    }

    public async getDriverNumber(tableId: string, requiredColumnHeaderLable1: string, requiredColumnHeaderLable2: string, filterColumn3HeaderLable1: string, filterColumn3HeaderLable2: string, filterColumn2HeaderLable2: string, filterColumn2HeaderLable1: string, filterText1: string, filterText2: string, filterText3a: string, filterText3b: string) {
        try {
            do {
                let requiredColumnIndex: number = await commonFunctions.getColumnIndexForMultiHeaderTable(tableId, requiredColumnHeaderLable1, requiredColumnHeaderLable2)
                let filterColumn3Index: number = await commonFunctions.getColumnIndexForMultiHeaderTable(tableId, filterColumn3HeaderLable1, filterColumn3HeaderLable2)
                let filterColumn2Index: number = await commonFunctions.getColumnIndexForMultiHeaderTable(tableId, filterColumn2HeaderLable1, filterColumn2HeaderLable2)

                let myXpath: string = "((//*[text()='MTY NO PP']/ancestor::tr[contains(@class,'iceRowSel')]/td[" + filterColumn2Index + "][.//text()='" + filterText2 + "'])/ancestor::tr[contains(@class,'iceRowSel')]/td[" + filterColumn3Index + "][not (contains(.,'" + filterText3a + "') or contains(.,'" + filterText3b + "'))])/ancestor::tr/td[" + requiredColumnIndex + "]//a/span";
                let elementIsPresent: boolean = await element(by.xpath(myXpath)).isPresent();

                if (elementIsPresent) {
                    let requiredElement: ElementFinder = await element(by.xpath(myXpath));
                    let driverNumberXpath: ElementFinder = await element(by.xpath("(//*[@class='iceOutLbl' and contains( @id,'form:') and contains(.,'Tractor')]/../../td/input)[2]"));
                    let driverNumber: string;
                    await requiredElement.click();

                    await this.actions.waitUntilElementPresenceOf(this.loadingSearchResult, "wait for loading")
                    var handles: string[] = await browser.getAllWindowHandles();
                    await browser.driver.switchTo().window(handles[handles.length - 1]);
                    driverNumber = await driverNumberXpath.getAttribute("value")
                    return driverNumber;
                }
            } while (await commonFunctions.pagination());

        } catch (error) {
            console.log("error in get cell value function" + error);
        }
    }

}