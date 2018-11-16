import { DataProvider } from "../../data/dataProvider";
import { browser, protractor } from "protractor";
import { MoneyWorksHomePage } from "../../pages/money_works/money-works-homepage.po";

let using = require('jasmine-data-provider');

let moneyWorksHomePage = new MoneyWorksHomePage();
//TC #153943: Login to MoneyWorks
using(DataProvider.Tc_135619, async function (data) {

    describe("Login to MoneyWorks", () => {

        it("Should open My JBHunt url", async () => {
            await moneyWorksHomePage.openUrl(moneyWorksHomePage.moneyWorksUrl);
        });

        it("Should login to money works Application", async () => {
            await moneyWorksHomePage.loginIntoMoneyWorksApplication(data.username, data.password);
        });

    });
});