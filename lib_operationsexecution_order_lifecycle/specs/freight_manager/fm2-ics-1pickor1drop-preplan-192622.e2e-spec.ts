import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let orderSegmentPage = new OrderSegmentPage();
let using = require('jasmine-data-provider');

//TC-192622:FM2 ICS 1Pick/1Drop Preplan
using(DataProvider.Tc_192622, async function (data){

    describe("FM2 ICS 1Pick/1Drop Preplan", function(){

        it("Should Open My JBHunt url", async() => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
        });

        it("Should click on'Order Segment' under planning tab", async () => {
           await myJbHuntHomePage.selectOptionFromTab(data.tabName,data.tabOption);
        });

        it("Should enter your order number in the text box underneath Order#", async() =>{
            await orderSegmentPage.enterOrderId(data.loadNumber);
        });

        it("Should click the search button", async() =>{
            await orderSegmentPage.clickSearchButton();
        });

        it("Ensure Project/Carrier is selected,enter Project Code and enter Carrier code", async() =>{
           await orderSegmentPage.enterProjectCarrierNumber(data.projectCode,data.carrierCode);
        });
         
        it("Should lick Create Preplan", async() =>{
            await orderSegmentPage.clickOnCreatePreplanButton();
        });   
        
        it('Verify Success message',async () => {
            expect(await orderSegmentPage.getSuccessMessage()).toContain(data.successMessage)
        });
   })    
})