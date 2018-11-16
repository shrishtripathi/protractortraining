
import { DataProvider } from "../../data/dataProvider";
import { ActionLibrary } from "../../utilities/action-library";
import { BasePage } from "../../pages/base.po";
import { EnterpriseOrderManagementPage } from "../../pages/eom/enterprise-order-management.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";

let FreightManager2Pag = new FreightManager2Page();
let OrderSegmentPag = new OrderSegmentPage();

let using = require('jasmine-data-provider');

using(DataProvider.Tc_185243, async function (data) {


    describe("FM2 Multi Pick/Drop Preplan", async function () {

        it("open browser and enter url' ", async () => {
            await FreightManager2Pag.navigateToAppHome(FreightManager2Pag.freightManager2);
        });

        it("Hover over the Planning tab, click Order Segment to select.", async () => {

            await FreightManager2Pag.selectOptionFromFreightManager2(data.tabName, data.tabOption);
        });


        it("In the white text box underneath Order#, enter the earlier noted load number,", async () => {
            await OrderSegmentPag.enterOrderNumber(data.loadNumber, 'Order #');
        });

        it("Click on Search button", async () => {
            await OrderSegmentPag.clickOnSearchButton();
        });

        it("Click the radial button next to Tractor", async () => {
            
            await OrderSegmentPag.selectRadioPreplanType(data.radialValue);
        });

        it("In the white text box underneath Tractor enter the earlier noted driver number.", async () => {
            await OrderSegmentPag.enterTractorNumber(data.tractorNo);
        });

        it("Click the first two check boxes.", async () => {

            await OrderSegmentPag.selectAllCheckBox();
        });

        it("In the white text box underneath TCall Location, enter the origin ramp (for this example my origin ramp is D?). ", async () => {
            await OrderSegmentPag.EnterTcall(data.TCall_Location_origenmap, " Origin Ramp value");
        });

        it("Click the Create preplan button. IF REQUIRED, click the Continue button). ", async () => {
            await OrderSegmentPag.clickOnCreatePreplanButton();
        });

    })
});