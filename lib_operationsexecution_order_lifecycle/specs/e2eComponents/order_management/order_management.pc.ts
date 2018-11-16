import { OrderManagementHomePage } from "../../pages/order_management/order-management-homepage.po";

let orderManagementHomePage=new OrderManagementHomePage();

export class OrderManagementE2EComponents {

    async orderCreate(data) {

        describe("OM Create Order ", () => {
            let loadNumber:string;
    
            it("Should open enterprise dashoboard page url ", async () => {
                orderManagementHomePage.navigateToAppHome(orderManagementHomePage.orderManagementUrl);
            });
    
            it("Verifying That Enterprise dashboard Page Is Displayed", async function () {
                await expect<any>(orderManagementHomePage.getPageTitle()).toBe(data.orderManagementPageTitle);
            });
    
            it("Should click on plus icon ", async () => {
                await orderManagementHomePage.hoverOnPlusIconAndSelectAccount();
            });
    
            it("Should click on create order button ", async () => {
                await orderManagementHomePage.clickOnCreateOrderButton();
            });
    
            it("Should make a note of order number", async () => {
                loadNumber=await orderManagementHomePage.getLoadNumber();
                data.orderNumber = loadNumber.trim();
            });
    
            it("Verifying order number", async () => {
                await expect<any>(orderManagementHomePage.getLoadNumber()).not.toBeNull();
           });
           
        });

    }

}