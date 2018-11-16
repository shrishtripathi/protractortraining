import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { AssetAdministrationHomePage } from "../../pages/asset_administration/asset-administration-home.po";
import { AssetUpdatePage } from "../../pages/asset_administration/asset-update.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { MaximoHomePage } from "../../pages/asset_administration/maximo-home.po";
import { InventoryPage } from "../../pages/asset_administration/inventory.po";
import { ItemMasterPage } from "../../pages/asset_administration/item_master.po";
import { PurchaseRequisitionsPage } from "../../pages/asset_administration/purchase_requisitions.po";
import { PurchaseOrders } from "../../pages/asset_administration/maximo-purchase-orders.po"
import { browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let maximoHomePage = new MaximoHomePage();
let inventoryPage = new InventoryPage();
let itemMasterPage = new ItemMasterPage();
let purchaseRequisitionsPage = new PurchaseRequisitionsPage();
let purchaseOrders = new PurchaseOrders();
let using = require('jasmine-data-provider');


//TC #126185: Maximo_1 Create Item
using(DataProvider.Tc_126185, async function (data) {
   

    describe("Create PO from scratch and change status to approved", () => {
        it("Should open maximo url", async () => {
            await maximoHomePage.openUrl(myJbHuntHomePage.maximoURL);
        });

        it("Verifying that maximo page is displayed", async () => {
            await expect(maximoHomePage.getPageTitle()).toBe(data.maximoTitle);
        });

        it("Login into maximo application ", async () => {
            await maximoHomePage.login(data.username, data.password);
        });

        it("Wait untill maximo screen loads", async () => {
            await maximoHomePage.waitUntillWelcomeScreenLoad();
        });

       it("Click on three line icon on left corner of the screen ", async () => {
            await maximoHomePage.clickonThreeLineIcon();
        });

        
        it("Select item list by hovering on inventory ", async () => {
            await maximoHomePage.selectItemList();
        });

        it("Select the new item icon ", async () => {
            await itemMasterPage.clickNewItemIcon();
        });

        it("Enter Item number ", async () => {
            await itemMasterPage.enterItemNumber();
        });

        it("Insert description", async () => {
            await itemMasterPage.enterDescription(data.description);
        });

        it("Select Magnifying glass next to Commodity Group", async () => {
            await itemMasterPage.selectCommodityGroupIcon();
        });

        it("Select Group from Commodity Group popUp ", async () => {
            await itemMasterPage.selectCommodityGroup();
        });

        it("Select Magnifying glass next to Quote Class ID", async () => {
            await itemMasterPage.selectQuoteClassIDIcon();
        });

        it("Select ID from Quote Class ID popUp ", async () => {
            await itemMasterPage.selectQuoteClassID();
        });

        it("Click on Save icon", async () => {
            await inventoryPage.clickOnInputButton(inventoryPage.saveButton);
        });

        it("Verify save message at the top", async () => {
            let result: boolean = await inventoryPage.verifySavedMessage();
            await expect(result).toBeTruthy();
        });

       
    });
});