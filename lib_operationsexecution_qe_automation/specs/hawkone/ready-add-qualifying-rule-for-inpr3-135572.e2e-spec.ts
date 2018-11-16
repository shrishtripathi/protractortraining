import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CentralCustomerInformationHomePage } from "../../pages/central_customer_information/central-customer-information-home.po";
import { Socket } from "net";
import { browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let centralCustomerInformationHomePage = new CentralCustomerInformationHomePage();
let using = require('jasmine-data-provider');

//TC #135572 HawkOne - READY Add Qualifying Rule for INPR3
using(DataProvider.Tc_135572, async function (data) {

    describe("HawkOne - READY Add Qualifying Rule for INPR3", () => {

        it("Should open Central Customer Information url", async () => {
            await centralCustomerInformationHomePage.navigateToAppHome(centralCustomerInformationHomePage.centralCustomerInformation);
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
        
        it("Should click on Create New Rule", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.createNewRuleButton);
        });

        it("Should click on the down arrow next to BILL TO, and select SHIPPER", async () => {
            await centralCustomerInformationHomePage.setBillToDropDown(data.billTo);
        });

        it("Should enter CEMT10 into the empty next to EQUAL, and above the Add EITHER button", async () => {
            await centralCustomerInformationHomePage.setText(centralCustomerInformationHomePage.inputFieldNextToEqualDropdown,data.cemText);
        });

        it("Should click Add EITHER Button", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.addEitherButton);
        });

        it("Should click SAVE Button", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.saveButton);
        });

        it("Should click Add Rule to Contact", async () => {
            await centralCustomerInformationHomePage.click(centralCustomerInformationHomePage.addRuleToContact);
        });
    
        it("Should press OK to continue", async () => {
            await centralCustomerInformationHomePage.acceptingAlert();
        });

    });
});