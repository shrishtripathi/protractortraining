import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { LoadSearchPage } from '../../pages/centerscreen/load-search.po';
import { DataProvider } from "../../data/dataProvider";

let using = require('jasmine-data-provider');
let myJbHuntHomePage = new MyJbHuntHomePage();
let loadSearchPage = new LoadSearchPage();

//TC 185352: Preplan-ICS Center Screen Verification
using(DataProvider.Tc_185352, async function (data) {
    describe('Preplan-ICS Center Screen Verification', () => {

        it('Should navigate to center screen url', async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.centerScreenUrl);
        });

        it('Should click on the search magnifying glass', async () => {
            await loadSearchPage.clickOnMagnifyingGlassIcon();
        });        

        it('Should select order # from the dropdown list', async () => {
            await loadSearchPage.selectOrderNumber();
        });

        it('Should enter order # in the text box', async () => {
            await loadSearchPage.enterLoadNumber(data.loadNumber);
        });

        it('Should click on the search button', async () => {
            await loadSearchPage.clickSearchButtonNextToOrderNumber();
        });

        it('Should verify preplan success', async () => {
            let tenderText = await loadSearchPage.getTextUnderNextStepColumn();
            expect(tenderText.trim()).toBe(data.tenderText);
        });

        it('Should verify carrier is present', async () => {
            let carrText = await loadSearchPage.verifyCarrierPresent();
            expect(carrText.trim()).not.toBe(data.carr);
        });
    });

});