import { DataProvider } from "../../data/dataProvider";
import { browser, protractor } from "protractor";
import { MoneyWorksHomePage } from "../../pages/money_works/money-works-homepage.po";

let using = require('jasmine-data-provider');

let moneyWorksHomePage = new MoneyWorksHomePage();
//TC #135619: MoneyWorks_Regression_1 Funding screen, welcome screen
using(DataProvider.Tc_135619, async function (data) {

    describe("Funding screen, welcome screen", () => {

        it("Should open My JBHunt url", async () => {
            await moneyWorksHomePage.openUrl(moneyWorksHomePage.moneyWorksUrl);
        });

        it("Should login to money works Application", async () => {
            await moneyWorksHomePage.loginIntoMoneyWorksApplication(data.username, data.password);
        });

        it("Should enter load number to load number input field", async () => {
            await moneyWorksHomePage.setText(moneyWorksHomePage.loadNumber,"M501323");
        });

        it("Should click on magnifying glass", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.magnifyingGlass);
        });

        it("Should enter 'abc' to search value input field", async () => {
            await moneyWorksHomePage.setText(moneyWorksHomePage.searchValueInputFiled,data.searchValue);
        });

        it("Should click on magnifying glass", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.magnifyingGlassUnderSearchValue);
            await moneyWorksHomePage.waitForActionToComplete();
        });

        it("Should click on modify button", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.modifyButton);
        });

        it("Verifying vendor recipent page", async () => {
            await expect<any>(moneyWorksHomePage.getText(moneyWorksHomePage.vendorRecipentTitle)).toBe(data.vendorRecipentTitle);
        });

        it("Should click on cancel button", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.cancelButton);
        });

        it("Should click on welcome screen link", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.welcomeScreen);
        });

        it("Should enter load number to load number input field", async () => {
            await moneyWorksHomePage.setText(moneyWorksHomePage.loadNumber,"M501323");
        });

        it("Should click on magnifying glass", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.magnifyingGlass);
        });

        it("Should enter 'abc' to search value input field", async () => {
            await moneyWorksHomePage.setText(moneyWorksHomePage.searchValueInputFiled,data.searchValue);
        });

        it("Should click on magnifying glass", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.magnifyingGlassUnderSearchValue);
            await moneyWorksHomePage.waitForActionToComplete();
        });

        it("Should click on company name link", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.companyNameLink);
        });

        it("Verifying express code page", async () => {
            await expect<any>(moneyWorksHomePage.getText(moneyWorksHomePage.expressCode)).toContain(data.expressCode);
        });

        it("Should click on welcome screen link", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.welcomeScreen);
        });

        it("Should enter load number to load number input field", async () => {
            await moneyWorksHomePage.setText(moneyWorksHomePage.loadNumber,"M501323");
        });

        it("Should click on magnifying glass", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.magnifyingGlass);
        });

        it("Should enter 'abc' to search value input field", async () => {
            await moneyWorksHomePage.setText(moneyWorksHomePage.searchValueInputFiled,data.searchValue);
        });

        it("Should click on magnifying glass", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.magnifyingGlassUnderSearchValue);
            await moneyWorksHomePage.waitForActionToComplete();
        });

        it("Should click on create new button", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.createNew);
        });

        it("Verifying vendor recipent page", async () => {
            await expect<any>(moneyWorksHomePage.getText(moneyWorksHomePage.vendorRecipentTitle)).toBe(data.vendorRecipentTitle);
        });
        
        it("Should click on cancel button", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.cancelButton);
        });

        it("Should click on FED_TAX_ID ", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.fedTaxId);
        });

        it("Should click on magnifying glass", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.magnifyingGlassUnderSearchValue);
        });

        it("Verifying vendor recipent page", async () => {
            await expect<any>(moneyWorksHomePage.getText(moneyWorksHomePage.vendorRecipentTitle)).toBe(data.vendorRecipentTitle);
        });
        
        it("Should click on cancel button", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.cancelButton);
        });

    });
});