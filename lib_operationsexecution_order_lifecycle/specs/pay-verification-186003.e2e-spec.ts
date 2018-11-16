import { MyJbHuntHomePage } from "../pages/my-jbhunt-home.po";

let myJbHuntHomePage = new MyJbHuntHomePage();

describe("Pay Verification", async () => {
    let payVerificationUrl: string = "";
    it("Should Open URL", async () => {
        await myJbHuntHomePage.openPayVerfication(myJbHuntHomePage.payVerificationUrl);
    });

    it("Verifying Url is opened", async () => {
        await expect(myJbHuntHomePage.copyPayVerficationUrl()).toContain(myJbHuntHomePage.payVerificationUrl);
    })

    it("Should Copy URL", async () => {
        payVerificationUrl = await myJbHuntHomePage.copyPayVerficationUrl();
    });

    it("Should Open Pay Verification URL in Windows Explorer", async () => {
       //await myJbHuntHomePage.openPayVerficationInWindowExplorer(payVerificationUrl);
    });

});