import { By, browser } from 'protractor';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { DataProvider } from '../../data/dataProvider';
import { MaximoHomePage } from '../../pages/asset_administration/maximo-home.po';
import { ItemMasterPage } from '../../pages/asset_administration/item_master.po';
import { InventoryPage } from '../../pages/asset_administration/inventory.po';


let myJbHuntHomePage = new MyJbHuntHomePage();
let maximoHomePage=new MaximoHomePage();
let itemMasterPage = new ItemMasterPage();
let inventoryPage = new InventoryPage();
let using = require('jasmine-data-provider');


// TC_126217: Maximo_2 Add Item to Storeroom
using(DataProvider.Tc_126217, async function (data) {
    describe("Maximo_2 Add Item to Storeroom", () => {

        
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

         // #TC_126217
       
        it("Click the three line icon in the top left corner of the screen", async () => {
            	await maximoHomePage.clickMenuIcon();
        });
        it("Hover over Inventory", async () => {
                await maximoHomePage.mouseHoverInventory();
        });
        it("Once options are displayed, select 'Item Master'", async () => {
                await maximoHomePage.clickItemMaster();
        });
        it(" Enter the 'item number' in the field 'find item'", async () => {
                await itemMasterPage.enterInFindItem(itemMasterPage.itemValue)
        });
        it("hit enter", async () => {
               await itemMasterPage.hitEnter();
        });
        it("Next, click the 'Select Action' dropdown at the top of the screen and select 'Add item to storeroom'", async () => {
            await itemMasterPage.selectActionDropDown();
        });
       it("verify if the pop up appears", async () => {
            let flag:boolean= await itemMasterPage.verifyFirstPopUP();
            expect(flag).toBeTruthy();
         });
        it("type in 'GENOF-INV' to the blank box next to where it says 'Storeroom'and click 'ok'", async () => {
            await itemMasterPage.enterInStoreRoom(data.storeRoom)
            await itemMasterPage.clickOkButton();
        });
       it("Once the next pop up appears, verify that the 'Item number' you typed in is the same", async () => {
            let flag:boolean=await itemMasterPage.verifySecondPopUP();
            expect(flag).toBeTruthy();
        });
        it("Below where it says 'Standard Cost' add a cost of '50'", async () => {
            console.log(data.standardCost)
            await itemMasterPage.enterStandardCost(data.standardCost)
        });
        it("Below where it says 'Current Balance' add a cost of 20.", async () => {
            console.log(data.currentBalance)
            await itemMasterPage.enterCurrentBalance(data.currentBalance)
       
        });
        it(" Below where it says 'Issue Unit' select the magnifying glass icon.", async () => {
            await itemMasterPage.selectFromIssueUnit();
            
        });
        it("click 'ok'", async () => {
            await itemMasterPage.clickOkButton();
        
        });
        it("verify if A confirmation message at the top of the screen should inform you that the items were added to the storeroom.", async () => {
         let flag: boolean=await itemMasterPage.verifyConfirmationMessage();
         expect(flag).toBeTruthy();
        });
       
    });
});