import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";
import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let eomE2EComponents = new EOME2EComponents()
let orderDetailsViewPage = new OrderDetailsViewPage();
let using = require('jasmine-data-provider');
let loadVerificationData = Object.assign({}, DataProvider.Tc_177222);

//TC 177222: EOM High Value Load Create Verification
using(loadVerificationData, async function (data) {
    describe("EOM High Value Load Create Verification", () => {

        describe("EOM High Value Load Create", async () => {
            await eomE2EComponents.eoMHighValueLoadCreate(data.loadCreateData);
        })

        describe("Search for specific load in EOM", async () => {
            await eomE2EComponents.eomLoadSearch(data.loadSeachData, data.loadCreateData);
        });

        describe("EOM High Value Load Create Verification", () => {

            it("Should Click On Load Detail Dropdown Tab", async () => {
                await orderDetailsViewPage.loadDetailsClick();
            });

            it("Verifying Monitor Code Is Set To H", async () => {
                await orderDetailsViewPage.monitorsValueSelection(data.monitorValue)
            });

            it("Should Click On Bill To Dropdown Tab", async () => {
                await orderDetailsViewPage.billToClick();
            });

            it("Verifying Classifications include HIGHVALUE", async () => {
                let text = null;
                text = await orderDetailsViewPage.verifyClassificationText();
                expect(text).toEqual(data.classificationsValue);
            });
            
        });

    });
});