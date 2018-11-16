import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";

import { browser } from "protractor";
import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";
import { Local } from "protractor/built/driverProviders";

let cdrapHomePage = new CdrapHomePage();
let locationAdministrationPage=new LocationAdministrationPage();
let using = require('jasmine-data-provider');

//TC #139492: CDRAP Login to homescreen
using(DataProvider.Tc_141389, async function (data) {

    describe("Company admin, min qualifications", () => {

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

//TC #141389: Company admin, min qualifications
        
        it("Should click on Company Admin Hyperlink", async () => {
            await cdrapHomePage.clickOnCompanyAdmin();
        });

        it("Should click on Min Qualifications tab", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.minQualificationsTab);
        });

        it("Should select 'Max # Accidents in last 3 year' fron consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption1,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '99999'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value);
        });

        it("Should select 'Max # Preventable' fron consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption2,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '99999'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value);
        });

        it("Should select 'Max # Preventable in last 3 years' fron consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption3,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '99999'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value);
        });

        it("Should select 'Max # Serious violations in last 3 years' fron consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption4,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '1'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value1);
        });

        it("Should select 'Max # Serious violations in last 5 years' fron consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption5,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '99999'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value);
        });

        it("Should select 'Max # Violation' fron consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption6,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '99999'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value);
        });

        it("Should select 'Max # Violation in last 3 year' from consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption7,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '99999'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value);
        });

        it("Should select 'Min # months T/T Experience' from consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption8,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '0'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value2);
        });

        it("Should select 'Min Req - Age' from consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption9,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '21'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value3);
        });

        it("Should select 'Months license suspended last'from consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption10,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '99999'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value);
        });

        it("Should select 'Months of Driving Experience'from consraint dropdown", async () =>{
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.minQualificationsDropDownOptions,data.minQualificationsoption11,locationAdministrationPage.minQualificationsDropDown);
        });

        it("Verifying value to be '99999'", async () => {
            await expect<any>(locationAdministrationPage.verifyValueField()).toBe(data.option1value);
        });


    });
});