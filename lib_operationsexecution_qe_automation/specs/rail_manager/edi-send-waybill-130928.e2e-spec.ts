import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataprovider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { IndividualStautsUpdatePage } from "../../pages/rail_manager/individual-status-update-po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let individualStautsUpdatePage=new IndividualStautsUpdatePage();
let using = require('jasmine-data-provider');

//TC 130928:  RM_Smoketest_7 EDI, send waybill
using(DataProvider.Tc_130928, async function (data) {

    describe("EDI, send waybill", function () {
        
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Verifying Rail Manager Page Title", async () =>{
            await expect<any>(railManagerHomePage.getPageTitle()).toBe(data.railManagerTitle)
        });

        it("Should click on send waybill option under EDI tab", async () => {
            await railManagerHomePage.selectTab(data.ediTab, data.wayBillOption);
        });
        
        it("Verifying Send Waybill Title", async () =>{
            await expect<any>(railManagerHomePage.verifyBreadcrumbTitle()).toBe(data.sendWaybillTitle)
            });

    });
});


