import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { SearchPage } from "../../pages/cdrap/search.po";
import { PersonalInformationPage } from "../../pages/cdrap/personal-information-page.po";
import { Browser, browser } from "protractor";

let cdrapHomePage = new CdrapHomePage();
let searchPage = new SearchPage();
let personalInformationPage = new PersonalInformationPage();
let using = require('jasmine-data-provider');

//TC #138403: CDRAP_Regression_1_Part 3
describe("CDRAP_Regression_1_Part 3", () => {

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

    using(DataProvider.Tc_138403, async function (data) {
        
        it("Verifying that 'Employment History' tab is activated", async () => {
            let result: boolean = await personalInformationPage.verifyTabEnabled(data.employementHistory);
            await expect(result).toBeTruthy();
        });

        it("Should checkbox next to 'None'", async () => {          
            await personalInformationPage.click(personalInformationPage.drivingSchoolNoneCheckbox);
        });

        it("Should click on 'Add' button in Employment History" , async () =>{
            await personalInformationPage.click(personalInformationPage.employmentHistoryAddButton); 
            await personalInformationPage.switchToWindow(data.one);
        });

        it("Should enter '01/01/2000' from date field", async () => {
            await personalInformationPage.setTextInInput(personalInformationPage.employmentInfoFromDateMonth, data.fromMonth);
            await personalInformationPage.setTextInInput(personalInformationPage.employmentInfoFromDateDay, data.fromDay);
            await personalInformationPage.setTextInInput(personalInformationPage.employmentInfoFromDateYear, data.fromYear);
        });
        
        it("Should enter current date in To field", async () => {
            let currentDate = new Date();
            let day = currentDate.getDate();
            let month = currentDate.getMonth() + 1;
            let year = currentDate.getFullYear();
            console.log("day "+day+"and "+month+"year "+year);
            await personalInformationPage.setTextInInput(personalInformationPage.employmentInfoToDateMonth, month.toString());
            await personalInformationPage.setTextInInput(personalInformationPage.employmentInfoToDateDay, day.toString());
            await personalInformationPage.setTextInInput(personalInformationPage.employmentInfoToDateYear, year.toString());
        });

        it("Should select 'DEDICATED TRANSPORTATION SOLUTIONS INC' option from Company Name drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.employmentInfoCompanyNameDropDownOptions, data.companyNameDropDownOptionValue, personalInformationPage.employmentInfoCompanyNameDropDown);
        });

        it("Should select 'Aquisition' option from Reason For Leaving drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.reasonForLeavingDropDownOptions, data.reasonForLeavingDropDownOptionValue, personalInformationPage.reasonForLeavingDropDown);
        });

        it("Should select 'No Hire' option from Rehire Status drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.rehireStatusDropDownOptions, data.rehireStatusDropDownOptionValue, personalInformationPage.rehireStatusDropDown);
        });

        it("Should select 'Driver' option from Position drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.positionDropDownOptions, data.positionDropDownOptionValue, personalInformationPage.positionDropDown);
        });

        it("Should select 'Yes' radio button next to 'Company still in business?'", async () => {   
            await personalInformationPage.waitForElementIsVisible(personalInformationPage.employmentInBuisinessYesRadioButton);
            await personalInformationPage.click(personalInformationPage.employmentInBuisinessYesRadioButton);
        });

        it("Should select 'Yes' radio button next to 'Verifiable Position / Company?'", async () => {          
            await personalInformationPage.click(personalInformationPage.employmentVerifibleYesRadioButton);
        });

        it("Should select 'Yes' radio button next to 'Subject to FMCSRs?'", async () => {          
            await personalInformationPage.click(personalInformationPage.employmentSubjectToFMCSRYesRadioButton);
        });

        it("Should select 'Yes' radio button next to 'Safety Sensitive - DOT Drug/Alcohol testing required?'", async () => {          
            await personalInformationPage.click(personalInformationPage.employmentDrugTestYesRadioButton);
        });

        it("Should select '1099' option from Type Of Verification drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.typeOfVerificationDropDownOptions, data.typeOfVerificationDropDownOptionValue, personalInformationPage.typeOfVerificationDropDown);
        });

        it("Should select top option from Equipment Vehicle drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.equipmentVehicleDropDownOptions, data.equipmentVehicleDropDownOptionValue, personalInformationPage.equipmentVehicleDropDown);
        });

        it("Should select top option from Equipment Trailer drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.equipmentTrailerDropDownOptions, data.equipmentTrailerDropDownOptionValue, personalInformationPage.equipmentTrailerDropDown);
        });

        it("Should select first option from Equipment Seat drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.equipmentSeatDropDownOptions, data.equipmentSeatDropDownOptionValue, personalInformationPage.equipmentSeatDropDown);
        });

        it("Should click the check box next to Same as Employment dates", async () => {          
            await personalInformationPage.click(personalInformationPage.sameAsEmploymentDatesCheckbox);
        });

        it("Should click on 'Submit' button" , async () =>{
            await personalInformationPage.clickOnButton(data.submit);
            await personalInformationPage.closeCurrentWindow();
            await personalInformationPage.switchToWindow(data.zero);
        });

        it("Should click on 'FCRA Employment History' button" , async () =>{
            await personalInformationPage.clickOnButton(data.fcraEmploymentHistory); 
            await personalInformationPage.switchToWindow(data.one);
        });

        it("Should click on 'Accept No Order' button" , async () =>{
            await personalInformationPage.clickOnButton(data.acceptNoOrderButton); 
            await personalInformationPage.switchToWindow(data.zero);
        });

        it("Should select 'Delivery Types' option from Skill Category drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.skillCategoryDropDownOptions, data.skillCategoryDropDownOptionValue, personalInformationPage.skillCategoryDropDown);
        });

        it("Should select 'Agricultural Bulk Feed DeliveryIn' option from Skill drop down", async () => {          
            await personalInformationPage.setOptionFromDropDown(personalInformationPage.skillDropDownOptions, data.skillDropDownOptionValue, personalInformationPage.skillDropDown);
        });

        it("Should enter '3' in Years field", async () => {
            await personalInformationPage.setTextInInput(personalInformationPage.yearsInput, data.yearsNumber);
        });

        it("Should click the checkbox underneath Current Cert", async () => {          
            await personalInformationPage.click(personalInformationPage.currentCertCheckbox);
        });

        it("Should click on 'Add' button in Employment History" , async () =>{
            await personalInformationPage.click(personalInformationPage.specialSkillsAddButton); 
        });

        it("Should click on 'Submit and Continue' button " , async () =>{
            await personalInformationPage.clickOnButton(data.submitAndContinue); 
            await personalInformationPage.waitForPageLoad();
        });

    });

});