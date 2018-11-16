import { IclpHomepage } from "../../pages/ic_lp/ic-lp-homepage.po";
import { DataProvider } from "../../data/dataProvider";
import { LoadBoardPage } from "../../pages/ic_lp/load-board-page.po";

let iclpHomepage = new IclpHomepage();
let loadBoardPage = new LoadBoardPage();

let using = require('jasmine-data-provider');
//#131148 IC/LP Load Board_Search Loads by Origin
using(DataProvider.Tc_131148, async function (data) {

    describe("IC/LP Load Board_Search Loads by Origin", () => {
        let avilableLoads;
        //#129919
        it("Should Open iclp url", async () => {
            await iclpHomepage.navigateToAppHome(iclpHomepage.iclpUrl);
        });
        //#125278
        it("Should click Load Count greater than 5", async () => {
            await iclpHomepage.clickOnLoadCount();
        });

        //#131148
        it("Should click on one way button", async () => {
            await loadBoardPage.click(loadBoardPage.oneWaybutton);
        });

        it("Should enter 'Dallas' to origin field ", async () => {
            await loadBoardPage.setText(loadBoardPage.originInputField, data.originInputFieldValue);
        });

        it("Should Click on destination 'Dallas, TX 75240' ", async () => {
            await loadBoardPage.clickOnDestinatiom(data.originValue);
        });

        it("Should enter 'Houston' to destination field ", async () => {
            await loadBoardPage.setText(loadBoardPage.destinationInputField, data.destinationInputFieldValue);
        });

        it("Should Click on destination 'Houston, TX 77254' ", async () => {
            await loadBoardPage.clickOnDestinatiom(data.destinationValue);
        });

        it("Should click on find loads button", async () => {
            await loadBoardPage.click(loadBoardPage.findLoadsButton);
        });

        it("Should make a note of available loads", async () => {
            avilableLoads = await loadBoardPage.getText(loadBoardPage.avilableLoads);
            expect(avilableLoads).not.toBeNull();
        });
    });
});