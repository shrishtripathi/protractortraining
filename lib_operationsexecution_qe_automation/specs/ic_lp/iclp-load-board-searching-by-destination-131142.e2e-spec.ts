import { IclpHomepage } from "../../pages/ic_lp/ic-lp-homepage.po";
import { DataProvider } from "../../data/dataProvider";
import { LoadBoardPage } from "../../pages/ic_lp/load-board-page.po";

let iclpHomepage = new IclpHomepage();
let loadBoardPage=new LoadBoardPage();

let using = require('jasmine-data-provider');
//#131142 IC/LP Load Board_Searching by Destination
using(DataProvider.Tc_131142, async function (data) {

    describe("IC/LP Load Board_Searching by Destination", () => {
        //#129919
        it("Should Open iclp url", async () => {
            await iclpHomepage.navigateToAppHome(iclpHomepage.iclpUrl);
        });
        //#125278
        it("Should click Load Count greater than 5", async () => {
            await iclpHomepage.clickOnLoadCount();
        });

        //#131142
        it("Should enter 'Houston' to destination field ", async () => {
            await loadBoardPage.setText(loadBoardPage.destinationInputField,data.destinationInputFieldValue);
        });

        it("Should Click on destination 'Houston, TX 77254' ", async () => {
            await loadBoardPage.clickOnDestinatiom(data.destinationValue);
        });

        it("Should click on find loads button", async () => {
            await loadBoardPage.click(loadBoardPage.findLoadsButton);
        }); 

        it("Verifying the available loads list", async () => {
            await expect<any> (loadBoardPage.verifyAvailableLoads()).toBeGreaterThan(data.numberOfRows);
        });

           

    });
});