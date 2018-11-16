import { BasePage } from "../base.po";
import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { ActionLibrary } from "../../utilities/action-library";

export class PersonalInformationPage extends BasePage {

    readonly firstName: ElementFinder = element(by.xpath("//input[@name='application1.person.firstName']"));
    readonly middleName: ElementFinder = element(by.xpath("//input[@name='application1.person.middleName']"));
    readonly lastName: ElementFinder = element(by.xpath("//input[@name='application1.person.lastName']"));
    readonly dobMonth: ElementFinder = element(by.xpath("//input[@name='application1.person.dob_mm']"));
    readonly dobDay: ElementFinder = element(by.xpath("//input[@name='application1.person.dob_dd']"));
    readonly dobYear: ElementFinder = element(by.xpath("//input[@name='application1.person.dob_yyyy']"));
    readonly careerPlacementSpecialistDropDown: ElementFinder = element(by.xpath("//select[@name='application1.selectedRecruiter']"));
    readonly careerPlacementSpecialistDropDownOptions: string = "//select[@name='application1.selectedRecruiter']/option";
    readonly typeDropDown: ElementFinder = element(by.xpath("//select[@name='mediaForm.mediaType']"));
    readonly typeDropDownOptions: string = "//select[@name='mediaForm.mediaType']/option";
    readonly stateDropDown: ElementFinder = element(by.xpath("//select[@name='mediaForm.mediaState']"));
    readonly stateDropDownOptions: string = "//select[@name='mediaForm.mediaState']/option";
    readonly sourceDropDown: ElementFinder = element(by.xpath("//select[@name='mediaForm.mediaSource']"));
    readonly sourceDropDownOptions: string = "//select[@name='mediaForm.mediaSource']/option";
    readonly addButton: ElementFinder = element(by.xpath("//input[@name='btnMedia' and @value='Add']"));
    readonly otherOrExplainInput: ElementFinder = element(by.xpath("//input[@name='mediaForm.otherMedia']"));
    readonly streetAddressInput: ElementFinder = element(by.xpath("//input[@name='permanentAddressForm.address1']"));
    readonly sameAsCurrentCheckBox: ElementFinder = element(by.xpath("//input[@name='application1.isSameAsPermanentAddress' and @type='checkbox']"));
    readonly homePhoneInput: ElementFinder = element(by.id("homePhone"));
    readonly noReferral: ElementFinder = element(by.xpath("//input[@name='noReferral' and @type='checkbox']"));
    readonly permanentCityDropDown: ElementFinder = element(by.xpath("//select[@name='permanentAddressForm.cityId']"));
    readonly permanentCityDropDownOptions: string = "//select[@name='permanentAddressForm.cityId']/option";
    readonly permanentStateDropDown: ElementFinder = element(by.xpath("//select[@name='permanentAddressForm.stateId']"));
    readonly permanentStateDropDownOptions: string = "//select[@name='permanentAddressForm.stateId']/option";
    readonly permanentZipCodeInput: ElementFinder = element(by.xpath("//input[@name='permanentAddressForm.zip']"));
    readonly permanentFromDateMonth: ElementFinder = element(by.xpath("//input[@name='permanentAddressForm.fromDate_mm']"));
    readonly permanentFromDateDay: ElementFinder = element(by.xpath("//input[@name='permanentAddressForm.fromDate_dd']"));
    readonly permanentFromDateYear: ElementFinder = element(by.xpath("//input[@name='permanentAddressForm.fromDate_yyyy']"));
    readonly permanentToDateMonth: ElementFinder = element(by.xpath("//input[@name='permanentAddressForm.toDate_mm']"));
    readonly permanentToDateDay: ElementFinder = element(by.xpath("//input[@name='permanentAddressForm.toDate_dd']"));
    readonly permanentToDateYear: ElementFinder = element(by.xpath("//input[@name='permanentAddressForm.toDate_yyyy']"));
    readonly permanentAddressAddButton: ElementFinder = element(by.xpath("//input[@name='btnPermanentAddress']"));
    readonly candidateTypeDropDown: ElementFinder = element(by.xpath("//select[@name='application1.selectedApplicantType']"));
    readonly candidateTypeDropDownOptions: string = "//select[@name='application1.selectedApplicantType']/option";
    readonly lightToWorkYesRadioButton: ElementFinder = element(by.xpath("//input[@name='application1.rightToWork' and @value='Y']"));
    readonly driverInterestsDropDown: ElementFinder = element(by.xpath("//select[@name='application1.selectedDriverInterest']"));
    readonly driverInterestsDropDownOptions: string = "//select[@name='application1.selectedDriverInterest']/option";
    readonly driverInterestsAddButton: ElementFinder = element(by.xpath("//input[@name='btnDriverInterest']"));
    readonly selectReferralButton: ElementFinder = element(by.xpath("//input[@name='selectReferral']"));
    readonly personnelFirstName: ElementFinder = element(by.xpath("//input[@name='personnel.firstName']"));
    readonly listOfEmployeesRows: ElementFinder = element(by.xpath("//table[@class='striped']/tbody/tr"));
    readonly selectEmployeeRadioButtons: ElementArrayFinder = element.all(by.xpath("//input[@name='emplId' and @type='radio']"));
    readonly selectAssignRadioButtons: ElementArrayFinder = element.all(by.xpath("//input[@name='positionId' and @type='radio']"));
    readonly actionDropDown: ElementFinder = element(by.xpath("//select[@name='decisionActionView.exceptionTid']"));
    readonly actionDropDownOptions: string = "//select[@name='decisionActionView.exceptionTid']/option";
    readonly reasonDropDown: ElementFinder = element(by.xpath("//select[@name='decisionActionView.reasonTid']"));
    readonly reasonDropDownOptions: string = "//select[@name='decisionActionView.reasonTid']/option";
    readonly assignPositionButton: ElementFinder = element(by.xpath("//input[@name='assignPostion']"));
    readonly actionComments: ElementFinder = element(by.xpath("//textarea[@name='decisionActionViewComments']"));
    readonly drivingSchoolNoneCheckbox: ElementFinder = element(by.xpath("//input[@id='noDrivingSchoolConfirmed']"));
    readonly employmentHistoryAddButton: ElementFinder = element(by.id("addEmployment"));
    readonly employmentInfoFromDateMonth: ElementFinder = element(by.xpath("//input[@name='startDate_mm']"));
    readonly employmentInfoFromDateDay: ElementFinder = element(by.xpath("//input[@name='startDate_dd']"));
    readonly employmentInfoFromDateYear: ElementFinder = element(by.xpath("//input[@name='startDate_yyyy']"));
    readonly employmentInfoToDateMonth: ElementFinder = element(by.xpath("//input[@name='endDate_mm']"));
    readonly employmentInfoToDateDay: ElementFinder = element(by.xpath("//input[@name='endDate_dd']"));
    readonly employmentInfoToDateYear: ElementFinder = element(by.xpath("//input[@name='endDate_yyyy']"));
    readonly employmentInfoCompanyNameDropDown: ElementFinder = element(by.xpath("//select[@name='employmentHistory.companyId']"));
    readonly employmentInfoCompanyNameDropDownOptions: string = "//select[@name='employmentHistory.companyId']/option";
    readonly reasonForLeavingDropDown: ElementFinder = element(by.xpath("//select[@name='employmentHistory.reasonLeaveTid']"));
    readonly reasonForLeavingDropDownOptions: string = "//select[@name='employmentHistory.reasonLeaveTid']/option";
    readonly rehireStatusDropDown: ElementFinder = element(by.xpath("//select[@name='employmentHistory.rhireStatusTid']"));
    readonly rehireStatusDropDownOptions: string = "//select[@name='employmentHistory.rhireStatusTid']/option";
    readonly positionDropDown: ElementFinder = element(by.xpath("//select[@name='employmentHistory.positionTid']"));
    readonly positionDropDownOptions: string = "//select[@name='employmentHistory.positionTid']/option";
    readonly employmentInBuisinessYesRadioButton: ElementFinder = element(by.xpath("//input[@name='employmentHistory.inBusiness' and @value='Y']"));
    readonly employmentVerifibleYesRadioButton: ElementFinder = element(by.xpath("//input[@name='employmentHistory.verifiable' and @value='Y']"));
    readonly employmentSubjectToFMCSRYesRadioButton: ElementFinder = element(by.xpath("//input[@name='employmentHistory.subjectToFMCSR' and @value='Y']"));
    readonly employmentDrugTestYesRadioButton: ElementFinder = element(by.xpath("//input[@name='employmentHistory.drugTestRequired' and @value='Y']"));
    readonly typeOfVerificationDropDown: ElementFinder = element(by.xpath("//select[@name='employmentHistory.verificationTid']"));
    readonly typeOfVerificationDropDownOptions: string = "//select[@name='employmentHistory.verificationTid']/option";
    readonly equipmentVehicleDropDown: ElementFinder = element(by.xpath("//select[@name='truckTid']"));
    readonly equipmentVehicleDropDownOptions: string = "//select[@name='truckTid']/option";
    readonly equipmentTrailerDropDown: ElementFinder = element(by.xpath("//select[@name='trailerTid']"));
    readonly equipmentTrailerDropDownOptions: string = "//select[@name='trailerTid']/option";
    readonly equipmentSeatDropDown: ElementFinder = element(by.xpath("//select[@name='seatPreferenceTid']"));
    readonly equipmentSeatDropDownOptions: string = "//select[@name='seatPreferenceTid']/option";
    readonly sameAsEmploymentDatesCheckbox: ElementFinder = element(by.xpath("//input[@type='checkbox' and @value='YES']"));
    readonly skillCategoryDropDown: ElementFinder = element(by.xpath("//select[@name='driverQualificationForm.qualificationCategoryTid']"));
    readonly skillCategoryDropDownOptions: string = "//select[@name='driverQualificationForm.qualificationCategoryTid']/option";
    readonly skillDropDown: ElementFinder = element(by.xpath("//select[@name='driverQualificationForm.qualificationTid']"));
    readonly skillDropDownOptions: string = "//select[@name='driverQualificationForm.qualificationTid']/option";
    readonly yearsInput: ElementFinder = element(by.xpath("//input[@name='driverQualificationForm.years']"));
    readonly currentCertCheckbox: ElementFinder = element(by.xpath("//input[@name='driverQualificationForm.certified']"));
    readonly specialSkillsAddButton: ElementFinder = element(by.xpath("//input[@name='btnSpecialSkills']"));
    readonly trafficRecordsStateDropDown: ElementFinder = element(by.xpath("//select[@name='license.state']"));
    readonly trafficRecordsStateDropDownOptions: string = "//select[@name='license.state']/option";
    readonly trafficRecordsClassDropDown: ElementFinder = element(by.xpath("//select[@name='license.licenseClassSelected']"));
    readonly trafficRecordsClassDropDownOptions: string = "//select[@name='license.licenseClassSelected']/option";
    readonly trafficRecordsNumberInput: ElementFinder = element(by.xpath("//input[@name='license.licenseNumber']"));
    readonly trafficRecordsExpirationMonth: ElementFinder = element(by.xpath("//input[@name='expirationDate_mm']"));
    readonly trafficRecordsExpirationDay: ElementFinder = element(by.xpath("//input[@name='expirationDate_dd']"));
    readonly trafficRecordsExpirationYear: ElementFinder = element(by.xpath("//input[@name='expirationDate_yyyy']"));
    readonly previousLicenceCheckbox: ElementFinder = element(by.xpath("//input[@name='noPreviousLicenses']"));
    readonly drivingRecordCheckbox: ElementFinder = element(by.xpath("//input[@name='noConvictions']"));
    readonly accidentRecoedCheckbox: ElementFinder = element(by.xpath("//input[@name='noAccidents']"));


    public async verifyTabEnabled(tabName: string) {
        let activeTab: ElementFinder = element(by.xpath("//a[@class='activeTab']/span[text()='" + tabName + "']"));
        return await activeTab.isPresent();
    }

    public async setTextInInput(element: ElementFinder, text: string) {
        await element.clear();
        await element.sendKeys(text);
    }

    public async setOptionFromDropDown(optionsList: string, option: string, dropDownName: ElementFinder) {
        await this.actions.click(dropDownName, "Click on Tab");
        await this.actions.selectByValue(optionsList, option, "select value");
    }

}