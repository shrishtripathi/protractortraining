import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from './base.po';
import { By } from 'selenium-webdriver';

export class FreightManager2Page extends BasePage {
    linkHeaderOptions: ElementFinder;
    linkHeaderDropDownOption: ElementFinder;
    linkHeaderDropDrnOptions: ElementFinder;
    readonly asmSplitScreen = element(by.xpath("//span[text()='ASM Split Screen']"));
    readonly orderSegment = element(by.xpath("//span[text()='Order Segment']"));
    readonly ordersDivisionTextBox = element(by.xpath("//input[@id='form:division1']"));
    readonly ordersAreaTextBox = element(by.xpath("//input[@id='form:searchVal1']"));
    readonly linkheaderTabDriver = element(by.xpath("//span[text()='Driver']"));
    readonly linkOBCExceptionsDropDownOption = element(by.xpath("//span[text()='OBC Exceptions']"));
    readonly verifySearchResultsForOrder = element(by.xpath("(//td[text()='CH'])[1]"));
    readonly linkheaderTabPlanning = element(by.xpath("//span[text()='Planning']"));
    readonly linkCrossTownDropDownOption = element(by.xpath("//span[text()='Cross Town']"));
    readonly linkUnitViweDropDownOption = element(by.xpath("//span[text()='Unit View']"));
    readonly freightManagerPageTitle = element(by.xpath("//div[@id='pageTitle']"));
    readonly searchInputField = element(by.xpath("//span[contains(text(),'Search')]/following-sibling::input"));
    readonly planningTab = element(by.xpath("//a/span[text()='Planning']"));
    readonly asmFullScreen = element(by.xpath("//span[text()='ASM Full Screen']"));
    readonly driverTab = element(by.xpath("//a/span[text()='Driver']"));
    readonly obcExceptions = element(by.xpath("//a/span[text()='OBC Exceptions']"));
    readonly unitView = element(by.xpath("//span[text()='Unit View']"));
    readonly truckCheckCall = element(by.xpath("//span[text()='Truck Check Call']"));
    readonly multiplePreplan = element(by.xpath("//span[text()='Multiple Preplan']"));

    public async hoverOverFM2PageHeaderOption(headerOptionText: string) {
        this.linkHeaderOptions = await element(by.xpath("//span[text()='" + headerOptionText + "']"));
        await this.actions.waitUntilElementVisible(this.linkHeaderOptions, "")
        await this.actions.moveMouseToElement(this.linkHeaderOptions, headerOptionText + " Option from header");
    }
    public async clickHeaderDropDownOption(headerDrpDwnOptionText: string) {
        this.linkHeaderDropDrnOptions = await element(by.xpath("(//span[text()='" + headerDrpDwnOptionText + "'])[1]"));
        await this.actions.waitUntilElementVisible(this.linkHeaderDropDrnOptions, "")
        await this.actions.click(this.linkHeaderDropDrnOptions, headerDrpDwnOptionText);
    }
    public async hoverDriverOptionFromHeader() {
        await this.actions.moveMouseToElement(this.linkheaderTabDriver, "Hover Driver Option from header");
    }
    public async clickOnOBCException() {
        await this.actions.click(this.linkOBCExceptionsDropDownOption, "Click on OBC Exception Option")
    }
    public async hoverPlanningOptionFromHeader() {
        await this.actions.moveMouseToElement(this.linkheaderTabPlanning, "Hover Planning Option from header");
    }
    public async clickOnCrossTown() {
        await this.actions.click(this.linkCrossTownDropDownOption, "Click on Cross Town Option")
    }
    public async ClickOnUnitView() {
        await this.actions.click(this.linkUnitViweDropDownOption, "Click on Cross Town Option")
    }

    public async selectOptionFromFreightManager2(tabName: string, option: string, finalPageTitle: string = undefined) {
        await this.actions.moveMouseToElement(this.aspanText(tabName), "Mouse hover on '+tabName+'");
        await this.actions.click(this.aspanText(option), "Click on '+option+'");
        if (finalPageTitle != undefined) {
            if (finalPageTitle == "Check Call Details") {
                let handles: any = await browser.getAllWindowHandles();
                await browser.switchTo().window(handles[1]);
                await this.actions.waitBrowserTitleEqualsTo(finalPageTitle);
            }
            else {
                await this.actions.waitBrowserTitleEqualsTo(finalPageTitle);
            }
        }
    }


    public async clickOnASMsplitScreen() {
        await this.actions.click(this.asmSplitScreen, "ASMsplitScreen");

    }
    public async sendKeysToDivisionTextBox(data) {
        await this.actions.clearText(this.ordersDivisionTextBox, "clear text");
        await this.actions.setText(this.ordersDivisionTextBox, data, "sending " + data + " to division text box");

    }
    public async sendKeysToAreaTextBox(data) {
        await this.actions.clearText(this.ordersAreaTextBox, "clear text");
        await this.actions.setText(this.ordersAreaTextBox, data, "sending " + data + " to Area text box");
    }

    public async verifyResultsForSearchOrderTable() {
        await this.actions.waitUntilElementVisible(this.verifySearchResultsForOrder, "Orders Results search");
        return await this.actions.isElementDisplayed(this.verifySearchResultsForOrder, "verify if 'CH' text is present or not");
    }

    public async getFreightManagerPage() {
        this.actions.selectWindow(0, "move to freight manager window");
        return await this.actions.getText(this.freightManagerPageTitle, "Freight Manager Page title");
    }
    public async verifyFreightManagerPage() {
        return await this.actions.getText(this.freightManagerPageTitle, "Freight Manager Page title");
    }
    public async mouseOverOnPlanningTab() {
        await this.actions.moveMouseToElement(this.planningTab, "Planning");
    }

    public async clickOnASMfullScreen() {
        await this.actions.click(this.asmFullScreen, "ASMFullScreen");
    }

    public async clickOnOrderSegment() {
        await this.actions.click(this.orderSegment, "OrderSegment");
    }

    async clickOnTruckCheckCall() {
        await this.actions.click(this.truckCheckCall, "Truck Check Call");
    }

    public async mouseOverToDriverTab() {
        await this.actions.moveMouseToElement(this.driverTab, "Drivers Tab");
        await this.actions.click(this.driverTab, "driver tab")
    }

    public async clickOnOBCExceptions() {
        await this.actions.click(this.obcExceptions, "OBC Exceptions");
    }


    public async setTextInSearchInput(text: string) {
        await this.actions.setText(this.searchInputField, text, "Entered text is '+text+'");
    }

    public async pressEnter(text: string) {
        await this.actions.sendKeysEnter(text);
    }

    public async getCentralCustomerInformation(text: string) {
        await this.actions.selectWindow(1, "Switch to Central Customer Information screen");
        await this.loginIfRequired();
        await this.actions.waitUntilElementVisible(this.centralCustomerInformationText(), " Central Customer Information screen");
        return await this.actions.getText(this.centralCustomerInformationText(), text);
    }

    public async getDriverScheduleText(text: string) {
        await this.actions.selectWindow(2, "Switch to Driver Schedule screen");
        await this.actions.waitUntilElementVisible(this.aspanText("CAR142"), " Check Call Details screen");
        await this.actions.click(this.aspanText("CAR142"), "Click on link");
        await this.actions.waitUntilElementVisible(this.labelText(text), " Driver Schedule screen");
        return await this.actions.getText(this.labelText(text), text);
    }

    public async getCheckCallTetails(text: string) {
        await this.actions.selectWindow(3, "Switch to Check Call Details screen");
        return await this.actions.getPageTitle(text);
    }

    public labelText(text: string): ElementFinder {
        var labeltext = element(by.xpath("//label[contains(text(),'" + text + "')]"));
        return labeltext;
    }

    public centralCustomerInformationText(): ElementFinder {
        var centralCustomerInformation = element(by.className("pageTitle"));
        return centralCustomerInformation;
    }

    public checkCallDetailsText(): ElementFinder {
        var checkCallDetails = element(by.id("document:title"));
        return checkCallDetails;
    }

    public async getLabelText(text: string) {
        return await this.actions.getText(this.labelText(text), text);
    }
    public async clickOnUnitView() {
        await this.actions.click(this.unitView, "UnitView");
    }
    public async clickOnMultiplePreplan() {
        await this.actions.click(this.multiplePreplan, "MultiplePreplan");
    }

}