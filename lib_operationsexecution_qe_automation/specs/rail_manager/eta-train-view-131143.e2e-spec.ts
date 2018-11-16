import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataprovider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { IndividualStautsUpdatePage } from "../../pages/rail_manager/individual-status-update-po";
import { browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let individualStautsUpdatePage=new IndividualStautsUpdatePage();
let using = require('jasmine-data-provider');

//TC 131143:  RM_Smoketest_13 ETA, train view
using(DataProvider.Tc_131143, async function (data) {

    describe("ETA, train view", function () {
              
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Verifying Rail Manager Page Title", async () =>{
            await expect<any>(railManagerHomePage.getPageTitle()).toBe(data.railManagerTitle)
        });

        it("Should click on Train View under ETA tab", async () => {
            await railManagerHomePage.selectTab(data.etaTab, data.trainViewOption); 
        });

        it("Verifying train view Page Title", async () =>{
            await expect<any>(railManagerHomePage.verifyBreadcrumbTitle()).toBe(data.trainViewTitle)
            });

        it("Should click on Search Button in Train View tab", async () => {
            await railManagerHomePage.clickSearchButton();
        });

         it("Verifying List of tains", async () =>{
             await expect<any>(railManagerHomePage.listOfTrains()).toBeGreaterThan(0);
         });

    });
});
