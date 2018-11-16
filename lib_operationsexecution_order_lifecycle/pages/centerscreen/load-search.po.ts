import { by, element, ElementFinder, ExpectedConditions, ElementArrayFinder, protractor, $, $$ } from 'protractor';
import { BasePage } from '../base.po';

export class LoadSearchPage extends BasePage {

    readonly hyperLinkUnderDestinationCity = $("div[title='Click here to view stop information']");
    readonly projectCode = $("td[id='LTL7']");
    readonly magnifyingGlassIcon: ElementFinder = $("img[src='/centerScreen/include/images/mgglassBig.gif']");
    readonly searchBoxFirstArrowIcon = $("select#searchBy");
    readonly orderNumber = element(by.cssContainingText('option', 'ORDER #'));
    readonly emptyBoxNextToOrderNumber = $("input#searchByValue");
    readonly searchButtonNextToOrderNumber = $$("input[value='Search']").get(1);
    readonly orderNumberToVerify = $("table#loads>tbody>tr:nth-child(1)>td>div>table>tbody>tr:nth-child(1)>td:nth-child(2)>a");
    readonly nextStepToVerify = $("table#loads>tbody>tr:nth-child(1)>td>div>table>tbody>tr:nth-child(1)>td:nth-child(3)");
    readonly carrValue =  element(by.xpath("(//td[text()='ORD #']/ancestor :: thead/following-sibling :: tbody//tr//td[9])[1]"));
    readonly hyperLinkUnderOriginCity = $("td[title='Click here to view stop information']");
    readonly shipperStatus = $("table[bordercolor='gray']>tbody>tr:nth-child(2)>td:nth-child(6)");
    readonly destinationDetailsColumn: ElementFinder = $("div[title='Click here to view stop information']");

    public async clickOnMagnifyingGlassIcon() {
        await this.actions.click(this.magnifyingGlassIcon, "Click on the icon");
    };

    public async clickSearchBoxFirstArrowIcon() {
        await this.actions.click(this.searchBoxFirstArrowIcon, "Click on the icon");
    };

    public async selectOrderNumber() {
        await this.actions.click(this.orderNumber, "Select Order #");
    };

    public async clickOnEmptyBoxNextToOrderNumber() {
        await this.actions.click(this.emptyBoxNextToOrderNumber, "Click in the box");
    };

    public async enterLoadNumber(loadNumber) {
        await this.actions.setText(this.emptyBoxNextToOrderNumber, loadNumber, "Enters Load NUmber");
    };

    public async clickSearchButtonNextToOrderNumber() {
        await this.actions.click(this.searchButtonNextToOrderNumber, "Click on the search button");
    };

    public async verifyOrderNumber() {
        return await this.actions.getText(this.orderNumberToVerify, "Get order number to verify");
    };

    public async verifyNextStepTender() {
        return await this.actions.getText(this.nextStepToVerify, "Get next step to verify");
    };

    public async getTextUnderNextStepColumn() {
        return await this.actions.getText(this.nextStepToVerify, "Get order number to verify");
    }

    public async verifyCarrierPresent() {
        return await this.actions.getText(this.carrValue, "get carrier text to verify");
    };

    public async clickHyperLinkUnderOriginCity() {    
        await this.actions.click(this.hyperLinkUnderOriginCity, "Click on the hyper link under origin city");          
    };

    public async verifyShipperStatus(){
        return await this.actions.getText(this.shipperStatus, "get shipper status");
    };
    
    public async clickOnDestCityInformationInColumn() {
        await this.actions.click(this.destinationDetailsColumn, "Click on destination city information");
    }

    public async verifyOrderNumberSearchResult(orderNumber) {
        let rowXpath: ElementFinder = element(by.xpath(`(//*[@id='loads']//tr[.//text()='${orderNumber}'])[2]`));
        return (await rowXpath.isPresent())
    }

    public async getInternationalDestinationCity() {
        let destinationInformation: ElementFinder = $("tbody>tr.rowHighlightInnerTable:nth-child(3)>td:nth-child(3)");
        let destinationCity = await destinationInformation.getText();
        return await destinationCity.trim();
    }

    public async getOriginCityText() {
        return await this.actions.getText(this.hyperLinkUnderOriginCity,"Get Origin City Text")
    }

    public async getDestinationCityText() {
        return await this.actions.getText(this.hyperLinkUnderDestinationCity,"Get Origin City Text")
    }

    public async getProjectCodeText() {
        return await this.actions.getText(this.projectCode,"Get Project Code");
    }
};
