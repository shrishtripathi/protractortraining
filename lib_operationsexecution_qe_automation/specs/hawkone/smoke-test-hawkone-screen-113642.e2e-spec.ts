import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

import { By } from 'selenium-webdriver';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { HawkOnePage } from '../../pages/hawk_one/hawk-one.po';
import { DataProvider } from '../../data/dataProvider';

let myJbHuntHomePage = new MyJbHuntHomePage();
let hawkOnePage = new HawkOnePage();
let using = require('jasmine-data-provider');

// TC_113642: Smoke Test HawkOne Screen
using(DataProvider.Tc_113642, async function (data) {
    describe("Smoke Test HawkOne Screen", () => {


        it("Open My JBHunt url", async () => {
            await myJbHuntHomePage.openUrl(data.url);
        });

        it("should  Click the 'NEXT NEW LOAD' button", async () => {
            await hawkOnePage.clickNextNewLoad();
        });

        it("Verify If Load Info is displayed from the above step", async () => {
           
            await hawkOnePage.verifyOrderInformation();
        });

        it("should  Click the '2. APPT CHANGES' tab", async () => {
            await hawkOnePage.clickApptChangesTab();
        });

        it("Validate that there is information for the Appointment Change page", async () => {
            await hawkOnePage.validateResults(data.changeForm);
        });

        it("should Click the '3. DRIVER/FACILITY' tab ", async () => {
            await hawkOnePage.clickDriverTab();
        });
        it("Validate that there is information for the Driver/Facility page", async () => {
            await hawkOnePage.validateResults(data.facility);
        });
        it("should Click the '4. PUBLICATION' tab ", async () => {
            await hawkOnePage.clickPublictaionTab();
        });
        it("Validate that there is information for the Publication page", async () => {
            await hawkOnePage.validateResults(data.publicationResults)
        });
        it("should Click the '5. COMMUNICATION' tab ", async () => {
            await hawkOnePage.clickCommunicationTab();
        });
        it("Validate that there is information for the Communication page", async () => {
            await hawkOnePage.validateResults(data.commentsForm)
        });
        it("should Click the '6.CLOSING ' tab ", async () => {
            await hawkOnePage.clickClosingTab();
        });
        it("Validate that there is information for the Closing page ", async () => {
            await hawkOnePage.validateResults(data.closingForm)
        });

        it("should Click the '6.MAINTENANCE ' tab ", async () => {
            await hawkOnePage.clickMaintenanceTab();
        });
        it("Validate that there is information for the Closing page ", async () => {
            await hawkOnePage.validateResults(data.maintenanceForm)
        });
        it("should Click the 'LOAD INFO' tab", async () => {
            await hawkOnePage.clickLoadInfoTab();
        });
        it("Validate there is information for the Load Information page", async () => {
            await hawkOnePage.validateResults(data.loadForm);
        });
     });
});
