import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { SearchPage } from "../../pages/cdrap/search.po";
import { PersonalInformationPage } from "../../pages/cdrap/personal-information-page.po";

let cdrapHomePage = new CdrapHomePage();
let searchPage = new SearchPage();
let personalInformationPage = new PersonalInformationPage();
let using = require('jasmine-data-provider');

//TC #138402: CDRAP_Regression_1_Part 2
describe("CDRAP_Regression_1_Part 2", () => {

    using(DataProvider.Tc_157971, async function (data) {

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

    });

    using(DataProvider.Tc_138401, async function (data) {

        it("Should click on Search hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.searchText);
        });

        it("Should enter 9 digit SSN number", async () => {
            await searchPage.enterSSNNumber();
        });

        it("Should click on Search button" , async () =>{
            await searchPage.clickOnInputButton(searchPage.searchButton); 
        });

        it("Verifying that Error message 'Person not found' is displayed", async () => {
            let result:boolean = await searchPage.verifyErrorMessage(data.errorMSG);
            expect(result).toBeTruthy();
        });
               
    });

    using(DataProvider.Tc_138402, async function (data) {

        it("Should click on Create New Application button" , async () =>{
            await searchPage.clickOnInputButton(searchPage.createNewApplicationButton); 
        });

        it("Should select 3CUPS MEDIA option from Career Placement Specialist", async () => {
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.careerPlacementSpecialistDropDownOptions, data.careerPlacementSpecialistOptionValue, personalInformationPage.careerPlacementSpecialistDropDown);
        });

        it("Should enter first name, middile name and last name", async () => {
            await personalInformationPage.setTextInInput(personalInformationPage.firstName, data.firstName);
            await personalInformationPage.setTextInInput(personalInformationPage.middleName, data.middleName);
            await personalInformationPage.setTextInInput(personalInformationPage.lastName, data.lastName);
        });

        it("Should enter '01/01/1987' Date of Birth ", async () => {
            await personalInformationPage.setTextInInput(personalInformationPage.dobMonth, data.dobMonth);
            await personalInformationPage.setTextInInput(personalInformationPage.dobDay, data.dobDay);
            await personalInformationPage.setTextInInput(personalInformationPage.dobYear, data.dobYear);
        });

        it("Should select Acquisition option from Type drop down", async () => {
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.typeDropDownOptions, data.typeDropDownOptionValue, personalInformationPage.typeDropDown);
        });

        it("Should select National option from State drop down", async () => {
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.stateDropDownOptions, data.stateDropDownOptionValue, personalInformationPage.stateDropDown);
        });

        it("Should select Other option from Source drop down", async () => {
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.sourceDropDownOptions, data.sourceDropDownOptionValue, personalInformationPage.sourceDropDown);
        });

        it("Should enter 'abc123' in Other/Explain field", async () => {
            await personalInformationPage.setTextInInput(personalInformationPage.otherOrExplainInput, data.otherOrExplainText);
        });

        it("Should click on Add button" , async () =>{
            await searchPage.clickOnInputButton(personalInformationPage.addButton); 
        });

        it("Should enter '615 JB Hunt Corporate' in Street field", async () => {
            await personalInformationPage.setTextInInput(personalInformationPage.streetAddressInput, data.streetAddress);
        });

        it("Should click check box next to Same as Current", async () => {
            await personalInformationPage.click(personalInformationPage.sameAsCurrentCheckBox);
        });

        it("Should select AR option from State drop down", async () => {
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.permanentStateDropDownOptions, data.permanentStateDropDownOptionValue, personalInformationPage.permanentStateDropDown);
        });

        it("Should select 'BENTONVILLE (BENTON)' option from City drop down", async () => {
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.permanentCityDropDownOptions, data.permanentCityDropDownOptionValue, personalInformationPage.permanentCityDropDown);
        });

        it("Should enter'72712' in ZipCode field", async () => {
            await personalInformationPage.setTextInInput(personalInformationPage.permanentZipCodeInput, data.permanentZipCode);
        });

        
        it("Should enter '01/01/2000' from date field", async () => {
            await personalInformationPage.setTextInInput(personalInformationPage.permanentFromDateMonth, data.fromMonth);
            await personalInformationPage.setTextInInput(personalInformationPage.permanentFromDateDay, data.fromDay);
            await personalInformationPage.setTextInInput(personalInformationPage.permanentFromDateYear, data.fromYear);
        });

        
        it("Should enter current date in To field", async () => {
            let currentDate = new Date();
            let day = currentDate.getDate();
            let month = currentDate.getMonth() + 1;
            let year = currentDate.getFullYear();
            console.log("day "+day+"and "+month+"year "+year);
            await personalInformationPage.setTextInInput(personalInformationPage.permanentToDateMonth, month.toString());
            await personalInformationPage.setTextInInput(personalInformationPage.permanentToDateDay, day.toString());
            await personalInformationPage.setTextInInput(personalInformationPage.permanentToDateYear, year.toString());
        });

        it("Should click on Add button" , async () =>{
            await searchPage.clickOnInputButton(personalInformationPage.permanentAddressAddButton); 
        });

        it("Should select Employee option from Candidate Type drop down", async () => {
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.candidateTypeDropDownOptions, data.candidateTypeDropDownOptionValue, personalInformationPage.candidateTypeDropDown);
        });

        it("Should select 'Yes' Radio button", async () => {
            await personalInformationPage.click(personalInformationPage.lightToWorkYesRadioButton);
        });

        it("Should select Benifits option from Driver Interests drop down", async () => {
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.driverInterestsDropDownOptions, data.driverInterestsDropDownOptionValue, personalInformationPage.driverInterestsDropDown);
        });

        it("Should click on Add button" , async () =>{
            await searchPage.clickOnInputButton(personalInformationPage.driverInterestsAddButton); 
        });

        it("Should click on Select Referral button" , async () =>{
            await personalInformationPage.clickOnInputButton(personalInformationPage.selectReferralButton); 
            await personalInformationPage.switchToWindow(data.one);
        });

        it("Should enter first name in Select Referral Window", async () => {
            await personalInformationPage.setTextInInput(personalInformationPage.personnelFirstName, data.firstNameDan);
        });

        it("Should click on Search button" , async () =>{
            await personalInformationPage.clickOnButton(data.search); 
        });

        it("Verifying that list of employees will be displayed", async () => {
            await personalInformationPage.waitForElementIsVisible(personalInformationPage.listOfEmployeesRows);
            let result:boolean = await personalInformationPage.listOfEmployeesRows.isPresent();
            expect(result).toBeTruthy();
        });

        it("Should click a radial button next to the top employee name" , async () =>{
            await personalInformationPage.click(personalInformationPage.selectEmployeeRadioButtons.get(data.zero)); 
            await personalInformationPage.switchToWindow(data.zero);
        });

        it("Should click on 'Assign Position' button" , async () =>{
            await personalInformationPage.click(personalInformationPage.assignPositionButton);
            await personalInformationPage.switchToWindow(data.one); 
        });

        it("Should click any radial button underneath Assign.  " , async () =>{
            await personalInformationPage.waitForElementIsVisible(personalInformationPage.selectAssignRadioButtons.get(data.zero));
            await personalInformationPage.selectAssignRadioButtons.get(data.zero).click();
            await personalInformationPage.switchToWindow(data.zero);  
        });

        it("Should select 'Pending' option from Action drop down", async () => {           
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.actionDropDownOptions, data.actionDropDownOptionValue, personalInformationPage.actionDropDown);
        });

        it("Should select 'Active - Mgmt Update Only' option from Reason drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.reasonDropDownOptions, data.reasonDropDownOptionValue, personalInformationPage.reasonDropDown);
        });

        it("Should enter 'test123' in Comments field", async () => {          
            await personalInformationPage.setTextInInput(personalInformationPage.actionComments, data.actionCommentsText);
        });

        it("Should click on 'Submit' button" , async () =>{
            await personalInformationPage.clickOnButton(data.submit); 
        });

        it("Verifying that 'Selected Referral cannot be an Office Employee. Please select a Referral other than Office Employee.' is displayed", async () => {
            let text = await personalInformationPage.getElementText(await personalInformationPage.text(data.selectedReferralEmployeeMessage));
            await expect(text).toContain(data.selectedReferralEmployeeMessage);
        });

        it("Should click on 'No Referral' checkbox" , async () =>{
            await personalInformationPage.click(personalInformationPage.noReferral); 
        });

        it("Verifying that 'Selected Referral' will be removed", async () => {
            let result: boolean = await personalInformationPage.selectReferralButton.isDisplayed();
            await expect(result).toBeFalsy();
        });

        it("Should click on 'No Referral' checkbox" , async () =>{
            await personalInformationPage.click(personalInformationPage.noReferral); 
        });

        it("Verifying that 'Selected Referral' will be appeared", async () => {
            let result: boolean = await personalInformationPage.selectReferralButton.isPresent();
            await expect(result).toBeTruthy();
        });

        it("Should click on Select Referral button" , async () =>{
            await personalInformationPage.clickOnInputButton(personalInformationPage.selectReferralButton); 
            await personalInformationPage.switchToWindow(data.one);   
        });

        it("Should enter first name in Select Referral Window", async () => {        
            await personalInformationPage.setTextInInput(personalInformationPage.personnelFirstName, data.firstNameDan);
        });

        it("Should click on Search button" , async () =>{
            await personalInformationPage.clickOnButton(data.search); 
        });

        it("Verifying that list of employees will be displayed", async () => {
            await personalInformationPage.waitForElementIsVisible(personalInformationPage.listOfEmployeesRows);
            let result:boolean = await personalInformationPage.listOfEmployeesRows.isPresent();
            expect(result).toBeTruthy();
        });

        it("Should click a radial button next to the bottom employee name" , async () =>{
            let employeesCount = await personalInformationPage.selectEmployeeRadioButtons.count();
            await personalInformationPage.click(personalInformationPage.selectEmployeeRadioButtons.get(employeesCount-1)); 
            await personalInformationPage.switchToWindow(data.zero);
        });

        it("Should click on 'Submit' button" , async () =>{
            await personalInformationPage.clickOnButton(data.submit); 
        });

        it("Verifying that 'Changes saved. Still Application Page 1 is incomplete, Please review, complete missing data and re submit to proceed to next pages' is displayed", async () => {
            let text = await personalInformationPage.getElementText(await personalInformationPage.text(data.incompleteMessage));
            await expect(text).toContain(data.incompleteMessage);
        });

        it("Should enter '4568971239' in Home Phone Field", async () => {
           await personalInformationPage.setTextInInput(personalInformationPage.homePhoneInput, data.homePhoneNumber);
        });

        it("Should select 'No Action' option from Action drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.actionDropDownOptions, data.noActionOptionValue, personalInformationPage.actionDropDown);
        });

        it("Should click on 'Submit' button" , async () =>{
            await personalInformationPage.clickOnButton(data.submit); 
            await personalInformationPage.waitForPageLoad();
        });

    });

});