import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataprovider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { IndividualStautsUpdatePage } from "../../pages/rail_manager/individual-status-update-po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let individualStautsUpdatePage=new IndividualStautsUpdatePage();
let using = require('jasmine-data-provider');

//TC 130908:  RM_Smoketest_4 EDI, unit update
using(DataProvider.Tc_130908, async function (data) {

    describe("EDI, unit update", function () {
        
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Verifying Rail Manager Page Title", async () =>{
            await expect<any>(railManagerHomePage.getPageTitle()).toBe(data.railManagerTitle)
        });

        it("Should click on Unit Update option under EDI tab", async () => {
            await railManagerHomePage.selectTab(data.ediTab, data.unitUpdateOption);
        });

        it("Should click on Reset Button", async () => {
            await railManagerHomePage.clickOnResetButton();
        });

        it("Verifying new values to be null",async () => {
            await expect<any>(individualStautsUpdatePage.verifyNewvalues(data.callTypeId)).toBe(data.empty);
            await expect<any>(individualStautsUpdatePage.verifyNewvalues(data.carrierId)).toBe(data.empty);
            await expect<any>(individualStautsUpdatePage.verifyNewvalues(data.trainNumberId)).toBe(data.empty);
            await expect<any>(individualStautsUpdatePage.verifyNewvalues(data.originRampId)).toBe(data.empty);
            await expect<any>(individualStautsUpdatePage.verifyNewvalues(data.destinationRampId)).toBe(data.empty);
            await expect<any>(individualStautsUpdatePage.verifyNewvalues(data.eventLocationid)).toBe(data.empty);
            await expect<any>(individualStautsUpdatePage.verifyNewvalues(data.eventDateid)).toBe(data.empty);
            await expect<any>(individualStautsUpdatePage.verifyNewvalues(data.eventTimeid)).toBe(data.empty);
            await expect<any>(individualStautsUpdatePage.verifyNewvalues(data.timeZoneid)).toBe(data.empty);
        });

    });
});
