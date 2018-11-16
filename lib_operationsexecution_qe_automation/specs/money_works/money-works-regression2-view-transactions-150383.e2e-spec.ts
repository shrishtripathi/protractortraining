
import { DataProvider } from "../../data/dataProvider";
import { browser, protractor } from "protractor";
import { MoneyWorksHomePage } from "../../pages/money_works/money-works-homepage.po";
import { ViewTranscationsPage } from "../../pages/money_works/view-transcations.po";

let using = require('jasmine-data-provider');

let moneyWorksHomePage=new MoneyWorksHomePage();
let viewTranscationsPage=new ViewTranscationsPage();
//TC #150383: MoneyWorks_Regression_2 View transactions
using(DataProvider.Tc_150383, async function (data) {

    describe(" View transactions", () => {
        
        it("Should open My JBHunt url", async () => {
            await moneyWorksHomePage.openUrl(moneyWorksHomePage.moneyWorksUrl);
        });

        it("Should login to money works Application", async () => {
            await moneyWorksHomePage.loginIntoMoneyWorksApplication(data.username,data.password);
        });

        it("Should click on view transactions tab", async () => {
            await moneyWorksHomePage.click(moneyWorksHomePage.viewTransactionsTab);
        });

        it("Should enter 01/01/2018 to start date input field", async () => {
            await viewTranscationsPage.setText(viewTranscationsPage.startDateInputField,data.startDate);
        });

        it("Should enter 02/01/2018 to end date input field", async () => {
            await viewTranscationsPage.setText(viewTranscationsPage.endDateInputField,data.endDate);
        });
              
        it("Should select 'ADD' from transaction type dropdown", async () => {
            await viewTranscationsPage.setTransactionTypeDropdown(data.transactionTypeDropDownValue)
        });

        it("Should click on search button", async () => {
            await viewTranscationsPage.click(viewTranscationsPage.searchButton);
            await moneyWorksHomePage.waitForLoading();
        });
        
        it("Verifying transactions are populated", async () => {
            await expect<any>(viewTranscationsPage.verifyTransactionsList()).toBeGreaterThan(1);
        });

        it("Should select 'REMOVE' from transaction type dropdown", async () => {
            await viewTranscationsPage.setTransactionTypeDropdown(data.transactionTypeDropDownValue1);
        });

        it("Should click on search button", async () => {
            await viewTranscationsPage.click(viewTranscationsPage.searchButton);
            await moneyWorksHomePage.waitForLoading();
        });

        it("Verifying transactions are populated", async () => {
            await expect<any>(viewTranscationsPage.verifyTransactionsList()).toBeGreaterThan(1);
        });

        it("Should select 'CANCEl' from transaction type dropdown", async () => {
            await viewTranscationsPage.setTransactionTypeDropdown(data.transactionTypeDropDownValue2);
        });

        it("Should click on search button", async () => {
            await viewTranscationsPage.click(viewTranscationsPage.searchButton);
            await moneyWorksHomePage.waitForLoading();
        });

        it("Verifying transactions are populated", async () => {
            await expect<any>(viewTranscationsPage.verifyTransactionsList()).toBeGreaterThan(1);
        });
        
        it("Should select 'ALL' from transaction type dropdown", async () => {
            await viewTranscationsPage.setTransactionTypeDropdown(data.transactionTypeDropDownValue3);
        });
                
        it("Should select 'PENDING' from transaction status dropdown", async () => {
            await viewTranscationsPage.setTransactionStatusDropdown(data.transactionSttausDropDownValue);
        });

        it("Should click on search button", async () => {
            await viewTranscationsPage.click(viewTranscationsPage.searchButton);
            await moneyWorksHomePage.waitForLoading();
        });

        it("Verifying transactions are populated for pending", async () => {
            await expect<any>(viewTranscationsPage.verifyTransactionsList()).toBe(1);
        });

        it("Should select 'ERROR' from transaction status dropdown", async () => {
            await viewTranscationsPage.setTransactionStatusDropdown(data.transactionSttausDropDownValue1);
        });

        it("Should click on search button", async () => {
            await viewTranscationsPage.click(viewTranscationsPage.searchButton);
            await moneyWorksHomePage.waitForLoading();
        });

        it("Verifying transactions are populated", async () => {
            await expect<any>(viewTranscationsPage.verifyTransactionsList()).toBeGreaterThan(1);
        });

        it("Should click on next button", async () => {
            await viewTranscationsPage.click(viewTranscationsPage.nextButton);
            await moneyWorksHomePage.waitForPageLoad();
        });

        it("Verifying page 2 of search results screen", async () => {
            await expect<any>(viewTranscationsPage.getText(viewTranscationsPage.pageNumberText)).toContain(2);
        });

        it("Should click on previous button", async () => {
            await viewTranscationsPage.click(viewTranscationsPage.previousButton);
            await moneyWorksHomePage.waitForPageLoad();
        });

        it("Verifying page 1 of search results screen", async () => {
            await expect<any>(viewTranscationsPage.getText(viewTranscationsPage.pageNumberText)).toContain("Page 1");
        });

        it("Should click on last button", async () => {
            await moneyWorksHomePage.click(viewTranscationsPage.lastButton);
            await moneyWorksHomePage.waitForPageLoad();
        });

        it("Verifying last page of search results screen", async () => {
            let pageNo=await viewTranscationsPage.startingPageNumber();
            let lastPageNo=await viewTranscationsPage.endingPageNumber()
            await expect<any>(pageNo).toBe(lastPageNo);
        });

        it("Should click on first button", async () => {
            await viewTranscationsPage.click(viewTranscationsPage.firstButton);
            await moneyWorksHomePage.waitForPageLoad();
        });
        
    });
});