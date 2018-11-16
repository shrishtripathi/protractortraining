import {MyJbHuntHomePage} from '../../pages/my-jbhunt-home.po';
import { OBCExceptionsPage } from '../../pages/freight_manager/obc-exception.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { CheckCallDetailsPage } from '../../pages/freight_manager/check-call-details.po';
import { DataProvider } from "../../data/dataProvider";
import { browser } from 'protractor';
let homePage = new MyJbHuntHomePage();
let freightManagerPage = new FreightManager2Page();
let obcExceptionsPage=new OBCExceptionsPage();
let checkCallDetailsPage=new CheckCallDetailsPage();
let using=require('jasmine-data-provider');
//TC 80860: FM2_Regression_30 Check OBC exceptions 
using(DataProvider.Tc_80860, async function(data){
   
describe("Check OBC exceptions ", function(){

it("should open 'Freight Manager Page'",async function() {
    await homePage.openFm2Url();
});


it("should display 'Freight manager page'",async function() {
    let  pageTitle= await freightManagerPage.verifyFreightManagerPage();  
    expect(pageTitle).toEqual(data.freightManagerTitle);
});

it("should click on 'Driver Tab' in Freightmanager",async function() {
    await freightManagerPage.mouseOverToDriverTab();
});

it("should click on 'OBC Exception' Under Driver tab",async function() {
    await freightManagerPage.clickOnOBCExceptions();
});

it("should send data to 'Board Code Text Boxes'",async function() {
    await obcExceptionsPage.sendDataToMultipleBoardTextBoxes(data.BoardCode1,data.BoardCode2,data.BoardCode3,data.BoardCode4);
});

it("should click on 'Save Preferences Button' and user should see 'Preference save message'",async function() {
    let flag:boolean=await obcExceptionsPage.clickOnSavePreferences();
    expect(flag).toBeTruthy();
});

it("should click on 'Search Button'",async function() {
    await obcExceptionsPage.clickOnSearchButton();
});

it("should double click on 'MTY PP' and mini check call list opens  ",async function() {
    await obcExceptionsPage.doubleClickOnMTYPP();
   let flag= await obcExceptionsPage.isMiniCheckCallPresent();
   expect(flag).toBeTruthy();
});

it("should Double click on a different row again then Previous check call list will disappear.",async function() {
   let flag= await obcExceptionsPage.verifyMiniCheckCallAbsence();
   expect(flag).toBeFalsy();
});

it("should click on 'Tractor Number' in mini check call list",async function() {
    await obcExceptionsPage.clickOnTractorNumberUnderMiniCheckCall();
});

it("should display 'Check Call Details page'",async function() {
    let verifyCheckCalldetailsPage=await checkCallDetailsPage.verifyCheckCallDetailsPage();
    expect(verifyCheckCalldetailsPage).toBeTruthy();
});

});
})