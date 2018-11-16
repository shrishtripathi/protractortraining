import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser } from "protractor";

export class InvestigationSearchPage extends BasePage {

    readonly onedayRehiresLink: ElementFinder = element(by.xpath("//a[contains(text(),'One Day Rehires')]"));
    readonly fromDateMonth: ElementFinder = element(by.xpath("//input[@name='classFromDate_mm']"));
    readonly fromDateDay: ElementFinder = element(by.xpath("//input[@name='classFromDate_dd']"));
    readonly fromDateYear: ElementFinder = element(by.xpath("//input[@name='classFromDate_yyyy']"));
    readonly toDateMonth: ElementFinder = element(by.id("classToDate_mm"));
    readonly toDateDay: ElementFinder = element(by.id("classToDate_dd"));
    readonly toDateYear: ElementFinder = element(by.id("classToDate_yyyy"));
    readonly upcomingRoadTestsDate: ElementFinder = element(by.xpath("//span[contains(text(),'Upcoming')]/parent::td/a[1]"));

    public async isRadioButtonSelected(radioButtonLabel: string, radioButtonValue: string) {
        let radioButton: ElementFinder = element(by.xpath("//*[text()='" + radioButtonLabel + "']//parent::td/input[(@value='" + radioButtonValue + "')]"));
        return await radioButton.isSelected();
    }

    public async getCurrentWeekDate() {
        let currentWeekDate: ElementFinder = element(by.xpath("//table//tr//td[3]/span[contains(text(),'Current Week')]/parent::td//a"));
        let date = await this.getElementText(currentWeekDate);
        console.log("date:"+date.split(",")[1].trim().substring(0,10));
        return await date.split(",")[1].trim().substring(0,10);
    }

    public async clickOnLinkInInvestigationSummary(linkName: string) {
        console.log('linkName' + linkName);
        let linkXpath: ElementFinder = element(by.xpath("//a[contains(text(),'" + linkName + "')]"));
        await this.actions.click(linkXpath, "click on link")
    }

    public async getPopulatedFromAndToDate() {
        let fromDate = await this.fromDateMonth.getAttribute("value") + "/" + await this.fromDateDay.getAttribute("value") + "/" + await this.fromDateYear.getAttribute("value");
        return fromDate;
    }

}
