import { DataProvider } from "../../data/dataProvider";
import { browser, protractor } from "protractor";
import { MoneyWorksHomePage } from "../../pages/money_works/money-works-homepage.po";

let using = require('jasmine-data-provider');

let moneyWorksHomePage = new MoneyWorksHomePage();
//TC #150385: MoneyWorks_RegressIon_4 Sign out
using(DataProvider.Tc_150385, async function (data) {

    describe("Sign out", () => {
        it("Should open My JBHunt url", async () => {
            await moneyWorksHomePage.openUrl(moneyWorksHomePage.moneyWorksUrl);
        });

        it("Should login to money works Application", async () => {
            await moneyWorksHomePage.loginIntoMoneyWorksApplication(data.username, data.password);
        });

        it("Should click on sign out", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.signOut);
        });

        it("Verifying we are in sign out page", async () => {
            await expect<any>(moneyWorksHomePage.pageTitle()).toBe(data.signOut);
        });

        it("Should click on click here", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.clickHereLink);
        });

        it("Verifying we are in sign in page", async () => {
            await expect<any>(moneyWorksHomePage.pageTitle()).toBe(data.signIn);
        });

    });
});