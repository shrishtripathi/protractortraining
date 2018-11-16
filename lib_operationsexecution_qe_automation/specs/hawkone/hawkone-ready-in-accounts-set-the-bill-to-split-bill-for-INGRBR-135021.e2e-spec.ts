import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AccountsPage } from "../../pages/teams_and_tasks/accounts-page.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let platformHomePage = new PlatformHomePage();
let accountsPage=new AccountsPage();
let using = require('jasmine-data-provider');

//TC 135021  HawkOne - READY In Accounts set the Bill To to Split Bill for INGRBR
using(DataProvider.Tc_135021, async function (data) {

    describe("HawkOne - READY In Accounts set the Bill To to Split Bill for INGRBR", () => {

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
            await platformHomePage.waitForActionToCompleteTT();
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

        it("Should enter 'INGRBR' to account search", async () => {
            await accountsPage.setText(accountsPage.accountSearchInputField,data.accountSearchInputFieldValue);
        });

        it("Should click on the first option", async () => {
            await accountsPage.click(accountsPage.internationalPaperCo);
            await accountsPage.waitForActionToCompleteTT();
        });

        it("Should click the account in the account table. ", async () => {
            await accountsPage.click(accountsPage.internationalPaperAccountName);
            await accountsPage.waitForActionToCompleteTT();
        });

        it("Should click on invoices", async () => {
            await accountsPage.click(accountsPage.invoicesLink);
            await accountsPage.waitForActionToCompleteTT();
        });

        it("Should click on Billing Tab", async () => {
            await accountsPage.click(accountsPage.billingTab);
            await accountsPage.waitForActionToCompleteTT();
        });

        it("Should select 'HJBT JBVAN' from Division dropdown", async () => {
            await accountsPage.click(accountsPage.division);
            await accountsPage.click(accountsPage.hjbtjbvanOption);
            await accountsPage.waitForActionToCompleteTT();
        });

        it("Should click on 'Add New Split Bill Parameter Charge' in the Split Bill Parameters table", async () => {
            await accountsPage.click(accountsPage.addNewSplitBillParameterChargeButton);
            await accountsPage.waitForActionToCompleteTT();
        });

        it("Should select 'DETENTIONP' from Charge Code dropdown", async () => {
            await accountsPage.click(accountsPage.chargeCode);
            await accountsPage.click(accountsPage.detentionpOption);
            await accountsPage.waitForActionToCompleteTT();
        });

        it("Should select 'OFFENDING FACILITY' from  Split Bill Account Name dropdown", async () => {
            await accountsPage.click(accountsPage.splitBillCode);
            await accountsPage.click(accountsPage.splitBillCodeOption);
            await accountsPage.waitForActionToCompleteTT();
        });

        it("Should click on 'Save' button", async () => {
            await accountsPage.click(accountsPage.addSplitBillParameterChargeSaveButton);
        });

        it("Verifying that Split Bill parameter added to Split Bill table", async () => {
            await expect<any>(accountsPage.verifyAddedSplitBillParameter(data.detentionp)).toBeTruthy();
        });

    });

});