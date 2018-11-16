import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { HazmatVerificationPage } from '../../pages/safety_briefing/hazmat-verification.po';
import { browser } from "protractor";
import { DetailsPage } from "../../pages/eom/details.po";

let using = require('jasmine-data-provider');

let myJbHuntHomePage = new MyJbHuntHomePage();
let hazmatVerificationPage = new HazmatVerificationPage();
let detailsPage = new DetailsPage();

//TC 177601: Safety Briefing Hazmat and Verification
using(DataProvider.Tc_177601, async function (data) {

    describe('Safety Briefing Hazmat and Verification', () => {

        it('Should Navigate to Safety Briefing url', async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.safetyBriefingUrl);
            await hazmatVerificationPage.waitForLoadingMask();
        });

        it('Should hover over Safety Briefing and Click on', async () => {
            await hazmatVerificationPage.selectCreateNewBriefing();
        });

        it('Should set order number and Click OK', async () => {
            await hazmatVerificationPage.setOrderNumber();
        });

        it('Should Click OK for Manager Instructions', async () => {
            await hazmatVerificationPage.clickOkButton();
        });

        it('Should enter UN/NA Number', async () => {
            await hazmatVerificationPage.enterUnNumber(data.unNum);
        });

        it('Should enter Material Weight', async () => {
            await hazmatVerificationPage.enterUnNumber(data.materialWeight);
        });

        it('Should enter No. Of Packages', async () => {
            await hazmatVerificationPage.enterNoOfPackage(data.noOfPackage);
        });

        it('Should enter Package Type', async () => {
            await hazmatVerificationPage.enterPackageType();
        });     
        
        it('Should enter Package Type', async () => {
            await hazmatVerificationPage.clickNext();
        });   

        it('Should Check Air Bag and enter emergency response telephone number', async () => {
            await hazmatVerificationPage.clickAirBagCheckBox();
            await hazmatVerificationPage.enterEmergencyTelephoneNumber(data.telNumber1, data.telNumber2, data.telNumber3);
        });
        
        it('Should enter Shipper Name', async () => {
            await hazmatVerificationPage.enterShipperName(data.shipperName);
        });

        it('Should enter Emergency Response Provider Contract Number', async () => {
            await hazmatVerificationPage.enterEmergencyContract(data.contractNumber);
        });

        it('Should click Next', async () => {
            await hazmatVerificationPage.clickEmergencyInformationNext();
        });
        
        it('Should click Next', async () => {
            await hazmatVerificationPage.clickConfirmNext();
        });

        it('Should check all checkboxes', async () => {
            await hazmatVerificationPage.checkAllCheckBoxes();
        });

        it('Should click Ok to Confirm', async () => {
            await hazmatVerificationPage.clickConfirmOk();
        });

        it('Check the first order number', async () => {
            expect(await hazmatVerificationPage.getFirstOrderNumber()).toEqual('M532127');
        });

    });
});