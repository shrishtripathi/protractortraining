import { IclpHomepage } from "../../pages/ic_lp/ic-lp-homepage.po";
import { DataProvider } from "../../data/dataProvider";
import { LoadBoardPage } from "../../pages/ic_lp/load-board-page.po";

let iclpHomepage = new IclpHomepage();
let loadBoardPage=new LoadBoardPage();

let using = require('jasmine-data-provider');
//#125278 C/LP Load Board_Find Loads by State
using(DataProvider.Tc_125278, async function (data) {

    describe("C/LP Load Board_Find Loads by State", () => {
        //#129919
        it("Should Open iclp url", async () => {
            await iclpHomepage.navigateToAppHome(iclpHomepage.iclpUrl);
        });
        //#125278
        it("Should click Load Count greater than 5", async () => {
            await iclpHomepage.clickOnLoadCount();
        });

    });
});