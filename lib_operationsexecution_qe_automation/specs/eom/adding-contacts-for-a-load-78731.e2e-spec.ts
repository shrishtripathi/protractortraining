
import { browser } from 'protractor';
import { DataProvider } from '../../data/dataprovider';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { CommentsPage } from '../../pages/eom/comments.po';
import { AccessorialsPage } from '../../pages/eom/accessorials.po';
import { DetailsPage } from '../../pages/eom/details.po';
import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';
import { StandardNewLoadPage } from '../../pages/eom/standard-new-load.po';

let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let commentsPage = new CommentsPage();
let accessorialsPage = new AccessorialsPage();
let detailsPage = new DetailsPage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let standardNewLoadPage = new StandardNewLoadPage();
let using = require('jasmine-data-provider');

//TC #78731: EOM_Regression_5 Adding contacts for a load
using(DataProvider.Tc_78731, async function (data) {

    describe("Adding contacts for a load", () => {

        it("Open My JBHunt url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.eomUrl);
        });

        it("On the EOM home page enter 'DAMAC8' in ''BILL TO CODE'' field", async () => {
            await enterpriseOrderManagementPage.enterBillToCode(data.billToCode);
        });

        it("Click ''SEARCH SKELETON'' BUTTON", async () => {
            await myJbHuntHomePage.clickOnEOMButton(data.searchSkeltonButton);
        });

        it("Verifying that skeltons list will be displayed", async ()=> {
            await expect(skeletonListingPage.verifySkeltonList(0)).toBeTruthy();   
        });
    
        it("Should find without rate skelton and click on skelton book load", async ()=> {
            await skeletonListingPage.bookOrderHavingNoRate();
        });
    
        it("Verifying that skeltons pick screen will be displayed", async ()=> {
            await expect<any>(skeletonListingPage.getSkeltonPickScreenTitle()).toBe(data.skeletonPageTitle);   
        });
    
        it("Should click on Next Button in skelton pick screen", async ()=> {
            await skeletonListingPage.clickOnInputButton(skeletonListingPage.skeltonPickNextButton);
        });
        it("Should Click ''TRUCK'' under current date", async ()=> {
            
            await skeletonListingPage.clickOnIcsUnderCurrentDate(data.truck);       
        });

        it("Verifying that New Load Deatils screen will be displayed", async ()=> {
           
            await expect<any>(await skeletonListingPage.getNewLoadScreenTitle()).toBe(data.loadDetailsMessage);   
            let cursherIsFocused:boolean= await orderDetailsViewPage.checkCursherIsOnShipper()
            await expect<any>(cursherIsFocused).toBe(true);   
        });

         it("Set shipper scheduled appointment time to '19:00'-'23:00'", async function () {
             await orderDetailsViewPage.scheduledAppointmentTimeSet(data.scheduledAppointmentBeginTime, data.scheduledAppointmentEndTime);
         });
 
         it("Should check receiver scheduled appointment date fields are empty", async () => {
             await orderDetailsViewPage.receiverScheduledAppointmentEmptyCheck();
             await orderDetailsViewPage.receiverSuggestedAppointmentEmptyCheck();
             await orderDetailsViewPage.receiverCustomerRequestedEmptyCheck();
         });
 

        it("Should click on load detail tab", async () => {
            await orderDetailsViewPage.loadDetailsClick()
        });

        it("Should change monitor code to blank space", async () => {
            await orderDetailsViewPage.monitorsValueSelection(data.blankSpace);
           
        });

        
        it('Should enter slocitor details in bill to drop down', async () => {
            await orderDetailsViewPage.billToClickAndAddNewSolicitor()
        });

       it("Click on create solicitor contact",async ()=>{
        await orderDetailsViewPage.clickOncreateSolicitorContact();
        });

        it("Click on new contact Bill to ",async ()=>{
            await orderDetailsViewPage.clickOnNewContactBillto();
        });

        it("Enter bill to details",async ()=>{
            await orderDetailsViewPage.newContactBillToDetails(data.title1,data.firstName1,data.lastName1);
        });

        it("Click on create Bill to",async ()=>{
            await orderDetailsViewPage.clickOncreateBilltoContact();
        });

        it("Click 'Create Load' Button", async function () {
            await standardNewLoadPage.clickCreateLoad();
        });

        it("should create 'new load'", async function () {
           
            let flag: boolean = await standardNewLoadPage.verifyLoad();
            console.log("flag: "+flag)
            expect(flag).toBeTruthy();
          
        });

    });

});
