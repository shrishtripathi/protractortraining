import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { CustomerPoolPage } from "../../pages/freight_manager/customer-pool.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { UnitViewParameterPage } from "../../pages/freight_manager/unit-view-parameter.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { HazmatVerificationPage } from "../../pages/safety_briefing/hazmat-verification.po";
import { SafetyHomePage } from "../../pages/safety_briefing/safety-briefing-home.po";
import { HighValueBriefingPage } from "../../pages/safety_briefing/high-value-briefing.po";

let freightManager2Page = new FreightManager2Page();
let unitViewPage = new UnitViewPage();
let unitViewParameterPage = new UnitViewParameterPage();
let pickupviewPage = new PickupviewPage();
let orderSegmentPage = new OrderSegmentPage();
let customerPoolPage = new CustomerPoolPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let myJbHuntHomePage = new MyJbHuntHomePage();

export class FM2E2EComponents {    

    // Create Preplan -- Done
    async createPreplan(loadData, tractorData, data) {

        describe("FM2 Preplan", function () {

            it("Should open browser and enter url' ", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Should hover over the Planning tab, click Order Segment to select.", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });

            it("Should enter the earlier noted load number,In the white text box underneath Order#", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, 'Order #');
            });

            it("Should click on Search button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("Should click the radial button next to Tractor", async () => {
                await orderSegmentPage.selectRadioPreplanType(data.radialValue);
            });

            it("Should enter the earlier noted driver number in the white text box underneath Tractor", async () => {
                await orderSegmentPage.enterTractorNumber(tractorData.unitNumber);
            });

            it("Click all check boxes.", async () => {
                await orderSegmentPage.selectAllCheckBox();
            });
    
            it("In the white text box underneath TCall Location, enter the origin ramp (for this example my origin ramp is D?). ", async () => {
                await orderSegmentPage.EnterTcall(loadData.originRamp, " Origin Ramp value");
            });           

            it("Should click the Create preplan button. IF REQUIRED, click the Continue button). ", async () => {
                await orderSegmentPage.clickOnCreatePreplanButton();
            });

            it("Verifying that Tractor Preplan successful message is displayed", async () => {
                let result: string = await orderSegmentPage.getFM2TractorPreplanSuccessMessage(data.successMessage);
                await expect(result).not.toBe('');
            });

        });
        
    }
    async preplanForICSFlatBedfm2(loadData, tractorData, data) {

        describe("Preplan For ICS FlatBed FM2", function () {

            it("Should open browser and enter url' ", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Should hover over the Planning tab, click Order Segment to select.", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });

            it("Should enter the earlier noted load number,In the white text box underneath Order#", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, 'Order #');
            });

            it("Should click on Search button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("In the empty white text boxes underneath Project and Carrier, enter your project code (ex.DALT) for project and MGAS for carrier.", async () => {
               // await orderSegmentPage.selectRadioPreplanType(data.radialValue);
            });

            it("Should click the Create preplan button. IF REQUIRED, click the Continue button). ", async () => {
               // await orderSegmentPage.clickOnCreatePreplanButton();
            });

            it("You will then be able to see a blue box at the top saying Carrier Preplan Successful ", async () => {
               /// let result: string = await orderSegmentPage.getFM2TractorPreplanSuccessMessage(data.successMessage);
               // await expect(result).not.toBe('');
            });
            it("You will also be able to look to the right under Project/Carrier and see your project and carrier code entered", async () => {
               // let result: string = await orderSegmentPage.getFM2TractorPreplanSuccessMessage(data.successMessage);
               // await expect(result).not.toBe('');
            });



            
        });
    }



    // Find A JBC Driver -- Done
    async findingAJbcDriver(data) {
        describe('Finding a JBC Driver', () => {

            it('Should Navigate to Freight Manager2 url', async () => {
                await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
            });

            it("Should select 'Unit View' under planning tab", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
            });

            it("Should Enter Board Codes", async () => {
                await unitViewPage.enterBarCodes(data.boardCode1, 1);
                await unitViewPage.enterBarCodes(data.boardCode2, 2);
                await unitViewPage.enterBarCodes(data.boardCode3, 3);
                await unitViewPage.enterBarCodes(data.boardCode4, 4);
                await unitViewPage.clickOnSearchButton();
            });

            it("Should Select driver from the displayed search results", async () => {
                data.unitNumber = await unitViewPage.getAvailableTractor(data.dSPSTT, data.oBCError);
                data.unitNumber = data.unitNumber.trim();
            });

            it("Verifying the other columns data from Serach results", async () => {
                await expect<any>(unitViewPage.validateBarCodeSearchResults(data.unitNumber)).toBeTruthy();
            });

        });
    }
    
    // Find Equipment -- Done
    async findingAEquipmentNumber(data) {
        let equipmentNumber: string;
        describe("Finding equuipment number", () => {

            it("Should open homepage", async () => {
                await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
            });

            it("Should click on Customer Pool option under Equipment tab", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.equipmentTab, data.optionCustomerPool);
            });

            it("Should set values in customer pool page", async () => {
                await customerPoolPage.setValuesInEquipmentPoolLookup(data.customerPool_Division, data.customerPool_CustCode, "", "");
            })

            it("Should click on search button on customer Pool screen", async () => {
                await customerPoolPage.clickSearchButton();
            });

            it("Should find equipment number with prefix JBHZ and LT St Empty", async () => {
                equipmentNumber = await customerPoolPage.getEquipmentNumberFromCustomerPoolTable(data.customerPool_Column1, data.customerPool_Column1Value, data.customerPool_Column2, data.customerPool_Column2Value, data.customerPool_RequiredColumn);
                data.equipmentNumber = equipmentNumber.trim();
            });
        });
    }

    // Load Dispatch Without Comment  -- Done
    async loadDispatchWithoutComment(dispatchData, loadData, driverData) {
        
        describe("Load Dispatch Without Comment", function () {

            it("should open homepage", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });            
    
            it("Click on Order Segment Option", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(dispatchData.tabName, dispatchData.optionOrderSegment);
            });

            it("Enter the order Number on Order Segment screen", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, "Order Number");
            });

            it("Click on Search button on Order Segment screen", async () => {
                await orderSegmentPage.clickSearchButton();
            });

            it("Click the driver number hyperlink underneath Power Driver", async () => {
                await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(driverData.unitNumber);
            });

            it("verify Check Calls Details screen opens", async () => {
                await checkCallDetailsPage.verifyCheckCallDetailsPage();
            });            

            it("Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(dispatchData.headerOptionStatus);
            });

            it("Click on dispatch option", async () => {
                await freightManager2Page.clickHeaderDropDownOption(dispatchData.headerDropDownOptionDispatch);
            });

            it("Wait till dispatch window opens", async () => {
                await checkCallDetailsPage.waitTillDispatchWindowLoad();
            });

            it("Click on update button on dispatch window", async () => {
                await checkCallDetailsPage.clickOnUpdateOnPopup();
            });

            it("Verify Dispatch is completed", async () => {
                let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(dispatchData.transactionValue);
                await expect(result).toBeTruthy();
            });

        });
    }
    
    // Load Dispatch Verification -- Done
    async dispatchVerification(loadData, data) {

        describe("FM2 Dispatch Verification", function() {

            it("Should Navigate Back To Freight Manager Application And Login If Required", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });
    
            it("Should Hover Over The Planning Tab, Click Order Segment To Select", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });
    
            it("Should Enter Load Number In The White Text Box Underneath Order#", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, 'Order #');
            });
    
            it("Should Click On Search Button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });
    
            it("Should Click the driver number hyperlink underneath Power Driver. ", async () => {
                 await orderSegmentPage.clickDriverLink();
            });

            it("Verifying Dipatch Details Under Remarks Column Of Check Call History", async () => {
                await expect<any>(checkCallDetailsPage.verifyDispatchDetailsOfRemarksColumnCheckCallHistory()).toContain(data.dispatchText);
            });

            it("Verifying Status Under Type Column Of Check Call History", async () => {
                await expect<any>(checkCallDetailsPage.verifyCompleteDetailsOfTypeColumnCheckCallHistory()).toContain(data.completeText);
            });

        })
    }

    // Multi PickDrop Check Call -- Done
    async multiPickDropCheckCalls(checkCallData, loadData, driverData) {

        describe("FM2 Multi Pick/Drop Check Calls", () => {

            it("Should Open browser and enter url' ", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Should Hover over the Planning tab, click Order Segment to select.", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(checkCallData.tabName, checkCallData.tabOption);
            });

            it("In the white text box underneath Order#, enter the earlier noted load number,", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, 'Order #');
            });

            it("Should Click on Search button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("Verifying that Power Driver is displayed", async function () {
                await expect<any>(orderSegmentPage.verifyPreplannedOrder(checkCallData.tableId, checkCallData.power, checkCallData.driver)).toBe(driverData.unitNUmber);
            });

            it("Should Click on Power Driver", async function () {
                await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(driverData.unitNumber);
            });

            it("Verifying Check Calls Details screen opens", async () => {
                await checkCallDetailsPage.verifyCheckCallDetailsPage();
            });

            it("Should Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(checkCallData.checkcalltabName);
            });

            it("Should click on Arrival/Loaded option under Status tab", async () => {
                await freightManager2Page.clickHeaderDropDownOption(checkCallData.checkCalloption);
            });

            it("Enter Arrival/Load Details", async () => {
                await checkCallDetailsPage.enterArrivalAndLoadDetails(checkCallData.arrivalTime, checkCallData.loadTime, checkCallData.quantity, checkCallData.weight, checkCallData.seal, checkCallData.poNbr, checkCallData.bolNbr);
            });
            it("Click on Update Button", async () => {
                await freightManager2Page.clickHeaderDropDownOption(checkCallData.checkCalloption);
            });

            // Repeating as per TC

            it("Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(checkCallData.checkcalltabName);
            });

            it("Should click on Arrival/Loaded option under Status tab", async () => {
                await freightManager2Page.clickHeaderDropDownOption(checkCallData.checkCalloption);
            });

            it("Enter Arrival/Load Details", async () => {
                await checkCallDetailsPage.enterArrivalAndLoadDetails(checkCallData.arrivalTime1, checkCallData.loadTime1, checkCallData.quantity, checkCallData.weight, checkCallData.seal, checkCallData.poNbr, checkCallData.bolNbr);
            });

            it("Click on Update Button", async () => {
                await freightManager2Page.clickHeaderDropDownOption(checkCallData.checkCalloption);
            });

        });

    }


    // Load Dispatch With Comment -- Done
    async loadDispatchWithComment(dispatchData, loadData, driverData) {
        describe("Load Dispatch With Comment", function () {

            it("should open homepage", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });            
    
            it("Click on Order Segment Option", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(dispatchData.tabName, dispatchData.optionOrderSegment);
            });

            it("Enter the order Number on Order Segment screen", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, "Order Number");
            });

            it("Click on Search button on Order Segment screen", async () => {
                await orderSegmentPage.clickSearchButton();
            });

            it("Click the driver number hyperlink underneath Power Driver", async () => {
                await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(driverData.unitNumber);
            });

            it("verify Check Calls Details screen opens", async () => {
                await checkCallDetailsPage.verifyCheckCallDetailsPage();
            });

            it("Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(dispatchData.headerOptionStatus);
            });

            it("Click on Comment option", async () => {
                await freightManager2Page.clickHeaderDropDownOption(dispatchData.headerDropDownOptionComment);
            });

            it("Wait till Comment window opens", async () => {
                await checkCallDetailsPage.waitTillDispatchWindowLoad();
            });

            it("Enter details in Comment Tab", async () => {
                await customerPoolPage.enterDetailsInCommentPopup(dispatchData.commentPopup_TrlrCode, dispatchData.equipmentNo);
            });

            it("Click on update button on Comment window", async () => {
                await checkCallDetailsPage.clickOnUpdateOnPopup();
            });

            it("Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(dispatchData.headerOptionStatus);
            });

            it("Click on dispatch option", async () => {
                await freightManager2Page.clickHeaderDropDownOption(dispatchData.headerDropDownOptionDispatch);
            });

            it("Wait till dispatch window opens", async () => {
                await checkCallDetailsPage.waitTillDispatchWindowLoad();
            });

            it("Click on update button on dispatch window", async () => {
                await checkCallDetailsPage.clickOnUpdateOnPopup();
            });

            it("Verify Dispatch is completed", async () => {
                let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(dispatchData.transactionValue);
                await expect(result).toBeTruthy();
            });

        });
    }
    
    // High Value And Hazmat Check Calls -- Done
    async highValueAndHazmatCheckCalls(checkCallData, loadData, driverData){

        describe("High Value And Hazmat Check Calls", () => {

            it("Should Open browser and enter url' ", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Should Hover over the Planning tab, click Order Segment to select.", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(checkCallData.tabName, checkCallData.tabOption);
            });

            it("In the white text box underneath Order#, enter the earlier noted load number,", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, 'Order #');
            });

            it("Should Click on Search button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("Verifying that Power Driver is displayed", async function () {
                await expect<any>(orderSegmentPage.verifyPreplannedOrder(checkCallData.tableId, checkCallData.power, checkCallData.driver)).toBe(driverData.unitNUmber);
            });

            it("Click on Power Driver", async function () {
                await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(driverData.unitNumber);
            });

            it("verify Check Calls Details screen opens", async () => {
                await checkCallDetailsPage.verifyCheckCallDetailsPage();
            });

            it("Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(checkCallData.checkcalltabName);
            });

            it("Should click on Arrival/Loaded option under Status tab", async () => {
                await freightManager2Page.clickHeaderDropDownOption(checkCallData.checkCalloption);
            });

            it("Should Enter Arrival/Load Details", async () => {
                await checkCallDetailsPage.enterArrivalAndLoadDetails(checkCallData.arrivalTime, checkCallData.loadTime, checkCallData.quantity, checkCallData.weight, checkCallData.seal, checkCallData.poNbr, checkCallData.bolNbr);
            });
            
            it("Should Click on Update Button", async () => {
                await freightManager2Page.clickHeaderDropDownOption(checkCallData.checkCalloption);
            });
        });

    }


    // it("Take note of the Chassis number", async () => {
    //     chassisNo = await checkCallDetailsPage.getElementText(checkCallDetailsPage.chassisNumber);
    //     dispatchData.chassisNo = chassisNo.trim();
    //     expect(chassisNo).not.toBeUndefined();
    // });


    //FM2 Multi Pick/Drop Check Calls
    async fm2MultiPickOrDropCallCheck(checkCallData, loadData, driverData) {

        describe("FM2 Multi Pick/Drop Check Calls", () => {

            it("open browser and enter url' ", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Hover over the Planning tab, click Order Segment to select.", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(checkCallData.tabName, checkCallData.tabOption);
            });

            it("In the white text box underneath Order#, enter the earlier noted load number,", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, 'Order #');
            });

            it("Click on Search button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("Verifying that Power Driver is displayed", async function () {
                await expect<any>(orderSegmentPage.verifyPreplannedOrder(checkCallData.tableId, checkCallData.power, checkCallData.driver)).toBe(driverData.unitNUmber);
            });

            it("Click on Power Driver", async function () {
                await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(driverData.unitNumber);
            });

            it("verify Check Calls Details screen opens", async () => {
                await checkCallDetailsPage.verifyCheckCallDetailsPage();
            });

            it("Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(checkCallData.checkcalltabName);
            });

            it("Should click on Arrival/Loaded option under Status tab", async () => {
                await freightManager2Page.clickHeaderDropDownOption(checkCallData.checkCalloption);
            });

            it("Enter Arrival/Load Details", async () => {
                await checkCallDetailsPage.enterArrivalAndLoadDetails(checkCallData.arrivalTime, checkCallData.loadTime, checkCallData.quantity, checkCallData.weight, checkCallData.seal, checkCallData.poNbr, checkCallData.bolNbr);
            });
            it("Click on Update Button", async () => {
                await freightManager2Page.clickHeaderDropDownOption(checkCallData.checkCalloption);
            });

            // Repeating as per TC

            it("Hover status Option from header", async () => {
                await freightManager2Page.hoverOverFM2PageHeaderOption(checkCallData.checkcalltabName);
            });

            it("Should click on Arrival/Loaded option under Status tab", async () => {
                await freightManager2Page.clickHeaderDropDownOption(checkCallData.checkCalloption);
            });

            it("Enter Arrival/Load Details", async () => {
                await checkCallDetailsPage.enterArrivalAndLoadDetails(checkCallData.arrivalTime1, checkCallData.loadTime1, checkCallData.quantity, checkCallData.weight, checkCallData.seal, checkCallData.poNbr, checkCallData.bolNbr);
            });

            it("Click on Update Button", async () => {
                await freightManager2Page.clickHeaderDropDownOption(checkCallData.checkCalloption);
            });

        });

    }

    ////FM2 Parameters Unit View
    async fm2ParametersUnitView(data) {

        describe("FM2 Parameters Unit View", function () {

            it("Open My JBHunt url", async () => {
                await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
            });
    
            it("Should select 'Unit View' under planning tab", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
            });
    
            it("Should click on 'Parameter' Button", async () => {
                await unitViewPage.clickOnParameterButton();
            });
    
            it("Should set Division to 'HJBT JBVAN'", async () => {
                await unitViewParameterPage.selectDivision(data.division);
            });
    
            it("Should click the radial button next to Board,Underneath Select Type ", async () => {
                await unitViewParameterPage.setParameterRadioAndChechBox(data.fieldSelectType, data.selectTypeOption)
            });
    
            it("Should click the radial button next to All,Underneath Begin Date ", async () => {
                await unitViewParameterPage.setParameterRadioAndChechBox(data.fieldBeginDate, data.beginDateAllOption)
            });
    
            it("Should click the radial button next to All,Underneath End Date", async () => {
                await unitViewParameterPage.setParameterRadioAndChechBox(data.fieldEndDate, data.endDateAllOption)
            });
    
            it("Should click the radial button next to Show All,Underneath Show Preplanned Units,  ", async () => {
                await unitViewParameterPage.setParameterRadioAndChechBox(data.fieldPreplannedUnits, data.preplannedUnitsShowAllOption)
            });
    
            it("Should click the checkbox next to All,Underneath Unit Status", async () => {
                await unitViewParameterPage.selectCheckBoxOption(data.fieldUnitStatus, data.unitStatusAllOption)
            });
    
            it("Should click the checkbox next to All,Underneath Next Utilization", async () => {
                await unitViewParameterPage.selectCheckBoxOption(data.fieldNextUtilization, data.NextUtilizationAllOption)
            });
    
            it("should enter Board Codes", async () => {
                await unitViewParameterPage.enterSelectTypeCode(data.codeName, 1, data.boardCode1);
                await unitViewParameterPage.enterSelectTypeCode(data.codeName, 2, data.boardCode2);
                await unitViewParameterPage.enterSelectTypeCode(data.codeName, 3, data.boardCode3);
                await unitViewParameterPage.enterSelectTypeCode(data.codeName, 4, data.boardCode4);
            });
    
            it("Should click Order Number, Underneath Available Fields, then click the green + icon.", async () => {
                await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.orderNumber);
                let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.orderNumber);
                expect(flag).toBeTruthy();
            });
    
            it("Should click Driver Alpha Code, Underneath Available Fields, then click the green + icon.", async () => {
                await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.driverAlphaCode);
                let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.driverAlphaCode);
                expect(flag).toBeTruthy();
            });
    
            it("Should click Assigned Trailer Type, Underneath Available Fields, then click the green + icon.", async () => {
                await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.assignedTrailerType);
                let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.assignedTrailerType);
                expect(flag).toBeTruthy();
            });
    
            it("Should click Delv Appt Date, Underneath Available Fields, then click the green + icon. ", async () => {
                await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.delvApptDate);
                let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.delvApptDate);
                expect(flag).toBeTruthy();
            });
    
            it("Should click Driver Hazmat Qualified, Underneath Available Fields, then click the green + icon", async () => {
                await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.driverHazmat);
                let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.driverHazmat);
                expect(flag).toBeTruthy();
            });
    
            it("Should click Driver Fleet Manager, Underneath Available Fields, then click the green + icon.", async () => {
                await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.driverFleetManager);
                let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.driverFleetManager);
                expect(flag).toBeTruthy();
            });
    
            it("Should  click Fleet Code, Underneath Available Fields, then click the green + icon.", async () => {
                await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.fleetCode);
                let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.fleetCode);
                expect(flag).toBeTruthy();
            });
    
            it("Click on Save Parameter Button", async () => {
                await unitViewParameterPage.clickOnSaveParameterButton();
            });
        });

    }

    //FM2 Parameters Pickup
    async fm2ParametersPickUp(data) {

        describe("parameters Pickup", function () {

            it("Should Open FM2 url", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2)
            });
    
            it("Should select 'PICK UP' under planning tab", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.pickUpOption);
            });
    
            it("Click the dropdown tab underneath Type, click to select A - Area", async () => {
                await pickupviewPage.selectType();
            });
    
            it("Should type 'HJBT JBVAN' in division field ", async () => {
                await pickupviewPage.enterDivision(data.strDivison);
            });
    
            it("Should type 'MKT' in Area type field ", async () => {
                await pickupviewPage.clearAreaType();
                await pickupviewPage.enterAreaType(data.strAreaType);
            });
    
            it("Should type 'DA' in Area field ", async () => {
                await pickupviewPage.enterArea(data.strArea);
            });
    
            it("Should type 'I' in Tran Md  field ", async () => {
                await pickupviewPage.enterTranMd(data.strTranMd);
            });
    
            it("Click save pref on Pick up view page", async () => {
                await pickupviewPage.clickSavePrefsButton();
            });
    
            it("Verify save preference success message", async () => {
                await pickupviewPage.waitForResult()
                await pickupviewPage.actions.waitUntilElementPresenceOf(pickupviewPage.successOrErrorMessage)
                let verify_message: string = await pickupviewPage.getElementText(pickupviewPage.successOrErrorMessage)
                expect(verify_message).toContain(data.message);
            });
    
        });
    }

    //FM2 Check Call Verifications
    async fm2CheckCallVerifications(loadData, data) {

        describe("FM2 Check Call Verifications", function() {

            it("Should Navigate Back To Freight Manager Application And Login If Required", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });
    
            it("Should Hover Over The Planning Tab, Click Order Segment To Select", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });
    
            it("Should Enter Load Number In The White Text Box Underneath Order#", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, 'Order #');
            });
    
            it("Should Click On Search Button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });
    
            it("Should Click the driver number hyperlink underneath Power Driver. ", async () => {
                 await orderSegmentPage.clickDriverLink();
            });

            it("Verifying Dipatch Details Under Remarks Column Of Check Call History", async () => {
                await expect<any>(checkCallDetailsPage.verifyDispatchDetailsOfRemarksColumnCheckCallHistory()).toContain(data.dispatchText);
            });

            it("Verifying Status Under Type Column Of Check Call History", async () => {
                await expect<any>(checkCallDetailsPage.verifyCompleteDetailsOfTypeColumnCheckCallHistory()).toContain(data.completeText);
            });

        })
    }

    async fm2OnePickDropLoadVerification(loadData, data) {
        describe("FM2 Load Create Verification", async () => {

            it("open browser and enter url' ", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });
    
            it("Hover over the Planning tab, click Order Segment to select.", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });
    
            it("In the white text box underneath Order#, enter the earlier noted load number,", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, 'Order #');
            });
    
            it("Click on Search button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });
    
            it("Verify Order Number is displayed", async () => {
                expect(orderSegmentPage.verifyOrderNumber(loadData.orderNumber)).toBeTruthy();
            });

        });
    }

    // Create Preplan -- Done
    async createTruckPreplan(loadData, tractorData, data) {

        describe("FM2 Preplan", function () {

            it("Should open browser and enter url' ", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Should hover over the Planning tab, click Order Segment to select.", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });

            it("Should enter the earlier noted load number,In the white text box underneath Order#", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, 'Order #');
            });

            it("Should click on Search button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("Should click the radial button next to Tractor", async () => {
                await orderSegmentPage.selectRadioPreplanType(data.radialValue);
            });

            it("Should enter the earlier noted driver number in the white text box underneath Tractor", async () => {
                await orderSegmentPage.enterTractorNumber(tractorData.unitNumber);
            });                    

            it("Should click the Create preplan button. IF REQUIRED, click the Continue button). ", async () => {
                await orderSegmentPage.clickOnCreatePreplanButton();
            });

            it("Verifying that Tractor Preplan successful message is displayed", async () => {
                let result: string = await orderSegmentPage.getFM2TractorPreplanSuccessMessage(data.successMessage);
                await expect(result).not.toBe('');
            });

        });
    }

    async icsTenderLoad(loadData, data) {
        describe("FM2 ICS Tender Load", function () {
            it("Should Navigate Back To Freight Manager Application And Login If Required", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Should Hover Over The Planning Tab, Click Order Segment To Select", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });

            it("Should Enter Load Number In The White Text Box Underneath Order#", async () => {
                await orderSegmentPage.enterOrderNumber(loadData.orderNumber, 'Order #');
            });

            it("Should Click On Search Button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("Ensure Project/Carrier is selected,enter 1954 for Project and enter MGAS for Carrier", async () => {
                await orderSegmentPage.enterProjectCarrierNumber(data.projectCode, data.carrierCode);
            });

            it("Should lick Create Preplan", async () => {
                await orderSegmentPage.clickOnCreatePreplanButton();
            });

            it("Should click Radial button ", async () => {
                await orderSegmentPage.clickRadiobtn();
            });

            it(" Should click on Create Tender ", async () => {
                await orderSegmentPage.clickCreateTenderButton();
            });

            it("Verifying that Carrier Preplan successful message is displayed", async () => {
                let result: string = await orderSegmentPage.getFM2TractorPreplanSuccessMessage(data.successMessage);
                await expect(result).not.toBe('');
            });
        });
    }
}