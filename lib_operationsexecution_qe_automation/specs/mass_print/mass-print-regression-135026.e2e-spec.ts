import { DataProvider } from "../../data/dataProvider";
import { MassPrintHomepage } from "../../pages/mass_print/mass-print-homepage.po";
import { browser } from "protractor";
let massPrintHomepage=new MassPrintHomepage();
let using = require('jasmine-data-provider');

//TC 135026 MassPrint_Regression
using(DataProvider.Tc_135026, async function (data) {
    describe("MassPrint_Regression", () => {
        
        it("Should Open My mass print url", async () => {
            await massPrintHomepage.openMassPrintUrl();
        });

        it("Should click on enter", async () => {
            await massPrintHomepage.click(massPrintHomepage.enter);
        });

        it("Login into mass print application", async () => {
            await massPrintHomepage.loginIntoMassPrintApplication(data.username, data.password);
        });

        it("Should enter 'HP50485' White text box underneath Enter ITEM BOL Number", async () => {
            await massPrintHomepage.switchToFrame(data.summaryFrameName);
            await massPrintHomepage.switchToFrame(data.searchFrameName);
            await massPrintHomepage.setTextArea(massPrintHomepage.textArea,data.textToTextArea);
        });

        it("Should click on search button", async () => {
            await massPrintHomepage.click(massPrintHomepage.searchButton);
            await browser.sleep(5000);
        });

        it("Should click on select All button", async () => {
            await massPrintHomepage.switchToDeafultContent();
            await massPrintHomepage.switchToFrame(data.contentFrameName);
            await massPrintHomepage.switchToFrame(data.summaryFrameName);
            await massPrintHomepage.switchToFrame(data.footerFrameName);
            await massPrintHomepage.click(massPrintHomepage.selectAllButton);
        });

        it("Should click on create button", async () => {
            await massPrintHomepage.click(massPrintHomepage.createButton);
        });

        it("Verifying numbe rof documents to be 0", async () => {
            await expect<any>(massPrintHomepage.verifyNumberOfDocuments()).toContain(0);
        });

        it("Should click on ok button", async () => {
            await massPrintHomepage.click(massPrintHomepage.okButton);
        });

        it("Should click on mass print tab", async () => {
            await massPrintHomepage.switchToDeafultContent();
            await massPrintHomepage.switchToFrame(data.contentFrameName);
            await massPrintHomepage.switchToFrame(data.navFrameName);
            await massPrintHomepage.click(massPrintHomepage.massPrintTab);
        });

        it("Should enter 'HP50485' White text box underneath Enter ITEM BOL Number", async () => {
            await massPrintHomepage.switchToDeafultContent();
            await massPrintHomepage.switchToFrame(data.contentFrameName);
            await massPrintHomepage.switchToFrame(data.summaryFrameName);
            await massPrintHomepage.switchToFrame(data.searchFrameName);
            await massPrintHomepage.setTextArea(massPrintHomepage.textArea,data.textToTextArea);
        });

        it("Should click on search button", async () => {
            await massPrintHomepage.click(massPrintHomepage.searchButton);
        });

        it("Should click on select All button", async () => {
            await massPrintHomepage.switchToDeafultContent();
            await massPrintHomepage.switchToFrame(data.contentFrameName);
            await massPrintHomepage.switchToFrame(data.summaryFrameName);
            await massPrintHomepage.switchToFrame(data.footerFrameName);
            await massPrintHomepage.click(massPrintHomepage.selectAllButton);
        });

        it("Should enter 'Test123' White text box underneath Notes", async () => {
            await massPrintHomepage.setTextArea(massPrintHomepage.notes,data.textToNotes);
        });

        it("Should click on create button", async () => {
            await massPrintHomepage.click(massPrintHomepage.createButton);
        });

        it("Should click on ok button", async () => {
            await massPrintHomepage.click(massPrintHomepage.okButton);
        });

        it("Should click on mass print tab", async () => {
            await massPrintHomepage.switchToDeafultContent();
            await massPrintHomepage.switchToFrame(data.contentFrameName);
            await massPrintHomepage.switchToFrame(data.navFrameName);
            await massPrintHomepage.click(massPrintHomepage.massPrintTab);
        });

        it("Should enter 'HP50485' White text box underneath Enter ITEM BOL Number", async () => {
            await massPrintHomepage.switchToDeafultContent();
            await massPrintHomepage.switchToFrame(data.contentFrameName);
            await massPrintHomepage.switchToFrame(data.summaryFrameName);
            await massPrintHomepage.switchToFrame(data.searchFrameName);
            await massPrintHomepage.setTextArea(massPrintHomepage.textArea,data.textToTextArea);
        });

        it("Should click on search button", async () => {
            await massPrintHomepage.click(massPrintHomepage.searchButton);
        });

        it("Should select 'Preadjustment' Dispute  reason dropdown", async () => {
            await massPrintHomepage.switchToDeafultContent();
            await massPrintHomepage.switchToFrame(data.contentFrameName);
            await massPrintHomepage.switchToFrame(data.summaryFrameName);
            await massPrintHomepage.switchToFrame(data.footerFrameName);
            await massPrintHomepage.setDisputeReasonDropdown(data.disputeReasonDropdownOption);
        });

        it("Should click on select All button", async () => {
            await massPrintHomepage.click(massPrintHomepage.selectAllButton);
        });

        it("Should enter 'Test123' White text box underneath Notes", async () => {
            await massPrintHomepage.setTextArea(massPrintHomepage.notes,data.textToNotes);
        });

        it("Should click on create button", async () => {
            await massPrintHomepage.click(massPrintHomepage.createButton);
        });

        it("Should click on ok button", async () => {
            await massPrintHomepage.click(massPrintHomepage.okButton);
        });
    });
});
