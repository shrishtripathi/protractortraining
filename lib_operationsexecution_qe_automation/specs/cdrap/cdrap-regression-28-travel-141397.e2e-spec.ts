import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { TravelSearchPage } from "../../pages/cdrap/travel-search.po";
import { async } from "q";

let cdrapHomePage = new CdrapHomePage();
let travelSearchPage = new TravelSearchPage();
let using = require('jasmine-data-provider');

describe("CDRAP_Regression_28 Travel", () => {

    //PreTestCase 139492: CDRAP Login to homescreen
    using(DataProvider.Tc_157971, async function (data) {

        it("Should open CDRAP url", async () => {
            await cdrapHomePage.openUrl(cdrapHomePage.cdrapUrl);
        });

        it("Verifying that CDRAP page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toBe(data.loginTitle);
        });

        it("Login into CDRAP application ", async () => {
            await cdrapHomePage.loginIntoCdrap(data.username, data.password, data.submit);
        });

        it("Verifying that CDRAP Logged in Home page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.cdrapHomeTitle);
        });

    });

    using(DataProvider.Tc_141397, async function (data) {

        it('Click the Travel hyperlink.', async () => {
            await cdrapHomePage.clickOnLink(data.travel)
        });

        it('Underneath Travel, click the New Inbound Travel hyperlink. ', async () => {
            await travelSearchPage.click(await travelSearchPage.spanText(data.inbound));
            await travelSearchPage.click(await travelSearchPage.spanText(data.bus));
        });

        it('Underneath Travel, click the New Inbound Travel hyperlink. ', async () => {
            await travelSearchPage.clickOnLink(data.newInboundTravel)
        });

        it('Validate the new window and close the window', async () => {
            await travelSearchPage.switchToWindow(1);
            expect(await travelSearchPage.getPageTitle()).toBe(data.requestNewTravel)
            await travelSearchPage.closeCurrentWindow();
        });

        it('Underneath Travel, click the New Outbound Travel hyperlink. ', async () => {
            await travelSearchPage.clickOnLink(data.newOutboundTravel)
        });

        it('Validate the new window and close the window', async () => {
            await travelSearchPage.switchToWindow(1);
            expect(await travelSearchPage.getPageTitle()).toBe(data.requestNewTravel)
            await travelSearchPage.closeCurrentWindow();
        });

        it('In the white text boxes next to Travel Date, change the dates to 01/01/2018-01/30/2018.', async () => {
            await travelSearchPage.enterTravelDate(data.to, data.toMM, data.toDD, data.toYYYY)
            await travelSearchPage.enterTravelDate(data.from, data.fromMM, data.fromDD, data.fromYYYY)
        });

        it(' Click the Search button.', async () => {
            await travelSearchPage.clickOnButton(data.search)
        });

        it('Underneath the SSN column, click a hyperlink.',async () => {
            await travelSearchPage.clickOnModeOfTravelLink(data.ssn)
        });

        it('Validate the new window and close the window', async () => {
            await travelSearchPage.switchToWindow(1);
            expect(await travelSearchPage.getPageTitle()).toContain(data.updateTravel)
            await travelSearchPage.closeCurrentWindow();
        });

        it('Underneath the Name column, click a hyperlink.',async () => {
            await travelSearchPage.clickOnModeOfTravelLink(data.name)
        });

        it('Validate the new window and close the window', async () => {
            await travelSearchPage.switchToWindow(1);
            expect(await travelSearchPage.getPageTitle()).toContain(data.callBackConfirmation)
            await travelSearchPage.closeCurrentWindow();
        });

        it(' Click the Reset button.', async () => {
            await travelSearchPage.clickOnButton(data.reset)
        });

        it('Validate Search results will clear.',async () => {
            expect(await travelSearchPage.searchResultTableHeaderXpath.isPresent()).toBe(false)
        });

        it('Click the Plane tab. ', async () => {
            await travelSearchPage.click(await travelSearchPage.spanText(data.plane));
        });

        it('In the white text boxes next to Travel Date, change the dates to 02/01/2018-02/28/2018.', async () => {
            await travelSearchPage.enterTravelDate(data.to, data.nextToMM, data.nextToDD, data.nextToYYYY)
            await travelSearchPage.enterTravelDate(data.from, data.nextFromMM, data.nextFromDD, data.nextFromYYYY)
        });

        it(' Click the Search button.', async () => {
            await travelSearchPage.clickOnButton(data.search)
        });

        it('Click the Outbound tab. ', async () => {
            await travelSearchPage.click(await travelSearchPage.spanText(data.outbound));
            await travelSearchPage.click(await travelSearchPage.spanText(data.bus));
        });

        it('In the white text boxes next to Travel Date, change the dates to 01/01/2018-01/30/2018.', async () => {
            await travelSearchPage.enterTravelDate(data.to, data.toMM, data.toDD, data.toYYYY)
            await travelSearchPage.enterTravelDate(data.from, data.fromMM, data.fromDD, data.fromYYYY)
        });

        it(' Click the Search button.', async () => {
            await travelSearchPage.clickOnButton(data.search)
        });

        it('Click the Plane tab. ', async () => {
            await travelSearchPage.click(await travelSearchPage.spanText(data.plane));
        });

        it('In the white text boxes next to Travel Date, change the dates to 12/01/2017-12/28/2017.', async () => {
            await travelSearchPage.enterTravelDate(data.to, data.outboundtoMM, data.outboundtoDD, data.outboundtoYYYY)
            await travelSearchPage.enterTravelDate(data.from, data.outboundfromMM, data.outboundfromDD, data.outboundfromYYYY)
        });

        it(' Click the Search button.', async () => {
            await travelSearchPage.clickOnButton(data.search)
        });

        it('Click the Cancle tab. ', async () => {
            await travelSearchPage.click(await travelSearchPage.spanText(data.cancel));
        });

        it('In the white text boxes next to Travel Date, change the dates to 12/01/2017-12/28/2017.', async () => {
            await travelSearchPage.enterTravelDate(data.to, data.outboundtoMM, data.outboundtoDD, data.outboundtoYYYY)
            await travelSearchPage.enterTravelDate(data.from, data.outboundfromMM, data.outboundfromDD, data.outboundfromYYYY)
        });

        it(' Click the Search button.', async () => {
            await travelSearchPage.clickOnButton(data.search)
        });

        it('Click the Plane tab. ', async () => {
            await travelSearchPage.click(await travelSearchPage.spanText(data.plane));
        });

        it('In the white text boxes next to Travel Date, change the dates to 01/01/2018-01/30/2018.', async () => {
            await travelSearchPage.enterTravelDate(data.to, data.toMM, data.toDD, data.toYYYY)
            await travelSearchPage.enterTravelDate(data.from, data.fromMM, data.fromDD, data.fromYYYY)
        });
        
        it(' Click the Search button.', async () => {
            await travelSearchPage.clickOnButton(data.search)
        });
    });


});