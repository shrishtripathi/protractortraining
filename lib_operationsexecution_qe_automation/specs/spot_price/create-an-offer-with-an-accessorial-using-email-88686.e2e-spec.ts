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

//TC #88686: Spot Price_Regression_10 Create an offer with an accessorial using email
using(DataProvider.Tc_88686, async function (data) {

    describe("Create an offer with an accessorial using email", function () {

        it("Open My JBHunt url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.myJbhuntUrl);
        });

        it("Click on Show my app link on JbHunt home page", async () => {
            await enterpriseOrderManagementPage.clickOnShowMoreAppLink();
        });

        it("Click on Enterprise Order Management link from left Navigation", async () => {
            await enterpriseOrderManagementPage.clickOnEnterpriseOrderManagement();
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
            let randomEmailId: string = await enterpriseOrderManagementPage.generateRandomeString() + data.emailAddress;
            await offerFormPage.enterBuisinessInforEmailAddress(randomEmailId)
        });

        it("Should type phone number in Phone Number field", async () => {
            await offerFormPage.enterBuisinessInforPhoneNumber(data.phoneNumber);
        });

        it("Should click on the drop down next to 'Accessorials' under the Rate info tab", async () => {
            await offerFormPage.clickOnDropDown(data.accessorialsDropDownOption);
        });

        it("Should select Congestion Charge option in Accessorials drop down", async () => {
            await offerFormPage.selectOptionFromDropDown(data.accessorialsDropDownOption, data.accessorialsDropDownOptionValue);
        });

        it("Should click on Add Accessorial button", async () => {
            await offerFormPage.clickOnButton(data.addAccessorialButton);
        });

        it("Should enter 1 in Congestion Charge field", async () => {
            await offerFormPage.enterCongestionCharge(data.congestionCharge);
        });

        it("Should click on Update Offer Button ", async () => {
            await offerFormPage.clickUpdateOffer();
        });

        it("Should click on Bypass Customer Approval Button ", async () => {
            await offerFormPage.clickBypassCustomerApproval();
        });

        it("Verifying that Spot Price Number creation message", async () => {
            let sucessmessage = await enterpriseOrderManagementPage.validateSucessMessage(data.spotPriceText);
            expect(sucessmessage.message).toEqual(data.spotPrice + sucessmessage.groupId + data.successMessage);
        });

    });

});