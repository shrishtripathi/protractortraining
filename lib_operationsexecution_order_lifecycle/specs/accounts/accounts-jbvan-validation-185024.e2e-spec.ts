import { DataProvider } from '../../data/dataProvider';
import { AccountsPage } from '../../pages/accounts/accounts.po';
import { AccountsE2EComponents } from '../../e2eComponents/accounts/accounts.pc';

let accountsPage = new AccountsPage();
let using = require('jasmine-data-provider');
let accountsE2EComponents = new AccountsE2EComponents();

let accountsSearchData = Object.assign({}, DataProvider.Tc_185024)

// TC #185024: Accounts Validation
using(accountsSearchData, async function (data) {

    describe("Accounts Validation", () => {

    describe("Accounts Search", async () => {
        accountsE2EComponents.accountsSearch(data.accountSearchData);
    });

    describe("Accounts Validation", () => {

        it('Should check HJBT JBVAN from drop down', async () => {
            await accountsPage.waitForProcessing();
            let division = await accountsPage.getDivisionText(data.divisionValue)
            await accountsPage.waitForProcessing();
            expect(division).toBe(data.divisionValue);
        });

    });

});

});
