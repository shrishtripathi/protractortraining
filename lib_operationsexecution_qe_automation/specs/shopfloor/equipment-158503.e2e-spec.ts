import { DataProvider } from "../../data/dataProvider";
import { EquipmentPage } from "../../pages/shopfloor/equipment.po";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";

let shopfloorHomePage = new ShopfloorHomePage();
let equipmentPage = new EquipmentPage
let using = require('jasmine-data-provider');

//#TC 158503_Shopfloor_Regression_3 Equipment
using(DataProvider.Tc_158503, async function (data) {
    describe("Equipment", () => {
        let workOrder;

        //#TC 158277 : Login to Shopfloor
        using(DataProvider.TC_113191, async function (data1) {
            it("Should Open road contact service url", async () => {
                await shopfloorHomePage.openshopfloorURL();
            });

            it("Should login into shop floor application", async function () {
                await shopfloorHomePage.login(data1.userid, data1.password);
            });

            it("Verifying that redirected to shopfloor Page", async () => {
                await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data1.shopfloorPageTitle);
            });
        });

        it("Hover on Equipemnt tab and click on Search", async () => {
            await shopfloorHomePage.waitForPageLoad();
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.dropdownOption, data.dropdownValue);
            await shopfloorHomePage.waitForPageLoad();
            await shopfloorHomePage.waitForElementToBeinvisible(shopfloorHomePage.loadingElement);
        });

        it("Select chassis from unit type dropdown", async () => {
            await equipmentPage.selectUnitType(data.chassisValue);
            await equipmentPage.clickOnButton(data.SearchValue);
            await shopfloorHomePage.waitForPageLoad();
            await shopfloorHomePage.waitForElementToBeinvisible(shopfloorHomePage.loadingElement);
        });

        it("Click on Last link in equipment list", async () => {
            await equipmentPage.clickOnLink(data.LastLinkValue);
            await shopfloorHomePage.waitForPageLoad();
            await shopfloorHomePage.waitForElementToBeinvisible(shopfloorHomePage.loadingElement);
            let result: Boolean = await equipmentPage.verifyElementPresent(equipmentPage.paginationFirst);
            expect(result).toBeTruthy();
        });

        it("Hover on Equipemnt tab and select equipment details", async () => {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.dropdownOption, data.dropdownValue1);
            await shopfloorHomePage.actions.selectWindow(1,"");
            await shopfloorHomePage.loginIfRequired();
            let result:Boolean = await shopfloorHomePage.verifyNewWindowURL(data.outputURL);
            expect(result).toBeTruthy();
        });

    });
});