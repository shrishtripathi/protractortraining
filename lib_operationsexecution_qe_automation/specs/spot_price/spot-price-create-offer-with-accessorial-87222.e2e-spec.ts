import { browser } from "protractor";
import { DataProvider } from '../../data/dataProvider'
import { EnterpriseOrderManagementPage } from "../../pages/spot_price/enterprise-order-management.po";
import { OfferFormPage } from "../../pages/spot_price/offer-form.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let offerFormPage = new OfferFormPage()
let using = require('jasmine-data-provider');

//TC #87222: Spot Price_Regression_9 Create an offer with an accessorial
using(DataProvider.Tc_87222, async function (data) {

    describe("Create an offer with an accessorial", () => {

        it("Open 'EOM' Page", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("Shouls click on Rates Tab", async () => {
            await enterpriseOrderManagementPage.clickOnRatesTab();
        });

        it("Should enter the Origin City", async () => {
            await enterpriseOrderManagementPage.enterOrigin(data.originStateCityZipCode);
        });

        it("Should enter the Destination City", async () => {
            await enterpriseOrderManagementPage.enterDestination(data.destinationStateCityZipCode);
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
            await offerFormPage.verifyAndHandleErrorMessage();
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

        it("Should enter Congestion Charge", async () => {
            await enterpriseOrderManagementPage.enterCongestionCharge();
        });

        it("Should click On Update Offer Button", async () => {
            await enterpriseOrderManagementPage.clickOnUpdateOfferButton();
        });

        it("Should click on Update Offer Button", async () => {
            let sucessmessage = await enterpriseOrderManagementPage.validateSucessMessage(data.offerGroupId);
            expect(sucessmessage.message).toEqual(data.offer + sucessmessage.groupId + data.updatedMessage)
        });

        it("Should click On Bypass Customer Approval Button", async () => {
            await enterpriseOrderManagementPage.clickOnBypassCustomerApprovalButton();
        });

        it("Verifying that Spot Price Number creation message", async () => {
            let sucessmessage = await enterpriseOrderManagementPage.validateSucessMessage(data.spotPriceText);
            expect(sucessmessage.message).toEqual(data.spotPrice + sucessmessage.groupId + data.successMessage);
        });

    });

});

