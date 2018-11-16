import { AccountsPage } from "../../pages/accounts/accounts.po";

let accountsPage = new AccountsPage();

export class AccountsE2EComponents {
    
    //Accounts Search
    async accountsSearch(data) {

        describe("Accounts Search", () => {

            it("Should open accounts page url ", async () => {
                await accountsPage.navigateToAppHome(accountsPage.accountsUrl);
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
    }

}