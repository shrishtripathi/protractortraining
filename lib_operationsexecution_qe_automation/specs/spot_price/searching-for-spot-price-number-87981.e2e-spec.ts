import { SpotPricePage } from "../../pages/spot_price/spot-price.po";
import { OfferFormPage } from "../../pages/spot_price/offer-form.po";
import { DataProvider } from '../../data/dataProvider'
import { EnterpriseOrderManagementPage } from "../../pages/spot_price/enterprise-order-management.po";
import { SearchSpotPricePage } from "../../pages/spot_price/search-spot-price.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let spotPricePage = new SpotPricePage();
let offerFormPage = new OfferFormPage();
let searchSpotPricePage = new SearchSpotPricePage();
let using = require('jasmine-data-provider');

//TC #87981: Spot Price_Regression_7 Searching for spot price number
using(DataProvider.Tc_87981, async function (data) {

    describe("Searching for spot price number", function () {

        let spotPriceNumber: string;

        it("Should Open Enterprise Order Management url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
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

        it("Should Add delivery date", async () => {
            await spotPricePage.enterDeliveryDate();
        });

        it("Should set duration ", async () => {
            await spotPricePage.addDuration(data.durationDays);
        });

        it("Should add GEEC in bill to code", async () => {
            await spotPricePage.enterBillToCode(data.billToCode, data.billToCodeName);
        });

        it("Should click get price button", async () => {
            await spotPricePage.clickGetPriceButton();
        });

        it("Should click on the coloured box", async () => {
            await spotPricePage.clickColoredBox();
        });

        it("Should type name in Contact person field", async () => {
            await offerFormPage.verifyAndHandleErrorMessage();
            await offerFormPage.enterBuisinessInforContactPerson(data.contactPerson);
        });

        it("Should type email address in Email Address field", async () => {
            await offerFormPage.enterBuisinessInforEmailAddress(data.emailAddress);
        });

        it("Should Click on Bypass Customer Approval Button ", async () => {
            await offerFormPage.clickBypassCustomerApproval();
        });

        it("Verifying that Spot Price Number creation message", async () => {
            let sucessmessage = await enterpriseOrderManagementPage.validateSucessMessage(data.spotPriceText);
            expect(sucessmessage.message).toEqual(data.spotPrice + sucessmessage.groupId + data.successMessage);
        });

        it("Should take note of Spot Price Number", async () => {
            spotPriceNumber = await offerFormPage.noteSpotPriceNumber();
            console.log("spotPriceNumber:" + spotPriceNumber);
        });

        it("Should click on search Spot price tab", async () => {
            await offerFormPage.clickOnTab(data.searchSpotPrice);
        });

        it("Should click on clear button", async () => {
            await searchSpotPricePage.clickOnButton(data.clearButton);
        });

        it("Should add the Spot price number in Spot price number field ", async () => {
            await searchSpotPricePage.setTexts(spotPriceNumber);
        });

        it("Should click on Search", async () => {
            await searchSpotPricePage.clickOnButton(data.searchPrice);
        });

        it("Should show the spot price in Price history page", async () => {
            expect(await searchSpotPricePage.verifySpotPriceNumberInPriceHistory(spotPriceNumber)).toBeTruthy();
        });

    });

});