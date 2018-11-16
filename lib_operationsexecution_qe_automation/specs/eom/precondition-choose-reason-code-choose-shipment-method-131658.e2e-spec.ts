import { SkeletonListingPage } from "../../pages/eom/skeleton-listing.po";
import { DataProvider } from "../../data/dataProvider";
    
  // TC #131658 :EOM | Choose reason code- Choose shipment method
  let skeletonListingPage = new SkeletonListingPage();
  let using = require('jasmine-data-provider');
    using(DataProvider.Tc_131689, async function (data) {

        describe("Choose reason code- Choose shipment method", () => {

            it("Click ''NEXT'' ", async () => {
                await skeletonListingPage.clickNextONSelectPickUpDateScreen();
            });
            it("Click ''CHOOSE REASON CODE '' drop down box ", async () => {
                await skeletonListingPage.selectRateCode(data.rateCode);
            });
            it("Click BOOK LOAD WITHOUT RATE", async () => {
                await skeletonListingPage.clickBookLoadWithoutRate();
            });
            it("Click ICS for the Fleet Decision", async () => {
                await skeletonListingPage.clickTodayICS();
            });

        });
    });
