import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By, Browser } from "selenium-webdriver";
import { protractor } from "protractor";
import { print } from "util";
import { BasePage } from "../base.po";

export class CarrierProfilePage extends BasePage {

    readonly desiredLanes: ElementFinder = element(by.xpath("//a[text()='Desired Lanes ']"));
    readonly linkAddInsurance: ElementFinder = element(by.xpath("//*[text()='Add Insurance']"));
    readonly linkSaveButton: ElementFinder = element(by.xpath("//*[text()='Save']"));
    readonly saveButton: ElementFinder = element(by.xpath("//a[text()='Save' and @id='save']"));
    readonly insuranceType: ElementFinder = element(by.xpath("//table[@id='insuranceDetailTable']//tbody//tr//td//a[1]"));
    readonly pendingStatus: ElementFinder = element(by.xpath("//tr[@class='rowAlt']/td[text()='HJBT JBHA']/following-sibling::td/select/option[contains(.,'Pending')]"));
    readonly validateSuccessMessage: ElementFinder = element(by.xpath("//td[@class='message']/ul/li/font"));

    public async changeHJBTJBHAStatusToPending() {
        await this.actions.click(this.pendingStatus, "Click on Pending in drop down");
    }

    public async clickOnCarrierProfileTabs(val_TabName: string) {
        let carrier_tab: ElementFinder = element(by.xpath("//div[@id='susan']//span//a[contains(text(),'" + val_TabName + "')]"));
        await this.actions.click(carrier_tab, val_TabName);
        await this.actions.longWait("waiting");
    }

    public async clickDesiredLanesTab() {
        await this.actions.click(this.desiredLanes, "Desired Lanes Link ");
    }

    public async getButtonElement(button_value: string) {
        let button_element: ElementFinder = element(by.xpath("//a[text()='" + button_value + "']"));
        return button_element;
    }

    public async getInputTextElement(ID_value: string) {
        let Input_element: ElementFinder = element(by.xpath("//input[@id='" + ID_value + "']"));
        return Input_element;
    }

    public async clickOnButton(val_button: string) {
        await this.actions.click(await this.getButtonElement(val_button), val_button);
        await this.actions.mediumWait("waiting");
    }

    public async clickOnSaveButton(val_button: string) {
        await this.actions.click(await this.getButtonElement(val_button), val_button);
        await this.actions.longWait("waiting");
        await browser.driver.switchTo().alert().accept();
    }

    public async acceptingAlert() {
        await browser.driver.switchTo().alert().accept();
    }

    public async enterContactDetails(values_array: string[]) {
        console.log("array length : " + values_array.length);

        if (values_array[0].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("//input[@id='firstNameDetail']"));
            await this.actions.setText(input_field, values_array[0], values_array[0]);
        }
        if (values_array[1].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("//input[@id='lastNameDetail']"));
            await this.actions.setText(input_field, values_array[1], values_array[1]);
        }
        if (values_array[2].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("//input[@id='middleNameDetail']"));
            await this.actions.setText(input_field, values_array[2], values_array[2]);
        }
        if (values_array[3].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("//input[@id='primaryPhoneDetail']"));
            await this.actions.setText(input_field, values_array[3], values_array[3]);
        }
        if (values_array[4].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("//input[@id='secPhoneDetail']"));
            await this.actions.setText(input_field, values_array[4], values_array[4]);
        }
        if (values_array[5].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("//input[@id='faxPhoneDetail']"));
            await this.actions.setText(input_field, values_array[5], values_array[5]);
        }
        if (values_array[6].length >= 1) {
            let input_field: ElementFinder = element(by.xpath("//input[@id='emailDetail']"));
            await this.actions.setText(input_field, values_array[6], values_array[6]);
        }
        this.actions.SendKeysTab("Tab");
    }

    public async verifySavedRecord(val_name: string) {
        try {
            await this.actions.shortWait("waiting");
            let check_element: ElementFinder = element(by.xpath("(//table[@id='contactsDetailTable']//tr//a[contains(text(),'" + val_name + "')])[1]"));
            if (check_element.isDisplayed()) {
                return true;
            }
        } catch{
            return false;
        }
    }

    public async verifySuccessMessage() {
        try {
            let check_element: ElementFinder = element(by.xpath("//font[@class='success' and contains(text(),'Successfully')]"));
            if (check_element.isDisplayed()) {
                return true;
            }
        } catch{
            return false;
        }

    }

    public async verifyCarrierProfilePage() {
        let check_element: ElementFinder = element(by.xpath("//div[@id='susan']"));
        await this.actions.waitUntilElementVisible(check_element, "carrier profile");
    }

    public async waitUntilAddContactDetailIsVisible() {
        let check_element: ElementFinder = element(by.xpath("//div[@id='contactDetail' and @style='display:none']"));
        await this.actions.waitUntilElementInVisible(check_element, "Add Contact Details");
    }

    public selectDropdown(fieldName: string, dropDownvalue: any) {
        let dropdownXpath = "//select[@name='" + fieldName + "']/option";
        this.actions.selectByValue(dropdownXpath, dropDownvalue, "Selecting value to dropdown");
    }

    public async clickLinkSaveButton() {
        await this.actions.click(this.linkSaveButton, "Click on save Button");
        await this.actions.switchToAlertAndAccept("Accepting the alert");
        await this.waitForActionToComplete();
    }

    public async clickSaveButton() {
        await this.actions.click(this.saveButton, "Click on save Button");
        await this.actions.switchToAlertAndAccept("Accepting the alert");
        await this.waitForActionToComplete();
    }

    public async clickAddInsurance() {
        await this.actions.click(this.linkAddInsurance, "Clicking Add insurance button");
    }

    public async addInsuranceDetails(filedName: string, textToEnter: any) {
        let addInsuranceField = element(by.xpath("//input[@name='" + filedName + "']"));
        await this.actions.clearText(addInsuranceField, "clear the text");
        await this.actions.setText(addInsuranceField, textToEnter, "Entering value to insurance fields");
    }


    public async clickInsuranceType(producerName: string) {
        try {
            let producer = element(by.xpath("//table[@id='insuranceDetailTable']//tbody//tr//td[8][contains(text(),'" + producerName + "')]"))
            browser.executeScript("arguments[0].scrollIntoView();", producer.getWebElement());
            let insurance: ElementFinder = element(by.xpath("//table[@id='insuranceDetailTable']//tbody//tr//td[8][contains(text(),'" + producerName + "')]//parent::tr//td[1]"));
            await this.actions.click(insurance, "Clicking on insurance type link");
        }
        catch (err) {
            console.log("Producer not created" + err);
        }
    }

    public async clickOnAlert() {
        await this.actions.waitUntilAlertPresent();
        await browser.driver.switchTo().alert().accept();
    }

    public async existingProducerAlert(text: string) {
        let xpath: ElementFinder = element(By.linkText(text));
        try {
            if (xpath.isPresent) {
                await this.actions.click(xpath, "Clicking");
            }
            else {
                console.log("Alert not present");
            }
        } catch (err) {
            console.log("err" + err);
        }
    }

    public async getTodayDate() {
        var today = new Date();
        var myDateString;
        today.setDate(today.getDate());
        myDateString = ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2) + '/' + today.getFullYear();
        console.log("date :::" + myDateString);
        return await myDateString;
    }


}