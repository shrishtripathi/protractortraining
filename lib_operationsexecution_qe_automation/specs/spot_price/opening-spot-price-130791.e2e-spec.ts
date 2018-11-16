import { browser } from 'protractor';
import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { EnterpriseOrderManagementPage } from '../../pages/spot_price/enterprise-order-management.po';
import { SpotPricePage } from '../../pages/spot_price/spot-price.po';

let myJbHuntHomePage = new BasePage();
let spotPricePage = new SpotPricePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let using = require('jasmine-data-provider');


//TC130791:  Opening Spot Price
using(DataProvider.Tc_130791, async function (data) {

    describe(" Opening Spot Price", function () {
        it("Open My JBHunt url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.myJbhuntUrl);
        });

        it("Click on Show my app link on JbHunt home page", async () => {
            await enterpriseOrderManagementPage.clickOnShowMoreAppLink();
        });

        it("Click on FreightManager2 link from left Navigation", async () => {
            await enterpriseOrderManagementPage.clickonEnterpriseOrderManagement();
        });

        it("Should click on Rates ", async () => {
            await spotPricePage.clickRatesButton();
        });

    });

});