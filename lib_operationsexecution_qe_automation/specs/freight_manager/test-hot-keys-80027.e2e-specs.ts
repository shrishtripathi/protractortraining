import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { PickupviewPage } from '../../pages/freight_manager/pick-up-view.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { ActionLibrary } from '../../utilities/action-library';
import { Driver } from 'selenium-webdriver/safari';
import { CheckCallDetailsPage } from '../../pages/freight_manager/check-call-details.po';
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let using = require('jasmine-data-provider');
//TC_80027:FM2_Regression_18 Test Hot Keys
using(DataProvider.Tc_80027, async function (data) {
    describe("Test hot Keys ", function () {
        
        it("Should Open My JBHunt url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
        });

        it("Should select 'PICK UP' under planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.pickUpOption);
        });

        it("Should select 'AREA - A' in type field ", async () => {
            await pickupviewPage.selectTypeArea();
        });

        it("Should type 'HJBT JBVAN' in division field ", async () => {
            await pickupviewPage.enterDivision(data.strDivison);
        });
    
        it("Should type 'MKT' in Area type field ", async () => {
            await pickupviewPage.enterAreaType(data.strAreaType);
        });
    
        it("Should type 'DA' in Area field ", async () => {
           await  pickupviewPage.enterArea(data.strArea);
        });
    
        it("Should type 'I' in Tran Md  field ", async () => {
            await pickupviewPage.enterTranMd(data.strTranMd);
        });
    
        it("should click search button", async () => {
            await pickupviewPage.clickSearchButton();
        });

        it("should click on Alt+? on keyBoard", async () => {
            await pickupviewPage.hotKeys(data.questionMark);
            await pickupviewPage.waitForActionToComplete();
            let appliactionKeys = await pickupviewPage.verifyHotKeysPane();
            await expect<any>(appliactionKeys).toBe(true);
        });

        it("should click on Alt+, on keyBoard", async () => {
            await pickupviewPage.clickSearchButton();
            await pickupviewPage.hotKeys(data.comma);
            let orderDetails = await pickupviewPage.verifyOrderDetails();
            await expect<any>(orderDetails).toBe(data.orderDetails);
        });

        it("should click on Alt+1 on keyBoard", async () => {
            await pickupviewPage.clickSearchButton();
            await pickupviewPage.hotKeys(data.one);
            let orderDetails = await pickupviewPage.verifyOrderDetails();
            await expect<any>(orderDetails).toBe(data.orderDetails);

        });

        it("should click on Alt+F7 on keyBoard", async () => {
            await pickupviewPage.clickSearchButton();
            await pickupviewPage.hotKeys(protractor.Key.F7);
            expect(await checkCallDetailsPage.verifyCheckCallDetailsPageTestHotKeys()).toBeTruthy();
        });

        it("should click on Alt+F12 on keyBoard", async () => {
            await pickupviewPage.hotKeys(protractor.Key.F12);
            await pickupviewPage.actions.selectWindow(0,"Switching to current window")
            expect(await pickupviewPage.verifyBrowserClose()).toBe(1);
        });

        it("should click on Alt+M on keyBoard", async () => {
            await pickupviewPage.clickSearchButton();
            await pickupviewPage.hotKeys(data.m);
            let mileageCalculator = await pickupviewPage.verifyMilageCalculator(data.m);
            await expect<any>(mileageCalculator).toBe(true);
        });


        it("should click on Alt+F1 on keyBoard", async () => {
            await pickupviewPage.clickSearchButton();
            await pickupviewPage.hotKeys(protractor.Key.F1);
            let errorMessage = await pickupviewPage.verifyErrorMessage();
            await expect<any>(errorMessage).toBe(data.errorMessage);
        });

        it("should click on Alt+F2 on keyBoard", async () => {
            await pickupviewPage.clickSearchButton();
            await pickupviewPage.hotKeys(protractor.Key.F2);
            let errorMessage = await pickupviewPage.verifyErrorMessage();
            await expect<any>(errorMessage).toBe(data.errorMessage);
        });

        it("should click on Alt+F3 on keyBoard", async () => {
            await pickupviewPage.clickSearchButton();
            await pickupviewPage.hotKeys(protractor.Key.F3);
            let errorMessage = await pickupviewPage.verifyErrorMessage();
            await expect<any>(errorMessage).toBe(data.errorMessage);
        });

        it("should click on Alt+F5 on keyBoard", async () => {
            await pickupviewPage.clickSearchButton();
            await pickupviewPage.hotKeys(protractor.Key.F5);
        });
    });
})