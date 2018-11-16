import { DataProvider } from "../../data/dataProvider";
import { async } from "q";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let orderSegmentPage = new OrderSegmentPage();
let using = require('jasmine-data-provider');

//TC 177853: FM2 Load Create Verification

using(DataProvider.Tc_177853, async function (data){

    describe("FM2 Load Create Verification", function(){

        it("Should Open My JBHunt url", async() => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
        });

        it("Should click on'Order Segment' under planning tab", async () => {
           await myJbHuntHomePage.selectOptionFromTab(data.tabName,data.option);
        });

        it("Should enter your order number in the text box underneath Order#", async() =>{
            await orderSegmentPage.enterOrderId(data.orderNumber);
        });

        it("Should click the search button", async() =>{
            await orderSegmentPage.clickSearchButton();
        });

        it("verifying order details", async() => {
            let count: number = await orderSegmentPage.verifyOrderDetails();
            expect(count).toBeGreaterThanOrEqual(data.one);
        });
    })    
})