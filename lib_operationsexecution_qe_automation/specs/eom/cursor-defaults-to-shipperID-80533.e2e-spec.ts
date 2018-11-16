import { browser } from 'protractor';
import { DataProvider } from '../../data/dataprovider';
import { MyJbHuntHomePage } from '../../pages/eom/my-jbhunt-home.po';
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { SkeletonListingPage } from '../../pages/eom/skeleton-listing.po';
import { PickUpDateScreenPage } from '../../pages/eom/pickup-date-screen.po';
import { RateCheckDetailsPage } from '../../pages/eom/rate-check-details.po';
import { FleetDecisionPage } from '../../pages/eom/fleet-decision.po';
import { StandardNewLoadPage } from '../../pages/eom/standard-new-load.po';
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { DetailsPage } from '../../pages/eom/details.po';

let homePage = new MyJbHuntHomePage();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let skeletonListingPage = new SkeletonListingPage();
let pickUpDatePage = new PickUpDateScreenPage;
let rateCheckDetailsPage = new RateCheckDetailsPage();
let fleetDecisionPage = new FleetDecisionPage();
let standardNewLoadPage = new StandardNewLoadPage();
let orderDetailsViewPage = new OrderDetailsViewPage();
let detailsPage = new DetailsPage();

let using = require('jasmine-data-provider');
//TC# 80533: EOM_Regression_13 Cursor defaults to shipper ID
using(DataProvider.Tc_80533, async function (data) {

    describe("Cursor defaults to shipper ID ", function () {
      let modeType:string="";
        it("should open 'homepage'", async function () {
            await enterpriseOrderManagementPage.navigateToAppHome(enterpriseOrderManagementPage.eomUrl);
            
        });

        it("Enter LGFO18 into Origin. ", async function () {
            await enterpriseOrderManagementPage.setOrigin(data.origin);
            
        });

        it("Click Search skeletons.", async function () {
            
            await homePage.clickOnEOMButton(data.eomButton);
        });
        it("Verifying that skeltons list will be displayed", async ()=> {
            await expect(skeletonListingPage.verifySkeltonList(data.verifySkeletonList)).toBeTruthy();   
        });
        it("Look for skeleton that is JBVAN.", async function () {
           
            await skeletonListingPage.clickOnBookIconHavingRequiredDivison(data.division);
        });
        it("Verifying that skeltons pick screen will be displayed", async ()=> {
            await expect<any>(skeletonListingPage.getSkeltonPickScreenTitle()).toBe(data.title);   
        });
        it("SELECT PICKUP DATE click 'Next' in Pickup date screen", async function () {
            await pickUpDatePage.clickNextButton();
        });

        it("Should Click ''TRUCK'' under current date", async ()=> {
            
            await skeletonListingPage.clickOnIcsUnderCurrentDate(data.modeType);       
        })

        it("Verifying that New Load Deatils screen will be displayed", async ()=> {
           
            await expect<any>(await skeletonListingPage.getNewLoadScreenTitle()).toBe(data.loadTitle);   
        });

        it("should Check cursor defaults to shipper id", async function () {
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

        it("Click 'Create Load' Button", async function () {
            await standardNewLoadPage.clickCreateLoad();
        });

        it("should create 'new load'", async function () {
           
            let flag: boolean = await standardNewLoadPage.verifyLoad();
            console.log("flag: "+flag)
            expect(flag).toBeTruthy();
          
        });
    })
})