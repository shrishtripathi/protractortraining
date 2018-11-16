import { browser } from 'protractor';
import { DataProvider } from '../../data/dataProvider';
import { BasePage } from '../../pages/base.po';
import { FreightManager2Page } from '../../pages/eom/freight-manager-2.po';
import { CustomerPoolPage } from '../../pages/eom/customer-pool.po';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { EomSearchPage } from '../../pages/eom/eom-search-page.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { UnitViewPage } from '../../pages/eom/unit-view.po';
import { OrderSegmentPage } from '../../pages/eom/order-segment.po';
import { CheckCallDetailsPage } from '../../pages/eom/check-call-details.po';


let eomPage = new EnterpriseOrderManagementPage();
let eomSearchPage=new EomSearchPage();
let skeletonListingPage=new SkeletonListingPage();
let orderDetailsPage=new OrderDetailsViewPage();
let freightManagerPage=new FreightManager2Page();
let customerPoolPage=new CustomerPoolPage(); 
let unitViewPage=new UnitViewPage();
let orderSegmentPage=new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();

let using = require('jasmine-data-provider');

//TC#131722 -adding-a-stop
using(DataProvider.Tc_131715, async function (data) {
    describe("adding-a-stop", () => {
         
       let driverNumber=null;
       let  loadnumber1: string = null;
       let equipmentNumber=null;
       let eomWindowHandle=null;
       let fm2WindowHandle=null;

       it("Should open Eom Url", async () => {
           await eomPage.openEomUrl(); 
       });
       it("In the text box underneath Origin, enter LGFO18. Check the box next to HJBT JBDCS, make sure the boxes next to HJBT JBHA and HJBT JBVAN are UNCHECKED'", async () => {
             await eomPage.setDataInInputField(eomPage.originInputBox,data.originValue);
             await eomPage.unCheckHjbtCheckBoxes();
             await eomPage.click(eomPage.jbdcsCheckBox);
       });
       it("Should Click the Search Skeletons button", async () => {
             await eomPage.click(eomPage.searchSkeletonButton);
       });
       it("Should Look for a skeleton that has TRUCK underneath the Mode column. Click the green mouse icon underneath the Actions column'", async () => {
            await eomSearchPage.click(eomSearchPage.greenMouseIcon);
       });
       it("Should Click the NEXT>> button. (If no rate is found on the chosen skeleton", async () => {
           await skeletonListingPage.click(skeletonListingPage.nextButtonOnSelectPickUpDateScreen)
       });
       it("Should Click the dropdown tab next to Choose Reason Code,click to select ANY reason", async () => {
           await skeletonListingPage.selectRateCode(data.value);
       });
       it("Should Click the Book load without a rate button.", async () => {
            await skeletonListingPage.clickBookLoadWithoutRate();
       });
       it("Should Click the dropdown tab next to Load DETAIL.", async () => {
           await orderDetailsPage.click(orderDetailsPage.loadDetailsExtention);
       });
       it("Should Click the dropdown tab underneath FLEET, click to select DCS LDC833. Verify NO MONITORS are selected", async () => {
            await orderDetailsPage.selectValueFormFleetDropdown(data.fleetValue);
       });
       it("Should Click the dropdown tab next to Bill To", async () => {
            await orderDetailsPage.click(orderDetailsPage.billToExtention);
       });
       it("Should Verify NO CLASSIFICATIONS are selected.", async () => {
            let text=await orderDetailsPage.verifyClassificationText();
            expect(text.length).toBe(data.zero)
       });
       it("Should In the white text boxes for STOP 1, underneath SCHEDULED APPOINTMENT, and next to the current date, enter an appointment time. EXAMPLE 19:00 23:00", async () => {
             await orderDetailsPage.setScheduleAppointmentDate(data.days);
             await orderDetailsPage.scheduledAppointmentTimeSet(data.startTime,data.endTime);
       });
       it("Should In the white text boxes for STOP 99 underneath SCHEDULED APPOINTMENT, enter the day after tomorrows date, then enter an appointment time. EXAMPLE 19:00 23:00. ", async () => {
           await orderDetailsPage.setScheduleAppointmentDateEnd();
           await orderDetailsPage.scheduledAppointmentEndTimeSet(data.startTime,data.endTime);
          
       });
       it("Should At the top of the page, click the CREATE LOAD button", async () => {
             await orderDetailsPage.click(orderDetailsPage.createLoadButton)
       });
       it("Should Take note of the Load number.", async () => {
            loadnumber1= await orderDetailsPage.loadNumber();
            eomWindowHandle=await orderDetailsPage.getCurrentWindowHandle();
            console.log("eom window "+eomWindowHandle);
           console.log("laodnumber:1 " + loadnumber1);
           expect(loadnumber1).not.toBeNull();
       });
       // Tc_131709

       it("Should open Eom Url", async () => {
           await freightManagerPage.openUrlInNewTab(freightManagerPage.fm2Url); 
       });
       it("Hover over the Equipment tab, click to select Customer Pool. ", async () => {
          await freightManagerPage.mouseOverToTab(freightManagerPage.equipmentTab);
          await freightManagerPage.click(freightManagerPage.customerPool);
       });
       it("Click the dropdown tab next to Division, click to select HJBT JBVAN", async () => {
            await customerPoolPage.selectDivision(data.selectDropdownValue)
       });
       it("In the empty white text box next to Cust Code, enter LGFO18", async () => {
             await customerPoolPage.setText(customerPoolPage.customerCode,data.customerCode)
       });
       it("Should Click the Search button", async () => {
          await customerPoolPage.clickSearchButton(); 
       });
       it("Choose a piece of equipment that meets the following requirement: Underneath Prefix, JBHZ; Underneath LT St, EMPTY. Take note of the number underneath Equipment", async () => {
           equipmentNumber= await customerPoolPage.getEquipmentNumber(); 
          console.log("number is "+equipmentNumber);
          expect(equipmentNumber).not.toBeNull();
       });
      
        
        // Tc_131711

        it("Should open Eom Url", async () => {
            await freightManagerPage.openFm2Url(); 
        });
        it("Hover over the Planning tab, click to select Unit View. ", async () => {
           await freightManagerPage.mouseOverToTab(freightManagerPage.planningTab);
           await freightManagerPage.click(freightManagerPage.unitview);
        });
        it("Use the following Board codes; LR1, L1R, G19, G23. Click the Search button", async () => {
            await unitViewPage.sendDataToBoardCodeTextBoxes(data.BoardCode1,data.BoardCode2,data.BoardCode3,data.BoardCode4)
        });
        it("Should Click the Search button", async () => {
            await unitViewPage.clickSearchButton(); 
         });
        it("Click the down arrow next to OBC ERROR. Once the page refreshes, click it a second time.", async () => {
              await unitViewPage.clickObcErrorFlag();

        });
        it("Choose a driver that meets the following requirements: Underneath OBC ERROR, MTY NO PP; Underneath FLEET CODE, JBC. TRLR TYPE, make sure this field is blank", async () => {
            driverNumber=await unitViewPage.getDriverNumber();
            console.log("driver number "+driverNumber);
            expect(driverNumber).not.toBeNull();
        });

        // Tc 131713
        it("should click on 'Planning' in Freightmanager",async function() {
            await freightManagerPage.mouseOverToTab(freightManagerPage.planningTab);
        });
        it("should click on 'Order Segment' in Planning",async function() {
            await freightManagerPage.click(freightManagerPage.orderSegment);
        });
        it("In the empty white text box underneath Order#, enter the order number earlier noted.",async function() {
            await orderSegmentPage.enterOrderNumber(loadnumber1,"");
        });
        it("should click on 'Search Button",async function() {
            await orderSegmentPage.clickSearchButton();
        });
        it("in the empty white text box that appears underneath Tractor, enter the driver number earlier noted.",async function() {
            await orderSegmentPage.enterDriverNumber(driverNumber);
        });
        it("should click on 'Cancel Preplan Button",async function() {
            await orderSegmentPage.click(orderSegmentPage.createPreplan);
        });
        it("should Click the 'Continue button'",async function() {
            await orderSegmentPage.clickOnContinueButton();
        });
        it("Blue message displays, 'Tractor Preplan Successful.'",async function() {
            let message=await orderSegmentPage.validateSuccessMessage();
            console.log("message is "+message);
            expect(message).toBe(data.sucessMessage)
        });

        //Tc# 131715
        it("should Click the driver hyperlink underneath the Power Driver column'",async function() {
            await orderSegmentPage.clickDriverNumberLink(driverNumber);
        });
        
        it("should Hover over the Status tab, click to select Comment. ",async function() {
            await checkCallDetailsPage.hoverToStatus();
            await checkCallDetailsPage.click(checkCallDetailsPage.comment);
        });
        it("In the empty white text box next to Pickup Trlr/Cntr, enter JBHZ. In the empty white text box next to JBHZ, enter the equipment number earlier noted.",async function() {
            await checkCallDetailsPage.switchToActiveElement();
            await checkCallDetailsPage.setText(checkCallDetailsPage.trlCode,data.trlr);
            await checkCallDetailsPage.setText(checkCallDetailsPage.trlNumber,equipmentNumber)
        });
        it("should enter customer,location and customerLocation",async function() {
            await checkCallDetailsPage.enterCustomerNumber(data.originValue);
        });
        it("should click on 'Update'",async function() {
            await checkCallDetailsPage.clickUpdateIfNecessary();
        });
        it("should Hover over 'STATUS' and select  'SPOT' and enter customer",async function() {
            await checkCallDetailsPage.hoverToStatus();
            await checkCallDetailsPage.click(checkCallDetailsPage.dispatch);
        });
        it("should Click the Update button, up to four times if necessary.",async function() {
            await checkCallDetailsPage.clickUpdateIfNecessary();
           fm2WindowHandle= await checkCallDetailsPage.getCurrentWindowHandle();
           console.log("fm2 window "+fm2WindowHandle);
        });
        //Tc 131722

        it("should Click the Enterprise Order Management tab on your internet browser'",async function() {
            await orderSegmentPage.switchToCurrentWindow(eomWindowHandle);
            await browser.refresh(10000);
            await orderSegmentPage.click(orderDetailsPage.addStopButton)
            console.log("window passed")
        });
        it("Enter your load number in the text box underneath Search Value, click the Search Loads button. Click your load number hyperlink underneath the Load # column. You will notice the load status is now DISPATCHED.",async function() {
            await orderDetailsPage.click(orderDetailsPage.searchLink);
            await eomPage.setDataInInputField(eomPage.search_value,loadnumber1)
            await eomPage.click(eomPage.searchLoadsButton);
            await eomSearchPage.clickLoadNumberLink(loadnumber1.trim());
            let message=await orderDetailsPage.verifyDispatchedMessage();
            expect(message).toContain(data.dispatchMessage)
        });
        it("Click the dropdown tab next to DEPARTMENT, click to select shipper'",async function() {
            await orderSegmentPage.click(orderDetailsPage.addStopButton)
            await orderDetailsPage.selectDropDownsFromDetailsPage(data.shipper);
        });
        it("In the text box underneath SHIPPER, enter LGFO18'",async function() {
            await orderDetailsPage.setTextInInputField(orderDetailsPage.shipperCode,data.originValue);
        });
        it("Click the dropdown tab underneath LOAD/UNLOADED BY, click to select CUSTOMER. Click the dropdown tab underneath LOADED ON, click to select FLOOR. Click the dropdown tab underneath DRIVER COUNT, click to select N. Click the dropdown tab underneath HAZMAT, click to select N",async function() {
            await orderDetailsPage.selectDropDownsFromDetailsPage(data.customerDropDown);
            await orderDetailsPage.selectValueLoadedOnDropdown(data.floor);
            await orderDetailsPage.selectDriverCount(data.driverCount);
            await orderDetailsPage.selectHazmatCount(data.driverCount);
        });
        it("In the empty white text box underneath SCHEDULED APPOINTMENT, enter tomorrows date. In the white text box next to tomorrow date, enter 19:00. In the white text box next to 19:00, enter 23:00",async function() {
            await orderDetailsPage.setAppointmentDate(data.futureDays);
            await orderDetailsPage.setAppointmentTime(data.startTime,data.endTime);
        });
        it("Click the SAVE CHANGES button",async function() {
            await orderDetailsPage.click(orderDetailsPage.saveChangesButton);
            await orderDetailsPage.clickContinueButton();
        });
        it("Green message displays, 'LOAD UPDATED SUCCESSFULLY.'",async function() {
           let message:string= await orderDetailsPage.verifyLoadSuccessMessage();
           expect(message.trim()).toBe(data.LoadSucessMessage);
        });

        
    });
})