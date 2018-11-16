import { browser, ElementFinder, element, by, ProtractorBrowser, ElementArrayFinder, $ } from "protractor";
import { BasePage } from "../base.po";
import { protractor } from "protractor";


export class EomSearchPage extends BasePage {

    readonly greenMouseIcon = element(by.id("frmSkeletonListing:lSkeletonListing:0:cmdBtnBookFromSklActionFocusLink"));
    readonly reeferClassification = $(" select.infoElement>option[value='REEFER']");
    readonly loadStatus = $("table.gradientBackgroundColor>tbody>tr:nth-child(7)>td>table>tbody>tr:nth-child(2)>td>table>tbody>tr>td:nth-child(1)>label");
    readonly arrivalUnderOrigin = element(by.xpath("//span[text()='Arrival']"));
    readonly completionUnderOrigin = element(by.xpath("//span[text()='Completion']"));
    readonly arrivalTime = $("tr.evenrow>td>table>tbody>tr>td:nth-child(8)");
    readonly completionTime = $("tr.evenrow>td>table>tbody>tr>td:nth-child(9)");
    readonly recieverLocation = $("tr.evenrow>td>table>tbody>tr>td:nth-child(5)>span");
    readonly loadDetailMaximizeArrow = $('table.gradientBackgroundColor>tbody>tr:nth-child(7)>td>table>tbody>tr:nth-child(4)>td>div>div>div');
    readonly monitorCode = $("div.contents>table>tbody>tr:nth-child(7)>td>table>tbody>tr:nth-child(4)>td>div:nth-child(2)>div:nth-child(2)>table:nth-child(2)>tbody>tr>td:nth-child(3)>table>tbody>tr>td>table>tbody>tr:nth-child(4)>td>table>tbody>tr>td>table>tbody>tr>td>select>option[selected='selected']");

    public async clickLoadNumberLink(loadNumber) {
        let link = element(by.xpath("//a[text()='" + loadNumber + "']"));
        console.log("//a[text()='" + loadNumber + "']");
        await this.actions.click(link, "clicked on " + loadNumber + " link")
    }

    public async ensureReeferIsThere() {
        return await this.actions.isElementDisplayed(this.reeferClassification, "Checks whether Reefer is there");
    }

    public async getLoadStatusMessage() {
        return await this.actions.getText(this.loadStatus, "Get load status");
    }

    public async getArrivalHead() {
        return await this.actions.getText(this.arrivalUnderOrigin, "Get Arrival Heading ");
    }

    public async getCompletionHead() {
        return await this.actions.getText(this.completionUnderOrigin, "Get Completion Heading ");
    }

    public async isArrivalTimeDisplayed() {
        return await this.actions.isElementDisplayed(this.arrivalTime, "Checks whether Arrival Time is displayed");
    }

    public async isCompletionTimeDisplayed() {
        return await this.actions.isElementDisplayed(this.completionTime, "Checks whether Completion Time is displayed");
    }

    public async isRecieverLocationDisplayed() {
        return await this.actions.isElementDisplayed(this.recieverLocation, "Checks whether Reciever Location is displayed");
    }

    public async maximizeLoadDetail() {
        await this.actions.click(this.loadDetailMaximizeArrow, "Maximize load detail");
        return await this.actions.getText(this.monitorCode, "Monitor Code should be H");

    }

}