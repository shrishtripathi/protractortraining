import { IclpHomepage } from "../../pages/ic_lp/ic-lp-homepage.po";
import { DataProvider } from "../../data/dataProvider";
let iclpHomepage = new IclpHomepage();
let using = require('jasmine-data-provider');
//#129919 IC/LP Loadboard_loadboard home page
using(DataProvider.Tc_129919, async function (data) {

    describe("IC/LP Loadboard_loadboard home page", () => {
        
        it("Should Open iclp url", async () => {
            await iclpHomepage.navigateToAppHome(iclpHomepage.iclpUrl);
        });

    });
});