import { browser, by, element, ElementFinder, ExpectedConditions, protractor, ElementArrayFinder } from 'protractor';
import { BasePage } from '../base.po';
import { CommonFunctions } from "../../utilities/common-functions";

export class TemplateManagementPage extends BasePage {
    readonly addTemplate: ElementFinder = element(by.xpath("//button[text()='Add Template']"));
    readonly nameInputField: ElementFinder = element(by.xpath("//input[@id='form:name']"));
    readonly addLocation: ElementFinder = element(by.xpath("//select[@id='form:availableLoc']//parent::td//parent::tr//td[3]//tbody//tr[1]//button"));
    readonly customerCheckBox: ElementFinder = element(by.xpath("//label[text()='Customers:']//parent::td//parent::tr//td[2]//tbody//tr[1]//input"));
    readonly marketCheckBox: ElementFinder = element(by.xpath("//label[text()='Markets:']//parent::td//parent::tr//td[2]//tbody//tr[1]//input"));
    readonly saveButton: ElementFinder = element(by.xpath("//button[@name='form:saveButton']"));
    readonly ldcDropdown: string = "//select[@class='iceSelOneMnu']//option";
    readonly mangnifyingGlass: ElementFinder = element(by.xpath("//div[@class='lnfSearchButton iceCmdLnk']"));
    readonly deleteButton: ElementFinder = element(by.xpath("//button[text()='Delete']"));
    readonly ldcDropDown: ElementFinder = element(by.xpath(`//select[contains(@id,'ldc')]`));
    readonly magnifingGlassIcon: ElementFinder = element(by.xpath(`//select[contains(@id,'ldc')]/../following-sibling::td`));
    readonly inactiveProgressIcon: ElementFinder = element(by.xpath(`//*[contains(@id, 'connection-idle') and @style='visibility: visible;']`));
    readonly templateEditTestPencilIcon: ElementFinder = element(by.xpath(`//tr[td[text()='TEMPLATE_EDIT_TEST']]//td[a[@title='Edit Template']]`));
    readonly availableLocation: ElementFinder = element(by.xpath(`(//select[@id="form:availableLoc"]/option[text()])[1]`));


    public async clickOnLocation() {
        let location = element(by.xpath("//select[@id='form:availableLoc']//option[text()='L833']"));
        browser.executeScript("arguments[0].scrollIntoView();", location.getWebElement());
        await this.actions.click(location, "Select location");
    }

    public async clickOnNameCheckBox(name: string) {
        let nameCheckBox = element(by.xpath("//td[text()='" + name + "']//parent::tr//td[1]//input"));
        await this.actions.click(nameCheckBox, "Select location");
    }

    public async deleteTemplate(name: string) {
        let deleteButton = element(by.xpath("//td[text()='" + name + "']//parent::tr//td[6]//tbody//tr//td[2]//a"));
        await this.actions.click(deleteButton, "Select location");
    }

    public async setLdcDropdown() {
        await this.actions.click(element(by.xpath("//select[@class='iceSelOneMnu']")), "Select option");
        let option = element(by.xpath("//select[@class='iceSelOneMnu']//option[text()='L833']"));
        browser.executeScript("arguments[0].scrollIntoView();", option.getWebElement());
        await this.actions.click(option, "Select option");
    }

    public async clickOnDropDownOptions(optionName: string) {
        let optionXpath = element(by.xpath("//select[contains(@id,'ldc')]/option[text()='" + optionName + "']"));
        await this.actions.click(optionXpath, "Clicking on option");
    }

    public async clickOnButtonOnPopupWindow(fieldName: string, buttonText: string) {//fieldName e.g. Location, Customers, Markets
        let xpath: ElementFinder = element(by.xpath(`//label[text()='` + fieldName + `:']/../parent::tr//button[text()='` + buttonText + `']`));
        console.log(`//label[text()='` + fieldName + `:']/../parent::tr//button[text()='` + buttonText + `']`)
        await this.click(xpath)
    }

    public async getTextFromLocationColumn(newLocation?: string) {
        let headerXpath = `(//table[@class='iceDatTbl'][1])//th`
        let numberOfColumns: ElementArrayFinder = element.all(by.xpath("(//table[@class='iceDatTbl'][1])//th"));
        let size: number = await numberOfColumns.count()
        let locationColumnIndex: number
        for (let index = 1; index <= size; index++) {
            if (await element(by.xpath('(' + headerXpath + ')[' + index + ']')).getText() == 'Location') {
                locationColumnIndex = index;
                console.log(`locationColumnIndex: `, locationColumnIndex)
                break;
            }
        }
        let locationXpath: ElementFinder = element(by.xpath(`((//tr[td[text()='TEMPLATE_EDIT_TEST']])[1])//td[` + locationColumnIndex + `]`));

        if (newLocation !== undefined) {
            locationXpath = element(by.xpath(`((//tr[td[text()='TEMPLATE_EDIT_TEST']])[1])//td[` + locationColumnIndex + `][contains(.,'` + newLocation + `')]`));
            await this.waitForElementIsVisible(locationXpath)
        }

        let location = await locationXpath.getText();
        console.log(`location: ` + location)
        return (location)
    }
}