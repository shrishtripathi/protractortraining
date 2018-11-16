import { DataProvider } from "../../data/dataProvider";
import { OrderDetailsViewPage } from '../../pages/eom/order-detail-view.po';
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let orderDetailsViewPage = new OrderDetailsViewPage();
let eomE2EComponents = new EOME2EComponents();
let using = require('jasmine-data-provider');
let loadVerificationData = Object.assign({}, DataProvider.Tc_176993);

//TC 176993: EOM 1Pick/Drop Load Create Verification
using(loadVerificationData, async function (data) {
    describe("EOM 1Pick/Drop Load Create Verification", () => {

        describe("EOM 1Pick/1Drop Load Create", async function () {
            await eomE2EComponents.eomOnePickOrDropLoadCreate(data.loadCreateData);
        });

        describe("Search for specific load in EOM", async function () {
            await eomE2EComponents.eomLoadSearch(data.loadSeachData, data.loadCreateData)
        });

        describe("EOM 1Pick/Drop Load Create Verification", () => {
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

            it("Should Click On Bill To Dropdown Tab", async () => {
                await orderDetailsViewPage.billToClick();
            });

            it("Verify There Is STOP 1", async () => {
                expect(await orderDetailsViewPage.stopType_1.getText()).toEqual(data.stop1);
            })

            it("Verify There Is STOP 99", async () => {
                expect(await orderDetailsViewPage.stopType_99.getText()).toEqual(data.stop99);
            })
        });

    });
});