import { browser } from "protractor";
import { DataProvider } from "../../data/dataprovider";
import { EnterpriseOrderManagementPage } from "../../pages/spot_price/enterprise-order-management.po";
import { BasePage } from "../../pages/base.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let basePage= new BasePage()
let using = require('jasmine-data-provider');

//TC_86431: Spot Price_Regression_1 Getting a price
using(DataProvider.Tc_86431, async function (data) {

    describe("Getting a price", function () {

        it("Should open EOM Page", async () => {
            await basePage.navigateToAppHome(basePage.eomUrl);
        });

        it('Click on Rates Tab', async () => {
            await enterpriseOrderManagementPage.clickOnRatesTab();
        });

        it("Verifying that spot price page is displayed", async function () {
            await expect<any>(enterpriseOrderManagementPage.getPageTitle()).toBe(data.spotPriceText);
        });

        it('Should Enter the Origin City', async () => {
            await enterpriseOrderManagementPage.enterOrigin(data.originStateCityZipCode);
        });

        it('Should Enter the Destination City', async () => {
            await enterpriseOrderManagementPage.enterDestination(data.destinationStateCityZipCode);
        });

        it('Enter Delivery Date', async () => {
            await enterpriseOrderManagementPage.enterDeliveryDate();
        });

        it('Click on Get Price Button', async () => {
            await enterpriseOrderManagementPage.clickOnGetPriceButton();
        });

    });

});

