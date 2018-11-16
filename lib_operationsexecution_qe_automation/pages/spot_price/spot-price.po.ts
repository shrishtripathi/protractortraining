import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";
import { By } from "selenium-webdriver";
import { protractor } from "protractor";


export class SpotPricePage extends BasePage {

    readonly deliveryDate: ElementFinder = element(by.id("getPriceForm:deliveryDate"));
    readonly billToCode: ElementFinder = element(by.xpath("//input[@id='getPriceForm:billToCode']"));
    readonly ratesButton: ElementFinder = element(by.xpath("//span[text()='Rates']"));
    readonly enterOrigin: ElementFinder = element(by.xpath("//input[@id='getPriceForm:originInput']"));
    readonly enterDestination: ElementFinder = element(by.xpath("//input[@id='getPriceForm:destInput']"));
    readonly pickUpDate: ElementFinder = element(by.xpath("//input[@id='getPriceForm:pickupDate']"));
    readonly enterDelivery: ElementFinder = element(by.xpath("//input[@id='getPriceForm:deliveryDate']"));
    readonly enterDuration: ElementFinder = element(by.xpath("//input[@id='getPriceForm:duration']"));
    readonly getPrice: ElementFinder = element(by.xpath("//div[@title='Get Price']"));
    readonly businessInformation: ElementFinder = element(by.xpath("//div[@id='getPriceForm:businessInfominimizer']"));
    readonly businessName: ElementFinder = element(by.xpath("//input[@id='getPriceForm:businessName']"));
    readonly contactFirstName: ElementFinder = element(by.xpath("//input[@id='getPriceForm:contactPersonInput']"));
    readonly emailAdddress: ElementFinder = element(by.xpath("//input[@id='getPriceForm:emailAddressInput']"));
    readonly bypassCustomerApproval: ElementFinder = element(by.xpath("//input[@value='Bypass Customer Approval']"));
    readonly coloredBox: ElementFinder = element(by.xpath("(//div[text()='$'])[1]"));
    readonly verifySpotPriceMessage: ElementFinder = element(by.xpath("//span[contains(@style,'color: blue')]"));
    readonly addIntermediateStopIcon: ElementFinder = element(by.xpath("//div[@class='addStopRow']/div[@class='addRow']"));
    readonly intermediateStopInputBox: ElementFinder = element(by.name("getPriceForm:stopAdderlocation:0"));
    readonly deliveryCalender: ElementFinder = element(by.xpath("//input[@name='getPriceForm:deliveryDate']/following-sibling::img"));
    readonly prices: ElementArrayFinder = element.all(by.xpath("//span[text()='Available Full Load Prices']/../..//*[text()='$']"));

    readonly searchSpotPriceButton: ElementFinder = element(by.xpath("//span[text()='Search Spot Price']//ancestor::a"));

    public async getPriceValue() {
        let text = await this.actions.getText(this.coloredBox, "Colored Box");
        let spotPrice = text.slice(1, 7);
        return spotPrice;
    }

    public async clickOnSearchSpotPriceButton() {
        await this.actions.click(this.searchSpotPriceButton, "Clicking on search spot price");
    }

    public async clickRatesButton() {
        await this.actions.click(this.ratesButton, "Rate Button");
    }

    public async enterDeliveryDate() {/**Date Format MM/DD/YYYY */

        await this.actions.clearText(this.deliveryDate, "Clear Date Field");
        await this.actions.setText(this.deliveryDate, await this.futureDate(4), "Enter Delivery Date");
    }

    public async addOrigin(text1: string, zipCode: string) {
        await this.actions.setText(this.enterOrigin, text1, "Enter Origin");
        await this.actions.click(element(by.xpath("//i[text()='" + zipCode + "']")), "zipcode");
    }
    public async addIntermediateStop(text1: string) {
        await this.actions.setText(this.intermediateStopInputBox, text1, "Enter Origin");
        await this.actions.click(element(by.xpath("//li[text()='" + text1 + "']")), "zipcode");
    }
    public async enterDestinationInputBox(text1: string, city: string) {
        await this.actions.setText(this.enterDestination, text1, "Enter Origin");

        try {
            await this.actions.click(element(by.id("mainPageImage")), "zipcode");
        } catch (error) {

        }

    }

    public async addDestination(text1: string, zipCode: string) {
        await this.actions.setText(this.enterDestination, text1, "Enter Destination");
        await this.actions.click(element(by.xpath("//i[text()='" + zipCode + "']")), "zipcode");
    }

    public async verifyPickUpDate(text1: string) {
        await this.actions.clearText(this.pickUpDate, "Pick Up Date");
        await this.actions.setText(this.pickUpDate, text1, "PickUp-Date");
    }

    public async addDelivery(text1: string) {
        await this.actions.setText(this.enterDelivery, text1, "Enter Delivery");
    }
    public async addDeliveryDate() {
        let day = new Date().getUTCDate();
        let requiredDate: number = day + 1;
        await this.actions.click(this.deliveryCalender, "clike on calender");
        await this.actions.click(element(by.xpath("//td[text()='" + requiredDate + "']")), "Enter Delivery");
    }

    public async addDuration(text1: string) {
        await this.actions.clearText(this.enterDuration, "clear text");
        await this.actions.setText(this.enterDuration, text1, "Enter Duration");
    }

    public async enterBillToCode(text: string, billToCode: string) {
        await this.actions.clearText(this.billToCode, "clear text");
        await this.actions.setText(this.billToCode, text, "BiTo Code");
    }

    public async setOrigin(text1: string, zipCode: string) {
        await this.actions.setText(this.enterOrigin, text1, "EnterOrigin");
        await this.actions.mediumWait("Wait for populate the data");
        await this.actions.click(element(by.xpath("//li[text()='" + zipCode + "']")), "zipcode");
    }

    public async setDestination(text1: string, zipCode: string) {
        await this.actions.setText(this.enterDestination, text1, "Enter Destination");
        await this.actions.mediumWait("Wait for populate the data");
        await this.actions.click(element(by.xpath("//li[text()='" + zipCode + "']")), "zipcode");
    }

    public async clickGetPriceButton() {
        await this.actions.click(this.getPrice, "Click Get Price Button");
    }

    public async clickBusinessInformation() {
        await this.actions.click(this.businessInformation, "Click Business Information Tab");
    }

    public async addBusinessName(text1: string) {
        await this.actions.setText(this.businessName, text1, "Enter Business Name");
    }

    public async addContactFirstName(text1: string) {
        await this.actions.setText(this.contactFirstName, text1, "Enter Contact First Name");
        await this.actions.click(element(by.xpath("//input[@id='getPriceForm:billToCode']")), "click");
    }

    public async addEmailAddress(text1: string) {
        await this.actions.setText(this.emailAdddress, text1, "Enter Email Address");
        await this.actions.click(element(by.xpath("//input[@id='getPriceForm:billToCode']")), "click");
    }

    public async clickColoredBox() {
        await this.actions.click(this.coloredBox, "Colored Box");
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

    public async futureDate(daysToAdd: number) {
        let newdate = new Date();
        newdate.setDate(newdate.getDate() + daysToAdd);
        let newmonth = Number(newdate.getUTCMonth()) + 1;
        let requiredDate = (newmonth + '/' + newdate.getUTCDate() + '/' + newdate.getUTCFullYear())
        return requiredDate;
    }
    public async click(element: ElementFinder) {
        await this.actions.click(element, "Click on " + element + " ");
    }

    public async setText(element: ElementFinder, textToEnter: string) {
        await this.actions.setText(element, textToEnter, "Enter " + textToEnter + " to " + element + " ");
    }
    public async verifyListOfPrices() {
        let count = 0;
        try {
            count = await this.prices.count();
        } catch (error) {
            console.log("prices count is " + count + " error is " + error);
        }
        return await count;
    }

}