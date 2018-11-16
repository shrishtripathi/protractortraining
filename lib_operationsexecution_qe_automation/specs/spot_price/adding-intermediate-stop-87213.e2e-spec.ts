import { browser } from 'protractor';
import { BasePage } from '../../pages/base.po';;
import { OfferFormPage } from '../../pages/spot_price/offer-form.po';
import { DataProvider } from '../../data/dataProvider'
import { EnterpriseOrderManagementPage } from '../../pages/spot_price/enterprise-order-management.po';
import { SpotPricePage } from '../../pages/spot_price/spot-price.po';


let homePage = new BasePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let spotPricepage = new SpotPricePage();
let randomName: string = null;
let using = require('jasmine-data-provider');

//TC #87213: Spot Price_Regression_5 Searching with an Intermediate Stop
using(DataProvider.Tc_87213, async function (data) {

    describe("Searching with an Intermediate Stop", function () {

        it("Open My JBHunt url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.myJbhuntUrl);
        });

        it("Click on Show my app link on JbHunt home page", async () => {
            await enterpriseOrderManagementPage.clickOnShowMoreAppLink();
        });


        it("should click on 'Enterprise order management' on homepage", async function () {
            let pageTitle: string = await homePage.clickonEnterpriseOrderManagement();
            expect(pageTitle).toBe("Enterprise Order Management");
        });

        it("should Click 'Rates' at top right of screen", async function () {
            await enterpriseOrderManagementPage.clickRatesButton();
        });

        it("should Add an 'Origin' by adding zip, city state or customer code.", async function () {
            await spotPricepage.addOrigin(data.originStateCity, data.originZipCode);
        });
        it("should Click on The "+" next to Add Intermediate Stop", async function () {
             await spotPricepage.click(spotPricepage.addIntermediateStopIcon);
        });
        it("should Add an Intermediate Stop by adding zip or city state", async function () {
            await spotPricepage.addIntermediateStop(data.intermediateStop)
        });
        it("should Add a Destination by adding zip, city state or customer code all should work.", async function () {
            await spotPricepage.enterDestinationInputBox(data.destinationStateCity,data.city);
        });
        it("should Add a delivery date with calendar.", async function () {
            await spotPricepage.addDeliveryDate();
        });
        it("Should add GEEC in bill to code", async () => {
            await spotPricepage.enterBillToCode(data.billToCode, data.billToCodeName)
        });
        it("should Click on Get Price", async function () {
            await spotPricepage.clickGetPriceButton();
        });
        it("Prices will populate ", async function () {
            let count=await spotPricepage.verifyListOfPrices();
            expect(count).toBeGreaterThanOrEqual(1);
        });


       

    });

});
