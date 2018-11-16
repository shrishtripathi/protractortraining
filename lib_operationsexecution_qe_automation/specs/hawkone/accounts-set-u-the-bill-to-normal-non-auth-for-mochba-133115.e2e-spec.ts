import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AccountsPage } from "../../pages/teams_and_tasks/accounts-page.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let platformHomePage = new PlatformHomePage();
let accountsPage=new AccountsPage();
let using = require('jasmine-data-provider');
//TC_133115  Hawk One Screen - In Accounts set up the Bill To to Normal non Auth for MOCHBA
using(DataProvider.Tc_133060, async function (data) {
    describe("Hawk One Screen - In Accounts set up the Bill To to Normal non Auth for MOCHBA", () => {

        it("Should open My JBHunt url", async () => {
            await myJbHuntHomePage.openUrl(myJbHuntHomePage.myJbhuntUrl);
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

    

       //TC 133115 PRECONDITION 3.3 HawkOne - In Accounts set up the Bill To to Normal non Auth for MOCHBA
         using(DataProvider.Tc_133060, async function (data) {
        it("In the search box type Bill To 'MOCHBA', then Click on the account: 'Morton International, Inc'", async () => {
            await accountsPage.setAccountSearchField(data.accountfield,data.value);
        });
        
        it("Click on the 'CONTACTS' tab", async () => {
            await accountsPage.click(accountsPage.contactsTab);
        });
        it("Check all the Contacts to make sure that under the 'Contact Type' column there are no 'Power Detention Authorization'", async () => {
            await accountsPage.removeContact(data.contact);
        });
        it("verify contacts is removed", async () => {
           let flag= await accountsPage.verifyContactIsRemoved(data.contact);
           expect(flag).toBeFalsy();
        });
    });

});

    });
    

