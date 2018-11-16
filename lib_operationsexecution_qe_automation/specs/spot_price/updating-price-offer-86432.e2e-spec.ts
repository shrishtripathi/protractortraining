import { OfferFormPage } from "../../pages/spot_price/offer-form.po";
import { SearchSpotPricePage } from "../../pages/spot_price/search-spot-price.po";
import { DataProvider } from '../../data/dataProvider'
import { EnterpriseOrderManagementPage } from "../../pages/spot_price/enterprise-order-management.po";
import { SpotPricePage } from "../../pages/spot_price/spot-price.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let spotPricePage = new SpotPricePage();
let offerFormPage = new OfferFormPage();
let searchSpotPricePage = new SearchSpotPricePage();
let using = require('jasmine-data-provider');

//TC 86432: Spot Price_Regression_2 Updating price offer
using(DataProvider.Tc_86432, async function (data) {

    describe("Updating price offer", function () {

        it("Open Eom url", async () => {
            await enterpriseOrderManagementPage.openEomUrl();
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
            await offerFormPage.enterBuisinessInforContactPerson(data.contactPerson);
        });

        it("Should type email address in Email Address field", async () => {
            let randomEmailId: string = await enterpriseOrderManagementPage.generateRandomeString() + data.emailAddress;
            await offerFormPage.enterBuisinessInforEmailAddress(randomEmailId)
        });

        it("Should type phone number in Phone Number field", async () => {
            await offerFormPage.enterBuisinessInforPhoneNumber(data.phoneNumber);
        });

        it("Should click on Update Offer Button ", async () => {
            await offerFormPage.clickUpdateOffer();
        });

        it("Verifying that Offer Group Id has been updated successfully", async () => {
            let updateMessage = await offerFormPage.verifyEventMessages(data.updatedMessage);
            await expect(updateMessage).toContain(data.updatedMessage);
        })
    });

});
