import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let using = require('jasmine-data-provider');

//TC #131654 : C360 : Open IE- Select EOM
using(DataProvider.Tc_131689, async function (data) {

    describe("Request Changes", () => {
        it("Should open EOM url", async () => {
            await myJbHuntHomePage.openUrl(myJbHuntHomePage.enterPriceOrderManagementUrl);
        });
    });
});
