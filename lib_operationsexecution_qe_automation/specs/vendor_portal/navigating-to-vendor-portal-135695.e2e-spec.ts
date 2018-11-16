import { DataProvider } from "../../data/dataProvider";
import { SelectVendorPopupPage } from "../../pages/vendor_portal/select-vendor-popup.po";

let selectVendorPopupPage = new SelectVendorPopupPage();
let using = require('jasmine-data-provider');

//#135695_VendorPortal_1_Navigating to Vendor Portal
using(DataProvider.TC_135695, async function (data) {
    describe("Navigating to Vendor Portal", () => {

        it("Navigate to the Vendor Portal Application", async () => {
            await selectVendorPopupPage.preTestCase_135695();
        });

        it('Validate Vendor Portal Application title', async () => {
            await selectVendorPopupPage.actions.waitBrowserTitleEqualsTo(data.browserTitle);
            let popupTitle: string = await selectVendorPopupPage.verifySelectVendorPopUpPage();
            expect(popupTitle).toEqual(data.popUpTitle)
        });
    })
});


