import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { DataProvider } from '../../data/dataProvider';

let orderSegmentPage = new OrderSegmentPage();
let freightManager2Page = new FreightManager2Page();
let using = require('jasmine-data-provider');

//TC : 188741 - FM2 Check Call Verification
describe('FM2 Check Call Verification', async () => {
    using(DataProvider.Tc_188741, async (data) => {

        it("Should open FM2 url", async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2)
        });

        it("Should hover the planning tab, click to select order segment", async () => {
            await freightManager2Page.mouseOverOnPlanningTab();
            await freightManager2Page.clickOnOrderSegment();
        });

        it("Should enter the order number", async () => {
            await orderSegmentPage.enterOrderNumber(data.loadNumber, "Enter the load number");
        });
       
        it("Should click on search button", async () => {
            await orderSegmentPage.clickOnSearchButton();
        });

        it("Should verify underneath the Stop Stat column, there are only Cs", async () => {
            expect(await orderSegmentPage.verifyStopStatusInOrderSegment()).toBeTruthy();
        });
    });
});

