import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
import { DwellPage } from "../../pages/openbox_management/dwell.po";
import { CommonFunctions } from "../../utilities/common-functions";

let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();
let dwellPage = new DwellPage();
let commonFunctions=new CommonFunctions();

//Tc# 158504 - Box Management System App- DWELL TAB- ADD ORDER COMMENT (via De-ramped Trailer Summary Screen)
using(DataProvider.Tc_158504, async function (data) {

    describe("DWELL TAB- Add order comments via De-ramped trailer", function () {
        let loadNumber;
        let randomText;

        it("Should open Open Box Management url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on Dwell tab and selct Deramped option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName,data.optionName);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.outGatedSummaryScreenTitle);
        });

        it("Should click on 'NOTASGN' to radio button", async () => {
            await dwellPage.click(dwellPage.notasgnRadioButton);
        });

        it("Should click on Search button", async () => {
            await dwellPage.click(dwellPage.searchButton);
            await dwellPage.waitForActionToComplete();
        });

        it("Should click on publication", async () => {
            await dwellPage.click(trailerPage.publication);
            await dwellPage.waitForActionToComplete();
        });

       
        it("Should click on checkbox", async () => {
            await dwellPage.click(dwellPage.loadNumberCheckBox);
            await dwellPage.waitForActionToComplete();
        });

        it("Should take note of load number", async () => {
            loadNumber = await trailerPage.getElementText(dwellPage.loadNumber);
        });

        it("Should click on add order comments button", async () => {
            await dwellPage.click(dwellPage.addOrderCommentButton);
            await dwellPage.waitForActionToComplete();
        });
                
        it("Verifying add order comments page is displayed", async () => {
            await expect<any>(trailerPage.verifyPageDisplayed(data.text)).toContain(data.text);
        });

        it("Should click on cancle button", async () => {
            await dwellPage.click(dwellPage.cancleButton)
        });

        it("Should click on add order comments button", async () => {
            await dwellPage.click(dwellPage.addOrderCommentButton);
            await dwellPage.waitForActionToComplete();
        });

        it("Should enter random test in comment box", async () => {
            randomText=await commonFunctions.randomNameGenarator(5);
            await dwellPage.setText(dwellPage.addOrderCommentsInputField,randomText);
        });

        it("Should click on Update Button", async () => {
            await dwellPage.click(dwellPage.updateButton);
        });

        it("Should verify Succcess message", async () => {
            await expect<any>(dwellPage.getText(dwellPage.successMessage)).toBe(data.successMessage)
        });

        it("Should click on checkbox", async () => {
            await dwellPage.click(dwellPage.loadNumberCheckBox);
            await dwellPage.waitForActionToComplete();
        });

        it("Should click on view order comments button", async () => {
            await dwellPage.click(dwellPage.viewOrderCommentsButton);
            await dwellPage.waitForActionToComplete();
        });

        it("Verifying view order comments page is displayed", async () => {
            await expect<any>(trailerPage.verifyPageDisplayed(data.viewText)).toContain(loadNumber);
        });

        it("Should click on Last Button", async () => {
            await dwellPage.click(dwellPage.lastButton);
            await dwellPage.waitForActionToComplete();
        });

        it("Verifying comment in view order comments", async () => {
            await expect<any>(dwellPage.verifyMessage(randomText)).toBe(randomText);
        });

        it("Should click on close button", async () => {
            await dwellPage.click(dwellPage.closeButton);
        });

    });

});