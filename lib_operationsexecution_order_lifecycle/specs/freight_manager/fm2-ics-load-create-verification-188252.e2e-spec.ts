import { DataProvider } from "../../data/dataProvider";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();

let multiPickOrMultiDropLoadCreateEomData = Object.assign({}, DataProvider.Tc_187920);

using(multiPickOrMultiDropLoadCreateEomData, async (data) => {

    describe('Brokerage-Multi-Pick/Multi-Drop Load Create EOM', async () => {

        describe("Brokerage-Multi-Pick/Multi-Drop Load Create EOM", async () => {
            await eomE2EComponents.eomIcsBrokerageHighValueLoadCreate(data.multiPickupOrMultiDropLoadCreateEom);
        });

        describe("FM2 ICS Load Create Verification", () => {

            it("Should open fm2 Url", async () => {
                await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
            });

            it("Should hover over the Planning tab, click Order Segment to select.", async () => {
                await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
            });

            it("Should enter the earlier noted load number,In the white text box underneath Order#", async () => {
                await orderSegmentPage.enterOrderNumber(data.multiPickupOrMultiDropLoadCreateEom.orderNumber, 'Entering Order #');
            });

            it("Should click on Search button", async () => {
                await orderSegmentPage.clickOnSearchButton();
            });

            it("verifying the order number ", async () => {
                await expect(orderSegmentPage.verifyOrderNumber(data.multiPickupOrMultiDropLoadCreateEom.orderNumber)).toBeTruthy();
            });

            it("verifying the Project Code ", async () => {
                await expect<any>(orderSegmentPage.verifyProjectCode()).toBe(data.projectCode);
            });


        });
    });

});

