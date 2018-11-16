import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { AccountsPage } from '../../pages/accounts/accounts.po';

let basePage = new BasePage();
let accountsPage = new AccountsPage();
let using = require('jasmine-data-provider');

//TC #185239: Accounts JBHA Validation
using(DataProvider.Tc_185239, async function (data) {

    describe("Accounts JBHA Validation", () => {

        using(DataProvider.Tc_185023, async function (data) {
            
            describe("Accounts Shared Step", () => {
                it("Should Open Accounts Page Url And Login If Required", async () => {
                    await accountsPage.navigateToAppHome(accountsPage.accountsUrl);
                    //await accountsPage.loginIfRequired();
                });

                it("Should Click On Accounts Image", async () => {
                    await accountsPage.clickAccountsImage();
                });

                it("Should Click On Accounts", async () => {
                    await accountsPage.clickAccount();
                });

                it("Should Click On Account Search", async () => {
                    await accountsPage.clickAccountSearch();
                    await accountsPage.waitForProcessing();
                });

                it("Should Input Bill To Code", async () => {
                    await accountsPage.setText(data.accountSearchValue);
                });

                it("Should Click On Populated Matching Business Name", async () => {
                    await accountsPage.clickOnPopulatedSearchList(data.accountSearchValue);
                    await accountsPage.waitForProcessing();
                });

                it("Should Click On The Account", async () => {
                    await accountsPage.clickOnAccountName(data.accountSearchValue)
                    await accountsPage.waitForProcessing();
                });

                it("Should Click On Publications", async () => {
                    await accountsPage.clickOnLinkUnderAccountInformation(data.tabValue)
                    await accountsPage.waitForProcessing();
                    //await accountsPage.waitForPageLoad();
                });
            });
        });
        
        describe("Accounts JBHA Validation", () => {
            it("Should Select HJBT JBHA From Division Drop Down", async () => {
                await accountsPage.selectHjbtJbhaFromDivisionDropDown();
            });

            it("Verifying If There Is HJBT JBHA Under Division Drop Down List", async () => {
                let division = await accountsPage.getDivisionText(data.divisionValue)
                await accountsPage.waitForProcessing();
                expect(division).toBe(data.divisionValue);
            });

        });
    });
});

