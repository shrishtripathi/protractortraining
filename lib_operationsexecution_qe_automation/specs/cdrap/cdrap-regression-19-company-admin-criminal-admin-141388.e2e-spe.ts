import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { browser } from "protractor";
import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";

let cdrapHomePage = new CdrapHomePage();
let locationAdministrationPage = new LocationAdministrationPage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC #141388: CDRAP_Regression_19 Company admin, criminal admin
using(DataProvider.Tc_141388, async function (data) {

    describe("CDRAP_Regression_19 Company admin, criminal admin", () => {

        //TC #157971
        it("Should open CDRAP url", async () => {
            await cdrapHomePage.openUrl(cdrapHomePage.cdrapUrl);
        });

        it("Verifying that CDRAP page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toBe(data.loginTitle);
        });

        it("Login into CDRAP application ", async () => {
            await cdrapHomePage.loginIntoCdrap(data.username, data.password, data.submit);
        });

        it("Verifying that CDRAP Logged in Home page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.cdrapHomeTitle);
        });

        //TC 141388

        it("Click the Company Admin hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.companyAdminLink);
        });

        it("Verifying that Company Admin screen is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.companyAdminTitle);
        });

        it("Should click on Criminal Admin tab", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.criminalAdminTab);
        });

        it("Should select Felony option from Charge Type dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.chargeTypeDropDownOptions, data.chargeTypeValue, locationAdministrationPage.chargeTypeDropDown);
        });

        it("Should click on Search button", async () => {
            await locationAdministrationPage.clickOnButton(data.search);
        });

        it("Verifying that there are 118 Criminal Cross-reference items found", async () => {
            await expect(locationAdministrationPage.verifyText(data.criminalCrossReferenceItems)).toBeTruthy();
        });

        it("Should select Assault and other violent crimes option from Category dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.categoryDropDownOptions, data.categoryValue, locationAdministrationPage.categoryTypeDropDown);
        });

        it("Should click on Search button", async () => {
            await locationAdministrationPage.clickOnButton(data.search);
        });

        it("Verifying that there are 45 Criminal Cross-reference items found", async () => {
            await expect(locationAdministrationPage.verifyText(data.criminalCrossReference45Items)).toBeTruthy();
        });

        it("Should click on Categories tab", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.categoriesTab);
        });

        it("Should select Felony option from Charge Type dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.parentChargeTypeDropDownOptions, data.felonyChargeTypeValue, locationAdministrationPage.parentChargeTypeDropDown);
        });

        it("Should select Assault and other violent crimes option from Category dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.categoriesCategoryDropDownOptions, data.felonyCategoryValue, locationAdministrationPage.categoriesCategoryTypeDropDown);
        });

        it("Verifying that Category Name automatically fills in", async () => {
            await expect(locationAdministrationPage.categoryName.getAttribute("value")).not.toBeNull();
        });

        it("Should select Misdemeanor option from Charge Type dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.parentChargeTypeDropDownOptions, data.misdemeanorChargeTypeValue, locationAdministrationPage.parentChargeTypeDropDown);
        });

        it("Should select Assault and other violent crimes option from Category dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.categoriesCategoryDropDownOptions, data.misdemeanorcategoriescategoryValue, locationAdministrationPage.categoriesCategoryTypeDropDown);
        });

        it("Verifying that Category Name automatically fills in", async () => {
            await expect(locationAdministrationPage.categoryName.getAttribute("value")).not.toBeNull();
        });

        it("Should select Traffic option from Charge Type dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.parentChargeTypeDropDownOptions, data.trafficChargeTypeValue, locationAdministrationPage.parentChargeTypeDropDown);
        });

        it("Should select Drug and Alcohol Crimes option from Category dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.categoriesCategoryDropDownOptions, data.trafficCategoriescategoryValue, locationAdministrationPage.categoriesCategoryTypeDropDown);
        });

        it("Verifying that Category Name automatically fills in", async () => {
            await expect(locationAdministrationPage.categoryName.getAttribute("value")).not.toBeNull();
        });

        it("Should select International option from Charge Type dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.parentChargeTypeDropDownOptions, data.internationalChargeTypeValue, locationAdministrationPage.parentChargeTypeDropDown);
        });

        it("Should select International option from Category dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.categoriesCategoryDropDownOptions, data.internationalCategoriescategoryValue, locationAdministrationPage.categoriesCategoryTypeDropDown);
        });

        it("Verifying that Category Name automatically fills in", async () => {
            await expect(locationAdministrationPage.categoryName.getAttribute("value")).not.toBeNull();
        });
        
    });

});
