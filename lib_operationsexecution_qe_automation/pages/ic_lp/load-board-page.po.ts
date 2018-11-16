import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class LoadBoardPage extends BasePage {
    readonly loadMilesMaximumDownArrow = element(by.xpath("(//input[@placeholder='Maximum']//parent::div//parent::div/following-sibling::div/div[contains(@class,'down')])[1]"));
    readonly stopsMaximunDownArrow = element(by.xpath("(//input[@placeholder='Maximum']//parent::div//parent::div/following-sibling::div/div[contains(@class,'down')])[3]"));
    readonly maximumWeightDownArrow = element(by.xpath("(//input[@placeholder='Maximum Weight']//parent::div//parent::div/following-sibling::div/div[contains(@class,'down')])[1]"));
    readonly applyButton = element(by.xpath("//span[text()='Apply']"));
    readonly equipmentTypeDropDownArrow = element(by.xpath("(//table[contains(@id,'tableview')])[1]/tbody/tr/td[10]//a"));
    readonly bookinInfoButton: ElementFinder = element(by.xpath("//span[text()='Booking Info']//ancestor::a"));
    readonly bookingInfoPopUp: ElementFinder = element(by.xpath("//div[text()='Booking Info']"));
    readonly bookingInfoCloseButton: ElementFinder = element(by.xpath("//div[text()='Booking Info']//parent::div//parent::div//div[@role='button']"));
    readonly destinationInputField: ElementFinder = element(by.xpath("//input[@placeholder='Destination']"));
    readonly findLoadsButton: ElementFinder = element(by.xpath("//span[text()='Find Loads']//ancestor::a"));
    readonly oneWaybutton: ElementFinder = element(by.xpath("//label[text()='One Way']//parent::div"));
    readonly originInputField: ElementFinder = element(by.xpath("//input[@placeholder='Origin']"));
    readonly avilableLoads: ElementFinder = element(by.xpath("//div[text()='Available Loads: ']//span"));
    public async click(elementToClick: ElementFinder) {
        await this.actions.waitUntilElementVisible(elementToClick, "Waiting");
        await this.actions.click(elementToClick, "Clicking on Load Number");
    }
    public async verifyAvailableLoads() {
        await this.waitForLoading();
        let xpath = element.all(by.xpath("//table[contains(@id,'tableview')]"));
        let availableLoads = await xpath.count();
        console.log(availableLoads)
        return availableLoads;
    }

    public async waitForLoading() {
        let loading = element(by.xpath("//div[text()='Loading...' and @role='presentation']"));
        await this.actions.waitUntilElementInVisible(loading, "Waiting");
    }

    public async getText(elementName: ElementFinder) {
        await this.actions.waitUntilElementVisible(elementName, "Waiting");
        return await this.actions.getText(elementName, "Get text");
    }

    public async setText(elementName: ElementFinder, textToEnter: string) {
        await this.actions.clearText(elementName, "clear text");
        await this.actions.setText(elementName, textToEnter, "Get text");
    }

    public async clickOnDestinatiom(elementName: string) {
        let xpath = element(by.xpath("//div[text()='" + elementName + "']"));
        await this.actions.waitUntilElementVisible(xpath, "Waiting");
        await this.actions.click(xpath, "Clicking on destination");
    }
}