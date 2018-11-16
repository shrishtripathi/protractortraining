import { browser } from 'protractor';
import { BasePage } from '../../pages/base.po';
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

//TC #130832: Deleting Spot Price after being searched
using(DataProvider.TC_86888, async function (data) {

    describe("Deleting Spot Price after being searched", function () {
        let spotPrice;
        let grandTotal;

        //TC130791
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

        //Tc86431
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

        //Tc130832
        it("Should click on search spot price button", async () => {
            await spotPricePage.clickOnSearchSpotPriceButton();
        });

        it("Should click on search button", async () => {
            await searchSpotPricePage.clickOnButton(data.searchButtonname);
        });

        it("Should select 'spot price' option to offer status drop down", async () => {
            await searchSpotPricePage.setOfferStatusDropdown(data.offerStatusDropdownOption);
        });

        it("Should make a note of grand total", async () => {
            grandTotal=await searchSpotPricePage.getGrandTotal();
            console.log("grandTotal",grandTotal)
        });

        it("Should click on offer id", async () => {
            let diff=spotPrice-grandTotal;
            console.log("diff", diff)
            if((spotPrice-grandTotal)>1){
                console.log("inside if")
                await searchSpotPricePage.clickonSpotPrice();
            }
            else{
                await searchSpotPricePage.clickOnSpotpriceAndClickonSearchSpotPrice();
                await searchSpotPricePage.setOfferStatusDropdown(data.offerStatusDropdownOption);
                await searchSpotPricePage.clickOnGroupIdAndExpireGroupId();
            }
        });
       
    });
});
