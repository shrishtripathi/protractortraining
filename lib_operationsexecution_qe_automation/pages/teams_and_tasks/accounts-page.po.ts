import { browser, by, element, ElementFinder, ExpectedConditions, protractor, ElementArrayFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';

export class AccountsPage extends BasePage {
    readonly accountsImage: ElementFinder = element(by.xpath("//span[text()='Account']//parent::a//i"));
    readonly account: ElementFinder = element(by.xpath("//span[text()='Account']//parent::a"));
    readonly accountSearch: ElementFinder = element(by.xpath("//span[text()='Account Search']//parent::a"));
    readonly accountSearchInputField: ElementFinder = element(by.xpath("//div[@class='form-group']/input"));
    readonly soloCupCo: ElementFinder = element(by.xpath("//li[contains(text(),'Solo Cup Co')]"));
    readonly internationalPaperCo: ElementFinder = element(by.xpath("//li[contains(text(),'International Paper Co')]"));
    readonly internationalPaperAccountName: ElementFinder = element(by.xpath("//span[contains(text(),'International Paper Co (INGRBR)')]//parent::div"));
    readonly accountName: ElementFinder = element(by.xpath("//span[contains(text(),'Solo Cup Co')]//parent::div"));
    readonly contacts: ElementFinder = element(by.xpath("//span[contains(text(),'Contacts')]//parent::a"));
    readonly saveButton: ElementFinder = element(by.xpath("//div[@class='modal-footer clearfix']//button[text()='Save']"));
    readonly invoicesLink: ElementFinder = element(by.xpath("//a[contains(text(),'Invoices')]"));
    readonly billingTab: ElementFinder = element(by.xpath("//span[text()='BILLING']/parent::a"));
    readonly division: ElementFinder = element(by.xpath("//div[@class='ui-select-match']//span[contains(@class,'ui-select-toggle')]/span[text()='HJBT JBHA']"));
    readonly hjbtjbvanOption: ElementFinder = element(by.xpath("//li[@role='menuitem']/div/a/div[text()='HJBT JBVAN']"));
    readonly addNewSplitBillParameterChargeButton: ElementFinder = element(by.xpath("//a[@class='addParameter']"));
    readonly chargeCode: ElementFinder = element(by.xpath("//div[@class='ui-select-match']/span/span[text()='Charge Code']"));
    readonly detentionpOption: ElementFinder = element(by.xpath("//li[@role='menuitem']/div/a/div[text()='DETENTIONP']"));
    readonly splitBillCode: ElementFinder = element(by.xpath("//input[@id='splitBillCode']"));
    readonly contactsTab = element(by.xpath("//span[contains(text(),'Contacts')]"))
    readonly splitBillCodeOption: ElementFinder = element(by.xpath("//typeahead-container/ul/li/a/span[text()='OFFENDING FACILITY']"));
    readonly addSplitBillParameterChargeSaveButton: ElementFinder = element(by.xpath("//div[contains(@class,'addModal')]//button[text()='Save']"));

    readonly processingServiceRequestsXpath: ElementFinder = element(by.xpath("//*[@id='spinnerText' and (text()='Processing Service Requests ...') and not(@style='display: none;')]"));
    readonly divisionDropdown: ElementFinder = element(by.xpath("//*[@placeholder='Division']/div"));
    readonly spinnerLoadingXpath: ElementFinder = element(by.xpath("//jbh-spinner[//div[contains(@class, 'spinner') and @style='display: none;']]"));
    readonly saveButtonTextXpath: ElementFinder = element(by.buttonText('Save'));
    readonly email: ElementFinder = element(by.xpath("//label[text()='Email']//parent::div/input"));
    readonly contactsXpath: ElementArrayFinder = element.all(by.xpath("//datatable-body-row//datatable-body-cell[3]//span"));
    readonly threeDots: ElementArrayFinder = element.all(by.xpath("//datatable-body-row//datatable-body-cell[6]//span[@id='threeDotMenu']"));
    readonly popupWindowXpath: ElementFinder = element(by.xpath("//div[@class='modal fade addNewChargeModal in' and @style='display: block;']"));

    public async click(element: ElementFinder) {
        await this.actions.waitUntilElementClickable(element, "");
        await this.actions.click(element, "Click on " + element + " ");
        await this.waitForActionToCompleteTT();
    }
    public async setAccountSearchField(value, text) {
        await this.actions.setText(this.accountSearchInputField, value, "");
        await this.actions.click(element(by.xpath("//li[contains(text(),'" + text + "')]")), "");
        await this.actions.click(element(by.xpath("//span[contains(text(),'" + value + "')]")), "")
    }

    public async setText(element: ElementFinder, textToEnter: string) {
        await this.actions.setText(element, textToEnter, "Enter " + textToEnter + " to " + element + " ");
        await this.waitForActionToCompleteTT();
    }

    public async clickOnThreeDots(name: string, contactType: string) {
        let threeDots = element(by.xpath("//span[contains(text(),'" + name + "')]//ancestor::datatable-body-row//span[text()='" + contactType + "']//ancestor::datatable-body-row//a[@title='Overflow-menu']"))
        browser.executeScript("arguments[0].scrollIntoView();", threeDots.getWebElement());
        await this.actions.click(threeDots, "Click on " + element + " ");
    }

    public async getEmail() {
        await this.actions.waitUntilElementVisible(this.email, "");
        let emailText = await this.email.getAttribute("value");
        return emailText;
    }

    public async verifyAddedSplitBillParameter(text: string) {
        let billParameter: ElementFinder = element(by.xpath("//span[contains(text(),'" + text + "')]"));
        return await billParameter.isPresent();
    }

    public async clickOnEditContact(name: string, contactType: string) {
        let editContact = element(by.xpath("//span[contains(text(),'" + name + "')]//ancestor::datatable-body-row//span[text()='" + contactType + "']//ancestor::datatable-body-row//a[text()='Edit Contact']"));
        await this.actions.click(editContact, "Click on " + element + " ");
        await this.waitForActionToCompleteTT();
    }
    public async contactsPagination() {
        let flag = false;
        let xpath = element(by.xpath("//a[@id='a-nextPage']/parent::li[not(@class='disabled')]"));
        try {
            flag = await xpath.isDisplayed();
        } catch (error) {

        }
        return await flag;
    }

    public async removeContact(value) {

        do {

            await this.actions.waitUntilElementVisible(this.contactsXpath.get(0), "")
            let size = await this.contactsXpath.count();
            for (let index = 0; index < size; index++) {
                let text = await this.contactsXpath.get(index).getText();
                console.log("text is " + text);
                if (text === value) {
                    await this.actions.waitUntilElementVisible(this.threeDots.get(index), "");
                    await this.actions.scrollToBottomOfThePage("scroll down");
                    await this.actions.click(this.threeDots.get(index), "");
                    await this.actions.waitUntilElementVisible(element(by.xpath("(//a[text()='Remove Contact'])[" + (index + 1) + "]")), "")
                    await this.actions.click(element(by.xpath("(//a[text()='Remove Contact'])[" + (index + 1) + "]")), "")
                }

            }
        } while (await this.contactsPagination());
    }

    public async verifyContactIsRemoved(contact) {
        let flag = false;
        let xpath = element(by.xpath("//datatable-body-row//datatable-body-cell[3]//span[contains(text(),'" + contact + "')]"))
        try {
            await this.actions.waitUntilElementVisible(xpath, "")
            flag = await xpath.isDisplayed();
        } catch (error) {

        }
        return await flag;
    }
    public async clickOnAccountName(accountName: string) {
        let accountNameXpath: ElementFinder = element(by.xpath("//span[contains(.,'" + accountName + "')]"));
        await this.actions.waitUntilElementPresenceOf(accountNameXpath)
        await this.actions.click(accountNameXpath, "");
        await this.actions.waitUntilElementPresenceOf(await element(by.tagName('app-account-profile-info')))
    };

    public async clickOnLinkUnderAccountInformation(linkName: string) {
        let linkXpath: ElementFinder = element(by.xpath("//app-account-profile-info//div//a[contains(.,'" + linkName + "')]"));
        console.log("//app-account-profile-info//div//a[contains(.,'" + linkName + "')]")
        await this.actions.click(linkXpath, "");
        await this.actions.waitUntilElementInVisible(this.processingServiceRequestsXpath, '')
    };

    public async clickOnHeaderLink(headerText: string) {
        let headerLinkXpath: ElementFinder = element(by.xpath("//li[.//text()='" + headerText + "']"));
        await this.actions.click(headerLinkXpath, "")
        await this.actions.waitUntilElementInVisible(this.processingServiceRequestsXpath, '')
    };

    public async clickOnThreeDot(divisionLabel: string) {
        let threeDotXpath: ElementFinder = element(by.xpath("//div[span[.//text()='" + divisionLabel + "']]//a/i"));
        await this.actions.click(threeDotXpath, "")
    };

    public async clickOnThreeDotSuboption(divisionLabel: string, subOptionText: string) {
        let overflowOptionxpath: ElementFinder = element(by.xpath("//div[span[.//text()='" + divisionLabel + "']]//li/a[text()='" + subOptionText + "']"));
        console.log("//div[@class='modal-header']//*[contains(.,'ADD NEW RULE " + divisionLabel + "')]")
        await this.actions.click(overflowOptionxpath, "");
        await this.actions.waitUntilElementPresenceOf(this.popupWindowXpath)
    };

    public async waitForProcessing() {
        let spinnerXpath: ElementFinder = element(by.xpath("//div[contains(@class, 'spinner') and not(@style='display: none;')]"));

        try {
            if (await spinnerXpath.isPresent()) {
                await this.actions.waitUntilElementPresenceOf(this.spinnerLoadingXpath)
            }
            if (await this.processingServiceRequestsXpath.isPresent()) {
                await this.actions.waitUntilElementInVisible(this.processingServiceRequestsXpath, "", 35000)
            }

        } catch (error) {
            console.log(error)
        }
    };
    public async clickOnPopulatedSearchList(searchText: string) {
        let listXpath: ElementFinder = element(by.xpath(`//div/ul[not(@hidden) and @class='typeahead-suggestions']/li[1]/strong[1][text()='` + searchText + `']`))//"//li[.//text()='" + searchText + "']"));
        await this.actions.shortWait('')
        if (await listXpath.isPresent() == false) {
            await this.clearText(this.accountSearchInputField)
            await this.setText(this.accountSearchInputField, searchText)
        }
        await this.actions.waitUntilElementPresenceOf(listXpath, '')
        await this.click(listXpath)
        if (await this.processingServiceRequestsXpath.isPresent()) {
            await this.actions.waitUntilElementInVisible(this.processingServiceRequestsXpath, '')
        }

    };

    public async verifyDetails(columnNumber) {
        let columnxpath: ElementFinder = element(by.xpath("(//div[@class='panel-default jbh-data-table-panel panelshadow panel' and (.//span[.//text()='Charge Authorization  & Bill'])]//datatable-row-wrapper//div/span)[" + columnNumber + "]"));
        return (await this.actions.getText(columnxpath, ""))
    };


    public async selectRulesToAdd(rowName: string, optionText: string) { //rowName i.e. Rule Type, Billing Type, 24hr Customer
        let populatedOptionXpath: ElementFinder = element(by.xpath("//li[contains(.,'" + optionText + "')]"));
        let dropDownLabelXpath: ElementFinder = element(by.xpath("//div[contains(@class,'modal-dialog modal-md')]//ng-select[@placeholder='" + rowName + "']/../preceding-sibling::div/ng-select//span"));
        await this.actions.waitUntilElementPresenceOf(dropDownLabelXpath)
        await this.actions.click(dropDownLabelXpath, "")
        await this.actions.waitUntilElementPresenceOf(populatedOptionXpath);
        await this.actions.click(populatedOptionXpath, "")
    };

}
