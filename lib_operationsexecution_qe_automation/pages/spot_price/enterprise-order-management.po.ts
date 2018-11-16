import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";
import { By } from "selenium-webdriver";
import { SearchSpotPricePage } from "./search-spot-price.po";
import { SpotPricePage } from "./spot-price.po";
import { OfferFormPage } from "./offer-form.po";

let searchSpotPricePage = new SearchSpotPricePage();
let spotPricePage = new SpotPricePage();
let offerFormPage = new OfferFormPage();
export class EnterpriseOrderManagementPage extends BasePage {

    destinationName: ElementFinder;
    fieldLable: string;
    fieldLableXpath: ElementFinder;
    readonly myJbhuntUrl: string = `https://my.jbhunt.com/`;
    readonly linkShowMoreApp: ElementFinder = element(by.xpath("//a[@class='showMoreApps']"));
    readonly linkFreightManager2: ElementFinder = element(by.xpath("//a[@title='Enterprise Order Management']"));
    readonly ratesTab: ElementFinder = element(by.xpath("//span[contains(., 'Rates')]"));
    readonly originCityCode: ElementFinder = element(by.id("getPriceForm:originInput"));
    readonly destinationCode: ElementFinder = element(by.id("getPriceForm:destInput"));
    readonly deliveryDate: ElementFinder = element(by.id("getPriceForm:deliveryDate"));
    readonly getPriceButton: ElementFinder = element(by.xpath("//div[@title='Get Price']"));
    readonly pricelist: ElementFinder = element(by.xpath("(//*[@title='Click to begin Spot Price Creation' and contains(.,'$')])[1]"));
    readonly colorBoxValue: ElementFinder = element(by.xpath("(//*[@id='getPriceForm:priceListTableBody']/tr/td[contains(.,'$')])[1]"));
    readonly contactPerson: ElementFinder = element(by.xpath("//*[@id='submitOffer:contactInputText']"));
    readonly emailAddress: ElementFinder = element(by.xpath(" (//input[@type='text'])[2]"));
    readonly selectAccessorials: ElementFinder = element(by.xpath("//td[@class='formlabel']//option[contains(., 'CONGESTION CHARGE')]"));
    readonly addAccessorialsButton: ElementFinder = element(by.xpath("//input[@value='Add Accessorial']"));
    readonly congestionCharge: ElementFinder = element(by.xpath("//input[@name='submitOffer:accessorials1']"));
    readonly updateOfferButton: ElementFinder = element(by.xpath("//input[@value='Update Offer']"));
    readonly bypassCustomerApprovalButton: ElementFinder = element(by.xpath("//input[@value='Bypass Customer Approval']"));
    readonly sucessMesage: ElementFinder = element(by.xpath("//span[contains(., 'successfully')]"));
    readonly billToCode: ElementFinder = element(by.id("getPriceForm:billToCode"));
    readonly ratesButton: ElementFinder = element(by.xpath("//span[text()='Rates']"));
    readonly fuleSurchaegeMessage: ElementFinder = element(by.xpath("//td[@class='labelCell' and contains(.,'FUEL SURCHG')]/following-sibling::td[contains(.,'PUBLISHED FUEL WILL BE ADDED TO INVOICE')]"));

    public generateRandomeString() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    public async futureDate(daysToAdd: number) {
        let newdate = new Date();
        newdate.setDate(newdate.getDate() + daysToAdd);
        let newmonth = Number(newdate.getUTCMonth()) + 1;
        let newmonth1;
        let newDate1;
        if (newmonth < 10) { newmonth1 = "0" + newmonth }
        else { newmonth1 = newmonth };
        if (newdate.getUTCDate() < 10) { newDate1 = "0" + newdate.getUTCDate() }
        else { newDate1 = newdate.getUTCDate() }
        let requiredDate = (newmonth1 + '/' + newDate1 + '/' + newdate.getUTCFullYear())
        return requiredDate;
    }

    public async clickRatesButton() {
        await this.actions.click(this.ratesButton, "Rate Button");
    }

    public async waitForSearchResultLoading() {
        await this.actions.waitUntilElementInVisible(this.searchResultLoading, "Search menu")
    }

    public async clickOnShowMoreAppLink() {
        return await this.actions.click(this.linkShowMoreApp, "Click on Show my app link");
    }

    public async clickOnEnterpriseOrderManagement() {
        await this.actions.click(this.linkFreightManager2, "Click on Enterprise Order Management");
        return await this.actions.selectWindow(1, "Enterprise Order Management Tab");
    }

    public async clickOnRatesTab() {
        await this.actions.click(this.ratesTab, "Click on Rates Tab");
    }

    public async enterOrigin(cityName: string) {
        await this.actions.setText(this.originCityCode, cityName, "Enter Origin Code");
    }

    public async enterDestination(cityName: string) {
        await this.actions.setText(this.destinationCode, cityName, "Enter Destination Code")
    }

    public async enterDeliveryDate() {/**Date Format MM/DD/YYYY */
        await this.actions.clearText(this.deliveryDate, "Clear Date Field");
        await this.actions.setText(this.deliveryDate, await this.futureDate(5), "Enter Delivery Date");
    }

    public async enterBillToCode() {
        await this.actions.setText(this.billToCode, "GEEC", "Enter Bill to Code ");
    }

    public async clickOnGetPriceButton() {
        await this.actions.waitUntilElementPresenceOf(this.getPriceButton, "wait for Element")
        await this.actions.click(this.getPriceButton, "Click on Get Price Button");
    }

    public async clickOnRecommendedRate() {
        await this.actions.waitUntilElementPresenceOf(this.pricelist, "Wait for priceList");
        console.log(await (this.pricelist.isPresent()));
        await this.actions.click(this.pricelist, "Click on Color Box Value");
    }

    public async enterDetail(textBoxID: string, value: string) {
        let textBoxXpath: ElementFinder = element(by.id(textBoxID));
        await this.actions.waitUntilElementPresenceOf(textBoxXpath, "wait for element")
        await this.actions.setText(textBoxXpath, value, "Enter Contact Person Name");
    }

    public async selectAccessorialsType() {
        await this.actions.click(this.selectAccessorials, "Select Accessorials Type from dropdown ");
    }

    public async clickOnAddAccessorialsButton() {
        await this.actions.click(this.addAccessorialsButton, "Click on Add Accessorials Button");
    }

    public async enterCongestionCharge() {
        await this.actions.clearText(this.congestionCharge, "Clear text Box")
        await this.actions.setText(this.congestionCharge, "1", "Enter Congestion Charge");
    }

    public async validateSucessMessage(fieldLable: string) {
        this.fieldLableXpath = element(by.xpath("(//td[contains(.,'" + fieldLable + "') and @class='labelCell']//following-sibling::td/span)[1]"));
        this.actions.waitUntilElementPresenceOf(this.sucessMesage, "wait for sucess message")
        let groupId: string = await this.actions.getText(this.fieldLableXpath, "GroupId")
        let message: string = await this.actions.getText(this.sucessMesage, "sucessmessage")
        console.log(groupId, message);
        return { message, groupId };
    }

    public async clickOnUpdateOfferButton() {
        await this.actions.click(this.updateOfferButton, "Click on Uodate Offer Button");
    }

    public async clickOnBypassCustomerApprovalButton() {
        await this.actions.click(this.bypassCustomerApprovalButton, "Click on Button");
    }

    public async enterOriginOrDestination(originDestinationTextBoxId: string, containerId: string, cityName: string, zipcode?: string) {
        let originDestinationXpath: ElementFinder = element(by.id(originDestinationTextBoxId));
        let populatedCityDropDown: string = "//div[@id='" + containerId + "']//li[contains(.,'" + cityName + "')]";
        await this.actions.setText(originDestinationXpath, cityName, "Enter Origin Code");

        try {
            await this.actions.click(await element(by.xpath(populatedCityDropDown + "/i[contains(.,'" + zipcode + "')]")), "Click on autopopulated city drop down");
        } catch (error) {
            await this.actions.click(await element(by.xpath(populatedCityDropDown)), "Click on autopopulated city drop down")
        }

    }
    public async selectAccessorialTypeFromDropDown(dropDownOption: String) {
        let selectAccessorials: ElementFinder = element(by.xpath("//td[@class='formlabel']//option[contains(., '" + dropDownOption + "')]"));
        await this.actions.click(this.selectAccessorials, "Select Accessorials Type from dropdown ");
    };

    public async clickOnElementWithValue(lable: string) {
        let elementXpath: ElementFinder = element(by.xpath("//input[@value='" + lable + "']"));
        await this.actions.click(elementXpath, "Click on " + lable + " Button");
    }

    public async validateSucessMessageAddLane(fieldLable: string) {
        let xpath = element(by.xpath("//span[text()='The effectivity date range is only allowed up to 7 days.']"));
        let statuFailureMessage = await this.actions.isElementPresent(xpath, "Waiting");
        console.log("statuFailureMessage", statuFailureMessage)
        if (statuFailureMessage) {
            await searchSpotPricePage.clickonSpotPrice();
            await spotPricePage.clickGetPriceButton();
            await offerFormPage.clickBypassCustomerApproval();
        }
        else {
            this.fieldLableXpath = element(by.xpath("(//td[contains(.,'" + fieldLable + "') and @class='labelCell']//following-sibling::td/span)[1]"));
            this.actions.waitUntilElementPresenceOf(this.sucessMesage, "wait for sucess message")
            let groupId: string = await this.actions.getText(this.fieldLableXpath, "GroupId")
            let message: string = await this.actions.getText(this.sucessMesage, "sucessmessage")
            console.log(groupId, message);
            return { message, groupId };
        }
    }


}
