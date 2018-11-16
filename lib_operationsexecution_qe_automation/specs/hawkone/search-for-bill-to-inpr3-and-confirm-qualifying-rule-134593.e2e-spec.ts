import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CentralCustomerInformationHomePage } from "../../pages/central_customer_information/central-customer-information-home.po";
import { Socket } from "net";
import { browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let centralCustomerInformationHomePage = new CentralCustomerInformationHomePage();
let using = require('jasmine-data-provider');

//TC #134593 Hawk One Screen - Search for Bill To INPR3 and Confirm Qualifying Rule
using(DataProvider.Tc_134593, async function (data) {

    describe("Hawk One - READY Search for Bill To INPR3 and Confirm Qualifying Rule", () => {

        it("Should open Central Customer Information url", async () => {
            await centralCustomerInformationHomePage.opencentralCustomerInformationUrl();
        });
        
        it("Verifying that Central Customer Information page is displayed", async () => {
            await expect(centralCustomerInformationHomePage.getPageTitle()).toBe(data.cciPageTitle);
        });

        it("Should click on Central Customer Information link from left Navigation", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.buisinessSearch);
        });

        it("Should enter the customer code INPR3 in the Customer Code box", async () => {
            await centralCustomerInformationHomePage.setText(centralCustomerInformationHomePage.customerCode,data.customerCode);
        });

        it("Should click on search button", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.searchButton);
        });

        it("Should click on the INPR3 hyperlink that has Division = HJBT JBVAN", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.inpr3);
        });

        it("Should click on power detention authorization", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.powerDetentionAuthorization);
        });

        it("Should click on qualifying rule tab", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.qualifingRuleTab);
        });

        xit("Should click on view detail", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.viewDetails);
        });

        it("Verifying", async () => {
            let status=await centralCustomerInformationHomePage.verifyViewDetailsInformation();
            console.log("status",status)
            if(status == false){
                await centralCustomerInformationHomePage.opencentralCustomerInformationUrl();
                await expect(centralCustomerInformationHomePage.getPageTitle()).toBe(data.cciPageTitle);
                await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.buisinessSearch);
                await centralCustomerInformationHomePage.setText(centralCustomerInformationHomePage.customerCode,data.customerCode);
                await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.searchButton);
                await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.inpr3);
                await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.powerDetentionAuthorization);
                await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.qualifingRuleTab);
                await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.createNewRuleButton);
                await centralCustomerInformationHomePage.setBillToDropDown(data.billTo);
                await centralCustomerInformationHomePage.setText(centralCustomerInformationHomePage.inputFieldNextToEqualDropdown,data.cemText)
                await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.addEitherButton);
                await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.saveButton);
                await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.addRuleToContact);
                await centralCustomerInformationHomePage.acceptingAlert();
            }
            
        });

        
    });

});