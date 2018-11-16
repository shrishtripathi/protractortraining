import {SafetyHomePage} from '../../pages/safety_briefing/safety-briefing-home.po';
import {BasePage} from '../../pages/base.po';
import {MyJbHuntHomePage} from '../../pages/my-jbhunt-home.po';
import { DataProvider } from '../../data/dataProvider';
import { async } from 'q';
import { browser } from 'protractor';
import {HighValueBriefingPage} from '../../pages/safety_briefing/high-value-briefing.po';

let safetyHomePage = new SafetyHomePage();
let myJbHuntHomePage =new MyJbHuntHomePage();
let basePage =new BasePage();
let highValueBriefingPage = new HighValueBriefingPage();
let using= require('jasmine-data-provider');

// TC #185292: Safety Briefing High Value
using(DataProvider.Tc_185292, async function (data) {

    describe("Safety Briefing High Value",() =>{

        it("Should open Safety Briefing url ", async ()=>{
            await basePage.navigateToAppHome(basePage.safetyBriefingUrl);
        });

        it("Should over the Safety Briefing tab, and click Create New Briefing ", async ()=>{
            await safetyHomePage.mouseOverTab(data.tabName);
            await safetyHomePage.clickDropDownValue(data.dropDownOptions);
        });

        it("Should enter order number ", async ()=>{
            await safetyHomePage.enterOrderNumber(data.orderNumber);
        });

        it("Shoulder select briefing type, click to select High value, click OK button ", async ()=>{
            await safetyHomePage.selectBriefingType(data.briefingType);
            await safetyHomePage.clickOKButton();
        });

        // they forget to add these 2 steps on the VSTS
        it("Should enter Trailer Prefix ", async ()=>{
           await highValueBriefingPage.enterTrailerPrefix(data.trailerPrefix);
           await highValueBriefingPage.enterTrailer(data.trailer)
        });

        it("Should click the next button", async ()=>{
            await highValueBriefingPage.clickNextButton();
        });

        it("Should click the checkbox, this is a test and click Save button ", async ()=>{
            await highValueBriefingPage.clickTestCheckBox();
            await highValueBriefingPage.clickSaveButton();
        });

        it("Should click OK button", async ()=>{
            await highValueBriefingPage.clickOKButton();
        });

        it("Should be able to see your load number in the list", async ()=>{
            let ordernumbertable= await highValueBriefingPage.getOrderNumber();
            await expect(ordernumbertable).toBe(data.orderNumber);
        });

    });
    
});
