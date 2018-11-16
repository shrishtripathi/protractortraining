import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser, ExpectedConditions } from "protractor";

export class COAHomePage extends BasePage {

    readonly searchByFirstDropDown: ElementFinder = element(by.xpath("//table[@class='searchTable' and @style='display:table']/tbody/tr/td[2]/select"));
    readonly searchByFirstDropDownOptions: string = "//table[@class='searchTable' and @style='display:table']/tbody/tr/td[2]/select/option";
    readonly searchByInput: ElementFinder = element(by.xpath("//input[@name='form:searchSite1']"));
    readonly searchBySearchButton: ElementFinder = element(by.xpath("//table[@class='searchTable' and @style='display:table']/tbody/tr/td[7]/button"));
    readonly logoXpath: ElementFinder = element(by.xpath(`//div[@class="myLogo"]`))
    readonly homeTabOnmenuBarXpath = element(by.xpath(`(//span[contains(@class,'iceMnuBarItemLabel')])[1]`));
    
    public async setTextInInput(element: ElementFinder, text: string) {
        await this.actions.clearText(element, "Clear text");
        await this.actions.setText(element, text, "Enter text");
    }

    public async headerOptionElements(label: string) {//label e.g.Setting, jcnt492, Sign Out
        return (await element(by.xpath(`//div[.='` + label + `']`)))
    }

    public async setOptionFromDropDown(optionsList: string, option: string, dropDownName: ElementFinder) {
        await this.actions.click(dropDownName, "Click on Tab");
        await this.actions.selectByValue(optionsList, option, "select value");
    }

    public async hoverOnTabAndSelectOption(tabName: string, optionName: string) {
        let tab: ElementFinder = element(by.xpath("//a/span[text()='" + tabName + "']"));
        await this.actions.moveMouseToElement(tab, "tabName");
        let option = element(by.xpath("//a//span[contains(text(),'" + optionName + "')]"));
        await this.actions.click(option, "Selecting " + optionName + " ");
        await this.waitForPageLoad();
    }

    public async getFontSize(element:ElementFinder){
        let fontsize = await element.getCssValue('font-size')           
        let size = fontsize.match(/\d/g);
        fontsize =size.join("");
        console.log('fontsize: ' +Number(fontsize))
        return(Number(fontsize));
    }

}