import { DraynetHomePage } from "../../pages/draynet/draynet4-home.po";
import { CraeteInvoicePage } from "../../pages/draynet/create-invoice.po";
import { PaymentHistoryPage } from "../../pages/draynet/payment-history.po";
import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
let myJbHuntHomePage = new MyJbHuntHomePage();
let draynetHomePage = new DraynetHomePage();
let craeteInvoicePage = new CraeteInvoicePage();
let paymentHistoryPage = new PaymentHistoryPage();
let using = require('jasmine-data-provider');

//#110852_Draynet_Regression_3 Create Invoice and Payment History
using(DataProvider.Tc_110852, async function (data) {
describe("Create Invoice and Payment History", () => {
    it("Should Open My JBHunt url", async () => {
        await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.myJbhuntUrl);
    });

    it("Should Click on Show my app link on JbHunt home page", async () => {
        await myJbHuntHomePage.clickOnShowMoreAppLink();
    });

    it("Should Click on Draynet 4.0 link from left Navigation", async () => {
        await myJbHuntHomePage.clickonDraynet();
    });

    it("Verifying  'Draynet' page opens", async () => {
        await expect<any>(draynetHomePage.verifyDrynetPage()).toBeTruthy();
    });

    it("Should set Division to 'HJBT JBVAN'", async () => {
        await draynetHomePage.selectDivision(data.selectDivision);
    });

    it("Should set Project to 'A!01'", async () => {
        await draynetHomePage.selectProject(data.project);
    });

    it("Should set carrier to 'ALL'", async () => {
        await draynetHomePage.selectCarrier(data.carrier);
    });

    it("Should click search ", async () => {
        await draynetHomePage.clickSearchButton();
    });

    it("Verifying invoice details are populated ", async () => {
        await expect<any>(draynetHomePage.verifyPendingAssignments()).toBeGreaterThan(data.constant);
    });

    it("Should click Create Invoice tab ", async () => {
        await draynetHomePage.clickOnTab(data.invoiceTab);
    });

    it("Should set Division to 'HJBT JBVAN'", async () => {
        await craeteInvoicePage.selectDivision(data.selectDivision);
    });

    it("Should set Project to 'A!01'", async () => {
        await craeteInvoicePage.selectProject(data.project);
    });

    it("Should set carrier to 'MGAS'", async () => {
        await craeteInvoicePage.selectCarrier(data.mgCarrier);
    });

    it("Should set date range", async () => {
        await craeteInvoicePage.setDateRange(data.startDate, data.endDate);
    });

    it("Should click search ", async () => {
        await craeteInvoicePage.clickSearchButton();
    });

    it("Verifying invoice details are populated ", async () => {
        await expect<any>(craeteInvoicePage.verifyInvoiceDetails()).toBeGreaterThan(data.constant);
    });

    it("Should click Payment History tab ", async () => {
        await draynetHomePage.clickOnTab(data.paymentTab);
    });

    it("Should set date range", async () => {
        await paymentHistoryPage.setDateRange(data.startDate, data.endDate);
    });

    it("Should set Division to 'HJBT JBVAN'", async () => {
        await paymentHistoryPage.selectDivision(data.selectDivision);
    });

    it("Should set Project to 'A!01'", async () => {
        await paymentHistoryPage.selectProject(data.project);
    });

    it("Should set carrier to 'MGAS'", async () => {
        await paymentHistoryPage.selectCarrier(data.mgCarrier);
    });

    it("Should click search ", async () => {
        await paymentHistoryPage.clickSearchButton();
    });

    it("Verifying paymnet history details are populated ", async () => {
        await expect<any>(paymentHistoryPage.verifyPaymnetHistoryResults()).toBeGreaterThan(data.constant);
    });

});
});
