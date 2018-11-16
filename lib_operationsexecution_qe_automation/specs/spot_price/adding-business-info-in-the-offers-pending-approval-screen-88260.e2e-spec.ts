import { browser } from 'protractor';
import { BasePage } from '../../pages/base.po';
import { SpotPricePage } from '../../pages/spot_price/spot-price.po';
import { OfferFormPage } from '../../pages/spot_price/offer-form.po';
import { DataProvider } from '../../data/dataProvider'
import { EnterpriseOrderManagementPage } from '../../pages/spot_price/enterprise-order-management.po';

let myJbHuntHomePage = new BasePage();
let spotPricePage = new SpotPricePage();
let offerFormPage = new OfferFormPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let using = require('jasmine-data-provider');

//TC #88260: Spot Price_Regression_8 Adding business info in the offers pending approval screen
using(DataProvider.Tc_88260, async function (data) {

    describe("Adding business info in the offers pending approval screen", function () {

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

        it("Should Add an Origin by adding zip, city state or customer code.", async () => {
            await spotPricePage.setOrigin(data.originZipCode, data.originStateCity);
        });

        it("Should Add an destination by adding zip, city state or customer code.", async () => {
            await spotPricePage.setDestination(data.destinationZipCode, data.destinationStateCity);
        });

        it("Should set delivery date ", async () => {
            await spotPricePage.enterDeliveryDate();
        });

        it("Should set duration ", async () => {
            await spotPricePage.addDuration(data.durationDays);
        });

        it("Should click get price button", async () => {
            await spotPricePage.clickGetPriceButton();
        });

        it("Should click on the coloured box", async () => {
            await spotPricePage.clickColoredBox();
        });

        it("Should enter business name in business info", async () => {
            await offerFormPage.enterBuisinessInforBusinessName(data.businessName);
        });

        it("Should type name in Contact person field", async () => {
            await offerFormPage.enterBuisinessInforContactPerson(data.contactPerson);
        });

        it("Should type email address in Email Address field", async () => {
            await offerFormPage.enterBuisinessInforEmailAddress(data.emailAddress);
        });

        it("Should Click on update offer Button ", async () => {
            await offerFormPage.clickUpdateOffer();
        });

        it("Verifying that Offer Group Id has been updated successfully", async () => {
            let updateMessage = await offerFormPage.verifyEventMessages(data.updatedMessage)
            await expect(updateMessage).toContain(data.updatedMessage);
        });

    });

});
