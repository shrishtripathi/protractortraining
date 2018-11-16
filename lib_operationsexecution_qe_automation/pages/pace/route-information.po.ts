import { browser, by, element, ElementFinder } from 'protractor';
import { BasePage } from "../base.po";
import { EditTripPage } from "../../pages/pace/edit-trip.po";
import { ElementArrayFinder } from 'protractor/built/element';



export class RouteInformation extends BasePage {

    public async getMlies(id: string) {
        let verifyMilesInTable: ElementFinder = element(by.id(id));
        let mile: string = await verifyMilesInTable.getText();
        return (await parseInt(mile.replace(/[^\d-]/g, "")));
    }

    public async clickOnButton(buttonText: string) {
        let saveButton: ElementFinder = element(by.xpath("//input[@value='" + buttonText + "']"));
        await this.actions.click(saveButton, "click on " + buttonText + " button");
    }

    public async clickOnLinkFromHeader(linkText: string) {
        let homeTab: ElementFinder = element(by.xpath("//td[@class='toolbarCellLeft']/a[contains(.,'" + linkText + "')]"));
        await this.actions.click(homeTab, "click on " + linkText + " Tab from header");
    }



    public async verifyTotalStops() {
        let numberOfSegments = await element.all(by.xpath("(//table[@class='resultsTable'])[1]//tr[contains(@class,'resultsRowAlt')]")).count();
        return numberOfSegments
    }

    public async verifyTotalMiles() {
        let totalMilespath = await element(by.xpath("//td[@id='dtl_totMiles']")).getText();
        let totalMiles: number = Number((await totalMilespath.trim()).split("  ")[1]);
        return totalMiles
    }

}