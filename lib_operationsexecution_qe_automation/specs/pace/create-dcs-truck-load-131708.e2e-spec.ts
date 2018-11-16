
import { DataProvider } from '../../data/dataProvider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { EomSearchPage } from '../../pages/eom/eom-search-page.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';


let eomPage = new EnterpriseOrderManagementPage();
let eomSearchPage=new EomSearchPage();
let skeletonListingPage=new SkeletonListingPage();
let orderDetailsPage=new OrderDetailsViewPage();

let using = require('jasmine-data-provider');

//TC#131708 -Create Dcs Truck Load
using(DataProvider.Tc_131708, async function (data) {
    

    describe("Create Dcs Truck Load", () => {

       let  loadnumber1: string = null;

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
              await orderDetailsPage.setScheduleAppointmentDate(data.zero);
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
            console.log("laodnumber:1 " + loadnumber1);
            expect(loadnumber1).not.toBeNull();
        });
        
    });

})