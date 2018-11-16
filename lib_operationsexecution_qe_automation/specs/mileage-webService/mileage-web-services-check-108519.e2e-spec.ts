import { MileageWebService } from "../../pages/mileage-webService/mileage-webService.po";
import { DataProvider } from '../../data/dataProvider';
import { async } from "q";
let using = require('jasmine-data-provider');
let mileageWebService = new MileageWebService();

using(DataProvider.Tc_108519, (data) => {
    //Tc#108519 -Mileage Web services Check
    describe("Mileage Web services Check", async function () {

        it("Validate API URL", async () => {
           let value =  await mileageWebService.webServiceUrl(data.url);
           expect(data.response).toEqual(value);
        });
    });
});