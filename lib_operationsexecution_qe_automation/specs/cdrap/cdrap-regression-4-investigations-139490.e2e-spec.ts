import { DataProvider } from "../../data/dataProvider";
import { InvestigationSearchPage } from "../../pages/cdrap/investigation-search.po";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { browser } from "protractor";

let cdrapHomePage = new CdrapHomePage();
let investigationSearchPage = new InvestigationSearchPage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC #139490: CDRAP_Regression_4 Investigations
using(DataProvider.Tc_139490, async function (data) {

    describe("CDRAP_Regression_4 Investigations", () => {

        let upcomingRoadTestDate: string;

        //TC #157971
        it("Should open CDRAP url", async () => {
            await cdrapHomePage.openUrl(cdrapHomePage.cdrapUrl);
        });

        it("Verifying that CDRAP page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toBe(data.loginTitle);
        });

        it("Login into CDRAP application ", async () => {
            await cdrapHomePage.loginIntoCdrap(data.username, data.password, data.submit);
        });

        it("Verifying that CDRAP Logged in Home page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.cdrapHomeTitle);
        });

        //TC #139490
        it("Click the Investigations hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.investigationsLink);
        });

        it("Verifying that Investigation summary screen is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.investigationSummaryScreenTitle);
        });

        it("Underneath Pending Hard Date, click on the One Day Rehires hyperlink", async () => {
            await investigationSearchPage.clickOnLinkInInvestigationSummary(data.oneDayRehiresLink);
        });

        it("Verifying that radial button underneath Type of Roster moved to Unscheduled", async () => {
            await expect(investigationSearchPage.isRadioButtonSelected(data.labelUnscheduled, data.unscheduledRadioButtonValue)).toBeTruthy();
        });

        it("Verifying that radial button underneath Show / No Show moved to Both", async () => {
            await expect(investigationSearchPage.isRadioButtonSelected(data.labelBoth, data.bothRadioButtonValue)).toBeTruthy();
        });

        it("Should click on the hyperlink underneath Current Week Road Tests ", async () => {
            await investigationSearchPage.clickOnLinkInInvestigationSummary(await investigationSearchPage.getCurrentWeekDate());
        });

        it("Verifying that radial button underneath Type of Roster moved to Road Test", async () => {
            await expect(investigationSearchPage.isRadioButtonSelected(data.labelRoadTest, data.roadTestRadioButtonValue)).toBeTruthy();
        });

        it("Verifying that radial button underneath Show / No Show moved to Show", async () => {
            await expect(investigationSearchPage.isRadioButtonSelected(data.labelShow, data.showRadioButtonValue)).toBeTruthy();
        });

        it("Verify the text boxes next to Date Range populate with the current date", async () => {
            await expect(investigationSearchPage.getPopulatedFromAndToDate()).toBe(investigationSearchPage.getCurrentWeekDate());
        });

        it("Should click on the hyperlink underneath Upcoming Road Tests", async () => {
            upcomingRoadTestDate = await investigationSearchPage.getElementText(investigationSearchPage.upcomingRoadTestsDate); 
            await investigationSearchPage.click(investigationSearchPage.upcomingRoadTestsDate);
        });

        it("Verifying the text boxes next to Date Range populate with the date", async () => {
            let date = upcomingRoadTestDate.split(data.comma);
            upcomingRoadTestDate = date[1].trim().substr(0,10);
            await expect <any> (investigationSearchPage.getPopulatedFromAndToDate()).toBe(upcomingRoadTestDate);
        });

    });

});