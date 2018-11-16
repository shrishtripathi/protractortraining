import { DataProvider } from "../../data/dataProvider";
import { browser, protractor } from "protractor";
import { MoneyWorksHomePage } from "../../pages/money_works/money-works-homepage.po";
import { ViewTranscationsPage } from "../../pages/money_works/view-transcations.po";

let using = require('jasmine-data-provider');

let moneyWorksHomePage = new MoneyWorksHomePage();
let viewTranscationsPage=new ViewTranscationsPage();
//TC #150384: MoneyWorks_RegressIon_3 Settings
using(DataProvider.Tc_150384, async function (data) {

    describe("Settings", () => {
        let fontSize;

        it("Should open My JBHunt url", async () => {
            await moneyWorksHomePage.openUrl(moneyWorksHomePage.moneyWorksUrl);
        });

        it("Should login to money works Application", async () => {
            await moneyWorksHomePage.loginIntoMoneyWorksApplication(data.username, data.password);
        });

        it("Should hoveover to settings and click Hide banner", async () => {
            await moneyWorksHomePage.hoveoverToSettingAndSelectOption(data.hideBanner)
        });

        it("Verifying banner is not displayed", async () => {
            await expect<any>(moneyWorksHomePage.verifyBanner()).toBeFalsy();
        });

        it("Should hoveover to settings and click Show banner", async () => {
            await moneyWorksHomePage.hoveoverToSettingAndSelectOption(data.showBanner)
        });

        it("Verifying banner is displayed", async () => {
            await expect<any>(moneyWorksHomePage.verifyBanner()).toBeTruthy();
        });

        it("Should make a note of font size", async () => {
            fontSize=await moneyWorksHomePage.verifyFontSize()
        });

        it("Should hoveover to settings and click Increase Font Size", async () => {
            await moneyWorksHomePage.hoveoverToSettingAndSelectOption(data.increaseFontSize)
        });

        it("Verifying font size is increased", async () => {
            await expect<any>(moneyWorksHomePage.verifyFontSize()).toBeGreaterThan(fontSize);
        });

        it("Should hoveover to settings and click Decresae Font Size", async () => {
            await moneyWorksHomePage.hoveoverToSettingAndSelectOption(data.decreaseFontSize)
        });

        it("Verifying font size is decreased", async () => {
            await expect<any>(moneyWorksHomePage.verifyFontSize()).toBe(fontSize);
        });

    });
});