import { LoadSearchPage } from '../../pages/centerscreen/load-search.po';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';

let loadSearchPage = new LoadSearchPage();
let myJbHuntHomePage = new MyJbHuntHomePage();

export class CenterScreenE2EComponents {

    async verifyPreplan(loadData, tender) {
        //TC 186198
        describe('Center Screen Preplan Verification', () => {

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
                await loadSearchPage.enterLoadNumber(loadData.orderNumber);
            });

            it('Should click on search button', async () => {
                await loadSearchPage.clickSearchButtonNextToOrderNumber();
            });

            it('Verifying that TENDER is displayed under NEXT STEP', async () => {
                expect(await loadSearchPage.getTextUnderNextStepColumn()).toEqual(tender);
            });

        });

    }

    // 188740 : Centerscreen Check Call Verification
    async centerScreenCheckCallVerification(loadData, emptiedData) {

        describe('Centerscreen Check Call Verification', async () => {

            it('Should Navigate to Safety Briefing url', async () => {
                await loadSearchPage.navigateToAppHome(loadSearchPage.centerScreenUrl);
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
                //await loadSearchPage.enterLoadNumber(loadData.orderNumber);
                await loadSearchPage.enterLoadNumber("M541396");
            });

            it('Should click on search button', async () => {
                await loadSearchPage.clickSearchButtonNextToOrderNumber();
            });

            it('Should verify Next Step as EMPTIED', async () => {
                let nextStepText = await loadSearchPage.getTextUnderNextStepColumn();
                expect(nextStepText.trim()).toBe(emptiedData.emptiedText);
            });

        });

    }

    // 187727 : Centerscreen Dispatch Verification
    async centerScreenDispatchVerification(loadData, arrivalText) {

        describe('Centerscreen Dispatch Verification', async () => {

            it('Should Navigate to Safety Briefing url', async () => {
                await loadSearchPage.navigateToAppHome(loadSearchPage.centerScreenUrl);
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
                await loadSearchPage.enterLoadNumber(loadData.orderNumber);
            });

            it('Should click on search button', async () => {
                await loadSearchPage.clickSearchButtonNextToOrderNumber();
            });

            it('Should verify Next Step as dispatched', async () => {
                let nextStepText = await loadSearchPage.getTextUnderNextStepColumn();
                expect(nextStepText.trim()).toBe(arrivalText);
            });
        });
    }

    public async loadCreateRowVerification(loadData) {
        //#187497
        describe('Centerscreen Load Create Verification', () => {
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
                await loadSearchPage.enterLoadNumber(loadData.orderNumber);
            });

            it('Should click on search button', async () => {
                await loadSearchPage.clickSearchButtonNextToOrderNumber();
            });

            it('Verify your order populated in the search results', async () => {
                expect(await loadSearchPage.verifyOrderNumberSearchResult(loadData.orderNumber)).toBeTruthy();
            });

        });
    }

    public async icsInternationalLoadCreateVerification(loadData) {
        //#187556
        describe('Centerscreen Load Create Verification', () => {

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
                await loadSearchPage.enterLoadNumber(loadData.orderNumber);
            });

            it('Should click on search button', async () => {
                await loadSearchPage.clickSearchButtonNextToOrderNumber();
            });

            it('Verifying that your order populated in the search results', async () => {
                expect(await loadSearchPage.verifyOrderNumberSearchResult(loadData.orderNumber)).toBeTruthy();
            });

            it('Should click on "DEST CITY" information in the "DEST CITY" Column', async () => {
                await loadSearchPage.clickOnDestCityInformationInColumn();
            });

            it('Verifying that load is an International Shipment Load', async () => {
                expect(await loadSearchPage.getInternationalDestinationCity()).toBe(loadData.destination);
            });

        });
    }

     //TC 192055: 1019 Load Create: Verification Centerscreen
     async loadCreateVerificationCenterscreen(loadData,centerScreenData) {

        describe('1019 Load Create: Verification Centerscreen', () => {

            it('Should Navigate to centerScreen url', async () => {
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
                await loadSearchPage.enterLoadNumber(loadData.orderNumber);
            });
    
            it('Should click on search button', async () => {
                await loadSearchPage.clickSearchButtonNextToOrderNumber();
            });
    
            it('Should verify whether next step is equal to Tender', async () => {
                let tenderText = await loadSearchPage.getTextUnderNextStepColumn();
                expect(await tenderText.trim()).toBe(centerScreenData.tenderText)
            });
    
            it('Should verify origin city which is noted from EOM Load Create', async () => {
                expect(await loadSearchPage.getOriginCityText()).toContain(loadData.origin)
            });
    
            it('Should verify Destination city which is noted from EOM Load Create', async () => {
                expect(await loadSearchPage.getDestinationCityText()).toContain(loadData.destination)
            });
    
            it('Should Verify Project Code which is used in EOM', async () => {
                expect(await loadSearchPage.getProjectCodeText()).toBe(loadData.searchValue);
            });
    
        });

    }

}