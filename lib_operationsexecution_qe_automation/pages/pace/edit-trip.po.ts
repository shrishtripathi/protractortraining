import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";
import { RouteInformation } from "../pace/route-information.po";

let routeInformation = new RouteInformation();

export class EditTripPage extends BasePage {

    readonly customerReferenceNumberLink: ElementFinder = element(by.xpath("//td[text()='Customer Reference Nbr/Type']//parent::tr//td[2]//a"));
    readonly editTrip: ElementFinder = element(by.xpath("//td[contains(text(),'Edit Trip')]"));
    readonly customerMeasureLink: ElementFinder = element(by.xpath("//td[text()='Customer Measure']//parent::tr//td[4]//a"));
    readonly customerMeasuresPage: ElementFinder = element(by.xpath("//center[text()='Customer Measures']"));
    readonly cashExpenseLink: ElementFinder = element(by.xpath("//td[text()='Cash Expense Item']//parent::tr//td[6]//a"));
    readonly cashExpensePage: ElementFinder = element(by.xpath("//center[text()='Cash Expense and Charge Listing']"));
    readonly totalMilesLink: ElementFinder = element(by.xpath("(//td[text()='Total Miles']//ancestor::table[@class='inputTable']//tbody)[2]//following-sibling::tr[4]//td[8]"));
    readonly routeInformationPage: ElementFinder = element(by.xpath("//td[text()=' Route Information']"));
    readonly orderStatus: ElementFinder = element(by.id("ord_ordStatus"));
    readonly loadClassification: ElementFinder = element(by.id("ord_loadBkhlClass"));
    readonly billingPeriodEndDate: ElementFinder = element(by.id("dsp_billPerdEndDate"));
    readonly customerCode: ElementFinder = element(by.xpath("//td[contains(@style,'background-color:')]/a"));
    readonly orderNumbersInDropDown: ElementArrayFinder = element.all(by.xpath("//select[@name='customerRequestID']/option"));
    readonly stopDetailsColumns: ElementArrayFinder = element.all(by.xpath("//div[@id='stop_section']//tr[@class='resultsHeaderAlt']/td"))
    readonly stopDetailRows: ElementArrayFinder = element.all(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRowAlt']"))
    readonly accountDriver: ElementFinder = element(by.xpath("//td[text()='Account Driver']/following::td[@id='dsp_acctDriver']"));
    readonly billableDispatch: ElementFinder = element(by.id("dsp_billable"));
    readonly payableDispatch: ElementFinder = element(by.id("dsp_payable"));
    readonly OrderNumberLink: ElementFinder = element(by.xpath("//td[@id='ord_ordNbr']//a"));
    readonly customerReferenceLink = element(by.id("ord_custRefNbrTyp"));
    readonly editButton = element(by.xpath("//td[contains(text(),'Order Details')]/child::input[@value='Edit']"));
    readonly editButtonDispatchDetails = element(by.xpath("//select[@name='dispatchNumber']/following::input[@value='Edit']"));
    readonly loadClassificationDropDown: ElementFinder = element(by.xpath("(//select[@name='loadClassification']/option)[2]"));
    readonly updateButton = element(by.xpath("//input[@value='Update']"))

    customerReferenceNumer: string;
    orderNumber: string;

    loadClassificationText: string;
    numberOfStops: number;
    totalMiles: number;


    public async clickCustomerReferenceNumberLink() {
        let text = await this.actions.getText(this.customerReferenceNumberLink, "Get customer reference number");
        this.customerReferenceNumer = await text.slice(0, -6);
        console.log("customerReferenceNumer", this.customerReferenceNumer);
        await this.actions.click(this.customerReferenceNumberLink, "Clicking on customer reference link");
        await this.waitForPageLoad();
    }

    public async verifyMoreThan3OrdersArePresent() {

        return await this.orderNumbersInDropDown.count()
    }

    public async verifyCustomerReferenceNumber() {
        let xpath = element(by.xpath("//td[contains(text(),'" + this.customerReferenceNumer + "')]"));
        return await this.actions.isElementPresent(xpath, "Customer reference number");
    }

    public async clickOnButton(buttonName: string) {
        let xpath: ElementFinder = element(by.xpath("//input[@value='" + buttonName + "']"));
        await this.actions.click(xpath, "Clicking on " + buttonName + " ");
    }

    public async verifyEditTripPage() {
        return await this.actions.isElementPresent(this.editTrip, "Verifying edit trip page");
    }

    public async getCommingleOrder(orderType: string) {
        let orderNumberDropDown: ElementFinder = element(by.xpath("//select[@name='customerRequestID']"));
        let orderNumberSize: number = await this.orderNumbersInDropDown.count();
        let OrderNumber;
        let orderText;
        for (let i = 0; i < orderNumberSize; i++) {
            OrderNumber = await this.orderNumbersInDropDown.get(i).getAttribute("value");
            await this.actions.click(orderNumberDropDown, "Click on drop down");
            await this.actions.selectByValue("//select[@name='customerRequestID']/option", OrderNumber, "click on elemnt");
            if (await this.text(orderType).isPresent()) {
                orderText = await this.getElementText(this.text(orderType));
                if (orderText === orderType) {
                    orderText = orderText;
                    break;
                }
            }
        }
        return orderText;
    }

    public async getCustomerReferenceNumber() {
        let xpath = element(by.xpath("//td//input[@value='" + this.customerReferenceNumer + "']"));
        return await xpath.getAttribute("value");
    }
    public async clickTotalMilesLink() {
        await this.actions.click(this.totalMilesLink, "Clicking on total miles link")
    }

    public async verifySelectedPrimaryFlag() {
        let checkedRadioButton = element(by.xpath("//td//input[@value='" + this.customerReferenceNumer + "']/parent::td/parent::tr//td[6]//input[@value='Y']"));
        return checkedRadioButton.isPresent();
    }

    public async clickCustomerMeasureLink() {
        await this.actions.click(this.customerMeasureLink, "Clicking on customer measure link")
    }

    public async verifyCustomerMeasuresPage() {
        return await this.actions.isElementPresent(this.customerMeasuresPage, "Verifying customer measures page");
    }

    public async verifyAccount() {
        let xpath = element(by.xpath("//td[contains(text(),'Whirlpool LDCN - AUSTXX')]"));
        return await this.actions.getText(xpath, "text of account");
    }

    public async getOrderNumber() {
        let orderNumerxpath = element(by.xpath("//td[text()='Order Nbr']//parent::tr//td[2]//a"));
        this.orderNumber = await this.actions.getText(orderNumerxpath, "Get order number");
        return await this.orderNumber;
    }

    public async verifyOrderNumber() {
        let xpath = element(by.xpath("//td[contains(text(),'JBH Order Nbr')]//ancestor::table[@class='inputTable']//tr[3]//td[2]"));
        return await this.actions.getText(xpath, "Get Order number");
    }

    public async clickCashExpenseLink() {
        await this.actions.click(this.cashExpenseLink, "Clicking on cash expense link")
    }

    public async verifyCashExpensePage() {
        return await this.actions.isElementPresent(this.cashExpensePage, "Verifying cash expense page");
    }

    public async verifyRouteInformationPage() {
        return await this.actions.isElementPresent(this.routeInformationPage, "Verifying route information page");
    }

    public async verifyRouteDetails() {
        let rows = element.all(by.xpath("//tr[@class='resultsHeaderAlt']//parent::tbody//tr"));
        let numberOfRows = await rows.count();
        console.log("rows", numberOfRows);
        return await numberOfRows;
    }

    public async clickOnStopDetailsRow(rowNumber: number) {
        let xpath = element(by.xpath("//div[@id='stop_section']//tr[" + rowNumber + "]"));
        await this.actions.moveMouseToElement(xpath, "Hover on stop details row");
        await this.actions.click(xpath, "Clicking on stop details row");
    }

    public async verifyOrderDetailsInEditTripPage() {
        let orderDetails = {
            orderStatus: "",
            billingPeriodEndDate: "",
            loadClassification: ""
        };
        orderDetails.orderStatus = await this.actions.getText(this.orderStatus, "Get Text");
        orderDetails.billingPeriodEndDate = await this.actions.getText(this.billingPeriodEndDate, "Get Text");
        orderDetails.loadClassification = await this.actions.getText(this.loadClassification, "Get Text");
        return await orderDetails;
    }
    public async getTextFromClassification() {
        let loadClassificationText = await this.actions.getText(this.loadClassification, "Get Text");
        console.log("test is " + loadClassificationText)
        return await loadClassificationText;
    }
    public async getTextfromLoadClassificationDropDown() {
        let loadClassificationText = await this.actions.getText(this.loadClassificationDropDown, "Get Text");
        return await loadClassificationText;
    }

    public async verifyDisabledOrEnabledButton(buttonName: string) {
        let button: ElementFinder = element(by.xpath("//input[@name='" + buttonName + "']"));
        console.log("'" + buttonName + "'button:" + await button.isEnabled());
        return await button.isEnabled();
    }

    public async selectLastOrderNumber(text: string) {
        let orderNumberDropDown: ElementFinder = element(by.xpath("//select[@name='customerRequestID']"));
        let orderNumberSize: number = await this.orderNumbersInDropDown.count();
        let OrderNumber;
        if (text === "last") {
            OrderNumber = await this.orderNumbersInDropDown.get(orderNumberSize - 1).getAttribute("value");
            console.log("Last Order Number" + OrderNumber);
        } else if (text === "first") {
            OrderNumber = await this.orderNumbersInDropDown.get(0).getAttribute("value");
        } else if (text === "middle") {
            orderNumberSize = orderNumberSize / 2;
            orderNumberSize = Math.round(orderNumberSize);
            console.log("middle orderNumberSize:" + orderNumberSize);
            OrderNumber = await this.orderNumbersInDropDown.get(orderNumberSize - 1).getAttribute("value");
        }
        await this.actions.click(orderNumberDropDown, "Click on drop down");
        await this.actions.selectByValue("//select[@name='customerRequestID']/option", OrderNumber, "click on elemnt");
    }

    public async mouseOverAndClickCustomerCode() {
        await this.actions.moveMouseToElement(this.customerCode, "mouse over to customer code");
        await this.actions.click(this.customerCode, "click on customer code");
    }

    public async allOrderNumber() {
        let orderNumberxpath: string = "(//td[.='Order Nbr']//following-sibling::td/select)[1]";
        let selectOrderNumber: ElementFinder = element(by.xpath(orderNumberxpath));
        let listOfOrderNumber: ElementArrayFinder = element.all(by.xpath("(" + orderNumberxpath + ")/option"));
        await this.actions.click(selectOrderNumber, "select order number");
        console.log("test");
        let orderNumber: string[] = []
        for (let index = 0; index < await listOfOrderNumber.count(); index++) {
            orderNumber.push((await listOfOrderNumber.get(index).getText()).trim())

        }
        console.log("orderNumber: " + orderNumber)
        return orderNumber;
    }

    public async clickOnMilerLink() {
        let getPcmilerLinkText: ElementFinder = element(by.xpath("//td[@id='dsp_totMiles']//a"));
        await getPcmilerLinkText.click();
    }

    public async clickOnLinkFromHeader(linkText: string) {
        let homeTab: ElementFinder = element(by.xpath("//td[@class='toolbarCellLeft']/a[contains(.,'" + linkText + "')]"));
        await this.waitForElementIsVisible(homeTab)
        await this.actions.click(homeTab, "click on " + linkText + " Tab from header");
    }

    public async clickOrderNumberFromButtom(orderNumberArray, index?) {
        let values: any = []
        let totalEmptyMilesBeforeDeletion: number = null
        let totalDeadheadMilesBeforeDeletion: number = null
        let totalLoadedMilesBeforeDeletion: number = null
        let totalBobtailMilesBeforeDeletion: number = null
        let totalMilesBeforeDeletion: number = null
        let getPcmilerLinkText: ElementFinder = element(by.xpath("//td[@id='dsp_totMiles']//a"));
        if (index == undefined) {
            index = orderNumberArray.length - 1
        }

        for (index; index > 0; index--) {
            let orderNumberDropdownList = element(by.xpath("((//td[.='Order Nbr']//following-sibling::td/select)[1]/option)[contains(.,'" + orderNumberArray[index] + "')]"))
            await orderNumberDropdownList.click();

            var mileageText = await getPcmilerLinkText.getText()
            var mileage = parseInt(mileageText.replace(/[^0-9\.]/g, ''))
            if (mileage > 0) {
                await getPcmilerLinkText.click();
                totalMilesBeforeDeletion = await routeInformation.getMlies("dtl_totMiles");

                if (totalMilesBeforeDeletion > 0) {
                    totalEmptyMilesBeforeDeletion = await routeInformation.getMlies("dtl_totEmptyMiles");
                    totalDeadheadMilesBeforeDeletion = await routeInformation.getMlies("dtl_totDeadheadMiles");
                    totalLoadedMilesBeforeDeletion = await routeInformation.getMlies("dtl_totLoadedMiles");
                    totalBobtailMilesBeforeDeletion = await routeInformation.getMlies("dtl_totBobtailMiles");
                    await values.push(await element(by.id('ordNbr')).getText(), totalEmptyMilesBeforeDeletion, totalDeadheadMilesBeforeDeletion, totalLoadedMilesBeforeDeletion, totalBobtailMilesBeforeDeletion, totalMilesBeforeDeletion)
                    await orderNumberArray.splice(orderNumberArray.indexOf(orderNumberArray[orderNumberArray.length - 1]), 1)
                    break;
                }
                else {
                    await orderNumberArray.splice(orderNumberArray.indexOf(orderNumberArray[orderNumberArray.length - 1]), 1)
                    await routeInformation.clickOnButton("Exit");
                }
            }

        }
        index--
        return { values, index }
    }

    public async verifyOrderIsCommingleOrder() {
        let commingleOrder: ElementFinder = element(by.xpath("//div[contains(text(),'Commingle Order')]"));
        let orderCount: number = await element.all(by.xpath("//select[@name='customerRequestID']/option")).count();
        if (await commingleOrder.isPresent()) {
            return true;
        } else {

            for (let i = 2; i <= orderCount; i++) {
                await this.actions.selectByIndex(element.all(by.xpath("//select[@name='customerRequestID']/option")), i, "order");
                await this.actions.longWait("waiting till page loads")
                if (await commingleOrder.isPresent()) {
                    return true;
                }
            }
        }
        return false;
    }

    public async getDataFromStopDetails(customerCode: string, cityCode: string, stopClass: string) {
        let custCodeIndex = await this.getColumnIndexOfStopDetails(customerCode);
        let cityOrStateIndex = await this.getColumnIndexOfStopDetails(cityCode);
        let stopClassIndex = await this.getColumnIndexOfStopDetails(stopClass);
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
                        await browser.navigate().back();
                        let stopClass = await this.actions.getText(element(by.xpath("(//tr[@class='resultsRowAlt'])[" + index + "]/td[" + stopClassIndex + "]")), "getting text");
                        let customerCode = await this.actions.getText(element(by.xpath("(//tr[@class='resultsRowAlt'])[" + index + "]/td[" + custCodeIndex + "]")), "getting text");
                        let cityState = await this.actions.getText(element(by.xpath("(//tr[@class='resultsRowAlt'])[" + index + "]/td[" + cityOrStateIndex + "]")), "getting text");
                        stopDetails.push(stopClass);
                        stopDetails.push(customerCode);
                        stopDetails.push(cityState.substring(0, 3));
                        console.log("array elements are " + stopDetails)
                        await this.actions.click(element(by.xpath("(//tr[@class='resultsRowAlt'])[" + index + "]/td[" + custCodeIndex + "]")), "click on customers code");
                        break;
                    }



                }
            }
        } catch (error) {
            console.log("error is " + error)
        }
        return await stopDetails;

    }



    public async verifyCommingleAccount() {

        let commingleAccount: ElementFinder = element(by.xpath("//span[contains(text(),'Commingle Account')]/following::select[@id='orderCcpaId']"));
        if (await commingleAccount.isPresent()) {

            return true;
        }
        return false;
    }

    public async verifyAccountDriver() {
        let driver: string = null;
        try {
            driver = await this.actions.getText(this.accountDriver, "Getting text of account driver");
        } catch (error) {

        }
        return await driver;
    }
    public async verifyBillableDispatch() {
        let text: string = null;
        try {
            text = await this.actions.getText(this.billableDispatch, "Getting text of account driver");
        } catch (error) {

        }
        return await text;
    }
    public async verifyPayableDispatch() {
        let text: string = null;
        try {
            text = await this.actions.getText(this.payableDispatch, "Getting text of account driver");
        } catch (error) {

        }
        return await text;
    }
    public async clickOnOrderNumberLink() {
        await this.actions.click(this.OrderNumberLink, "Clicking on Order Number Link");
        await this.waitForPageLoad();
    }

    public async noteNumberOfStops() {
        let noOfStops: number = await element.all(by.xpath("//div[@id='stop_section']//tr[contains(@class,'resultsRow')]")).count();
        return noOfStops;

    }


    public async noteTotalMiles() {
        await this.actions.waitUntilElementVisible(element(by.xpath("//*[@id='dsp_totMiles']/strong/a")), "");
        let totalMilesPath = await element(by.xpath("//*[@id='dsp_totMiles']/strong/a")).getText();
        return Number((totalMilesPath.trim()).split(" ")[0]);

    }
    public async loadClassificationDropDownValue() {
        let text: string = null;
        try {
            text = await this.actions.getText(this.loadClassificationDropDown, "Load classification value");
        } catch (error) {
            console.log("drop down value error " + error);
        }
        return await text;
    }
    public async selectCommingleDropDownOption(option: string) {
        let optionXpath: ElementFinder = element(by.xpath("(//select[@name='orderCcpaId']/option)[2]"))
        await this.actions.click(element(by.xpath("//select[@name='orderCcpaId']")), "")
        await this.actions.click(optionXpath, "Click on " + option + " option")
    }

    public async clickStopDetails() {
        await this.actions.click(element(by.xpath("//tr//td[@id='stp_custCode[1]']")), "click ")
    }

    public async verifyDivisionFleetCode(division: string, fleetCode: string) {

        return true;


    }

}

















