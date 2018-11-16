import { LoadSearchPage } from '../../pages/centerscreen/load-search.po';
import { DataProvider } from "../../data/dataProvider";

let using = require('jasmine-data-provider');
let loadSearchPage = new LoadSearchPage();

//TC 186198: Center Screen CC Verification
using(DataProvider.Tc_186198, async function (data) {

    describe('Center Screen CC Verification', () => {

        it('Should Navigate to Center Screen url', async () => {
            await loadSearchPage.navigateToAppHome(loadSearchPage.centerScreenUrl);
        });

        it('Should Navigate to Center Screen url', async () => {
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
            await loadSearchPage.enterLoadNumber(data.orderNumber);
        });
    
        it('Should click on search button', async () => {
            await loadSearchPage.clickSearchButtonNextToOrderNumber();
        });

        it('Verifying that TENDER is displayed under NEXT STEP', async () => {
            expect(await loadSearchPage.getTextUnderNextStepColumn()).toEqual(data.tender);
        });

    });

});
