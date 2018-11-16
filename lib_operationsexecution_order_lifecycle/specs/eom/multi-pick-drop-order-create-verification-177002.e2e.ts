import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { DataProvider } from "../../data/dataProvider";
import { EnterpriseOrderManagementPage } from '../../pages/eom/enterprise-order-management.po';
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { EOME2EComponents } from '../../e2eComponents/eom/eom.pc';

let orderDetailsViewPage = new OrderDetailsViewPage();
let eomE2EComponents = new EOME2EComponents();
let enterpriseOrderManagementPage = new EnterpriseOrderManagementPage();
let using = require('jasmine-data-provider');
let loadCreateVerificationData = Object.assign({}, DataProvider.Tc_177002);
//TC 177002: EOM Multi Pick/Drop Order Create Verification
using(loadCreateVerificationData, async function (data) {

    describe("EOM Multi Pick/Drop Order Create Verification", () => {
        //187027
        describe("Search for specific load in EOM", async function () {
            await eomE2EComponents.eomLoadSearch(data.loadCreateData, data.loadSeachData)
        });

        //177002
        describe("EOM Multi Pick/Drop Order Create Verification", () => {
            it("Should Click On Load Detail Dropdown Tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Verifying There Are No Monitor Codes", async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
            });

            it("Should Click On Bill To Dropdown Tab", async () => {
                await orderDetailsViewPage.billToClick();
            });

            it("Verifying There Are No Classifications", async () => {
                await orderDetailsViewPage.verifyClassificationText();
            });

            it("Should verify stops are present", async () => {
                let flag = await enterpriseOrderManagementPage.verifyStops(data.stop1, data.stop2, data.stop3, data.stop4);
                expect(flag).toBeTruthy();
            });
        });
    });
});