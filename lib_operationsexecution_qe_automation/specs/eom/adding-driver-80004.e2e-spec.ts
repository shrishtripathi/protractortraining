import { DataProvider } from "../../data/dataprovider";
import { MyJbHuntHomePage } from "../../pages/eom/my-jbhunt-home.po";
import { FreightManager2Page } from "../../pages/eom/freight-manager-2.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let using = require('jasmine-data-provider');

// Tc_80004: EOM_Regression_7 Adding a Driver
using(DataProvider.Tc_80004, async function (data) {

    describe("EOM_Regression_7 Adding a Driver", () => {
        let orderNumber: string;

        it("Launch Frieght Manager 2", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
        });

        it("Verifying that Freight Manger page is displayed", async function () {
            expect(freightManager2Page.actions.getPageTitle("Fm2PageTitle")).toBe(data.freightManagerTitle);
        });

        it("Should click on Unit View option under Planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.planningTab, data.unitViewOption, data.unitViewPageTitle);
        });

        it('SetUp Parameter', async () => {
            await freightManager2Page.clickOnParameterButton();
            await freightManager2Page.setParameterRadioAndChechBox(data.setParameterRadioAndChechBoxFieldName, data.setParameterRadioAndChechBoxOption)
            await freightManager2Page.enterSelectTypeCode(data.codeName, 1, data.BoardCode1);
            await freightManager2Page.enterSelectTypeCode(data.codeName, 2, data.BoardCode2);
            await freightManager2Page.enterSelectTypeCode(data.codeName, 3, data.BoardCode3);
            await freightManager2Page.enterSelectTypeCode(data.codeName, 4, data.BoardCode4);
            await freightManager2Page.clickOnSaveParameterButton();
            await freightManager2Page.clickOnExitButton();
        });

        it('Click on Search Button', async () => {
            await freightManager2Page.clickOnButtonHavingText(data.searchButton)
        });

        it('Click on the "hyper link" of the truck and Get Driver Number', async () => {
            let driverNumber = await freightManager2Page.getDriverNumber(data.tableId,
                data.requiredColumnHeaderLable1, data.requiredColumnHeaderLable2,
                data.filterColumn3HeaderLable1, data.filterColumn3HeaderLable2,
                data.filterColumn2HeaderLable2, data.filterColumn2HeaderLable1,
                data.filterText1, data.filterText2
                , data.filterText3a, data.filterText3b)
            console.log(driverNumber)
        });

    });

});