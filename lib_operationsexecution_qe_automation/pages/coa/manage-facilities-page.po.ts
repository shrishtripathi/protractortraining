import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser, ExpectedConditions, ElementArrayFinder } from "protractor";

export class ManageFacilitiesPage extends BasePage {

    readonly editIconLinks: ElementArrayFinder = element.all(by.xpath("//a/div[@class='lnfEditButton iceCmdLnk']"));
    readonly customerCodeInput: ElementFinder = element(by.xpath("//table[@id='form:FacilityTable']/tbody/tr/td[3]/input"));
    readonly nameInput: ElementFinder = element(by.xpath("//table[@id='form:FacilityTable']/tbody/tr/td[4]/input"));
    readonly cityStateCodeInput: ElementFinder = element(by.xpath("//table[@id='form:FacilityTable']/tbody/tr/td[6]/input"));
    readonly zipCodeInput: ElementFinder = element(by.xpath("//table[@id='form:FacilityTable']/tbody/tr/td[7]/input"));
    readonly cancelIconLink: ElementFinder = element(by.xpath("//a/div[@class='lnfCancelButton iceCmdLnk']"));
    readonly lastLink: ElementFinder = element(by.xpath("//a/span[text()='Last']"));
    readonly firstLink: ElementFinder = element(by.xpath("//a/span[text()='First']"));
    readonly nextLink: ElementFinder = element(by.xpath("//a/span[text()='Next']"));
    readonly previousLink: ElementFinder = element(by.xpath("//a/span[text()='Previous']"));
    readonly numberOfPagesResultsFound: ElementFinder = element(by.xpath("//span[@class='iceOutFrmt']"));

    public async getCurrentPageNumber() {
        let pageNo = await this.getElementText(this.numberOfPagesResultsFound);
        let pageNumbers = pageNo.split(".");
        console.log("pages:"+pageNumbers[1].slice(6, 8));
        return await pageNumbers[1].slice(6, 8).trim();
    }

    public async getTotalNoOfPages() {
        let pageNo = await this.getElementText(this.numberOfPagesResultsFound);
        let totalPageNumbers = await pageNo.split(".");
        console.log("number of pages:"+totalPageNumbers[1].slice(11, 13));
        return await totalPageNumbers[1].slice(11, 13).trim();
    }

    public async verifyEnabledLink(link: string) {
        let enabledLink: ElementFinder = element(by.xpath("//a[not(@style='cursor:default;')]/span[text()='"+link+"']"));
        await this.actions.waitUntilElementVisible(enabledLink, "Wait Untill element is visible");
    }

    public async verifyDisabledLink(link: string) {
        let disabledLink: ElementFinder = element(by.xpath("//a[@style='cursor:default;']/span[text()='"+link+"']"));
        await this.actions.waitUntilElementVisible(disabledLink, "Wait Untill element is visible");
    }

    public async verifySort() {
            let columnLink: ElementFinder = await element(by.xpath("//a[text()='Code']"));
            await this.actions.click(columnLink, "click on column");
            await this.actions.click(this.lastLink, "Click on Last link");
            await this.verifyDisabledLink("Last");           
            let columnLastRowText: ElementFinder = await element.all(by.xpath("//table[@id='form:FacilityTable']/tbody/tr[1]/td[1]/span")).get(0);
            let lastRowtext = await this.getElementText(columnLastRowText);
            let sortedColumnLink: ElementFinder = await element(by.xpath("//a//table//tbody//tr//td[text()='Code']/ancestor::a"));
            await this.actions.click(this.firstLink, "Click on Last link");
            await this.actions.click(sortedColumnLink, "click on column");
            let columnfirstRowText: ElementFinder = await element.all(by.xpath("//table[@id='form:FacilityTable']/tbody/tr[1]/td[1]/span")).get(0);
            let firstRowtext = await this.getElementText(columnLastRowText);
            await expect(lastRowtext).toBe(firstRowtext);       
    }
    
}