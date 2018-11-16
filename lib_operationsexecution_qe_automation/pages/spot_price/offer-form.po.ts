import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";
import { By } from "selenium-webdriver";
import { protractor } from "protractor";
import { SpotPricePage } from "./spot-price.po";

let spotPricePage = new SpotPricePage();
export class OfferFormPage extends BasePage {

    readonly bypassCustomerApproval = element(by.xpath("//input[@value='Bypass Customer Approval']"));
    readonly verifySpotPriceMessage = element(by.xpath("//span[contains(@style,'color: blue')]"));
    readonly businessInfoContactPerson = element(by.id("submitOffer:contactInputText"));
    readonly businessInfoEmailAddress = element(by.id("submitOffer:contactEmailInput"));
    readonly businessInfoPhoneNumber = element(by.xpath("(//*[contains(text(),'Phone Number')]/parent::tr//input)[1]"));
    readonly businessInfoBusinessName = element(by.xpath("(//span[text()='*']/../following-sibling::td/input)[1]"));
    readonly spotPriceNumber = element(by.xpath("//td[contains(text(),'Spot Price #')]//parent::tr/td[5]/span"));
    readonly updateOffer = element(by.xpath("//input[@value='Update Offer']"));
    readonly congestionCharge = element(by.xpath("(//*[contains(text(),'CONGESTION CHARGE')]//parent::tr//input[contains(@name,'submitOffer:accessorials')])[3]"));
    readonly offerGroupId = element(by.xpath("//*[contains(text(),'Offer Group Id')]/parent::tr//td[@class='formlabel']/span"));
    readonly spotQuoteNumber: ElementFinder = element(by.xpath("//table[@class='listOffers']//td/input[@type='submit']"));
    readonly expireButton: ElementFinder = element(by.xpath("//input[@value='Expire']"));
    readonly expireSuccessMessage: ElementFinder = element(by.xpath("//span[contains(., 'Days active')]"));
    readonly spotPriceButton: ElementFinder = element(by.xpath("//span[text()='Spot Price']"));
    readonly activeSpotMessageElement: ElementFinder = element(by.xpath("//span[contains(text(),'Active Spot Quote(s)')]"));

    public async clickOnButton(buttonName: string) {
        let button: ElementFinder = element(by.xpath("//input[@value='" + buttonName + "']"));
        await this.actions.click(button, "Click on Button");
    }

    public async clickBypassCustomerApproval() {
        await this.actions.click(this.bypassCustomerApproval, "Bypass Cuustomer Approval");
    }
    public async verifySpotPrice() {
        let flag: boolean = false;
        await this.actions.waitUntilElementVisible(this.verifySpotPriceMessage, "verify spot price");
        flag = await this.actions.isElementDisplayed(this.verifySpotPriceMessage, "verify message");
        return await flag;
    }

    public async verifyContactInformation(requiredElement: ElementFinder) {
        return await requiredElement.getAttribute("value");
    }

    public async verifyOffersProvided() {
        let xpath = await element.all(by.xpath("//table[@class='listOffers']//tbody//tr"));
        let offers = xpath.length;
        return offers;
    }

    public async verifyAndHandleErrorMessage() {
        if (await this.activeSpotMessageElement.isPresent()) {
            await this.click(this.spotQuoteNumber);
            await this.click(this.expireButton);
            await this.acceptingAlert();
            await this.click(this.spotPriceButton);
            await spotPricePage.clickGetPriceButton();
            await spotPricePage.clickColoredBox();
        }
    }

    public async enterBuisinessInforContactPerson(text: string) {
        await this.actions.clearText(this.businessInfoContactPerson, "Clear Text");
        await this.actions.setText(this.businessInfoContactPerson, text, "Enter contact person");
    }
    public async enterBuisinessInforEmailAddress(text: string) {
        await this.actions.clearText(this.businessInfoEmailAddress, "Clear Text");
        await this.actions.setText(this.businessInfoEmailAddress, text, "Enter email address");
    }
    public async enterBuisinessInforBusinessName(text: string) {
        await this.actions.waitUntilElementVisible(this.businessInfoBusinessName, "business name");
        await this.actions.clearText(this.businessInfoBusinessName, "Clear Text");
        await this.actions.setText(this.businessInfoBusinessName, text, "Enter Business Name");
    }

    public async enterBuisinessInforPhoneNumber(text: string) {
        await this.actions.clearText(this.businessInfoPhoneNumber, "Clear Text");
        await this.actions.setText(this.businessInfoPhoneNumber, text, "Enter Phone Number");
    }

    public async enterCongestionCharge(text: string) {
        await this.actions.clearText(this.congestionCharge, "Clear Text");
        await this.actions.setText(this.congestionCharge, text, "Enter Congestion Charge value");
    }

    public async noteSpotPriceNumber() {
        console.log("spotPriceNumber:" + await this.actions.getText(this.spotPriceNumber, "Spot Price Number"));
        return await this.actions.getText(this.spotPriceNumber, "Spot Price Number");
    }

    public async clickOnTab(tabName: string) {
        let tab: ElementFinder = element(By.xpath("//span[text()='" + tabName + "']//ancestor::li"));
        await this.actions.click(tab, "Click on tab");
    }

    public async clickUpdateOffer() {
        await this.actions.click(this.updateOffer, "Update Offer");
    }

    public async clickOnDropDown(dropDownName: string) {
        let dropDown: ElementFinder = element(by.xpath("//*[contains(text(),'" + dropDownName + "')]//parent::tr//select"))
        await this.actions.click(dropDown, "Click on drop down");
        await this.actions.mediumWait("Wait for to open the drop down");
    }

    public async selectOptionFromDropDown(dropDownName: string, optionValue: string) {
        let options: string = "//*[contains(text(),'" + dropDownName + "')]//parent::tr//select/option";
        await this.actions.selectByValue(options, optionValue, "Select option");
    }

    public async getGroupId() {
        return await this.actions.getText(this.offerGroupId, "Get Text");
    }

}