import { MaximoHomePage } from "../../pages/asset_administration/maximo-home.po";
import { DataProvider } from "../../data/dataProvider";

let maximoHomePage = new MaximoHomePage();
let using = require('jasmine-data-provider');


//TC #130895: Login to Maximo
using(DataProvider.Tc_129960, async function (data) {

    describe(" Login to Maximo", () => {
        let personNames: string[] = [];
        it("Should open maximo url", async () => {
            await maximoHomePage.openUrl(maximoHomePage.maximoURL);
        });

        it("Verifying that maximo page is displayed", async () => {
            await expect(maximoHomePage.getPageTitle()).toBe(data.maximoTitle);
        });

        it("Login into maximo application ", async () => {
            await maximoHomePage.login(data.username, data.password);
        });

    });
});