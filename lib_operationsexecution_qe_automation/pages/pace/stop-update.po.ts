import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, protractor } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class StopUpdatePage extends BasePage {

    readonly tarilingMiscEquipmentLink: ElementFinder = element(by.xpath("//td[text()='Trailing/Misc Equipment']//parent::tr//td[2]//a"));
    readonly orderNumber: ElementFinder = element(by.xpath("//td[text()='JBH Order Nbr : ']//parent::tr//td[2]"));
    readonly trailingAndMiscellaneousPage: ElementFinder = element(by.xpath("//center[text()='Trailing and Miscellaneous Equipment']"));
    readonly stopUpdatePage: ElementFinder = element(by.xpath("//td[text()=' Stop Update']"));
    readonly customerNameAndCITYStateLink: ElementFinder = element(by.xpath("//td[text()='Customer Name/City State']//parent::tr//td[4]//a"));
    readonly productAndShippingInformationLink: ElementFinder = element(by.xpath("//td[text()='Product and ']//parent::tr//td[6]//a"));
    readonly productAndShippingInfoPage: ElementFinder = element(by.xpath("//td[text()=' Product and Shipping Device Listing']"));
    readonly stopClassifcationDropDown: string = "//select[@name='stopClassification']//option";
    readonly customerServicesLink: ElementFinder = element(by.xpath("//a[contains(text(),'Customer Services')]"));
    readonly stopComment: ElementFinder = element(by.id("stopComment"));
    readonly updateButton: ElementFinder = element(by.xpath("//input[@value='Update']"));
    readonly reconcileView: ElementFinder = element(by.xpath("//input[@id='chkReconcileView']"));
    readonly cancelButton: ElementFinder = element(by.xpath("//input[@value='Cancel']"));
    readonly customerServicesCheckbox: ElementFinder = element(by.xpath("//div[@id='scrollingResults']//tbody//tr[1]//input[@name='selectFlag']"));
    readonly customerSpecificServiceDropdown: string = "//select[@id='serviceType']//option";
    readonly exceptionReasonDropdown: string = "//select[@id='exceptionReason']//option";
    readonly customerSpecificServiceDropdownOptionText: ElementFinder = element(by.xpath("//table[@id='tableResults']//tbody//tr[1]//td[7]"));
    readonly previousOrderNumberButton: ElementFinder = element(by.xpath("//input[@id='btnPreviousOrderNbr']"));
    readonly nextOrderNumberButton: ElementFinder = element(by.xpath("//input[@id='btnNextOrderNbr']"));
    readonly previousStopNumberButton: ElementFinder = element(by.xpath("//input[@id='btnPreviousStopNbr']"));
    readonly nextStopNumberButton: ElementFinder = element(by.xpath("//input[@id='btnNextStopNbr']"));
    readonly orderNumbersInDropDown: ElementArrayFinder = element.all(by.xpath("//select[@id='orderNbrFilter']/option"));
    readonly stopNumbersInDropDown: ElementArrayFinder = element.all(by.xpath("//select[@id='stopNbrClassFilter']/option"));
    readonly orderNumberDropDown: ElementFinder = element(by.xpath("//select[@id='orderNbrFilter']"));
    readonly stopNumberDropDown: ElementFinder = element(by.xpath("//select[@id='stopNbrClassFilter']"));
    readonly orderNumberOptionsList: string = "//select[@id='orderNbrFilter']/option";
    readonly stopNumberOptionsList: string = "//select[@id='stopNbrClassFilter']/option";
    readonly resultsContent: ElementFinder = element(by.xpath("//div[@id='panelPleaseWait']"));
    readonly deleteServicesButton: ElementFinder = element(by.xpath("//span[@id='toolbarEditable']//input[@value='Delete']"));
    readonly delete: ElementFinder = element(by.id("btnDelete"));
    readonly invisibleOrderNumberDropDown: ElementFinder = element(by.xpath("//select[contains(@class,'cssButtonGrayOut')]"));

    public async verifyServicesCopiedToActualFromPlanned() {
        let planedServices = element.all(by.xpath("//div[@id='scrollingResultsPlanned']//tbody//tr"));
        let planedServicesCount = await planedServices.count();
        let actualSerivices = element.all(by.xpath("//div[@id='scrollingResults']//input[@type='checkbox']"));
        let actualSerivicesCount = await actualSerivices.count();

        if (actualSerivicesCount === planedServicesCount) {
            return true;
        } else {
            return false;
        }
    }

    public async deleteService() {
        let actualSerivices = element.all(by.xpath("//div[@id='scrollingResults']//input[@type='checkbox']"));
        let deletedService: ElementArrayFinder = element.all(by.xpath("//div[@id='scrollingResults']//td[7]"));
        let actualSerivicesCount = await actualSerivices.count();
        if (actualSerivicesCount > 0) {
            await this.actions.click(actualSerivices.get(0), "Check actual service check box ");
            let deletedServiceText = await this.actions.getText(deletedService.get(0), "Get Text");
            await this.clickOnInputButton(this.deleteServicesButton);
            await this.acceptingAlert();
            await this.actions.waitUntilElementVisible(this.resultsContent, "Wait untill Element is visible");
            return await deletedServiceText;
        }
    }

    public async waitForOrderNumberDropDownVisible() {
        await this.actions.waitUntilElementInVisible(this.invisibleOrderNumberDropDown, "Wait untill element");
    }

    public async verifyDeletedServiceNotPresentInActionSection(deletedService: string) {
        let xpath = element(by.xpath("//div[@id='scrollingResults']//td[7][contains(text(),'" + deletedService + "')]"));
        return await xpath.isPresent();
    }

    public async deleteAllActualServices() {
        let flag = true;
        while (flag) {
            let planedServices = element.all(by.xpath("//div[@id='scrollingResultsPlanned']//tbody//tr"));
            let planedServicesCount = await planedServices.count();
            console.log("planedServicesCount:" + planedServicesCount);
            if (planedServicesCount > 0) {
                let result = await element.all(by.xpath("//div[@id='scrollingResults']//input[@type='checkbox']")).get(0).isPresent();
                if (!result) {
                    await this.clickOnButton("Copy Missing Services");
                    await this.actions.waitUntilElementVisible(element(by.xpath("//div[@id='scrollingResults']//input[@type='checkbox']")), "wait")
                } else {
                    let actualSerivices = element.all(by.xpath("//div[@id='scrollingResults']//input[@type='checkbox']"));
                    let actualSerivicesCount = await actualSerivices.count();
                    console.log("actualSerivicesCount:" + actualSerivicesCount);
                    if (actualSerivicesCount > 0) {
                        for (let i = 0; i < actualSerivicesCount; i++) {
                            await this.actions.click(actualSerivices.get(i), "Check actual service check box ");
                        }
                        try {
                            if (this.delete.isPresent()) {
                                await this.click(this.delete);
                            } else {
                                await this.click(this.deleteServicesButton);
                            }
                            let EC = protractor.ExpectedConditions;
                            if (await browser.wait(EC.alertIsPresent(), 5000))
                                console.log("inside if");
                            await this.actions.switchToAlertAndAccept("");
                        }
                        catch (error) {
                            console.log("Alert", error)
                        }
                        await browser.driver.navigate().refresh();
                        flag = false;
                    }
                }
            } else {
                let nextStopButtonAvailability = await this.nextStopNumberButton.isEnabled();
                if (nextStopButtonAvailability) {
                    await this.actions.click(this.nextStopNumberButton, "Click on next stop");
                } else {
                    await this.actions.click(this.nextOrderNumberButton, "Click on next stop");
                }
            }
        }
    }

    public async verifyDisabledOrEnabledButton(buttonNameId: string) {
        let button: ElementFinder = element(by.xpath("//input[@id='" + buttonNameId + "']"));
        console.log("'" + buttonNameId + "'button:" + await button.isEnabled());
        return await button.isEnabled();
    }

    public async selectNumberFromDropDown(dropDown: ElementFinder, options: ElementArrayFinder, dropDownOptions: string, text: string) {
        let size: number = await options.count();
        let number;
        if (text === "last") {
            number = await options.get(size - 1).getAttribute("value");
            console.log("Last Order Number" + number);
        } else if (text === "first") {
            number = await options.get(0).getAttribute("value");
            console.log("first Order Number" + number);
        }
        await this.actions.waitUntilElementClickable(dropDown, "Wait to click on drop down");
        await this.actions.click(dropDown, "Click on drop down");
        await this.actions.selectByValue(dropDownOptions, number, "click on elemnt");
    }

    public async verifyStopUpdatePage() {
        return await this.actions.isElementPresent(this.stopUpdatePage, "Verifying stop update page");
    }
    public async checkReconcileView(checkBox: string) {
        await this.actions.click(this.reconcileView, "Clicking on " + checkBox + " ");
    }
    public async clickMiscEquipmentLink() {
        await this.actions.click(this.tarilingMiscEquipmentLink, "Clicking on trailing misc equipment link");
    }

    public async verifyTrailingAndMiscellaneousPage() {
        return await this.actions.isElementPresent(this.trailingAndMiscellaneousPage, "Verifying trailing and miscellaneous page");
    }

    public async tarilerPrefix() {
        let text = await this.actions.getText(this.tarilingMiscEquipmentLink, "Get customer reference number");
        let tarilerNumber = await text.substring(13 - 6);
        console.log("tarilerNumber", tarilerNumber);
        return await tarilerNumber;
    }
    public async verifyOrderNumber() {
        return await this.actions.getText(this.orderNumber, "Order Number");
    }

    public async verifyTrailerNumber() {
        let xpath = element(by.xpath("//td[text()='Trailer']//parent::tr//td[4]//input"));
        return await xpath.getAttribute("value");
    }

    public async clickOnButton(buttonName: string) {
        let xpath: ElementFinder = element(by.xpath("//input[@value='" + buttonName + "']"));
        await this.actions.waitUntilElementVisible(xpath, "Waiting");
        await this.actions.click(xpath, "Clicking on " + buttonName + " ");
    }

    public async getCustomername() {
        let text = await this.actions.getText(this.customerNameAndCITYStateLink, "Get customer reference number");
        let customerName = await text.slice(0, -8);
        return customerName;
    }

    public async getCityOrState() {
        let text = await this.actions.getText(this.customerNameAndCITYStateLink, "Get customer reference number");
        let city = await text.substring(26, 21);
        return city;
    }

    public async clickCustomerNmaeAndCityLink() {
        await this.actions.click(this.customerNameAndCITYStateLink, "Clicking on customer name and city link");
    }

    public async verifyCustomerName() {
        let xpath = element(by.xpath("//td[text()='Customer Name :']//parent::tr//td[2]"));
        return await this.actions.getText(xpath, "customer name")
    }

    public async verifyCityOrState() {
        let xpath = element(by.xpath("//td[text()='City/State :']//parent::tr//td[2]"));
        return await this.actions.getText(xpath, "City or state")
    }

    public async clickProductAndShippingInformationLink() {
        await this.actions.click(this.productAndShippingInformationLink, "Clicking on product and information link");
    }

    public async verifyOrderNumberinProductAndShippingInformationPage() {
        let xpath = element(by.xpath("//td[text()='Order Number:']//parent::tr//td[2]"))
        return await this.actions.getText(xpath, "Order Number");
    }

    public async verifyProductAndShippingInfoPage() {
        return await this.actions.isElementPresent(this.productAndShippingInfoPage, "Verifying product and shipping information page");
    }

    public async verifyProductInformation() {
        let rows = element.all(by.xpath("//td[text()='Product']//parent::tr//parent::tbody//tr"));
        let numberOfRows = await rows.count();
        return await numberOfRows;
    }

    public async setStopClassificationDropDown(valueToSelect: string) {
        await this.actions.selectByValue(this.stopClassifcationDropDown, valueToSelect, "Selecting value to stop classification drop down");
    }

    public async clickCustomerServiceLink() {
        await this.actions.click(this.customerServicesLink, "Clicking on customer service link");
    }

    public async hoverOnCustomerServicesRow() {
        let xpath = element(by.xpath("//tbody[@id='tableBody']//tr[1]"));
        await this.actions.moveMouseToElement(xpath, "Hover over to customer services link");
    }

    public async verifyProductDetailPopUp() {
        let xpath = element(by.xpath("//center[text()='Product Detail']"));
        return await this.actions.getText(xpath, "Get text");
    }

    public async acceptingAlert() {
        try {
            let alert = browser.switchTo().alert();
            await alert.accept();
        } catch (err) {
            console.log("err" + err);
        }
    }

    public async addComment(comment: string) {
        await this.actions.clearText(this.stopComment, "comment");
        await this.actions.setText(this.stopComment, comment, "Add Comment");
    }
    public async clickOnUpdateButton() {
        await this.actions.click(this.updateButton, "update button");
    }
    public async clickOnCancelButton() {
        await this.actions.click(this.cancelButton, "update button");
    }
    public async verifyComment() {
        let text: string = null;
        try {
            await this.actions.waitUntilElementVisible(this.stopComment, "wait for comment")
            text = await this.stopComment.getText();
        } catch (error) {

        }

        return await text;
    }
    public async verifyStopDetails(stopDetails: string[]) {
        let flag: boolean = false;
        for (let index = 0; index < stopDetails.length; index++) {
            try {
                if (await element(by.xpath("//*[contains(text(),'" + stopDetails[index] + "')]")).isPresent()) {
                    flag = true;
                }
                else {
                    flag = false;
                }
            } catch (error) {
                console.log("error is " + error)
            }

        }
        return await flag;
    }

    public async setDropdown(dropDown: string, optionValue: string) {
        await this.actions.selectByValue(dropDown, optionValue, "Clicking on " + optionValue + " ");
    }

    public async getText(elementName: ElementFinder) {
        return await this.actions.getText(elementName, "Get text of element")
    }

    public async clickOnStopCheckBox() {
        await this.actions.click(this.customerServicesCheckbox, "Clicking on the stop checkbox")
    }

    public async verifyStopClassificationDropDownOtion() {
        let stopClassification = element(by.xpath("//select[@name='stopClassification']"));
        let option = stopClassification.getAttribute("value");
        return option;
    }
    public async verifyBlueColor() {
        let flag: boolean = false;
        let blueColor: string = "rgba(204, 233, 255, 1)";
        try {
            await browser.sleep(2000);
            let color: ElementFinder = element(by.xpath("//tr[contains(@class,'Match')]"));
            let res = await color.getCssValue('background-color');
            console.log("color is " + res);
            if (await res === blueColor) {
                flag = true;
            }
        } catch (error) {
            console.log("errorm is " + error)

        }
        return await flag;
    }
    public async verifyReconcileView() {
        let flag: boolean = false;
        let stopUpdatePage = new StopUpdatePage();
        if (await this.verifyBlueColor()) {
            flag = true;
            return await flag;
        }
        else {
            await browser.navigate().back();
            await browser.navigate().back();
            let custCodeIndex = await this.getColumnIndexOfStopDetails("Customer\nCode");
            let cityOrStateIndex = await this.getColumnIndexOfStopDetails("City/State\nCode");
            let stopClassIndex = await this.getColumnIndexOfStopDetails("Stop Class");
            let customerServicesBox = await element(by.xpath("//a[contains(@href,'CustomerServices')]/../../following::td[@class='textValueCell']/div"));
            let customerServiceLink = await element(by.xpath("//a[contains(@href,'CustomerServices')]"));
            let stopDetails: string[] = [];

            try {
                let rows: ElementArrayFinder = element.all(by.xpath("//tr[@class='resultsRowAlt']"));
                let size: number = await rows.count();
                for (let index = 1; index <= size; index++) {
                    let stop = await this.actions.getText(element(by.xpath("(//tr[@class='resultsRowAlt'])[" + index + "]/td[" + stopClassIndex + "]")), "getting text");
                    if (stop.length > 0) {
                        await this.actions.click(element(by.xpath("(//tr[@class='resultsRowAlt'])[" + index + "]/td[" + custCodeIndex + "]")), "click on customers code");
                        let text: string = await this.actions.getText(customerServicesBox, "get text");
                        console.log("text is " + text);
                        let size = text.length;
                        if (size === 0) {
                            await browser.navigate().back();
                        }
                        else {
                            await this.customerServicesLink.click();
                            await this.reconcileView.click();
                            if (await this.verifyBlueColor()) {
                                flag = true;
                                return await flag;
                            }
                            else {
                                await browser.navigate().back();
                                await browser.navigate().back();
                            }
                        }



                    }
                }
            } catch (error) {
                console.log("error is " + error)
            }
        }
        return await flag;
    }
}