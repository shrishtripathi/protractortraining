import { browser } from "protractor";
import { DataProvider } from '../../data/dataProvider'
import { EnterpriseOrderManagementPage } from "../../pages/spot_price/enterprise-order-management.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let using = require('jasmine-data-provider');

//TC #87599: Spot Price_Regression_13  Create an offer with 2 accessorial and pub rate
using(DataProvider.Tc_87599, async function (data) {

    describe("Create an offer with 2 accessorial and pub rate", () => {

        it("Should open 'homepage'", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.myJbhuntUrl);
        });

        it("Should click on 'ShowMoreApps' link on homepage", async function () {
            await enterpriseOrderManagementPage.clickOnShowMoreAppLink();
        });

        it("Should click on 'Enterprise Order Management' on homepage", async function () {
            await enterpriseOrderManagementPage.clickOnEnterpriseOrderManagement();
        });

        it("Shouls click on Rates Tab", async () => {
            await enterpriseOrderManagementPage.clickOnRatesTab();
        });

        it("Should enter the Origin City", async () => {
            await enterpriseOrderManagementPage.enterOriginOrDestination(data.originId, data.originContainerId, data.originCityName, data.originCityZipCode);
        });

        it("Should enter the Destination City", async () => {
            await enterpriseOrderManagementPage.enterOriginOrDestination(data.destinationId, data.destinationContainerId, data.destinationCityName, data.destinationCityZipCode);
        });

        it("Should enter Delivery Date", async () => {
            await enterpriseOrderManagementPage.enterDeliveryDate();
        });

        it("Should enter Bill to Code", async () => {
            await enterpriseOrderManagementPage.enterBillToCode();
        });

        it("Should click on Get Price Button", async () => {
            await enterpriseOrderManagementPage.clickOnGetPriceButton();
        });

        it("Should click On recomended rate", async () => {
            await enterpriseOrderManagementPage.clickOnRecommendedRate();
        });

        it("Should enter Contact Person Name", async () => {
            await enterpriseOrderManagementPage.enterDetail(data.contactPersonInput, enterpriseOrderManagementPage.generateRandomeString());
        });

        it("Should enter Email Address", async () => {
            await enterpriseOrderManagementPage.enterDetail(data.emailAddressInput, enterpriseOrderManagementPage.generateRandomeString() + data.emailAddress);
        });

        it("Should Select Accessorials Type", async () => {
            await enterpriseOrderManagementPage.selectAccessorialsType();
        });

        it("Should click on Add Accessorials Button", async () => {
            await enterpriseOrderManagementPage.clickOnAddAccessorialsButton();
        });

        it("Should Select Accessorials Type", async () => {
            await enterpriseOrderManagementPage.selectAccessorialTypeFromDropDown(data.driverLoadFreight);
        });

        it("Should click on Add Accessorials Button", async () => {
            await enterpriseOrderManagementPage.clickOnElementWithValue(data.usePubRate);
            expect(await enterpriseOrderManagementPage.fuleSurchaegeMessage.getText()).toEqual(data.addAccessorialSuccessMessage)
        });

        it("Should Select Accessorials Type", async () => {
            await enterpriseOrderManagementPage.clickOnElementWithValue(data.getCustomerApproval);
        });

        it("Should Select Accessorials Type", async () => {
            await enterpriseOrderManagementPage.clickOnElementWithValue(data.bypassCustomerApproval);
        });

    });

});

