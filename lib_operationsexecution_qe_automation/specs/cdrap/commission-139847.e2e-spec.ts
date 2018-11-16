import { DataProvider } from "../../data/dataProvider";
import { CommissionPage } from "../../pages/cdrap/commission.po";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";

let cdrapHomePage = new CdrapHomePage();
let commissionPage = new CommissionPage();
let using = require('jasmine-data-provider');

//TC #139847: CDRAP_Regression_9 Commission
describe("CDRAP Login to homescreen", () => {
    using(DataProvider.Tc_157971, async function (data) {
        it("Should open CDRAP url", async () => {
            await cdrapHomePage.openUrl(cdrapHomePage.cdrapUrl);
        });

        it("Verifying that CDRAP page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toBe(data.loginTitle);
        });

        it("Login into CDRAP application ", async () => {
            await cdrapHomePage.loginIntoCdrap(data.username, data.password, data.submit);
        });

        it("Verifying that CDRAP Logged in Home page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.cdrapHomeTitle);
        });

    });

    using(DataProvider.Tc_139847, async function (data) {
        it("Click on commission hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.commissionLinkText);
        });

        it("Click on SSN hyperlink under driver SSN", async () => {
            await commissionPage.clickOnDriverSSNHyperlink();
            await commissionPage.actions.selectWindow(1, "");
        });

        it("Click on cancel button to close the new window", async () => {
            await commissionPage.clickOnInputButton(commissionPage.cancelButton);
            await commissionPage.actions.selectWindow(0, "");
        });

        it("Click any AUD hyperlink underneath Action", async () => {
            await commissionPage.clickOnAUDHyperlink();
            await commissionPage.actions.selectWindow(1, "");
        });

        it("Click on close button to close the new window", async () => {
            await commissionPage.clickOnInputButton(commissionPage.closeButton);
            await commissionPage.actions.selectWindow(0, "");
        });

        it("Click any DET hyperlink underneath Action", async () => {
            await commissionPage.clickOnDETHyperlink();
            await commissionPage.actions.selectWindow(1, "");
        });

        it("Click on close button to close the new window", async () => {
            await commissionPage.clickOnInputButton(commissionPage.closeButton);
            await commissionPage.actions.selectWindow(0, "");
        });

        it("Click the dropdown tab next to Commission Status, click to select APPROVED", async () => {
            await commissionPage.selectCommissionStatus(data.approved);
            let result: boolean = await commissionPage.verifyAnyParagraphElementOnPage(data.approved);
            expect(result).toBeTruthy();
        });

        it("Click the dropdown tab next to Commission Status, click to select DENIED", async () => {
            await commissionPage.selectCommissionStatus(data.denied);
            let result: boolean = await commissionPage.verifyAnyParagraphElementOnPage(data.denied);
            expect(result).toBeTruthy();
        });

        it("Click the dropdown tab next to Commission Status, click to select EXCLUDED", async () => {
            await commissionPage.selectCommissionStatus(data.excluded);
            let result: boolean = await commissionPage.verifyAnyParagraphElementOnPage(data.excluded);
            expect(result).toBeTruthy();
        });

    });
});