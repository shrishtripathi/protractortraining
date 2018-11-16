import { By, browser } from 'protractor';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { DataProvider } from '../../data/dataProvider';
import { FinalMileFleetStatusHomePage } from '../../pages/pdt/final-mile-fleet-status-home.po';
let myJbHuntHomePage = new MyJbHuntHomePage();
let finalMileFleetStatusHomePage = new FinalMileFleetStatusHomePage();
let using = require('jasmine-data-provider');
// TC_126654: PDT_Regression_7 Search to open COA
using(DataProvider.Tc_126654, async function (data) {
    describe("PDT_Regression_7 Search to open COA", () => {

        it("Open fleet status URL", async () => {
                await finalMileFleetStatusHomePage.navigateToAppHome(finalMileFleetStatusHomePage.pdtUrl);
                await finalMileFleetStatusHomePage.waitForPagePDTLoad();
                let flag : boolean = await finalMileFleetStatusHomePage.verifyFleetStatusPage();
                expect(flag).toBeTruthy();
        });

        it("In the white text box next to the search icon, enter TEST123", async () => {
                await finalMileFleetStatusHomePage.enterNextToSearchIcon(data.value)
        });

        it("click search icon", async () => {
                await finalMileFleetStatusHomePage.clickSearchIcon();
        });

        it("Verify Customer Order Administration (COA) opens", async () => {
              let flag :boolean =  await finalMileFleetStatusHomePage.verifyCustomerOrderAdministration();
              expect(flag).toBeTruthy();
        });
    });
});