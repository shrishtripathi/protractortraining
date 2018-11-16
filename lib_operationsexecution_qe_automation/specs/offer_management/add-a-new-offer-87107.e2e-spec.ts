import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { OfferManagementHomePage } from "../../pages/offer_management/offer-management-home.po";
import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { SkeletonListingPage} from "../../pages/eom/skeleton-listing.po";
import { DetailsPage } from "../../pages/eom/details.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let detailsPage = new DetailsPage();
let skeltonListingPage = new SkeletonListingPage();
let offerManagementHomePage = new OfferManagementHomePage();
let using = require('jasmine-data-provider');

//TC 87107 OM_Regression_1 Add a new offer
using(DataProvider.Tc_87107, async function (data) {

    describe("Add a new offer", () => {

        let loadNumber: string;

        it("Should open Enterprise Order Management url", async () => {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
        });

        it("should enter CCBDA in origin field", async function () {
            await enterpriseOrderManagementPage.setDataInInputField(enterpriseOrderManagementPage.originInputBox, data.originInputFiled);
        });

        it("Should click on Search Skelton button", async () => {
            await enterpriseOrderManagementPage.clickOnInputButton(enterpriseOrderManagementPage.searchSkelton);
        });

        it("Verifying that skeltons list will be displayed", async () => {
            await expect(skeltonListingPage.verifySkeltonList(data.skeletonList)).toBeTruthy();
        });

        it("Should find without rate skelton and click on skelton book load", async () => {
            await skeltonListingPage.clickOnSkeltonBookLoad();
        });

        it("Verifying that skeltons pick screen will be displayed", async () => {
            await expect<any>(skeltonListingPage.getSkeltonPickScreenTitle()).toBe(data.verifyPickScreenTitle);
        });

        it("Should click on Next Button in skelton pick screen", async () => {
            await skeltonListingPage.clickOnInputButton(skeltonListingPage.skeltonPickNextButton);
        });

        it("Should click on ICS under current Date", async () => {
            await skeltonListingPage.clickOnIcsUnderCurrentDate("ICS");
        });

        it("Verifying that New Load Deatils screen will be displayed", async () => {
            await expect<any>(skeltonListingPage.getNewLoadScreenTitle()).toBe(data.loadDetailsVerification);
        });

        it("Change the project code to S001", async () => {
            await detailsPage.loadDetailsClick();
            await detailsPage.changeProjectCode(data.projectCode);
        });

        it("Should enter today date and begin time as 19:00 and end time as 23:00 in Scheduled Appointment Time", async () => {
            await detailsPage.setScheduledAppointmentTodayDateAndTime(data.beginingTime, data.endTime);
        });

        it("Should click on Create Load button", async () => {
            await detailsPage.clickOnInputButton(detailsPage.createLoadButton);
        });

        it("Should take note of the load number at the top of the page", async () => {
            loadNumber = await detailsPage.getLoadNumber();
            console.log("loadNumber:" + loadNumber);
        });

        it("Should open Offer Management url", async () => {
            await detailsPage.navigateToAppHome(detailsPage.offerManagementUrl);
        });

        it("Should wait untill offer management page loads", async () => {
            await offerManagementHomePage.waitUntilPageLoads();
        });

        it("Should enter noted load Number in search field", async () => {
            await offerManagementHomePage.setTextInInputField(offerManagementHomePage.loadNumberInputField, loadNumber);
        });

        it("Should click on Search symbol", async () => {
            await offerManagementHomePage.clickOnInputButton(offerManagementHomePage.searchIconInLoadNumber);
            await offerManagementHomePage.waitUntilPageLoads();
        });

        it("Verifying that Load displayed with 'Add New Offer' link", async () => {
            await expect<any>(await offerManagementHomePage.verifyAddNewOfferLink()).toBeTruthy();
        });

        it("Should click on 'Add New Offer' link", async () => {
            await offerManagementHomePage.clickOnInputButton(offerManagementHomePage.addNewOfferLink);
        });

        it("Verifying that 'Add New Offer' is populated", async () => {
            await expect<any>(await offerManagementHomePage.verifyText(data.carrierInformationText)).toBeTruthy();
        });

        it("Should enter 'MGAS - MORGAN SOUTHERN INC' in Carrier field", async () => {
            await offerManagementHomePage.setCarrierInformation(data.carrierText, data.carrierInformationValue);
        });

        it("Should enter '1000' in Offer Amount field", async () => {
            await offerManagementHomePage.setTextInInputField(offerManagementHomePage.offerAmountInput, data.amount);
        });

        it("Should enter 'Pickle' in First Name field", async () => {
            await offerManagementHomePage.setTextInInputField(offerManagementHomePage.firstNameInput, data.firstName);
        });

        it("Should enter 'Rick' in Last Name field", async () => {
            await offerManagementHomePage.setTextInInputField(offerManagementHomePage.lastNameInput, data.lastName);
        });

        it("Should select 'Unlisted Email Address' from Email Address drop down", async () => {
            await offerManagementHomePage.selectOptionFormEmailDropDown(data.unlistedEmail);
        });

        it("Should enter 'Jared.Shepherd@jbhunt.com' in Unlisted Email Address field", async () => {
            await offerManagementHomePage.setTextInInputField(offerManagementHomePage.unlistedEmailAddressInput, data.emailField);
        });

        it("Should clear 'Jared.Shepherd@jbhunt.com' from unlisted Email Address field", async () => {
            await offerManagementHomePage.clearEmailId();
        });

        it("Should select 'BALUNGOS_911@YAHOO.COM' from Email Address drop down", async () => {
            await offerManagementHomePage.selectOptionFormEmailDropDown(data.emailDropdown);
        });

        it("Verifying that Unlisted Email Address field is not displayed", async () => {
            await expect<any>(await offerManagementHomePage.verifyEmailAddressInputFieldsCount()).toBe(data.emailResults);
        });

        it("Should enter '(479) 123 - 4448' in Phone Number field", async () => {
            await offerManagementHomePage.setTextInInputField(offerManagementHomePage.phoneNumberInput, data.phoneNumber);
        });

        it("Should click on 'Add Offer' button", async () => {
            await offerManagementHomePage.addOfferButton.click();
            await offerManagementHomePage.waitUntilPageLoads();
        });

        it("Verifying that 'MGAS' is displayed under Carrier Information", async () => {
            await expect<any>(await offerManagementHomePage.verifyText(data.carrierText)).toBeTruthy();
        });

        it("Verifying that '$1000' is displayed under Carrier Rate", async () => {
            await expect<any>(await offerManagementHomePage.verifyText(data.carrierRate)).toBeTruthy();
        });

    });

});