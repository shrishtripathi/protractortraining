
import { DataProvider } from "../../data/dataProvider";
import { SelectVendorPopupPage } from "../../pages/vendor_portal/select-vendor-popup.po";

let selectVendorPopupPage = new SelectVendorPopupPage();
let using = require('jasmine-data-provider');

//#135707_VendorPortal_3_Filter Vendor by Name
using(DataProvider.TC_135707, async function (data) {
    describe("Vendor by Name", () => {

        it("Navigating to Vendor Portal: Pre condition TestCase 135695", async () => {
            await selectVendorPopupPage.preTestCase_135695()
        });

        it("Enter Vendor Name ", async () => {
            await selectVendorPopupPage.enterTextOnTextBox(data.textBoxIndex, data.vendorName)
        });

        it('verify Filter Code Result', async () => {
            let codeText = await selectVendorPopupPage.verifyFillterCodeResult(data.vendorName)
            await expect(codeText.code).toEqual(data.vendorName)
        });

    });

});
