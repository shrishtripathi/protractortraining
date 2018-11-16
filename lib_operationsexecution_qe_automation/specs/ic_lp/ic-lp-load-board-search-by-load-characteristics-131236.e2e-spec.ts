import { IclpHomepage } from "../../pages/ic_lp/ic-lp-homepage.po";
import { DataProvider } from "../../data/dataProvider";
import { LoadBoardPage } from "../../pages/ic_lp/load-board-page.po";

let iclpHomepage = new IclpHomepage();
let loadBoardPage=new LoadBoardPage();

let using = require('jasmine-data-provider');
//#131236 IC/LP Load Board_Search by Load Characteristics 
using(DataProvider.Tc_131236, async function (data) {

    describe("IC/LP Load Board_Search by Load Characteristics", () => {
        //129919 IC/LP Loadboard_loadboard home page
        it("Should Open iclp url", async () => {
            await iclpHomepage.navigateToAppHome(iclpHomepage.iclpUrl);
        });

        //125278 IC/LP Load Board_Find Loads by State
        it("Should click Load Count greater than 5", async () => {
            await iclpHomepage.clickOnLoadCount();
        });

        //131236 IC/LP Load Board_Search by Load Characteristics 
        it("Should click maximum loaded miles down arrow once ", async () => {
            await loadBoardPage.click(loadBoardPage.loadMilesMaximumDownArrow);
        });

        it("Should Click maximum stops down arrow once ", async () => {
            await loadBoardPage.click(loadBoardPage.stopsMaximunDownArrow);
        });

        it("Should Change Maximum Weight to 99,000 ", async () => {
            await loadBoardPage.click(loadBoardPage.maximumWeightDownArrow);
        });

        it("Should click on Apply button", async () => {
            await loadBoardPage.click(loadBoardPage.applyButton);
        });

        it("Verifying the available loads list", async () => {
            await expect<any> (loadBoardPage.verifyAvailableLoads()).toBeGreaterThan(data.numberOfRows);
        });

    });
});