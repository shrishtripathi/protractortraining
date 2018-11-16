import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AccountsPage } from "../../pages/teams_and_tasks/accounts-page.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let platformHomePage = new PlatformHomePage();
let accountsPage=new AccountsPage();
let using = require('jasmine-data-provider');
//TC 133060  Hawk One Screen - Enhancement Get to Account Search
using(DataProvider.Tc_133060, async function (data) {
    describe("Hawk One Screen - Enhancement Get to Account Search", () => {

        it("Should open My JBHunt url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.myJbhuntUrl);
        });

        it("Should cick on Show my app link on JbHunt home page", async () => {
            await myJbHuntHomePage.clickOnShowMoreAppLink();
        });

        it("Should click on 360 Platform link from left Navigation", async () => {
            await myJbHuntHomePage.clickOnAppLink(data.appLink);
        });

        it("Verifying that redirected to 360degrees platform Page", async () => {
            await expect<any>(platformHomePage.getPageTitle()).toBe(data.platformPageTitle);
        });

        it("Should click on account", async () => {
            await platformHomePage.clickOnAccounts();
        });

        it("Verifying that redirected to administration Page", async () => {
            await expect<any>(accountsPage.getPageTitle()).toBe(data.pageTitle);
        });

        it("Should click on accounts image", async () => {
            await accountsPage.click(accountsPage.accountsImage);
        });

        it("Should click on accounts", async () => {
            await accountsPage.click(accountsPage.account);
        });

        it("Should click on account search", async () => {
            await accountsPage.click(accountsPage.accountSearch);
        });

    });

});