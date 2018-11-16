import { DataProvider } from '../../data/dataprovider';
import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';


let myJbHuntHomePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let using = require('jasmine-data-provider');

//TC #85215: EOM_Regression_16 Searching for skeletons
using(DataProvider.Tc_85215, async function (data) {

    describe("Searching for skeletons", () => {

        it('Open Enterprise Order Management', async () => {
            let title: string = await myJbHuntHomePage.clickOnShowMoreApp_thenClickOnLeftNavigationLinkPage(data.eomText);
            expect(title).toEqual(data.eomTitle);
        });

        it('Enter Bill To Code Text', async () => {
            await enterpriseOrderManagementPage.enterTextInTextBox(data.billToCodeInputField, data.billToCodeText, data.billToCodeLabel)
        });

        it('Click On Button SEARCH SKELETONS', async () => {
            await enterpriseOrderManagementPage.clickOnbutton(data.searchSkeltonButton, data.searchSkeletonsText);
        });

        it('Verify load Listing page', async () => {
            let pageTitle: string = await enterpriseOrderManagementPage.pageTitle();
            expect(pageTitle).toBe(data.skeletonListingText);
        });

    });

});