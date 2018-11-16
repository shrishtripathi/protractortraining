import { BasePage } from '../../pages/base.po';

import { browser, ElementArrayFinder, ElementFinder } from 'protractor';
import { DataProvider } from '../../data/dataprovider';
import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';

let basePage = new BasePage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let using = require('jasmine-data-provider');

//TC #85230 : EOM_Regression_17 Search using user id
using(DataProvider.Tc_85230, async function (data) {

    describe("Search using user id", () => {

        it('Open Enterprise Order Management', async () => {
            let title: string = await myJbHuntHomePage.clickOnShowMoreApp_thenClickOnLeftNavigationLinkPage(data.eomText);
            expect(title).toEqual(data.eomTitle);
        });

        it('Click on Search option Drop down', async () => {
            await enterpriseOrderManagementPage.clickOnElementWithId(data.searchOptionDropDownId, data.searchOptionElement)
        });

        it('Select Create User Id from Drop Down', async () => {
            await enterpriseOrderManagementPage.selectOptionFromDropDown(data.searchOptionDropDownId, data.createUserIdOption)
        });


        it('Enter User Id in search value text box', async () => {
            await enterpriseOrderManagementPage.enterTextInTextBox(data.searchValueTextBoxId, data.searchValueTextBox, data.searchValueTextBox);

        });

        it('Click On Button SEARCH SKELETONS', async () => {
            await enterpriseOrderManagementPage.clickOnbutton(data.searchLoadButton, data.searchLoadText);
        });

        it('Verify load Listing page', async () => {
            let pageTitle: string = await enterpriseOrderManagementPage.pageTitle();
            if (pageTitle == data.loadListingPageTitle) {
                expect(pageTitle).toBe(data.loadListingPageTitle);
            } else {
                expect(await enterpriseOrderManagementPage.errorMessage()).toEqual(data.errorMessageText)

            }
        });

    });

});