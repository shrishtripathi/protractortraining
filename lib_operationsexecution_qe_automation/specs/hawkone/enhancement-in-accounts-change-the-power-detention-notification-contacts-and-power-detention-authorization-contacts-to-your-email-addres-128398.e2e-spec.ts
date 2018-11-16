import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AccountsPage } from "../../pages/teams_and_tasks/accounts-page.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let platformHomePage = new PlatformHomePage();
let accountsPage=new AccountsPage();
let using = require('jasmine-data-provider');
//TC 128398  Enhancement in Accounts change the Power Detention Notification Contacts and Power Detention Authorization Contacts to your email addres
using(DataProvider.TC_128398, async function (data) {
    describe(" Enhancement in Accounts change the Power Detention Notification Contacts and Power Detention Authorization Contacts to your email addres", () => {

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

        it("Should enter 'DAMAC8' to account search", async () => {
            await accountsPage.setText(accountsPage.accountSearchInputField,data.accountSearchInputFieldValue);
        });

        it("Should click on 'Solo Cup Co(DAMAC8), Dart / Solocupt, 500 Hogsback Rd, Mason, MI, 48854-8523, USA, 248-596-0800, 972724792'", async () => {
            await accountsPage.click(accountsPage.soloCupCo);
        });

        it("Should click on 'Solo Cup Co'", async () => {
            await accountsPage.click(accountsPage.accountName);
        });

        it("Should click on 'contacts'", async () => {
            await accountsPage.click(accountsPage.contacts);
        });

        it("Should click on three dots", async () => {
            await accountsPage.clickOnThreeDots(data.contactName,data.contactType);
        });

        it("Should click on edit contact", async () => {
            await accountsPage.clickOnEditContact(data.contactName,data.contactType);
        });

        it("Verifying email id to be 'Kelli.Winn@jbhunt.com'", async () => {
            await expect<any>(accountsPage.getEmail()).toBe(data.emailAdressess);
        });

        it("Should click on save button", async () => {
            await accountsPage.click(accountsPage.saveButton);
        });

    });
});