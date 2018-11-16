import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { LoadSearchPage } from '../../pages/centerscreen/load-search.po';

let loadNumber = "M536576"
let myJbHuntHomePage = new MyJbHuntHomePage();
let loadSearchPage = new LoadSearchPage();

//TC 176820: Center Screen Load Create Verification

describe('Center Screen Load Create Verification', () => {

    it('Should Navigate to Safety Briefing url', async () => {
        await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.centerScreenUrl);
    });

    it('Should Click on magnifying glass Icon ', async () => {
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

    it('Should verify whether order number is equal to order number', async () => {
        expect(await loadSearchPage.verifyOrderNumber()).toEqual(loadNumber);
    });

});










