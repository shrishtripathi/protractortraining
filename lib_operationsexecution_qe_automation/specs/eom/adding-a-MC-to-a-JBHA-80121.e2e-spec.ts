import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';
import { browser } from 'protractor';
import { DataProvider } from '../../data/dataprovider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';

let homePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let using = require('jasmine-data-provider');

//TC #80121: EOM_Regression_8 Adding a MC# to a JBHA
using(DataProvider.Tc_80121, async function (data) {

    describe("Adding a MC# to a JBHA", function () {

        it("should open EOM home page", async function () {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("should enter CCBDA in origin field", async function () {
            await enterpriseOrderManagementPage.setOrigin(data.origin);
        });

        it("should uncheck HJBT JBDCS check box", async function () {
            await enterpriseOrderManagementPage.unCheckCheckBox(data.checkboxHJBTJBDCS);
        });

        it("should uncheck HJBT JBVAN check box", async function () {
            await enterpriseOrderManagementPage.unCheckCheckBox(data.checkboxHJBTBVAN);
        });

        it("should click search load button", async function () {
            await enterpriseOrderManagementPage.clickSearchLoadsButton();
        });

        it("should click on load number", async function () {
            await enterpriseOrderManagementPage.clickOnLoadNumber();
        });

        it("should click on carrier extension", async function () {
            await orderDetailsViewPage.clickCarrierDetails();
        });

        it("should click on MC spy glass icon", async function () {
            await orderDetailsViewPage.clickMCSpyGlassIcon();
        });

        it("should select 'Carrier code' option to select by dropdown", async function () {
            await orderDetailsViewPage.setSearchByDropdown(data.carrierCodedropdownOption);
        });

        it("should enter value to search by input field", async function () {
            await orderDetailsViewPage.setSearchByInputField(data.searchByInputValue);
        });

        it("should click on the search", async function () {
            await orderDetailsViewPage.clickCarrierSearchButton();
        });

        it("should click on MC Hyperlink", async function () {
            await orderDetailsViewPage.clickMCHyperlink();
        });

        it("verifying MC value is not null", async function () {
            await expect<any>(orderDetailsViewPage.getMCInputField()).not.toBeNull();
        });

        it("should click on the Go to CMS Link ", async function () {
            await orderDetailsViewPage.clickGoToCMSLink();
        });

    });
});