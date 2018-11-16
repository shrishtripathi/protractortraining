import { browser, element, promise } from 'protractor';
import { PreferencePage } from '../../pages/pace/preference.po';
import { DataProvider } from '../../data/dataProvider';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { PaceHomePage } from '../../pages/pace/pace-home.po';
import { CashExpenseCreatePage } from '../../pages/pace/cash-expense-create.po';
import { ChargeDetailPage } from '../../pages/pace/charge-detial.po';
import { MainMenuPage } from '../../pages/pace/main-menu.po';
import { ActivityCreatePage } from '../../pages/pace/activity-create.po';
import { ActivityDetailsPage } from '../../pages/pace/activity-details.po';
import { ReferenceNumberDetail } from "../../pages/pace/reference-number-detail.po";
import { TrailingandMiscellaneousEquipmentPage } from "../../pages/pace/trailing-and-miscellaneous-equipment.po"
import { MilesPage } from "../../pages/pace/miles.po"
import { CustomerMeasurePage } from "../../pages/pace/customer-measure.po"
import { LocationInfoPage } from "../../pages/pace/location-info.po"

let myJbHuntHomePage = new MyJbHuntHomePage();
let preferencePage = new PreferencePage();
let paceHomePage = new PaceHomePage();
let mainMenuPage = new MainMenuPage();
let activityCreatePage = new ActivityCreatePage()
let activityDetailsPage = new ActivityDetailsPage();
let referenceDetailPage = new ReferenceNumberDetail();
let trailingMiscEquipmentPage = new TrailingandMiscellaneousEquipmentPage()
let milesPage = new MilesPage();
let customerMeasurePage = new CustomerMeasurePage();
let locationInfoPage = new LocationInfoPage();


let using = require('jasmine-data-provider');

//TC 95210 1.1-PACE APP-Create Activity
using(DataProvider.Tc_95210, async function (data) {
    describe("Create Activity", function () {

        it("Open JBHunt pace url", async () => {
            await myJbHuntHomePage.openUrl(myJbHuntHomePage.paceUrl);
        });

        it("Login into pace application", async () => {
            await myJbHuntHomePage.loginIntoPaceApplication(data.username, data.password);
        });

        it("Click on PACE tab on the top left side of the screen.", async () => {
            await paceHomePage.clickOnPaceTab();
        });

        it("Select account name Goodman Mfg from Account drop down list ", async () => {
            await preferencePage.selectAccountValue(data.accountLabel, data.accountValue);
        });

        it("Click Save button.", async () => {
            await paceHomePage.clickOnSaveButton();
        });

        it("Click Activity Create link on left.", async () => {
            await mainMenuPage.clickOnMainMenuLink(data.MainMenuLink);
        });

        it("Select an activity from Activity Type,begin,end date ", async () => {
            await activityCreatePage.selectActivityType(data.activityDropDown, data.activityTextValue);
            await activityCreatePage.beginEndDateAndTime();
        });
        it("Click on Add Activity button.", async () => {
            await activityCreatePage.clickAddActivity();

        })
        it("Select an activity classification from Activity Classification drop down list,Select a driver agreement  from Driver Agreement drop down list on middle of the screen", async () => {

            await activityDetailsPage.selectDropDownValue(data.dropDownActivity, data.dropDownClassification, data.dropDownValue);
           
            await activityDetailsPage.selectDropDownValue(data.dropDownDriver, data.dropDownAgreement, data.driverAgreementValue);
        
            await activityDetailsPage.selectDropDownValue(data.selectDriver, "", data.driverValue);
         
            await activityDetailsPage.selectDropDownText(data.dropDownActivity1, data.dropDownPerformed, data.activityPerformedValue);
           
            await activityDetailsPage.setActivityPerformedBytext(data.performedValue)
        
            await activityDetailsPage.selectDropDownText(data.dropDownActivity2, data.dropDownPerformed2, data.byValue);
         
            await activityDetailsPage.setTruckNumber(data.truckNumber)

        });

        it("Click CustomerReferenceNumber / Type link on right side of the screen.", async () => {
            await activityDetailsPage.clickLink(data.customerReferenceNumberOrType)
            await referenceDetailPage.clickAddButton();
            await referenceDetailPage.selectCustomerReferenceType();
            await referenceDetailPage.enterCustomerReferenceNumber(data.customerReferenceNumberValue);
            await referenceDetailPage.clickAddReferenceNumberButton();
            await referenceDetailPage.clickSaveButton();
            let result: boolean = await referenceDetailPage.verifySuccessMessage();
            expect(result).toBe(true);
            await referenceDetailPage.clickExitButton()
        });

        it("Click the TR-PREFIX / NUMBER link. When Trailing and Miscellaneous Equipment screen is displayed, do the following,", async () => {
            await activityDetailsPage.clickLink(data.trPrefixNumber)
            await trailingMiscEquipmentPage.clickButton(data.exit);
        });

        it("Click the Miles link. When Miles screen is displayed, do the following:", async () => {
            await activityDetailsPage.clickMilesLink();
            await milesPage.selectMilageType(data.mileageType);
            await milesPage.setMilesTextBox(data.quantity, data.quantityValue);
            await milesPage.selectMilageClassification(data.mileageClassification);
            await milesPage.clickButton(data.addMiles);
            await milesPage.clickButton(data.save);
            let result: boolean = await milesPage.verifySuccessMessage();
            expect(result).toBe(true);
        });

        it("Click the Cancel button.", async () => {
            await milesPage.clickButton("Cancel");
        });

        it("Click the Customer Measure link. When Customer Measures screen is displayed, do the following,", async () => {
            await activityDetailsPage.clickCustomerMeasureLink();
            await customerMeasurePage.selectCustomerSpecificMeasure(data.customerSpecificMeasure);
            await customerMeasurePage.setCustomerSpecificValue(data.customerSpecificValue)
            await customerMeasurePage.clickButton(data.save);
            let result: boolean = await customerMeasurePage.verifySuccessMessage();
            expect(result).toBe(true);
        });

        it("Click the Exit button.", async () => {
            await customerMeasurePage.clickButton(data.exit);
        });

        it("Click Customer Name / City-State link to add location.", async () => {
            await activityDetailsPage.clickLink(data.locationInformation);
            await locationInfoPage.setCustomerCode(data.customerCode);
            await locationInfoPage.clickButton(data.go);
            await locationInfoPage.selectLocationRole(data.locationRole);
            await locationInfoPage.clickButton(data.save);
            let result: boolean = await locationInfoPage.verifySuccessMessage();
            expect(result).toBe(true);
        });

        it("Click the Exit button.", async () => {
            await locationInfoPage.clickButton(data.exit);
        });

        it("Click on Save button.", async () => {
            await activityDetailsPage.clickButton(data.save)
        });

        it("Verify Success message.", async () => {
            let result: boolean = await activityDetailsPage.verifySuccessMessage();
            expect(result).toBeTruthy();
        });

    });

});