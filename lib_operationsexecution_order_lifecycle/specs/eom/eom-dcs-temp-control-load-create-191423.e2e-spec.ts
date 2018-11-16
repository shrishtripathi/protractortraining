import { BasePage } from '../../pages/base.po';
import { DataProvider } from '../../data/dataProvider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { DetailsPage } from '../../pages/eom/details.po';
import { CommonFunctions } from '../../utilities/common-functions';

let basePage = new BasePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let using = require('jasmine-data-provider');
let orderDetailsViewPage = new OrderDetailsViewPage();
let detailsPage = new DetailsPage();
let commonFunctions = new CommonFunctions();

// TC #191423: EOM DCS Temp Control Load Create
using(DataProvider.Tc_191423, async function (data) {

    describe("EOM DCS Temp Control Load Create ", () => {
         let loadNumber: string;  
         let todayDate;
        it("Should open EOM Search page url ", async () => {
            await basePage.navigateToAppHome(basePage.eomUrl);            
        });

        it("Should enter the Bill of Code Text ", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });
        it("Should Enter Origin Code", async () => {
            await enterpriseOrderManagementPage.setOrigin(data.originCode)
        });
        it("Check the box next to HJBT JBDCS, make sure the boxes next to HJBT JBHA and HJBT JBVAN are UNCHECKED.   ", async () => {
            await enterpriseOrderManagementPage.setSearchRestrictions(true,false,false);
        });
         
        it("Should click search skeleton button ", async () => {
            await enterpriseOrderManagementPage.clickSearchSkeletons();
        });
        it("Look for a skeleton that has TRUCK underneath the Mode column. Click the green mouse icon underneath the Actions column.  ", async () => {
            await skeletonListingPage.clickOnBookIconHavingRequiredDivison(data.divison);
        });
        it("should Click Next button", async () => {
            await skeletonListingPage.clickOnSkeletonNextButton();
        });

        it("Should select option for reason code", async () => {
            await skeletonListingPage.selectOptionFromChooseReasonCode(data.reasonCode);
        });

        it("Should click on book load with rate button", async () => {
            await skeletonListingPage.clickOnBookLoadWithoutRateButton();
        });

        it("Click the dropdown tab next to Load DETAIL.  ", async () => {
            await orderDetailsViewPage.loadDetailsClick();
        });

        it("No monitor should be selected", async () => {
            await orderDetailsViewPage.monitorsValueSelection(data.monitorValue);
        });

        it("Should click the dropdown tab next to Bill To.", async () => {
            await orderDetailsViewPage.billToClick();
        });

        it("Should click On Classification Lens Icon ", async () => {
            await orderDetailsViewPage.clickOnClassificationLensIcon();
        });

        it("Should click On Reefer ", async () => {
            await orderDetailsViewPage.clickOnReeferCheckbox();
        });
   
        it("Should click On Close window button ", async () => {
            await orderDetailsViewPage.clickOncloseWindowButton();
        });
  
        it("Should set date, Start time and End Time for Stop 1 ", async () => {
            todayDate = await commonFunctions.getTodayDate();
            await orderDetailsViewPage.setScheduleAppointmentDateAtStop1(todayDate)     
            await orderDetailsViewPage.scheduledAppointmentTimeSet(data.startTime, data.endTime);
        });

        it("Should set date,Start time and End Time for Stop 99 ", async () => {
            await orderDetailsViewPage.setScheduleAppointmentDateEndAtStop99(todayDate); 
            await orderDetailsViewPage.setAppointmentTime(data.stop99BeginTime, data.stop99EndTime); 
        });

        it("Should click on create load button ", async () => {
            await orderDetailsViewPage.clickOnCreateLoadButton();
            await orderDetailsViewPage.ClickOnContinueButtonClass();
        });

        it('Should Note Load Number', async () => {
           loadNumber = await detailsPage.focusLoadNumber();   
            console.log(loadNumber)             
        });

    })
});