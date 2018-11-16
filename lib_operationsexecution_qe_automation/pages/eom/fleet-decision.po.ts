import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";
import { ifError } from "assert";
import { RateCheckDetailsPage } from "./rate-check-details.po";

export class FleetDecisionPage extends BasePage {

    readonly truckLinkInTable: ElementFinder = element(by.xpath("(//a[@class='SIFTERYELLOW']/label)"));

    public async pickTruckOrIM() {
        let ratePage = new RateCheckDetailsPage();

        if (await ratePage.isRateDropdownVisible()) {
            await ratePage.selectRateCode("262")
        }
        await browser.sleep(5000);
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@id='TB_iframeContent']")));
        let size: number = await element.all(by.xpath("(//a[@class='SIFTERYELLOW' or @class='SIFTERGREEN']/label)")).count();
        console.log("size " + size);
        for (let index = 1; index <= size; index++) {
            let text: string = await element(by.xpath("(//a[@class='SIFTERYELLOW' or @class='SIFTERGREEN']/label)[" + index + "]")).getText();
            console.log("truck text " + text);
            if (text === "TRUCK") {
                await element(by.xpath("(//a[@class='SIFTERYELLOW' or @class='SIFTERGREEN']/label)[" + index + "]")).click();
                break;
            }

        }

    }
    public async pickTruckOrIMBasedOnMode(modeType: string) {
        console.log("todaydate :" + await this.actions.dateInmmddyyyyFormat());
        let date: string = await this.actions.dateInmmddyyyyFormat();
        await this.actions.waitUntilElementPresenceOf(await element(by.xpath('//iframe[@id="TB_iframeContent"]')), "wait for presence of truck")
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));
        let todayTruckMenu: ElementFinder = await element(by.xpath("//*[@id='eomOrderFleetDec:sifterMainContent']//table[.//td/span[contains(text(),'" + date + "')]]//a[contains(.,'" + modeType + "')]"));
        await this.actions.waitUntilElementPresenceOf(todayTruckMenu, "wait for presence of truck");
        await this.actions.click(todayTruckMenu, "click on load");
        await browser.switchTo().defaultContent();
        await this.actions.mediumWait("switch to frame");
    }


}