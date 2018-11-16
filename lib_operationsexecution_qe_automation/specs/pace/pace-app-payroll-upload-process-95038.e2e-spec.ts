import { DataProvider } from '../../data/dataProvider';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { PreferencePage } from '../../pages/pace/preference.po';
import { PayrollAdjustmentPage } from '../../pages/pace/payroll-adjustment.po';
import { InitiatePayrollPage } from '../../pages/pace/initiate-payroll.po';

let myJbHuntHomePage = new MyJbHuntHomePage();
let preferencePage = new PreferencePage();
let payrollAdjustmentPage = new PayrollAdjustmentPage();
let initiatePayrollPage = new InitiatePayrollPage();
let using = require('jasmine-data-provider');

//TC 95038 PACE APP-Payroll Upload Process
using(DataProvider.Tc_95038, async function (data) {
    describe("PACE APP-Payroll Upload Process", function () {
        let data_Values: string[] = [];
        it("Open JBHunt pace url", async () => {
            await myJbHuntHomePage.openUrl(myJbHuntHomePage.paceUrl);
        });

        it("Login into pace application", async () => {
            await myJbHuntHomePage.loginIntoPaceApplication(data.username, data.password);
        });

        it("Click on PACE link from menu items", async () => {
            await myJbHuntHomePage.clickonPaceLink();
        });

        it("Select Account from account dropdown list", async () => {
            await preferencePage.selectAccountValue(data.accountLabel, data.accountValue);
        });

        it("Click on Save button to save preference", async () => {
            await myJbHuntHomePage.clickOnButton(data.saveButton);
        });

        it("Click on payroll adjustment link on main menu", async () => {
            await myJbHuntHomePage.clickonMenuLink(data.payrollAdjustment);
        });

        it("Click on Search button", async () => {
            await myJbHuntHomePage.clickOnButton(data.searchButton);
        });

        it("Verify payroll adjustment record existance", async () => {
            data_Values = await payrollAdjustmentPage.verifyPayrollAdjustmentRecord(data.value_Array);
            await expect(data_Values[1]).not.toBeUndefined();
        });

        it("Click on main menu tab", async () => {
            await myJbHuntHomePage.clickonMenuLink(data.mainMenuLink);
        });

        it("Click on initiate payroll link", async () => {
            await myJbHuntHomePage.clickonMenuLink(data.initiatePayroll);
        });

        it("Select entire account option on initiate payroll page", async () => {
            await myJbHuntHomePage.selectRadioButton(data.entireRadioButton);
        });

        it("Click on submit button on initiate payroll page", async () => {
            await myJbHuntHomePage.clickOnButton(data.submitButton);
        });

        it("Verify payroll summary page", async () => {
            let result: boolean = await initiatePayrollPage.verifyPayrollSummaryDetails(data_Values);
            await expect(result).toBeTruthy();
        });

        it("Enter comments on payroll summary page", async () => {
            await initiatePayrollPage.enterCommentOnPaySummary(data.commentOnPaySummary);
        });

        it("Click on approve button on payroll summary page", async () => {
            await myJbHuntHomePage.clickOnButton(data.approveButton);
        });

        it("Verify payroll approval page", async () => {
            let result: boolean = await initiatePayrollPage.verifyPayrollApprovalDetails(data_Values);
            await expect(result).toBeTruthy();
        });

        it("Click on payroll confirm button on payroll summary page", async () => {
            await myJbHuntHomePage.clickOnButton(data.payrollConfirmButton);
        });

        it("Verify payroll approval confirmation message", async () => {
            let result: boolean = await initiatePayrollPage.verifySuccessMessage(data.successMessage);
            await expect(result).toBeTruthy();
        });

    });
});
