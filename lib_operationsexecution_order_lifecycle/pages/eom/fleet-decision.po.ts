import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";

export class FleetDecisionPage extends BasePage {

    readonly truckLinkInTable: ElementFinder = element(by.xpath("(//a[@class='SIFTERYELLOW']/label)"));
    readonly xPath: ElementArrayFinder = element.all(by.xpath("(//a[@class='SIFTERYELLOW' or @class='SIFTERGREEN']/label)"))

    public async pickTruckOrIM() {
       await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@id='TB_iframeContent']")));
        let size: number = await this.xPath.count();
        await this.actions.waitUntilElementPresenceOf(await element(by.xpath('//iframe[@id="TB_iframeContent"]')), "wait for presence of truck");        
        console.log("size " + size);
        for (let index = 1; index <= size; index++) {
            let text: string = await this.xPath.get(index).getText();
            console.log("truck text " + text);
            if (text === "TRUCK") {
                await this.actions.click(this.xPath[index], "");
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