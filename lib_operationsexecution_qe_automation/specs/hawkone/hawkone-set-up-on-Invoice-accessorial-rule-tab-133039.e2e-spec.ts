import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { DataProvider } from "../../data/dataProvider";
import { AccountsPage } from "../../pages/teams_and_tasks/accounts-page.po";

let platformHomePage = new PlatformHomePage();
let accountsPage = new AccountsPage();
let using = require('jasmine-data-provider');

/* TC 133039:PRECONDITION 3.2 HawkOne - In Accounts set Bill To to have DETENTIONP Charge 
Code with a Rule Type of Authorization and an Auth Type of MANUALAUTH set up on the Invoice/Accessorial Rule Tab*/

using(DataProvider.Tc_133039, async function (data) {
    describe("HawkOne:Set up on the Invoice/Accessorial Rule Tab", () => {

        beforeEach(async () => {
            await platformHomePage.checkforloading();
            console.log('spinnre: ' + await platformHomePage.spinner.isPresent())
        })

        it('Open Platform 360 Url', async () => {
            await accountsPage.navigateToAppHome(accountsPage.platform360URL)
        });

        it("Verifying that redirected to 360degrees platform Page", async () => {
            await expect<any>(platformHomePage.getPageTitle()).toBe(data.platformPageTitle);
        });

        it("Should click on account", async () => {
            await platformHomePage.clickOnAccounts();
            await accountsPage.waitForProcessing()
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
            await accountsPage.waitForProcessing()
        });

        it("Should enter 'INGRBR' to account search", async () => {
            await accountsPage.setText(accountsPage.accountSearchInputField, data.accountSearchInputFieldValue);
        });

        it("Should click on 'INGRBR' from auto pouplated search result", async () => {
            await accountsPage.clickOnPopulatedSearchList(data.accountSearchInputFieldValue);
            await accountsPage.waitForProcessing()
        });

        it('click On Account Name INGRBR from search result', async () => {
            await accountsPage.clickOnAccountName(data.accountSearchInputFieldValue)
            await accountsPage.waitForProcessing()
        });

        it('Click on Invoices tab from left Navigation', async () => {
            await accountsPage.clickOnLinkUnderAccountInformation(data.invoices)
            await accountsPage.waitForProcessing()
        });

        it('Click on accessorial Rule tab', async () => {            
            await accountsPage.waitForProcessing()
            await accountsPage.clickOnHeaderLink(data.accessorialRule)
        });

        it('Click On division dropdown', async () => {
            // await accountsPage.waitForElementIsVisible(accountsPage.processingServiceRequestsXpath)
            // await accountsPage.waitForProcessing()
            await accountsPage.divisionDropdown.click()
        });

        it('Select HJBT JBVAN from drop down', async () => {
            await accountsPage.waitForProcessing()
            await accountsPage.clickOnHeaderLink(data.hjbtJbvan)
            await accountsPage.waitForProcessing()
        });

        it('click on Three dot button', async () => {
           await accountsPage.clickOnThreeDot(data.chargeAuthorizationBill)
            await accountsPage.waitForProcessing()
        });

        it('click on Three dot and Add New Rules Sub Options', async () => {
            await accountsPage.clickOnThreeDotSuboption(data.chargeAuthorizationBill, data.addNewRule)
        });

        it('Click on Charge Rule Type and select DETENTIONP', async () => {
            await accountsPage.selectRulesToAdd(data.ruleType, data.detentionp)
        });

        it('Click on Assigne User Billing Type and select JOP', async () => {
            await accountsPage.selectRulesToAdd(data.billingType, data.jop)
        });

        it('Click on Authorization Type and select MANUALAUTH', async () => {
            await accountsPage.selectRulesToAdd(data.authorizationType, data.manualauth)
        });

        it('Click on Save button', async () => {
            await accountsPage.click(accountsPage.saveButtonTextXpath)
        });
    });

});