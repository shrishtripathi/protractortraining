import { DataProvider } from "../../data/dataProvider";
import { async } from "q";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let orderSegmentPage = new OrderSegmentPage();
let using = require('jasmine-data-provider');

//TC 185247 : FM2 Hazmat Preplan

using(DataProvider.Tc_185247, async function (data){

    describe("FM2 Hazmat Preplan", function(){
   
        let orderNumber : string;
        let tractorNumber : string;
        let originRamp : string;

        it("Should Open My JBHunt url", async() => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
        });

        it("Should click on'Order Segment' under planning tab", async () => {
           await myJbHuntHomePage.selectOptionFromTab(data.tabName,data.option);
        });

        it("Should enter the earlier noted load number, in the white text box underneath Order# ", async () => {
            await orderSegmentPage.enterOrderNumber(data.orderNumber, "Order Number");
        });

        it("Should click on Search button", async () => {
            await orderSegmentPage.clickSearchButton();
        });
    
        it("Should click the radial button next to Tractor, in the white text box underneath Tractor enter the earlier noted driver number", async () => {
            await orderSegmentPage.enterTractorNumber(data.tractorNumber);
        });

        it("Should Click all the check boxes", async () => {
            await orderSegmentPage.clickOnCheckBox();
        });

        it("Should enter the origin ramp, In the white text box underneath TCall Location", async () => {
            await orderSegmentPage.enterTcallLocationValue(data.originRamp);
        });

        it("Should Click the Create preplan button and click the Continue button if required", async () => {
            await orderSegmentPage.clickOnCreatePreplanButton();
        });

    });
});
