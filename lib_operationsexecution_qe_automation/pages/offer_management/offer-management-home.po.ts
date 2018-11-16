
import { protractor, ElementFinder, element, by, ElementArrayFinder, browser } from 'protractor';
import { BasePage } from '../base.po';

export class OfferManagementHomePage extends BasePage {

    readonly omsUrl: string = `https://offermanagement.jbhunt.com/offerManagement/`;
    readonly searchIconLeftNavigation: ElementFinder = element(by.xpath(`(//div[contains(@class,'fa-search')])[1]`));
    readonly selectEquipment: ElementFinder = element(by.xpath("//*[@name='equipment']"));
    readonly selectMode: ElementFinder = element(by.xpath("//input[@name='mode' and @value='ICS']"));
    readonly findRatesButton: ElementFinder = element(by.xpath("(//a[@role='button' and contains(., 'Find Rates')])[2]"));
    readonly loadNumberInputField: ElementFinder = element(by.xpath("//input[@placeholder='Load Number']"));
    readonly searchIconInLoadNumber: ElementFinder = element(by.xpath("//div[contains(@id,'trigger-search')]"));
    readonly addNewOfferLink: ElementFinder = element(by.xpath("//*[contains(text(),'Add New Offer')]//ancestor::a"));
    readonly carrierInput: ElementFinder = element(by.xpath("//input[@name='carrierId']"));
    readonly offerAmountInput: ElementFinder = element(by.xpath("//input[@name='offerAmount']"));
    readonly phoneNumberInput: ElementFinder = element(by.xpath("//input[@name='phoneNumber']"));
    readonly validUntilDateInput: ElementFinder = element(by.xpath("//input[@name='datefield']"));
    readonly firstNameInput: ElementFinder = element(by.xpath("//input[@name='firstName']"));
    readonly lastNameInput: ElementFinder = element(by.xpath("//input[@name='lastName']"));
    readonly emailAddressInput: ElementArrayFinder = element.all(by.xpath("//input[(@name='email') and (@aria-hidden='false')]"));
    readonly unlistedEmailAddressInput: ElementFinder = element(by.xpath("//input[(@name='email') and not (@aria-haspopup='true')]"));
    readonly emailAddressDropDown: ElementFinder = element(by.xpath("//label[text()='Please Enter Carrier information']/parent::div//*[text()='Email Address']//parent::label/parent::div//div[contains(@id,'trigger-picker')]"));
    readonly addOfferButton: ElementFinder = element(by.xpath("//*[text()='Add Offer']//ancestor::a"));
    readonly addOfferSuccessMessage: ElementFinder = element(by.xpath("//div[@class='x-mask x-border-box']"));
    readonly loadDetailsBar: ElementFinder = element(by.xpath("//div[@class='jb-load-details-info-bar']"));
    readonly rateCalculatorPanelXpath: ElementFinder = element(by.id('offerManagementRateCalculatorHolder-innerCt'));

    public async openUrl() {
        await this.actions.get(this.omsUrl, "Opening OMS url");
        let elem: ElementFinder = element(by.xpath("//label[contains(., 'Offer Management')]"))
        let until = protractor.ExpectedConditions;
        await browser.wait(until.visibilityOf(elem), 10000, 'Element taking too long to appear in the DOM');
    }

    public getmonthName() {
        let d = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let monthName: string = months[d.getMonth()];
        console.log(monthName);
        return monthName;
    };

    public async clickonSearchIconFromLeftNavigation() {
        await this.actions.click(this.searchIconLeftNavigation, "Click on Search Icon on Left Navigation");
    };

    public async verifyRateCalculator(source, destination) {
        await this.actions.waitUntilElementPresenceOf(this.rateCalculatorPanelXpath)
        if (await this.rateCalculator.isPresent()) {
            return true
        } else {
            this.tyrAnotherSourceAndDestination(source, destination)
        }

    };


    public async tyrAnotherSourceAndDestination(source, destination) {

        for (let index = 0; !(await this.rateCalculator.isPresent()); index++) {
            await this.enterCityInOriginAndDestiantion(source, destination);
            await this.clickOnFindRatesButton();
            if (await this.rateCalculator.isPresent()) {
                return true
            }
        }
    };


    public async enterCityInOriginAndDestiantion(pathName: string, cityName: string) {
        let originCity: ElementFinder = element(by.xpath('//input[@name="' + pathName + '"]'));
        await this.clearText(originCity)
        await this.actions.setText(originCity, cityName, "Enter City");
        await originCity.sendKeys(protractor.Key.BACK_SPACE);
        //Need to wait untill dynamic dropdown laods
        await this.actions.mediumWait("waiting")
        await originCity.sendKeys(protractor.Key.TAB);
    };

    public async selectModeFromDropDown() {
        await this.actions.click(this.selectMode, "Select ICS from Mode");
    };

    public async selectEquipmentFromDropDown(modetext: string) {
        let modeXpath: ElementFinder = element(by.xpath("//ul[contains(@id,'boundlist')][@aria-hidden='false']/li[text()='" + modetext + "']"));
        await this.actions.click(this.selectEquipment, "Select Dry Van from Equipment");
        await this.actions.click(modeXpath, "Click On " + modetext);
    };

    public async setDate() {
        let datepicker: ElementFinder = element(by.xpath("//*[@name='pickupDate']"));
        this.actions.click(datepicker, "Click on DatePicker");
        await browser.sleep(2000);
        let d = new Date();
        let date = d.getDate()
        let dateXpath: ElementFinder = element(by.xpath("//div[@aria-hidden='false']//table[contains(@id,'datepicker')]//td[@aria-label='" + this.getmonthName() + " " + date + "']/following-sibling::td"));
        await this.actions.click(dateXpath, "Click on future date");
    };

    public async clickOnFindRatesButton() {
        await this.actions.click(await this.findRatesButton, "Click on Rates Buton");
        await this.actions.waitUntilElementPresenceOf(await this.rateCalculatorPanelXpath)
    };

    public async setTextInInputField(inputFieldName: ElementFinder, text: string) {
        await this.actions.clearText(inputFieldName, "Clear text");
        await this.actions.setText(inputFieldName, text, "Text to enter");
    }

    public async verifyAddNewOfferLink() {
        await this.actions.waitUntilElementVisible(this.addNewOfferLink, "Wait untill element is visble");
        return await this.actions.isElementPresent(this.addNewOfferLink, "Is element present");
    }

    public async selectOptionFormEmailDropDown(option: string) {
        await this.actions.click(this.emailAddressDropDown, "Click on Email Drop Down");
        await this.actions.click(element(by.xpath("//li[text()='" + option + "']")), "click on option");
    }

    public async setCarrierInformation(text: string, autocompleteValue: string) {
        await this.actions.clearText(this.carrierInput, "clear text");
        await this.actions.setText(this.carrierInput, text, "BiTo Code");
        await this.actions.mediumWait("Wait for populate the data");
        await this.actions.click(element(by.xpath("//div[contains(@class,'x-boundlist-floating')]//li[contains(text(),'" + autocompleteValue + "')]")), "Auto complete value");
    }

    public async clearEmailId() {
        await this.actions.clearText(this.unlistedEmailAddressInput, "Clear text");
    }

    public async verifyEmailAddressInputFieldsCount() {
        console.log("count:" + await this.emailAddressInput.count());
        return await this.emailAddressInput.count();
    }

    public async getAddOfferSuccessMessage(text: string) {
        console.log('text:' + await this.actions.getText(this.text(text), "Get Text"));
        return await this.actions.getText(this.text(text), "Get Text");
    }

    public async waitUntilPageLoads() {
        let loading: ElementFinder = element(by.xpath("//span[contains(text(),'Loading')]"));
        let offerHome: ElementFinder = element(by.xpath("//label[contains(text(),'Offer Management')]"));
        await this.actions.waitUntilElementInVisible(loading, "waiting");
        await this.actions.waitUntilElementPresenceOf(offerHome, "waiting");
    }

}