import { DetailsPage } from "../../pages/eom/details.po";
import { OrderDetailsViewPage } from "../../pages/eom/order-detail-view.po";   
import { DataDemo } from "../../data/datademo";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eOME2EComponents = new EOME2EComponents();
let fM2E2EComponents = new FM2E2EComponents();

let loadCreateVerificationData = Object.assign({}, DataDemo.Test2);

using(loadCreateVerificationData, async (data) => {
    
    describe('EOM 1Pick/1Drop Load Dispatch', async () => {
        
        describe("EOM 1Pick/1Drop Load Create", async () => {            
            await eOME2EComponents.eomOnePickOrDropLoadCreate(data.loadCreateData);
        })

        describe('Finding a JBC Driver', async () => {           
            await fM2E2EComponents.findingAJbcDriver(data.findingAJbcDriver);
        });

        describe('FM2 1Pick/1Drop Preplan', async () => {           
            await fM2E2EComponents.createPreplan(data.loadCreateData, data.findingAJbcDriver, data.preplanData);
        });

        describe('1Pick/1Drop Dispatch', async () => {
            await fM2E2EComponents.loadDispatchWithComment(data.dispatchData, data.loadCreateData, data.findingAJbcDriver);
        });

    });

});