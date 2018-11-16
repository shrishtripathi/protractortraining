import { SpotPricePage } from '../../pages/spot_price/spot-price.po';
import { ApprovalScreenPage } from '../../pages/spot_price/offers-pending-approval-screen.po';
import { BasePage } from '../../pages/base.po';
import { CommonFunctions } from '../../utilities/common-functions';
import { DataProvider } from '../../data/dataProvider'
import { EnterpriseOrderManagementPage } from '../../pages/spot_price/enterprise-order-management.po';

let homePage = new BasePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let spotPricepage = new SpotPricePage();
let apporovalScreenPage = new ApprovalScreenPage();
let commonFunctions = new CommonFunctions();
let randomName: string = null;
let using = require('jasmine-data-provider');

//TC #87966: Spot Price_Regression_4 Adding business infomation in the get price screen
using(DataProvider.Tc_87966, async function (data) {

    describe("Adding business infomation in the get price screen ", function () {

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

        it("Pickup date will default with data. Just make sure you can change the date.", async function () {
            let currentDate: string = await commonFunctions.getCurrentDate();
            await spotPricepage.verifyPickUpDate(currentDate);
        });

        it("should Add a 'Destination' by adding zip, city state or customer code", async function () {
            await spotPricepage.addDestination(data.destinationStateCity, data.destinationZipCode);
        });

        it("should Add a 'Delivery' date less than 7 days after the current date", async function () {
            let futureDate: string = await commonFunctions.futureDate(data.durationDays);
            await spotPricepage.addDelivery(futureDate);
        });

        it("should Add a 'Duration' date less than 7 days after the current date", async function () {
            await spotPricepage.addDuration(data.durationDays);
        });

        //step 10
        it("should Click 'Get Price'", async function () {
            await spotPricepage.clickGetPriceButton();
        });

        it("should Click 'Business Information'tab", async function () {
            await spotPricepage.clickBusinessInformation();
        });

        it("should add a 'Business Name' into the business name box", async function () {
            randomName = await commonFunctions.randomNameGenarator(data.randomNameGeneratorLength);
            await spotPricepage.addBusinessName(randomName);
        });

        it("should Add a contact name into the 'Contact First Name' box under Business Information Tab.", async function () {
            await spotPricepage.addContactFirstName(data.contactPerson);
        });

        it("should add a email in the 'Email Address' Box under the Business Information Tab.", async function () {
            await spotPricepage.addEmailAddress(data.emailAddress);
        });

        it("should Click 'Get Price' again", async function () {
            await spotPricepage.clickGetPriceButton();
        });

        it("should Click a colored box under the Rate and division you want", async function () {
            await spotPricepage.clickColoredBox();
        });

        it("should verify user information.", async function () {
            let flag: boolean = await apporovalScreenPage.verifyUserInformation(randomName, data.contactPerson, data.emailAddress);
            expect(flag).toBeTruthy();
        });

        it("should Click 'Bypass Customer Approval'", async function () {
            await apporovalScreenPage.clickBypassCustomerApproval();
        });

        it("should verify 'Spot creation message'", async function () {
            let flag: boolean = await apporovalScreenPage.verifySpotPrice();
            expect(flag).toBeTruthy();
        });
        
    });

});