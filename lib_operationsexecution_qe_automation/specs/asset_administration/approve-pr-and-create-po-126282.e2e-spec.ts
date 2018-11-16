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


//TC #126290: Maximo_5 Approve PR and create PO
using(DataProvider.Tc_126282, async function (data) {
    let prNumber=null;
    let prNumber1=null;

    describe("Approve PR and create PO", () => {
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
           // await itemMasterPage.selectFromOrderUnit();
            
        });
        it("click 'ok'", async () => {
            await itemMasterPage.clickOkButton();
        
        });
        it("verify if A confirmation message at the top of the screen should inform you that the items were added to the storeroom.", async () => {
         let flag: boolean=await itemMasterPage.verifyConfirmationMessage();
         expect(flag).toBeTruthy();
        });

        //#Tc_126270
        it("Click on Inventory hyperlink on left side ", async () => {
            await maximoHomePage.click(maximoHomePage.homeIcon);
            await maximoHomePage.clickonLeftFavoriteLink(data.favoriteLinkName);
        });

        it("Enter Item number ", async () => {          
            await inventoryPage.enetrItemNumberInInventory(itemMasterPage.itemValue);
        });

        it("Click on Item Number hyperlink", async () => {
            await inventoryPage.clickOnItemNumberHyperlink(itemMasterPage.itemValue);
        });

        it("Click on Reorder Details tab", async () => {
            await inventoryPage.selectInventoryTabs(data.reorderDetailTab);
        });

        it("Enter reorder point value ", async () => {
            await inventoryPage.enterValueForRecorderPoint(inventoryPage.reorderPoint);
        });

        it("Enter value for primary vendor", async () => {
            await inventoryPage.enterPrimaryVendorandHitTab(inventoryPage.primaryVendor, data.primaryVendorValue);
        });

        it("Click on Save icon", async () => {
            await inventoryPage.clickOnInputButton(inventoryPage.saveButton);
        });

        it("Verify save message at the top", async () => {
            let result: boolean = await inventoryPage.verifySavedMessage();
            await expect(result).toBeTruthy();
        });

        //#tc 126272
        it("Click on three line icon on left corner of the screen ", async () => {
            await maximoHomePage.clickonThreeLineIcon();
        });

        it("Select purchasing requisitions  by hovering on purchasing ", async () => {
            await maximoHomePage.selectPurchasingRequisitions();
        });

        it("Select the new item icon ", async () => {
            
            await purchaseRequisitionsPage.clickNewPurchaseRequisitionsItemIcon();
        });

        it("Take note of Purchase Requisitions Number", async () => {
            prNumber = await purchaseRequisitionsPage.notePRNumber();
            await console.log("prNumber:" + prNumber);
            await expect(prNumber).not.toBeNull();
        });

        it("Select Magnifying glass next to PR Category", async () => {
            await purchaseRequisitionsPage.selectPRCategoryIcon();
        });

        it("Select Category from PR Category popUp ", async () => {
            await purchaseRequisitionsPage.selectCategory();
        });

        it("Click the PR Lines tab", async () => {
            await purchaseRequisitionsPage.clickPRLinesTab();
        });

        it("Click the New Row Button", async () => {
            await purchaseRequisitionsPage.clickNewRowButton();
        })

        it("Enter item value", async () => {
            await purchaseRequisitionsPage.enterItemValue(itemMasterPage.itemValue);
        });

        it("Enter value in Storeroom text box", async () => {
            await purchaseRequisitionsPage.enterStoreroomValue(data.StoreroomValue);
            console.log("Storeroom" + data.StoreroomValue);
        });

        it("Enter value in OrderUnit text box", async () => {
            await purchaseRequisitionsPage.enterOrderUnitValue(data.OrderUnit);
        });

        it("Enter value in Unit Cost text box", async () => {
            await purchaseRequisitionsPage.enterUnitCostValue(data.unitCost);
           // await purchaseRequisitionsPage.selectDebitCard();
        });

        it("Click the PR tab", async () => {
            await purchaseRequisitionsPage.clickPRTab();
        });

        it("Click on Save icon", async () => {
            await inventoryPage.clickOnInputButton(inventoryPage.saveButton);
        });

        it("Verify save message at the top", async () => {
            let result: boolean = await inventoryPage.verifySavedMessage();
            await expect(result).toBeTruthy();
        });

        //# TC_126282
        it("Next select the three line icon. From the drop down, hover over Purchasing and select Purchase Requisitions.", async () => {
            await maximoHomePage.clickonThreeLineIcon();
            await maximoHomePage.selectPurchasingRequisitions();
        });

        it("Under the PR column, type in your PR# from the Purchase Requisition you created in the previous script. Hit enter.", async () => {
            await purchaseRequisitionsPage.setPrNumber(prNumber);
        });

        it("Click the hyperlink to your item.", async () => {
            await purchaseRequisitionsPage.clickPrNumberHyperLink(prNumber)
        });

        it("Click the green check mark at the top of the screen to approve the PR.", async () => {
            await purchaseRequisitionsPage.clickApproveTickMark()
        });

        it("Click OK.", async () => {
            await purchaseRequisitionsPage.clickOkButton();
        });

        it(" Select CreatePo from Action dropdown.", async () => {
            await purchaseRequisitionsPage.clickOnCreatepo();
        });

        it(" In the empty box, type in anything (e.g. Test) and click OK.", async () => {
            await purchaseRequisitionsPage.setTextInCreatePoTextBox();
            await purchaseRequisitionsPage.clickOkButton();
        });

        it("A confirmation message will appear at the top of the screen. ", async () => {
           let flag:boolean= await purchaseRequisitionsPage.verifyFinalSuccessMessage();
           expect(flag).toBeTruthy();
        });

      



    });
});