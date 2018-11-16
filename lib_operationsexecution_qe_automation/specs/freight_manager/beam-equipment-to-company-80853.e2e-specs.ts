import { BasePage } from '../../pages/base.po';
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { AreaPoolPage } from "../../pages/freight_manager/area-pool.po";
import { CustomerLookUpPage } from "../../pages/freight_manager/customer-lookup.po";
import { ContainerChassisAttachmentPage } from "../../pages/freight_manager/container-chassis-attachment.po";
import { browser } from 'protractor';
import { DataProvider } from "../../data/dataProvider";

let basePage = new BasePage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let areaPoolPage = new AreaPoolPage();
let customerLookUpPage = new CustomerLookUpPage();
let containerChassisAttachmentPage = new ContainerChassisAttachmentPage();
let using = require('jasmine-data-provider');
//TC_80853:TC_80853: FM2_Regression_28 Beam Equipment
using(DataProvider.Tc_80853, async function (data) {
    describe("Beam Equipment", () => {

        let equipmentPoolValues: string[] = [];

        it('Open Freight Manager2 Page', async () => {
            await myJbHuntHomePage.openFm2Url();
        });

        it('Hover Over Equipment Option from header And Click on Area Pool DropDown Option', async () => {
            await freightManager2Page.hoverOverFM2PageHeaderOption("Equipment");
            await freightManager2Page.clickHeaderDropDownOption("Area Pool");
        });

        it('Select Type', async () => {
            await areaPoolPage.selectDivision();
        });

        it('Enter City/ST Code', async () => {
            await areaPoolPage.enterCityOrStateCode();
        });

        it('Click on Search Button', async () => {
            await areaPoolPage.clickOnButton(data.buttonTextValueSearch);
        });

        it('Wait for Search Result', async () => {
            await areaPoolPage.waitForLoading();
        });

        it('Search for Empty Pool greater than 10 and click on Current Pool HyperLink', async () => {
            await areaPoolPage.clickOnCurrentPoolLink();
            await areaPoolPage.waitForLoading();
        });

        it('Search for Empty load status and get Prefix and Equipment number', async () => {
            equipmentPoolValues = await customerLookUpPage.getEquipmentAndPrefix();
            console.log("equipmentValue:"+equipmentPoolValues[0],equipmentPoolValues[1])
            await customerLookUpPage.waitForLoading();
        });

        it('Hover over Equipment', async () => {
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.headerOptionText);            
        });

        it('Click on Chassis/Beam', async () => {
            await freightManager2Page.clickHeaderDropDownOption(data.headerDrpDwnOptionText);
            // await freightManager2Page.waitForLoading();
        });

        it('Enter Prefix code and Equipment Number', async () => {
            await containerChassisAttachmentPage.enterPrefixCodeAndEquipmentNumber(equipmentPoolValues[0], equipmentPoolValues[1]);
            console.log(equipmentPoolValues[0])
        });

        it('Click On Search Button', async () => {
            await containerChassisAttachmentPage.clickOnSearchButtonOnContainerChassisPage();
            await containerChassisAttachmentPage.waitForLoading();  //WaitForSearchResultLoading();
        });

        it('Enter Customer Code and pouplate the city code', async () => {
            await containerChassisAttachmentPage.enterCustomerCodeAndCity();
            await containerChassisAttachmentPage.waitForLoading();
        });

        it('Click on Beam Button', async () => {
            await containerChassisAttachmentPage.clickOnBeamButton();
        });

        it('Verify success message', async () => {
            let successmessage: string = await containerChassisAttachmentPage.validateSuccessMessage();
            expect(successmessage).toEqual("Update Successful. is beamed to CCBDA");
        });

    });
})