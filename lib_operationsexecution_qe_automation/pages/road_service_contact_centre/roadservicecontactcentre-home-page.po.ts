import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class RoadServiceContacCentretHomePage extends BasePage {
    readonly incidentHistory: ElementFinder = element(by.xpath("//span[text()='Incident ']"));
    readonly tractorInputField: ElementFinder = element(by.xpath("//span[text()='Tractor:']//parent::label//parent::div//div//input"));
    readonly comments: ElementFinder = element(by.xpath("//span[text()='Comments:']"));
    readonly typeDropdown: ElementFinder = element(by.xpath("//span[text()='T']//..//parent::label//parent::div//div//div//following-sibling::div"))
    readonly saveIncidentButton: ElementFinder = element(by.xpath("//span[text()='S']//parent::span"));
    readonly okButton: ElementFinder = element(by.xpath("//span[text()='OK']//ancestor::span"));
    readonly vendorLookUpTab: ElementFinder = element(by.xpath("//span[text()='V']//parent::span"));
    readonly savingIncident: ElementFinder = element(by.xpath("//div[contains(text(),'Saving Incident')]"));
    readonly gatheringIncidentDetails: ElementFinder = element(by.xpath("//div[contains(text(),'Gathering incident details for Asset Number 328163 ...')]"));
    public async setInputField(FieldName: ElementFinder, text: string) {
        await this.actions.setText(FieldName, text, "Enter " + text + " to " + FieldName + " input field");
    }

    public async click(element: ElementFinder) {
        await this.actions.waitUntilElementClickable(element, "");
        await this.actions.click(element, "Click on" + element + " ");
    }

    public async setTypeDropdown(dropdownOption: string) {
        await this.actions.click(this.typeDropdown, "Click on type dropdown ");
        let xpath = element(by.xpath("//div[text()='" + dropdownOption + "']"))
        await this.actions.click(xpath, "Click on type dropdown option");
    }

    public async clickOnOKButton() {
        await this.actions.waitUntilElementInVisible(this.gatheringIncidentDetails, "Waiting");
        await this.actions.waitUntilElementVisible(this.okButton, "Waiting");
        await this.actions.click(this.okButton, "Click ok button");
    }

    public async waitForSavingIncidentLoading() {
        await this.actions.waitUntilElementInVisible(this.savingIncident, "Waiting");
    }
}