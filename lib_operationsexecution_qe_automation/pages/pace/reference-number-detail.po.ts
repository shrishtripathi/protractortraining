import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";
import { read } from 'fs';


export class ReferenceNumberDetail extends BasePage {

    readonly referenceNumberDetailPageTitle = element(by.xpath("//td[text()=' Reference Number Details']"));
    readonly referenceType: ElementFinder = element(by.xpath("//select[contains(@id,'addRefType')]"));
    readonly referenceNumber: ElementFinder = element(by.xpath("//input[contains(@id,'addRefNum')]"));
    readonly addButton: ElementFinder = element(by.xpath("//input[contains(@id,'addButton') and contains(@value,'Add')]"));
    readonly saveButton: ElementFinder = element(by.xpath("//input[contains(@id,'saveButton') and contains(@value,'Save')]"));
    readonly exitButton: ElementFinder = element(by.xpath("//input[contains(@type,'button') and contains(@value,'Exit')]"));
    readonly deleteButton: ElementFinder = element(by.xpath("//input[contains(@id,'deleteButton') and contains(@value,'Delete')]"));
    readonly addReferenceNumber: ElementFinder = element(by.xpath("//input[contains(@value,'Add Reference Number')]"));
    readonly moveButton: ElementFinder = element(by.xpath("//input[contains(@id,'moveButton') and contains(@class,'button')]"));
    readonly moveMessage: ElementFinder = element(by.xpath("//li[text()='Selected Reference Numbers moved successfully!']"))
    readonly saveMessage: ElementFinder = element(by.xpath("//li[text()='Selected Reference Numbers saved successfully!']"));
    readonly deleteMessage: ElementFinder = element(by.xpath("//li[text()='Selected Reference Numbers deleted successfully!']"));
    readonly searchButton: ElementFinder = element(by.xpath("//input[@value='Search']"));

    public async clickAddButton() {
        await this.actions.click(this.addButton, "Add");
        await this.actions.waitUntilElementVisible(this.referenceNumber, "waiting");
    }
    public async clickMoveButton() {
        await this.actions.click(this.moveButton, "Move");
        await this.actions.waitUntilElementVisible(this.referenceNumber, "waiting");
    }
    public async clickSaveButton() {
        await this.actions.click(this.saveButton, "save");
    }
    public async clickDeleteButton() {
        await this.actions.click(this.deleteButton, "delete");

        await this.actions.switchToAlertAndAccept("alert");

    }
    public async selectStop() {
        let stopDropdown: ElementFinder = element(by.xpath("//select[contains(@id,'stopSelect')]//option[2]"));
        await this.actions.click(stopDropdown, "stop");
    }
    public async clickExitButton() {
        await this.actions.click(this.exitButton, "Exit");
    }
    public async selectCustomerReferenceType() {
        let custReferenceType: ElementFinder = element(by.xpath("//select[contains(@id,'addRefType')]//option[1]"));
        await this.actions.click(custReferenceType, "type");
    }
    public async enterCustomerReferenceNumber(ref_Number: string) {
        await this.actions.setText(this.referenceNumber, ref_Number, "reference number");
    }
    public async clickAddReferenceNumberButton() {
        await this.actions.click(this.addReferenceNumber, "add ref number");
    }
    public async verifyPaceSuccessMessage(message_Element: ElementFinder) {
        let waitCount: number = 1;
        let account_Details: ElementFinder = element(by.xpath("(//td[contains(text(),'')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling :: div"))
        do {
            waitCount++;
            await this.actions.waitUntilElementVisible(message_Element, "");

        } while (! await message_Element.isPresent() && await waitCount <= 20 && ! await account_Details.isPresent())

        if (await message_Element.isPresent()) {
            this.scrollUp();
            return true;
        }
        return false;
    }

    public async verifySuccessMessage() {
        let successMessage: ElementFinder = element(by.xpath("//li[text()='Selected Reference Numbers saved successfully!']"));
        let waitCount: number = 1;
        do {
            waitCount++;
            await this.actions.waitUntilElementVisible(successMessage, "success");
        } while (! await successMessage.isPresent() && await waitCount <= 10)

        if (await successMessage.isPresent()) {
            return true;
        }

        return false;
    }


    public async verifyReferenceNumberInStopTable(ref_Number: string) {
        await this.actions.longWait("waiting to reload the page")
        let referenceINTable: ElementFinder = await element(by.xpath("(//input[@value='" + ref_Number + "'])[1]"));
        try {
            let counter: number = 1;
            do {
                await this.actions.shortWait("");
                counter++;
            } while (await referenceINTable.isPresent() && await counter <= 15)
            if (await referenceINTable.isPresent()) {
                return true;
            } else {
                return false;
            }
        } catch (e) {

        }

    }
    public async selectChildReferenceNumber() {

        let schema: ElementArrayFinder = element.all(by.xpath("//div[@id='schemaScrollableDiv']//b"))
        for (let i = 1; i <= await schema.count(); i++) {
            let eachSchema: ElementFinder = element(by.xpath("(//div[@id='schemaScrollableDiv']//b)[" + i + "]"));
            let schema_Name: string = await eachSchema.getText();
            let childRefNumberCheckbox: ElementFinder = element(by.xpath("(//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[@class='refNumHeaderTable']/following-sibling :: div//div//table//td[2]//input)[1]"));
            let childRefNumber: ElementFinder = element(by.xpath("(//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[@class='refNumHeaderTable']/following-sibling :: div//div//table//td[3]//input)[1]"));
            if (await childRefNumberCheckbox.isPresent()) {
                await this.actions.click(childRefNumberCheckbox, "checkbox");
                return await childRefNumber.getAttribute("value");
            }
        }
    }

    public async selectParentReferenceNumber() {

        let schema: ElementArrayFinder = element.all(by.xpath("//div[@id='schemaScrollableDiv']//b"))
        for (let i = 1; i <= await schema.count(); i++) {
            let eachSchema: ElementFinder = element(by.xpath("(//div[@id='schemaScrollableDiv']//b)[" + i + "]"));
            let schema_Name: string = await eachSchema.getText();
            let parentRefNumberCheckbox: ElementFinder = element(by.xpath("((//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling :: div//table[@class='refNumTable']//td[2]//input)[1]"));
            let parentRefNumber: ElementFinder = element(by.xpath("((//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling :: div//table[@class='refNumTable']//td[3]//input)[1]"));
            if (await parentRefNumberCheckbox.isPresent()) {
                await this.actions.click(parentRefNumberCheckbox, "checkbox");
                return await parentRefNumber.getAttribute("value");
            }
        }
    }
    public async checkAlertAndAccept() {
        try {
            if (await ExpectedConditions.alertIsPresent()) {
                await this.actions.switchToAlertAndAccept("alert");
            }
        } catch (e) { console.log("No alert present") }
    }

    public async selectParentReferenceWithMoveDropDown() {
        let parentRefDetails = {
            accountName: "",
            referenceText: ""
        };
        let schema: ElementArrayFinder = element.all(by.xpath("//div[@id='schemaScrollableDiv']//b"))
        for (let i = 1; i <= await schema.count(); i++) {
            let eachSchema: ElementFinder = element(by.xpath("(//div[@id='schemaScrollableDiv']//b)[" + i + "]"));
            let schema_Name: string = await eachSchema.getText();
            let checkMultipleStopAccount: ElementArrayFinder = element.all(by.xpath("//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')]"));
            if (await checkMultipleStopAccount.count() > 1) {
                let parentRefToBeMoved: ElementFinder = element(by.xpath("(//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling::div[1]//table[2]//input[@type='checkbox']"));
                if (await parentRefToBeMoved.isPresent()) {
                    let parentRefValueToBeMoved: ElementFinder = element(by.xpath("(//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling::div[1]//table[2]//td[3]/input"))
                    parentRefDetails.accountName = schema_Name;
                    parentRefDetails.referenceText = await parentRefValueToBeMoved.getAttribute('value');
                    await this.actions.click(parentRefToBeMoved, "");
                    await this.scrollintoView(parentRefToBeMoved);
                    await this.actions.click(element(by.xpath("(//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling::table[1]//input")), "");
                    return await parentRefDetails;
                }
            }
        }
    }

    public async selectChildReferenceWithMoveDropDown() {
        let childtRefDetails = {
            accountName: "",
            referenceText: ""
        };
        let schema: ElementArrayFinder = element.all(by.xpath("//div[@id='schemaScrollableDiv']//b"))
        for (let i = 1; i <= await schema.count(); i++) {
            let eachSchema: ElementFinder = element(by.xpath("(//div[@id='schemaScrollableDiv']//b)[" + i + "]"));
            let schema_Name: string = await eachSchema.getText();
            let checkMultipleStopAccount: ElementArrayFinder = element.all(by.xpath("//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')]"));
            if (await checkMultipleStopAccount.count() > 1) {
                let childRefToBeMoved: ElementFinder = element(by.xpath("(//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling::div[1]/div//table[3]//td[2]//input[@type='checkbox']"));
                if (await childRefToBeMoved.isPresent()) {
                    let childRefValueToBeMoved: ElementFinder = element(by.xpath("(//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling::div[1]/div//table[3]//td[3]//input"));
                    childtRefDetails.accountName = schema_Name;
                    childtRefDetails.referenceText = await childRefValueToBeMoved.getAttribute('value');
                    await this.actions.click(childRefToBeMoved, "");
                    await this.scrollintoView(childRefToBeMoved);
                    await this.actions.click(element(by.xpath("(//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling::table[1]//input")), "");
                    return await childtRefDetails;
                }
            }
        }

    }


    public async verifyParentReferenceAfterMoveToOtherStop(schema_Name: string, referenceNo: string) {
        let parentRefValueToBeChecked: ElementArrayFinder = element.all(by.xpath("(//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[2]/following-sibling::div[1]//table//td[3]/input"));
        for (let i = 1; i <= await parentRefValueToBeChecked.count(); i++) {
            let parentRefValue: string = await element(by.xpath("((//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[2]/following-sibling::div[1]//table//td[3]/input)[" + i + "]")).getAttribute("value");
            if (parentRefValue.trim() === referenceNo.trim()) {
                return true;
            }
        }
        return false;
    }

    public async verifyChildReferenceAfterMoveToOtherStop(schema_Name: string, referenceNo: string) {
        let childRefValueToBeChecked: ElementArrayFinder = element.all(by.xpath("(//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling::div[1]/div//table//td[3]//input"));
        for (let i = 1; i <= await childRefValueToBeChecked.count(); i++) {
            let childRefValue: string = await element(by.xpath("((//td[contains(text(),'" + schema_Name + "')]/ancestor :: table[contains(@id,'refNumTitle')])[1]/following-sibling::div[1]/div//table//td[3]//input)[" + i + "]")).getAttribute("value");
            if (childRefValue.trim() === referenceNo.trim()) {
                return true;
            }
        }
        return false;
    }

    public async verifyReferenceNumberLocked(accountValue: string) {
        let referenceLocked: ElementFinder = element(by.xpath("(//td[@class='panelTitle' and contains(text(),'Stop') and contains(text(),'" + accountValue + "')]/ancestor::table[contains(@id,'ref')]/following-sibling::div[1][@class='refNumVisible']//input[@type='checkbox'])[1]"));
        if (! await referenceLocked.isPresent()) {
            return true;
        }
        return false;
    }
    public async verifyBillPeriodAndPayPeriodStatus(accountValue: string) {
        let total_Stops: ElementArrayFinder = element.all(by.xpath("//td[@class='panelTitle' and contains(text(),'Stop') and contains(text(),'" + accountValue + "')]"))
        let billPeriod: ElementArrayFinder = element.all(by.xpath("//td[@class='panelTitle' and contains(text(),'Stop') and contains(text(),'" + accountValue + "')]/following::Div[@class='error' and contains(text(),'Bill Period is Closed.')]"));
        let payPeriod: ElementArrayFinder = element.all(by.xpath("//td[@class='panelTitle' and contains(text(),'Stop') and contains(text(),'" + accountValue + "')]/following::Div[@class='error' and contains(text(),'Pay Period is Closed.')]"));
        if (await total_Stops.count() === await billPeriod.count() && await total_Stops.count() === await payPeriod.count()) {
            return true;
        }
        return false;
    }

    public async getPositionOfElement(stopNumber) {
        let location = await element(by.xpath("(//table[contains(@id,'refNumTitleTable_S')])[" + stopNumber + "]")).getLocation();
        let xCoordinate = location.x.toFixed(2), yCoordinate = location.y.toFixed(2);
        return { xCoordinate, yCoordinate }
    };
    public async selectStopFromDropDown(stopNumber) {
        let stopXpath: ElementFinder = element(by.id('stopSelect'));
        let stopDropdownXpath: ElementFinder = element(by.xpath("(//select[@id='stopSelect']/option)[" + stopNumber + "]"));
        await this.actions.click(stopXpath, "Click on stop drop down")
        await this.actions.click(stopDropdownXpath, "click on stop" + stopNumber)
    };
    public async verifyReferenceNumberDetailPage() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.referenceNumberDetailPageTitle, "reference page title");
            flag = await this.actions.isElementDisplayed(this.referenceNumberDetailPageTitle, "verify page");
        } catch (error) {
            console.log("error " + error)
        }
        return await flag;
    }
    public async verifyCustomerReferenceTypeDropdown(index: number) {
        let customerRefDropdown: ElementFinder = element(by.xpath("(//select[@name='selectedSearchRefType']/option)[" + index + "]"));
        let dropdownValue: string = await customerRefDropdown.getText();
        console.log("dropdown Value " + dropdownValue);
        let flag: boolean = false;
        await this.actions.click(customerRefDropdown, "clicked on dropdown Value");
        try {
            flag = await this.actions.isElementDisplayed(element(by.xpath("//option[contains(text(),'" + dropdownValue + "') and contains(@selected,'selected')]")), "verify drop down value")
        } catch (error) {
            console.log("custref dropdown eroro " + error);
        }
        return await flag;
    }
    public async verifyCustomerStopDropdown(index: number) {
        let customerRefStop: ElementFinder = element(by.xpath("(//select[@name='selectedSearchRefNumber']/option)[" + index + "]"));
        let dropDownValue: string = await customerRefStop.getText();
        let realValue = dropDownValue.trim();
        let stopValue: string = realValue.substring(0, (realValue.length - 6));
        console.log("dropdown Value " + dropDownValue);
        let flag: boolean = false;
        await this.actions.click(customerRefStop, "clicked on dropdown Value");
        try {
            flag = await this.actions.isElementDisplayed(element(by.xpath("//input[@name='customerRefNo' and contains(@value,'" + stopValue.trim() + "')]")), "verify drop down value")
        } catch (error) {
            console.log("custref dropdown eroro " + error);
        }
        return await flag;
    }
}