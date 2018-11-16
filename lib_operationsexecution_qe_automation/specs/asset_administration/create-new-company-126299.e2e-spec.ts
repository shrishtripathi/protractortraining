import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { MaximoHomePage } from "../../pages/asset_administration/maximo-home.po";
import { InventoryPage } from "../../pages/asset_administration/inventory.po";
import { ItemMasterPage } from "../../pages/asset_administration/item_master.po";
import { PurchaseRequisitionsPage } from "../../pages/asset_administration/purchase_requisitions.po";
import { PurchaseOrders } from "../../pages/asset_administration/maximo-purchase-orders.po"
import { Companies } from "../../pages/asset_administration/companies.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let maximoHomePage = new MaximoHomePage();
let inventoryPage = new InventoryPage();
let itemMasterPage = new ItemMasterPage();
let purchaseRequisitionsPage = new PurchaseRequisitionsPage();
let purchaseOrders = new PurchaseOrders();
let companies=new Companies();
let using = require('jasmine-data-provider');


//TC #126299: Maximo_8 Create New Company
using(DataProvider.Tc_126299, async function (data) {
    let prNumber=null;
    let prNumber1=null;

    describe("Create New Company", () => {


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

        //# Tc126290
        it(" Next select the three line icon. From the drop down, hover over Purchasing and select Purchase Orders (PO).", async () => {
            await maximoHomePage.clickonThreeLineIcon();
            await maximoHomePage.selectPurchaseOrders();
        });
        it(" Select the New item icon at the top of the screen to create a new PO. (Take note of the PO number, you will use it in future TC)", async () => {
            await purchaseRequisitionsPage.clickNewPurchaseRequisitionsItemIcon();
             prNumber1=await purchaseRequisitionsPage.notePONumber();
            console.log('prNumber1... ',prNumber1)

        });
        it(" Below the section titled Vendor in the box next to where it says Company, type in 0000553053. ", async () => {

            await purchaseOrders.enterCompanyValue(data.company);

        });
        it("Click the >> symbol next to where you typed in the company code. ", async () => {

            await purchaseOrders.clickCompanyDetailsIcons();

        });
        it(" Select Purkeys Fleet Electric Inc", async () => {

            await purchaseOrders.clickCompanyDescription();

        });
        it("Next to where it says PO Category, select the magnifying glass.", async () => {
            await purchaseOrders.clickPoCategoryMagnifyingGlassIcon();

        });
        it("Select DOWN TERMINAL.", async () => {

            await purchaseOrders.selectCategory(data.downTerminal)
        });
        it("Next to where it says Required Date, click the calendar icon. ", async () => {
            
            await purchaseOrders.clickRequiredDateCalendar()
        });

        it("Select the PO Lines tab at the top of the screen. ", async () => {
            await purchaseOrders.selectTab(data.poLinesTab)

        });
        it("Select the New Row button in the middle of the screen.", async () => {

            await purchaseOrders.clickNewRowButton();

        });
        it("In the box next to where it says Item, type in your item number (you should have noted it from previous scripts). ", async () => {
            await purchaseOrders.enterItemValue(itemMasterPage.itemValue);
        });
            
        it("In the box next to where it says Storeroom type in GENOF-INV ", async () => {
            await purchaseRequisitionsPage.enterStoreroomValue(data.StoreroomValue);
        });
        it(" In the box next to where it says Order Unit, type in CYL", async () => {
            await purchaseRequisitionsPage.enterOrderUnitValue(data.OrderUnit);
        });
               
        it(" In the box next to where it says Conversion Factor type in 1.00", async () => {
            await purchaseOrders.enterConversionFactorValue(data.ConversionFactor);
        });
        it("Next to where it says Unit Cost type in 100. ", async () => {
            await purchaseRequisitionsPage.enterUnitCostValue(data.unitCost);
        });
        it("Click the Save button at the top of the screen ", async () => {
            await inventoryPage.clickOnInputButton(inventoryPage.saveButton);

        });
        it("Verify save message at the top", async () => {

            let result: boolean = await inventoryPage.verifySavedMessage();
            await expect(result).toBeTruthy();
        });
        it("Click the Change Status button at the top of the screen", async () => {
            await purchaseOrders.clickOnChangeStatusButton();
        });
        it("New to where it says New Status, click the drop down and select Approved.", async () => {

            await purchaseOrders.selectStatus(data.newStatus);
        });
        it("Click OK.", async () => {
            await purchaseRequisitionsPage.clickOkButton();
        });
        it("Verify Apporoval Status.", async () => {
           let flag= await purchaseRequisitionsPage.verifyApproveStatus();
           expect(flag).toBeTruthy();
        });
                   

        // #Tc_126294

        it("Click on three line icon on left corner of the screen ", async () => {
            await maximoHomePage.clickonThreeLineIcon();
        });

        
        it("Select item list by hovering Select Receiving ", async () => {
              await maximoHomePage.selectRecieving();
        });

        it("In the box below PO, type in your PO number from the previous script and click enter.", async () => {
            await purchaseRequisitionsPage.setPrNumber(prNumber1);
        });

        it("Click the hyperlink associated with your Item. ", async () => {
            await purchaseRequisitionsPage.clickPrNumberHyperLink(prNumber1);
        });

        it("Click the Select Ordered Items button.", async () => {
            await purchaseRequisitionsPage.click(purchaseRequisitionsPage.orderItemsButton)
        });

        it("Select your item that you created by clicking the check box. ", async () => {
            await purchaseRequisitionsPage.click(purchaseRequisitionsPage.itemCheckBox)
        });

        it("Click OK. ", async () => {
            await purchaseRequisitionsPage.clickOkButton();
        });

        it("Click the Save Icon at the top of the screen. ", async () => {
            await inventoryPage.clickOnInputButton(inventoryPage.saveButton);
        });
        it("Verify save message at the top", async () => {
            let result: boolean = await inventoryPage.verifySavedMessage();
             await expect(result).toBeTruthy();
         });
              
        //# TC_126299
        it("Click on three line icon on left corner of the screen ", async () => {
            await maximoHomePage.clickonThreeLineIcon();
        });

        it("Select item list by hovering Select Receiving ", async () => {
              await maximoHomePage.selectCompanies();
        });
        it("Click the Create New Company Icon at the top of the page ", async () => {
            await purchaseRequisitionsPage.clickNewPurchaseRequisitionsItemIcon();
        });
        it("In the box next to Company, type in 0000055493_000001 W W GRAINGER INC ", async () => {
            await companies.setText(companies.companyInputBox,data.selectCompany);
        });
        it("Select the box next to where it says PS Vendor?", async () => {
             await companies.click(companies.psVendorCheckBox);
             let flag=await companies.verifyIsVendorCheckBoxCheked();
             expect(flag).toBeTruthy();
        });
        it("Next to where it says Company Type, select the magnifying glass icon.", async () => {
            await companies.click(companies.companyTypeSearchIcon);
        });
        it("Select V for Vendor", async () => {
            await companies.click(companies.vendor);
        });
        it("Click the Save Icon at the top of the screen", async () => {
            await companies.click(companies.saveIcon);
        });
        it("Verify save message at the top", async () => {
            let result: boolean = await inventoryPage.verifySavedMessage();
             await expect(result).toBeTruthy();
        });
         
        
        
        
        
        
        

    });

});

