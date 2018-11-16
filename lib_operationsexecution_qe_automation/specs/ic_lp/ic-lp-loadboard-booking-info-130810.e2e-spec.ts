import { IclpHomepage } from "../../pages/ic_lp/ic-lp-homepage.po";
import { DataProvider } from "../../data/dataProvider";
import { LoadBoardPage } from "../../pages/ic_lp/load-board-page.po";

let iclpHomepage = new IclpHomepage();
let loadBoardPage=new LoadBoardPage();

let using = require('jasmine-data-provider');
//#130810 IC/LP Loadboard_Booking Info
using(DataProvider.Tc_130810, async function (data) {

    describe("IC/LP Loadboard_Booking Info", () => {

        //129919 IC/LP Loadboard_loadboard home page 
        it("Should Open iclp url", async () => {
            await iclpHomepage.navigateToAppHome(iclpHomepage.iclpUrl);
        });

        //125278 IC/LP Load Board_Find Loads by State
        it("Should click Load Count greater than 5", async () => {
            await iclpHomepage.clickOnLoadCount();
        });

        //130810 IC/LP Loadboard_Booking Info
        it("Should click on equipment type dropdown arrow ", async () => {
            await loadBoardPage.click(loadBoardPage.equipmentTypeDropDownArrow);
        });

        it("Should Click booking info button ", async () => {
            await loadBoardPage.click(loadBoardPage.bookinInfoButton);
        });

        it("Verifying booking info pop up", async () => {
            await expect<any>(loadBoardPage.getText(loadBoardPage.bookingInfoPopUp)).toBe(data.bookingInfo);
        });

        it("Should click on close button", async () => {
            await loadBoardPage.click(loadBoardPage.bookingInfoCloseButton);
        });    

    });
});