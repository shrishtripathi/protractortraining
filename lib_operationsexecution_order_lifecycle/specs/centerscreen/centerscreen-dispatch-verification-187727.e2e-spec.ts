import { DataProvider } from '../../data/dataProvider';
import { CenterScreenE2EComponents } from '../../e2eComponents/centerscreen/centerscreen.pc';
import { EOME2EComponents } from '../../e2eComponents/eom/eom.pc';
import { FM2E2EComponents } from '../../e2eComponents/freight_manager/fm2.pc';

let using = require('jasmine-data-provider');
let centerScreenE2EComponents = new CenterScreenE2EComponents();
let eomE2EComponents = new EOME2EComponents();
let fm2E2EComponents = new FM2E2EComponents();

let loadCreateVerificationData = Object.assign({}, DataProvider.Tc_187727);

//TC 187727: Centerscreen Dispatch Verification
using(loadCreateVerificationData, async function (data) {

    describe('Centerscreen Dispatch Verification', () => {

        describe('4001 EOM 1Pick/1Drop Load Create', async () => {
            await eomE2EComponents.eomOnePickOrDropTruckModeLoadCreate(data.onePickOrDropTruckModeLoadData)
        });

        describe('Finding a JBC Driver', async () => {
            await fm2E2EComponents.findingAJbcDriver(data.searchJBCDriverData);
        });

        describe("FM2 Preplan", async () => {
            await fm2E2EComponents.createPreplan(data.onePickOrDropTruckModeLoadData, data.searchJBCDriverData, data.createPreplanData);
        });

        describe ("Finding a Equipment Number",async () => {
            await fm2E2EComponents.findingAEquipmentNumber(data.findingAequipmentNumber);
        });

        describe("FM2 Dispatch", async () => {
            await fm2E2EComponents.loadDispatchWithoutComment(data.onePickOrDropTruckModeLoadData,data.findingAequipmentNumber, data.fm2DispatchData);
        });

        describe('Centerscreen Dispatch Verification', async () => {
            await centerScreenE2EComponents.centerScreenDispatchVerification(data.onePickOrDropTruckModeLoadData, data.arrivalText)
        });

    });
});