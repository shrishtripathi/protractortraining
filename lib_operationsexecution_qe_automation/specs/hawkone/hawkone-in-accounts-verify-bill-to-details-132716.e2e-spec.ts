import { DataProvider } from "../../data/dataProvider";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AccountsPage } from "../../pages/teams_and_tasks/accounts-page.po";
import { async } from "q";

let platformHomePage = new PlatformHomePage();
let accountsPage = new AccountsPage();
let using = require('jasmine-data-provider');

/* TC 132716_PRECONDITION 3.1 HawkOne - In Accounts verify Bill To has
 DETENTIONP Charge Code with a Rule Type of Authorization and an Auth 
 Type of MANUALAUTH set up on the Invoice/Accessorial Rule Tab */

using(DataProvider.Tc_132716, async function (data) {
    describe("HawkOne:In Accounts verify Bill To Details", () => {

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

        it("Should click on 'INGRBR' from auto pouplated search resulkt", async () => {
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
            await accountsPage.clickOnHeaderLink(data.accessorialRule)
        });

        it('Click On division dropdown', async () => {
            // await accountsPage.waitForElementIsVisible(accountsPage.processingServiceRequestsXpath)
            await accountsPage.waitForProcessing()
            await accountsPage.divisionDropdown.click()
        });

        it('Select HJBT JBVAN from drop down', async () => {
            await accountsPage.waitForProcessing()
            await accountsPage.clickOnHeaderLink(data.hjbtJbvan)
            await accountsPage.waitForProcessing()
        });

        it('Verify Details', async () => {
            expect(await accountsPage.verifyDetails(data.chargeRowNumber)).toBe(data.detentionp)
            expect(await accountsPage.verifyDetails(data.ruleTypeNumber)).toBe(data.authorization)
            expect(await accountsPage.verifyDetails(data.authorizationTypeNumber)).toBe(data.manualauth)
        });

    });

});