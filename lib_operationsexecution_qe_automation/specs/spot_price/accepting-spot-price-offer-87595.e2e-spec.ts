import { browser } from 'protractor';
import { BasePage } from '../../pages/base.po'
import { OfferFormPage } from '../../pages/spot_price/offer-form.po';
import { DataProvider } from '../../data/dataProvider';
import { EnterpriseOrderManagementPage } from '../../pages/spot_price/enterprise-order-management.po';
import { SpotPricePage } from '../../pages/spot_price/spot-price.po';
import { SearchSpotPricePage } from '../../pages/spot_price/search-spot-price.po';

let myJbHuntHomePage = new BasePage();
let spotPricePage = new SpotPricePage();
let offerFormPage = new OfferFormPage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let searchSpotPricePage=new SearchSpotPricePage();
let using = require('jasmine-data-provider');

//TC #87595: Accepting spot price offer
using(DataProvider.TC_87595, async function (data) {

    describe("Accepting spot price offer", function () {
        let spotPrice;
        let grandTotal;

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

        it("Should add GEEC in bill to code", async () => {
            await spotPricePage.enterBillToCode(data.billToCode, data.billToCodeName);
        });

        it("Should click get price button", async () => {
            await spotPricePage.clickGetPriceButton();
        });

        it("Should make a note of price", async () => {
            spotPrice=await spotPricePage.getPriceValue();
            console.log("spotPrice",spotPrice)
        });

        //Tc130826
        it("Should click on search spot price button", async () => {
            await spotPricePage.clickOnSearchSpotPriceButton();
        });

        it("Should click on search button", async () => {
            await searchSpotPricePage.clickOnButton(data.searchButtonname);
        });

        it("Should make a note of grand total", async () => {
            grandTotal=await searchSpotPricePage.getGrandTotal();
            console.log("grandTotal",grandTotal)
        });

        it("Should make a note of grand total", async () => {
            if(spotPrice!==grandTotal){
                await searchSpotPricePage.clickonSpotPrice();
            }
            else{
                await searchSpotPricePage.clickOnGroupIdAndExpireGroupId();
            }
        });

        it("Should click on the coloured box", async () => {
            await spotPricePage.clickColoredBox();
        });
        
        it("Should type name in Contact person field", async () => {
            await offerFormPage.enterBuisinessInforContactPerson(data.contactPerson);
        });

        it("Should type email address in Email Address field", async () => {
            await offerFormPage.enterBuisinessInforEmailAddress(data.emailAddress);
        });

        it("Should type phone number in Phone Number field", async () => {
            await offerFormPage.enterBuisinessInforPhoneNumber(data.phoneNumber);
        });
        
        it("Should Click bypass customer approval button ", async () => {
            await offerFormPage.clickBypassCustomerApproval();
        });

        it("Verifying that Spot Price Number creation message", async () => {
            let sucessmessage = await enterpriseOrderManagementPage.validateSucessMessage(data.spotPriceText);
            expect(sucessmessage.message).toEqual(data.spotPrice + sucessmessage.groupId + data.successMessage);
        });
    });
});
