import { DataProvider } from "../../data/dataProvider";
import { browser, protractor } from "protractor";
import { MoneyWorksHomePage } from "../../pages/money_works/money-works-homepage.po";

let using = require('jasmine-data-provider');

let moneyWorksHomePage = new MoneyWorksHomePage();
//TC #155289: Funding screen, employee search
using(DataProvider.Tc_155289, async function (data) {

    describe("Funding screen, employee search", () => {

        it("Should open My JBHunt url", async () => {
            await moneyWorksHomePage.openUrl(moneyWorksHomePage.moneyWorksUrl);
        });

        it("Should login to money works Application", async () => {
            await moneyWorksHomePage.loginIntoMoneyWorksApplication(data.username, data.password);
        });

        it("Should Click the dropdown tab next to Employee Search", async () => {
            await moneyWorksHomePage.gettingDropdownStatus().then(async (status) => {
                if (status = 'false') {
                    let EC = protractor.ExpectedConditions;
                    await browser.wait(EC.not(EC.stalenessOf(moneyWorksHomePage.employeeSearch)), 5000);
                    await moneyWorksHomePage.click(moneyWorksHomePage.employeeSearch);
                }
            })
        });

        it("Should enter leec7 in the white text box underneath Search Value", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
            await moneyWorksHomePage.setText(moneyWorksHomePage.searchValue, data.searchValue);
        });

        it("Should Click the Search button", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
            await moneyWorksHomePage.clickOnsearchButton()
        });

        it("Verifying Drivers information is populated", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
            expect(await moneyWorksHomePage.getText(moneyWorksHomePage.alphaCodeValue)).toBe(data.alphaCode);
        });

        it("Should Click the dropdown tab next to ALPHA CODE, click to select EMPLOYEE ID", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
            await moneyWorksHomePage.selectOptionFromDropDown('EMPLOYEE ID')
            });

        it("Should enter 337280 In the white text box underneath Search Value, enter 337280", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
            await moneyWorksHomePage.clearText(moneyWorksHomePage.searchValue);
            await moneyWorksHomePage.setText(moneyWorksHomePage.searchValue, data.searchValue1);
        });

        it("Should Click the Searchh button", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
            await moneyWorksHomePage.clickOnsearchButton()
           });

        it("Verifying new Drivers information is populated", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
            expect(await moneyWorksHomePage.getText(moneyWorksHomePage.employeeIdValue)).toBe(data.searchValue1);
        });

        it("Should Click the dropdown tab next to ALPHA CODE, click to select USER ID", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
            await moneyWorksHomePage.selectOptionFromDropDown('USER ID')
           
        });

        it("Should enter jisqdg3 In the white text box underneath Search Value, enter jisqdg3", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
            await moneyWorksHomePage.clearText(moneyWorksHomePage.searchValue);
            await moneyWorksHomePage.setText(moneyWorksHomePage.searchValue, data.searchValue2);
        });

        it("Should Click the Search button", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
           await moneyWorksHomePage.clickOnsearchButton()
          });

        it("Verifying new Drivers information is populated", async () => {
            await moneyWorksHomePage.actions.waitUntilElementVisible(moneyWorksHomePage.loadingStatus, '')
            expect(await moneyWorksHomePage.getText(moneyWorksHomePage.userIdValue)).toBe(data.userId);
        });

    });
});