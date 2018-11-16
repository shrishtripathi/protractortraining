import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { browser } from 'protractor';
import {AccountsPage} from '../../pages/accounts/accounts.po';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

let basePage = new BasePage();
let accountsPage = new AccountsPage();
let using = require('jasmine-data-provider');

// TC #185023: Accounts Shared Step
using(DataProvider.Tc_185023, async function (data) {

    describe("Accounts Shared Step ", () => {

        it("Should open accounts page url ", async () => {
            await accountsPage.navigateToAppHome(basePage.accountsUrl); 
        });

        it("Should click on accounts image", async () => {
            await accountsPage.clickAccountsImage();
        });

        it("Should click on accounts", async () => {
            await accountsPage.clickAccount();
        });

        it("Should click on account search", async () => {
            await accountsPage.clickAccountSearch();
            await accountsPage.waitForProcessing();
        });

        it("Should input a bill to code", async () => {
            await accountsPage.setText(data.accountSearchValue);
        });

        it("Should click on the populated matching business name", async () => {
            await accountsPage.clickOnPopulatedSearchList(data.accountSearchValue);
            await accountsPage.waitForProcessing();
        });

        it('Should click on the Account', async () => {
            await accountsPage.clickOnAccountName(data.accountSearchValue)
            await accountsPage.waitForProcessing();
        });

        it('Should click on publications', async () => {
            await accountsPage.clickOnLinkUnderAccountInformation(data.tabValue)
            await accountsPage.waitForPageLoad();
        });
    });

});