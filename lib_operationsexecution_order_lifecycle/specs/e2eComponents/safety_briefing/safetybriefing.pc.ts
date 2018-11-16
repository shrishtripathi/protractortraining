import { HazmatVerificationPage } from "../../pages/safety_briefing/hazmat-verification.po";
import { SafetyHomePage } from "../../pages/safety_briefing/safety-briefing-home.po";
import { HighValueBriefingPage } from "../../pages/safety_briefing/high-value-briefing.po";

let hazmatVerificationPage = new HazmatVerificationPage();
let safetyHomePage = new SafetyHomePage();
let highValueBriefingPage = new HighValueBriefingPage();

export class SafetyBriefingE2EComponents {

        //Safety Briefing Hazmat
        async safetyBriefingHazmat(data) {

            describe('Safety Briefing Hazmat', () => {
    
                it('Should Navigate to Safety Briefing url', async () => {
                    await hazmatVerificationPage.navigateToAppHome(hazmatVerificationPage.safetyBriefingUrl);
                    await hazmatVerificationPage.waitForLoadingMask();
                });
        
                it('Should hover over Safety Briefing and Click on', async () => {
                    await hazmatVerificationPage.selectCreateNewBriefing();
                });
        
                it('Should set order number and Click OK', async () => {
                    await hazmatVerificationPage.setOrderNumber();
                });
        
                it('Should Click OK for Manager Instructions', async () => {
                    await hazmatVerificationPage.clickOkButton();
                });
        
                it('Should enter UN/NA Number', async () => {
                    await hazmatVerificationPage.enterUnNumber(data.unNum);
                });
        
                it('Should enter Material Weight', async () => {
                    await hazmatVerificationPage.enterUnNumber(data.materialWeight);
                });
        
                it('Should enter No. Of Packages', async () => {
                    await hazmatVerificationPage.enterNoOfPackage(data.noOfPackage);
                });
        
                it('Should enter Package Type', async () => {
                    await hazmatVerificationPage.enterPackageType();
                });     
                
                it('Should enter Package Type', async () => {
                    await hazmatVerificationPage.clickNext();
                });   
        
                it('Should Check Air Bag and enter emergency response telephone number', async () => {
                    await hazmatVerificationPage.clickAirBagCheckBox();
                    await hazmatVerificationPage.enterEmergencyTelephoneNumber(data.telNumber1, data.telNumber2, data.telNumber3);
                });
                
                it('Should enter Shipper Name', async () => {
                    await hazmatVerificationPage.enterShipperName(data.shipperName);
                });
        
                it('Should enter Emergency Response Provider Contract Number', async () => {
                    await hazmatVerificationPage.enterEmergencyContract(data.contractNumber);
                });
        
                it('Should click Next', async () => {
                    await hazmatVerificationPage.clickEmergencyInformationNext();
                });
                
                it('Should click Next', async () => {
                    await hazmatVerificationPage.clickConfirmNext();
                });
        
                it('Should check all checkboxes', async () => {
                    await hazmatVerificationPage.checkAllCheckBoxes();
                });
        
                it('Should click Ok to Confirm', async () => {
                    await hazmatVerificationPage.clickConfirmOk();
                });
            });
    
        }
    
        //Safety Briefing High Value
        async safetyBriefingHighValue(data) {
    
            describe("Safety Briefing High Value",() =>{
    
                it("Should open Safety Briefing url ", async ()=>{
                    await safetyHomePage.navigateToAppHome(safetyHomePage.safetyBriefingUrl);
                })
        
                it("Should over the Safety Briefing tab, and click Create New Briefing ", async ()=>{
                    await safetyHomePage.mouseOverTab(data.tabName);
                    await safetyHomePage.clickDropDownValue(data.dropDownOptions);
                })
        
                it("Should enter order number ", async ()=>{
                    await safetyHomePage.enterOrderNumber(data.orderNumber);
                })
        
                it("Shoulder select briefing type, click to select High value, click OK button ", async ()=>{
                    await safetyHomePage.selectBriefingType(data.briefingType);
                    await safetyHomePage.clickOKButton();
                })
        
                // they forget to add these 2 steps on the VSTS
                it("Should enter Trailer Prefix ", async ()=>{
                   await highValueBriefingPage.enterTrailerPrefix(data.trailerPrefix);
                   await highValueBriefingPage.enterTrailer(data.trailer)
                })
        
                it("Should click the next button", async ()=>{
                    await highValueBriefingPage.clickNextButton();
                })
        
                it("Should click the checkbox, this is a test and click Save button ", async ()=>{
                    await highValueBriefingPage.clickTestCheckBox();
                    await highValueBriefingPage.clickSaveButton();
                })
        
                it("Should click OK button", async ()=>{
                    await highValueBriefingPage.clickOKButton();
                })
            }) 
        }

}