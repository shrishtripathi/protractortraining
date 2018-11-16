import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { LoadSearchPage } from '../../pages/centerscreen/load-search.po';
import { DataProvider } from "../../data/dataProvider";

let using = require('jasmine-data-provider');

let loadNumber = "M542567"
let myJbHuntHomePage = new MyJbHuntHomePage();
let loadSearchPage = new LoadSearchPage();

//TC 178920: Center Screen Dispatch Verification
using(DataProvider.Tc_178920, async function (data) {
    describe('Center Screen Dispatch Verification', () => {

        it('Should Navigate to Safety Briefing url', async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.centerScreenUrl);
        });

        it('Should click on search magnifying glass', async () => {
            await loadSearchPage.clickOnMagnifyingGlassIcon();
        });

        it('Should Click on search Box first arrow icon', async () => {
            await loadSearchPage.clickSearchBoxFirstArrowIcon();
        });

        it('Should select ORDER #', async () => {
            await loadSearchPage.selectOrderNumber();
        });

        it('Should Click on empty box next to order #', async () => {
            await loadSearchPage.clickOnEmptyBoxNextToOrderNumber();
        });

        it('Should enter load number', async () => {
            await loadSearchPage.enterLoadNumber(loadNumber);
        });

        it('Should click on search button', async () => {
            await loadSearchPage.clickSearchButtonNextToOrderNumber();
        });

        it('Should verify whether next step is equal to Arrival-1', async () => {
            expect(await loadSearchPage.getTextUnderNextStepColumn()).toEqual(data.arrival1);
        });

        it('Should click on hyper link under origin city', async () => {
            await loadSearchPage.clickHyperLinkUnderOriginCity();
        });

        it('Should verify Shipper status to be Dispatched', async () => {
            expect(await loadSearchPage.verifyShipperStatus()).toEqual(data.shipperStatus);
        });

    });

});
