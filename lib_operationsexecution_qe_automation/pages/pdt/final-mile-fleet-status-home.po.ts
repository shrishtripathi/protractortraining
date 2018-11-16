import { browser, by, element, ElementFinder, ExpectedConditions, protractor, ElementArrayFinder } from 'protractor';
import { BasePage } from '../base.po';
import { async } from 'q';

export class FinalMileFleetStatusHomePage extends BasePage {

    readonly searchForFleetDropDown: ElementFinder = element(by.xpath("//*[text()='Search for Fleets']/parent::label/parent::div//*[@role='combobox']"));
    readonly refreshIcon: ElementFinder = element(by.xpath("//span[contains(@class,'refresh')]"));
    readonly fleetStatusTitle = element(by.xpath("//label[text()='FLEET STATUS']"));
    readonly nextToSearchICon = element(by.xpath("//input[@id= 'txtsearchfield-inputEl']"));
    readonly searchIcon = element(by.xpath("//a[@class='x-btn jb-search-for-load x-unselectable x-box-item x-btn-default-small']"));
    readonly customerOrderAdministration = element(by.xpath("//div[text()='Customer Order Administration']"));
    readonly viewMoreButton: ElementFinder = element(by.xpath("//span[contains(@class,'button')]/span[contains(.,'View More')]/parent::span"))
    readonly completedStopIcon: ElementFinder = element(by.xpath("//div[@class='jb-svg-stop-completed']"));
    readonly locationTextFromCompletedStop: ElementFinder = element(by.xpath("//div[@cls='jb-tooltip']/div[contains(.,'Stop Location')]/following-sibling::div"))
    readonly firstStopText: ElementFinder = element(by.xpath("//div[contains(@id,'dashboardStopDrillDown')]//label[.//text()='1']/../label[contains(@class,'customer-address')]"));
    readonly numberOfDrivers: ElementFinder = element(by.xpath("//div[@class='numOfTrucks']"));
    readonly mapImage: ElementFinder = element(by.xpath("//*[@class='leaflet-zoom-animated']"));
    readonly viewMoreLink: ElementFinder = element(by.xpath("//div[contains(@id,'mapTruckDetailFor')]//span[text()='View More']//ancestor::a"));
    readonly routeDetailsMap: ElementFinder = element(by.xpath("//div[@class='stopListStopNumber']"));
    readonly detailsButtons: ElementArrayFinder = element.all(by.xpath("//span[contains(@id,'mapStopDetailBtn') and text()='Details']"));
    readonly mapIcon: ElementFinder = element(by.xpath("//span[contains(@class,'icon-jbh_map')]"));
    readonly commentsTab: ElementFinder = element(by.xpath("(//div[@class='x-title-text x-title-text-default x-title-item' and text()='Comments'])[2]"));
    readonly stopDetails: ElementFinder = element(by.xpath("//div[contains(@id,'stopOrderDetails')]//div[contains(@class,'innerCt')]/label"));
    readonly loadingState: ElementFinder = element(by.xpath("//*[@id='loading-spinner']"));
    readonly innerLoading: ElementFinder = element(by.xpath("//div[contains(@id, 'loadmask') and text()='Loading...']"));

    async waitForPagePDTLoad() {

        try { await browser.wait(async () => { return await this.loadingState.isDisplayed() === true; }, 2000); } catch (e) { }
        try { await browser.wait(async () => { return await this.loadingState.isDisplayed() === false; }, 10000); } catch (e) { }
        try { await browser.wait(async () => { return await this.innerLoading.isDisplayed() === true; }, 2000); } catch (e) { }
        try { await browser.wait(async () => { return await this.innerLoading.isDisplayed() === false; }, 10000); } catch (e) { }
    }

    public async setFleetDropDown(option: string) {
        await this.actions.click(this.searchForFleetDropDown, 'click on dropdown');
        let fleetDropDown: ElementFinder = element(by.xpath("//ul[contains(@id,'boundlist')]//*[@role='option' and text()='" + option + "']"));
        await this.actions.click(fleetDropDown, 'click on option');
    }

    public async clickOnRefreshIcon() {
        let refresh: ElementFinder = element(by.xpath("//*[contains(@id,'toolbar') and @aria-hidden='false' and @aria-disabled='false']"));
        this.actions.waitUntilElementPresenceOf(refresh, "wait for element")
        let loading: ElementFinder = element(by.xpath("//*[@id='loading-spinner']/../../div[@aria-hidden='true' and @aria-disabled='false' and @role='status' and not(@style='display: none;') ]"));
        await this.actions.click(this.refreshIcon, "Click on Refresh Icon");
        await this.actions.waitUntilElementPresenceOf(loading, "waiting")

    }

    public async clickOnMarkPateOption(pateOption: any) {
        let markPateOption: ElementFinder = element(by.xpath("//text[contains(., '" + pateOption + "')]"))
        await this.actions.waitUntilElementVisible(markPateOption, "");
        await this.actions.click(markPateOption, "Click on Order Option");
        await this.actions.selectWindow(1, "Navigate to Latest Window");
        await this.loginIfRequired();
    }

    public async verifyFleetStatusPage() {
        let flag: boolean = false;
        try {
            flag = await this.actions.isElementPresent(this.fleetStatusTitle, "verify if page is present");
        } catch (error) {
            console.log("verifyFleetStatusPage ." + error)
        }
        return await flag;
    }
    public async enterNextToSearchIcon(value: string) {
        await this.actions.setText(this.nextToSearchICon, value, "enter value in the text box");
    }
    public async clickSearchIcon() {
        await this.actions.click(this.searchIcon, "click search icom");
        await this.actions.selectWindow(1, "Navigate to Latest Window");
        await this.loginIfRequired();
    }
    public async verifyCustomerOrderAdministration() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementPresenceOf(element(by.id("pageTitle")), "verify if page is present");
            flag = await this.actions.isElementPresent(this.customerOrderAdministration, "verify if page is present");
        } catch (error) {
            console.log("verifyFleetStatusPage ." + error)
        }
        return await flag;
    }

    public async clickOnViewMoreDropDown() {
        await this.actions.click(this.viewMoreButton, "Click on View More Drop Down");
    }

    public async getFirtStopLocationText() {
        let getFirstStopText = await this.firstStopText.getText();
        console.log(getFirstStopText + " Location from View More")
        return getFirstStopText;
    }

    public async hoverOverStopCompletedIcon() {
        await this.actions.moveMouseToElement(this.completedStopIcon, "Click on Stop completed Icon");

    }

    public async getTextFromStopCompletedIcon() {
        await this.actions.waitUntilElementPresenceOf(this.locationTextFromCompletedStop, "wait for element")
        let firstStopCompletedLoactionText = await this.locationTextFromCompletedStop.getText();
        console.log(firstStopCompletedLoactionText + " Location from First Stop completed Icon")
        return firstStopCompletedLoactionText;
    }

    public async clickOnIcon(iconElement: ElementFinder, iconName: string) {
        await this.actions.click(iconElement, "click on" + iconName);
        let loading = await element(by.xpath("(//div[text()='Loading...']//parent::div//parent::div//parent::div[contains(@role,'status') and not(contains(@style,'display: none'))])[2]")).isPresent();
        console.log("loading", loading)
        if (loading) {
            let spinnerImage = element(by.xpath("(//div[text()='Loading...']//parent::div//parent::div//parent::div[@role='status'])[2]"))
            return await browser.wait(async () => {
                let style: string = await spinnerImage.getAttribute('style');
                return style === "width: 1243px; height: 300px; right: auto; left: 15px; top: 249px; display: none;";
            }, 90000);
        }
    }

    public async verifyListOfDrivers() {
        let driversDispatched: string = await this.actions.getText(this.numberOfDrivers, 'Get text');
        let driversCount = +driversDispatched;
        if (driversCount > 0) {
            return true;
        } else {
            return false;
        }
    }

    public async clickOnViewMore() {
        await this.actions.click(this.viewMoreLink, 'click on View more')
    }

    public async clickOnDetailsButton() {
        await this.actions.click(this.detailsButtons.get(0), "Click On Detail Button");
    }

    async waitForLoading() {
        let loading = await element(by.xpath("(//div[text()='Loading...']//parent::div//parent::div//parent::div[contains(@role,'status') and not(contains(@style,'display: none'))])[1]")).isPresent();
        console.log("loading", loading)
        if (loading) {
            let spinnerImage = element(by.xpath("(//div[text()='Loading...']//parent::div//parent::div//parent::div[@role='status'])[1]"))
            return await browser.wait(async () => {
                let style: string = await spinnerImage.getAttribute('style');
                return style === "width: 1243px; height: 300px; right: auto; left: 15px; top: 249px; display: none;";
            }, 90000);
        }

    }

    public async clickDetailsButton(stopNumber: string) {
        let detailButtonXpath: ElementFinder = element(by.xpath("//div[.//text()='" + stopNumber + "' and contains(@id, 'dashboardStopDrillDown') and @data-ref='innerCt']/a/span"));
        await this.actions.waitUntilElementPresenceOf(detailButtonXpath, "wait for element")
        await this.actions.click(detailButtonXpath, "Click On Detail Button");
    }
}
