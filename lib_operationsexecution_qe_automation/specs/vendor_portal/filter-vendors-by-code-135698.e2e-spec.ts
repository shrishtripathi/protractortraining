
import { DataProvider } from "../../data/dataProvider";
import { SelectVendorPopupPage } from "../../pages/vendor_portal/select-vendor-popup.po";

let selectVendorPopupPage = new SelectVendorPopupPage();
let using = require('jasmine-data-provider');

//#135698_VendorPortal_2_Filter Vendors by Code
using(DataProvider.TC_135698, async function (data) {
    describe("Filter Vendors by Code", () => {

        it("Navigating to Vendor Portal: Pre condition TestCase 135695", async () => {
            await selectVendorPopupPage.preTestCase_135695()
        });

        it("Type in a Vendor code ", async () => {
            await selectVendorPopupPage.enterTextOnTextBox(data.textBoxIndex, data.vendorCode)
        });

        it('verify Fillter Code Result', async () => {
           let codeText= await selectVendorPopupPage.verifyFillterCodeResult(data.vendorCode)
           expect(codeText.code).toEqual(data.vendorCode)
        });

    });

});
