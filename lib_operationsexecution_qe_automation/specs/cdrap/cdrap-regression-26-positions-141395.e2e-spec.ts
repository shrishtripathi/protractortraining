import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { PositionPipeLineSummaryPage } from "../../pages/cdrap/position-pipeline-summary-page.po";

let cdrapHomePage = new CdrapHomePage();
let positionPipeLineSummaryPage = new PositionPipeLineSummaryPage();
let using = require('jasmine-data-provider');

describe("CDRAP_Regression_26 Positions", () => {

    //TC #141395: CDRAP_Regression_26 Positions
    using(DataProvider.Tc_157971, async function (data) {

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

    });

    using(DataProvider.Tc_141395, async function (data) {

        it("Should click the Positions hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.positionsLink);
        });

        it("Verifying that Positions Pipeline Summary screen is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.positionsPipelineSummaryTitle);
        });

        it("Should select ARKANSAS option from State dropdown", async () => {
            await positionPipeLineSummaryPage.setOptionFromDropDown(positionPipeLineSummaryPage.pipelineStateDropDownOptions, data.pipeonlyStateDropDownValue, positionPipeLineSummaryPage.pipelineStateDropDown);
        });

        it("Should click on Search Button", async () => {
            await positionPipeLineSummaryPage.clickOnButton(data.search);
        });

        it("Should click a hyperlink underneath the Job Description column ", async () => {
            await positionPipeLineSummaryPage.click(positionPipeLineSummaryPage.jobDescriptionLink);
            await positionPipeLineSummaryPage.switchToWindow(data.one);
        });
       
        it("Verifying that new tab will open at the Edit Job page", async () => {
            expect(await positionPipeLineSummaryPage.getPageTitle()).toBe(data.editJob);
        });

        it("Should close the Edit Job window", async () => {
            await positionPipeLineSummaryPage.closeWindow();
            await positionPipeLineSummaryPage.switchToWindow(data.zero);
        });

        it("Should click the Reset Button", async () => {
            await positionPipeLineSummaryPage.clickOnButton(data.reset);
        });

        it("Should click the Create New Button", async () => {
            await positionPipeLineSummaryPage.clickOnButton(data.createNew);
            await positionPipeLineSummaryPage.switchToWindow(data.one);
        });

        it("Verifying that new tab will open at the Create New Job page", async () => {
            expect(await positionPipeLineSummaryPage.getPageTitle()).toBe(data.createNewJob);
        });

        it("Should close the Create New Job window", async () => {
            await positionPipeLineSummaryPage.closeWindow();
            await positionPipeLineSummaryPage.switchToWindow(data.zero);
        });

        it("Should click HR Postions tab", async () => {
            await positionPipeLineSummaryPage.click(positionPipeLineSummaryPage.hrPositionsTab);
        });
        
        it("Should select 'LOWAR01 | Lowell, AR - JB Hunt Corporate' option from Location dropdown", async () => {
            await positionPipeLineSummaryPage.setOptionFromDropDown(positionPipeLineSummaryPage.pipelineLocationDropDownOptions, data.pipeonlyLocationDropDownValue, positionPipeLineSummaryPage.pipelineLocationDropDown);
        });

        it("Should click on Search Button", async () => {
            await positionPipeLineSummaryPage.clickOnButton(data.search);
        });

        it("Should click a hyperlink Underneath the HR Job # column", async () => {
            await positionPipeLineSummaryPage.click(positionPipeLineSummaryPage.hrJobHyperLink);
            await positionPipeLineSummaryPage.switchToWindow(data.one);
        });
       
        it("Verifying that new tab will open at the HR Job Detail page", async () => {
            expect(await positionPipeLineSummaryPage.getPageTitle()).toBe(data.hrJobDetailTitle);
        });

        it("Should click On Close Button", async () => {
            await positionPipeLineSummaryPage.clickOnButton(data.close);
            await positionPipeLineSummaryPage.switchToWindow(data.zero);
        });

    });

});