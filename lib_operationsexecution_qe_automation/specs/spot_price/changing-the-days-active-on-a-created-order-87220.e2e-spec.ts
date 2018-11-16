import { SpotPricePage } from "../../pages/spot_price/spot-price.po";
import { OfferFormPage } from "../../pages/spot_price/offer-form.po";
import { SearchSpotPricePage } from "../../pages/spot_price/search-spot-price.po";
import { DataProvider } from '../../data/dataProvider'
import { EnterpriseOrderManagementPage } from "../../pages/spot_price/enterprise-order-management.po";
import { ApprovalScreenPage } from "../../pages/spot_price/offers-pending-approval-screen.po";

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let spotPricePage = new SpotPricePage();
let offerFormPage = new OfferFormPage();
let searchSpotPricePage = new SearchSpotPricePage();
let approvalScreenPage = new ApprovalScreenPage();
let using = require('jasmine-data-provider');

//TC #87220: Spot Price_Regression_6 Changing the days active on a created order
using(DataProvider.Tc_87220, async function (data) {

    describe("Changing the days active on a created order", function () {

        let spotPriceNumber: string;
       
        it("Open My JBHunt url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.myJbhuntUrl)
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

        it("Should click on Offer Id button under Offer Id column", async () => {
            await searchSpotPricePage.clickOnOfferIdButton()
        });

        it("Verifying that Offer Pending Approval Screen will show", async () => {
            let message = await searchSpotPricePage.getElementText(searchSpotPricePage.spanText(data.offersPendingApprovalText));
            await expect(message).toBe(data.offersPendingApprovalText);
        });

        it("Should click on back button", async () => {
            await searchSpotPricePage.browserBackButton();
        });

        it("Should click on View Doc button", async () => {
            await searchSpotPricePage.clickOnViewDocButton();
        });

        it("Verifying that view doc Screen will show", async () => {
            await expect<any>(searchSpotPricePage.getPageTitle()).toBe(data.viewDocTitle);
        });

        it("Should close View Doc window", async () => {
            await searchSpotPricePage.closeWindow();
            await searchSpotPricePage.switchToParentWindow();
        });

        it("Should click on Offer Id button under Offer Id column", async () => {
            await searchSpotPricePage.clickOnOfferIdButton()
        });

        it("Verifying that Offer Pending Approval Screen will show", async () => {
            let message = await approvalScreenPage.getElementText(approvalScreenPage.spanText(data.offersPendingApprovalText));
            await expect(message).toBe(data.offersPendingApprovalText);
        });

        it("Should enter days active days in Days Active input field", async () => {
            await approvalScreenPage.setTextInDaysActiveField();
        });

        it("Should click on Update button", async () => {
            await approvalScreenPage.clickOnButton(data.updateButton)
        });

        it("Verifying that Days active successfully updated message will display", async () => {
            let message = await approvalScreenPage.getElementText(approvalScreenPage.spanText(data.updateMessage));
            await expect(message).toBe(data.updateMessage);
        });

        it("Should click on Expire button and click on Cancel button in pop up", async () => {
            await approvalScreenPage.clickOnButton(data.expireButton);
            await approvalScreenPage.clickOnCancelInAlertBox();
        });

        it("Should click on Expire button and click on OK button in pop up", async () => {
            await approvalScreenPage.clickOnButton(data.expireButton);
            await approvalScreenPage.clickOnOkInAlertBox();
        });

        it("Verifying that Days active successfully updated message will display", async () => {
            let message = await approvalScreenPage.getElementText(approvalScreenPage.spanText(data.updateMessage));
            await expect(message).toBe(data.updateMessage);
        });

        it("Verifying that Days active field is grayed out", async () => {
            await expect(approvalScreenPage.verifyIsGreyedOutDaysActiveField()).toBeTruthy();
        });

    });

});