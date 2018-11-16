import { browser, ElementFinder, element, by } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";
import { CommonFunctions } from "../../utilities/common-functions";

let commonFunctions = new CommonFunctions();

export class RoutingGuideAdministrationHomePage extends BasePage {
    readonly carriersCarrierCode: ElementFinder = element(By.xpath("//span[text()='Carrier Code']/parent::label/parent::div[not(contains(@class,'jb-margin-onright'))]//input"));
    readonly firstName: ElementFinder = element(By.xpath("//input[@name='firstName']"));
    readonly lastName: ElementFinder = element(By.xpath("//input[@name='lastName']"));
    readonly phoneNumber: ElementFinder = element(By.xpath("//input[@name='phoneNbr']"));

    constructor() {
        super();
    }

    public async selectMenu(optioMenu: string) {
        let menuOption: ElementFinder = element(By.xpath("//*[text()='" + optioMenu + "']//ancestor::li"));
        await this.actions.click(menuOption, "Click on menu");
    }

    public async setCarriersCarrierCode(text: string) {
        await this.actions.waitUntilElementVisible(this.carriersCarrierCode, "Wait untill element is Visible");
        await this.actions.clearText(this.carriersCarrierCode, "Clear text");
        await this.actions.setText(this.carriersCarrierCode, text, "Enter carrier code");
    }

    public async findLanes() {
        await this.clickOnButton("Find Lanes");
        await this.waitForActionComplete("lanesBaseGrid");
    }

    async clickOnButton(buttonName: string) {
        let bttnName: ElementFinder = element(By.xpath("//*[text()='" + buttonName + "']//ancestor::a"));
        await this.actions.click(bttnName, "Click on Button");
    }

    public async getCarrierInfoText(carrierCode: string) {
        let carrier: ElementFinder = element(By.xpath("//table//*[text()='" + carrierCode + "']"));
        await this.actions.waitUntilElementVisible(carrier, "Wait until element is visible");
        return await this.actions.getText(carrier, "Get carrier code");
    }

    public async clickOnOptionsButtonWithReferenceToTable(tableIndex: number) {
        let optionsButton: ElementFinder = element(by.xpath("//div[@class='x-grid-item-container']//table[contains(@class,'x-grid-row-collapsed')][" + tableIndex + "]//tr//span[text()='Options']"));
        await this.actions.click(optionsButton, "Clicking options button");
    }

    public async setOptionDropdown(optionName: string) {
        let options: ElementFinder = element(by.xpath("//span[text()='" + optionName + "']//ancestor::a"));
        await this.actions.click(options, "Click on option");
    }

    public async setContactDetails(firstName: string, lastName: string, phoneNumber: string) {
        await this.actions.clearText(this.firstName, "Clear Text");
        await this.actions.setText(this.firstName, firstName, "Enter text");
        await this.actions.clearText(this.lastName, "Clear Text");
        await this.actions.setText(this.lastName, lastName, "Enter text");
        await this.actions.clearText(this.phoneNumber, "Clear Text");
        await this.actions.setText(this.phoneNumber, phoneNumber, "Enter text");
    }

    public async addCarrierInputFields(inputFieldName: string) {
        let inputFields = await element(by.xpath("//span[text()='" + inputFieldName + "']//parent::label//parent::div//following-sibling::div[@data-ref='bodyEl']//input"));
        let text = await inputFields.getAttribute("value")
        return await text;
    }

    public async verifyLanes(rowIndex: number) {
        let lanes = await element(by.xpath("//table[@class='x-grid-item x-grid-row-collapsed']//tr[" + rowIndex + "]"))
        return await this.actions.isElementPresent(lanes, "Lanes are present");
    }

    public async clickOnOptionsButtonWithReferenceToRow(rowIndex: number) {
        let optionsButton: ElementFinder = element(by.xpath("//table[@class='x-grid-item x-grid-row-collapsed']//tr[" + rowIndex + "]//span[text()='Options']"));
        await this.actions.click(optionsButton, "Clicking options button");

    }

    public async getCarrierCodeElement(rowIndex: number) {
        let carrierCode = element(by.xpath("//div[@class='x-grid-item-container']//table[contains(@class,'x-grid-row-collapsed')][" + rowIndex + "]//tr[1]//td[2]//div"));
        await this.actions.waitUntilElementVisible(carrierCode, "Waiting");
        let text = await this.actions.getText(carrierCode, "Getting text of required carrier element");
        return text;
    }

    public async getAllCarrierCodeElements() {
        let carrierCodeElements = await element.all(By.xpath("//div[@class='x-grid-view x-grid-with-row-lines x-fit-item x-grid-view-default x-unselectable']//tr[@class='jb-hide-row-expander  x-grid-row']"));
        let count = await carrierCodeElements.length;
        return count;
    }

    public async verifyRouteGuideTenderTable(DBName: string, connectionString: any, sql_query: string) {

        let dbResult = await commonFunctions.DBQueryHandler(DBName, connectionString, sql_query, true);
        return dbResult;

    }

    public async verifyDBOutput(outPut: string) {
        let dbOutPutValue = await JSON.parse(outPut);
        let flag: boolean = true;
        for (let i = 0; i < dbOutPutValue.length; i++) {
            if (dbOutPutValue[i].TenderStatusDescription !== "NONE") {
                flag = false;
            }
        }
        return flag;
    }
}