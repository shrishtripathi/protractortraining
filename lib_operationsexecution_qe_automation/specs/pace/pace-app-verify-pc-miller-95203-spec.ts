import { PaceHomePage } from '../../pages/pace/pace-home.po';
import { PreferencePage } from '../../pages/pace/preference.po';
import { OrderLookupPage } from '../../pages/pace/order-lookup.po';
import { EditTripPage } from '../../pages/pace/edit-trip.po';
import { RouteInformation } from '../../pages/pace/route-information.po';
import { AdminsScreens } from '../../pages/pace/admin-screens.po';
import { OrderMaintainance } from '../../pages/pace/order-mainatainance.po';
import { all } from 'q';
import { DataProvider } from '../../data/dataProvider';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
import { browser } from 'protractor';

let pacePage = new PaceHomePage();
let preferences = new PreferencePage();
let orderLookup = new OrderLookupPage();
let editTrip = new EditTripPage();
let routeInformation = new RouteInformation();
let adminsScreens = new AdminsScreens();
let orderMaintenance = new OrderMaintainance();
let using = require('jasmine-data-provider');

//TC 95203 PACE APP-Verify PC MILER
using(DataProvider.Tc_95203, async function (data) {

    describe("11.1-PACE APP-Verify PC MILER", () => {
        let allOrderNumber: string[] = [];
        let index: number;
        let totalEmptyMilesBeforeDeletion: number = null
        let totalDeadheadMilesBeforeDeletion: number = null
        let totalLoadedMilesBeforeDeletion: number = null
        let totalBobtailMilesBeforeDeletion: number = null
        let totalMilesBeforeDeletion: number = null
        let totalEmptyMilesAfterDeletion: number = null
        let totalDeadheadMilesAfterDeletion: number = null
        let totalLoadedMilesAfterDeletion: number = null
        let totalBobtailMilesAfterDeletion: number = null
        let totalMilesAfterDeletion: number = null
        let values: any = null

        it("Should open pace url", async () => {
            await pacePage.openPaceUrl();
        });
        it("Login into pace application", async () => {
            try {
                await pacePage.loginIntoPaceApplication(data.username, data.password);
            } catch (error) {
                console.log("user is LogedIn")
            }
        });

        it("Should click 'pace tab'", async () => {
            await pacePage.clickOnLink(data.paceLink);
        });
        it("Should click 'account dropdown'", async () => {
            await preferences.clickOnDropDown(data.dropDownOption);
        });
        it("Should click 'account dropdown'", async () => {
            await preferences.selectDropDownOption(data.dropDownCityOption);
        });
        it("Should click 'save button'", async () => {
            await preferences.clickOnButton(data.saveButton);
        });
        it("Should click 'order lookup'", async () => {
            await pacePage.clickOnLink(data.orderLookUpLink);
        });
        it("Should click 'edit trip'", async () => {
            await orderLookup.clickOnButton(data.editTripButton);
        });
        it("Get 'order number'from Dropdown List", async () => {
            allOrderNumber = await editTrip.allOrderNumber()
            // console.log(allOrderNumber)
        });
        it('get orderNumber and miles', async () => {
            let getOrderNumber = (await editTrip.clickOrderNumberFromButtom(allOrderNumber, index))
            values = getOrderNumber.values
            index = getOrderNumber.index
            console.log(values + "test\n" + allOrderNumber)
        });

        it("Should click 'exit button'", async () => {
            await routeInformation.clickOnButton(data.exitButton);
        });
        it("Should click 'home tab'", async () => {
            await editTrip.clickOnLinkFromHeader(data.homeButton);
        });
        it("Should click 'pace admin'", async () => {
            await pacePage.clickOnLink(data.paceAdminLink);
        });
        it("Should click 'order retrigger'", async () => {
            await adminsScreens.clickOnLink(data.orderRetriggerLink);
        });
        it("Should click 'Order Input Method' radio button", async () => {
            await orderMaintenance.clickOnRadioButton(data.orderInputTypeManualButton);
        });
        it("Should Enter the Order number, you noted in step 6, on 'Order Number(s)' field.", async () => {
            console.log("orderNumber= " + values[0])
            await orderMaintenance.enterOrderNumber("orderNumberTextArea", values[0]);
        });
        it("Should click 'Actions' radio button", async () => {
            await orderMaintenance.clickOnRadioButton(data.actionsRadioButton);
        });
        it("Should click 'submit' button", async () => {
            await orderMaintenance.clickOnButton(data.submitButton);
        });
        it("Should verify 'processed orders' message", async () => {
let validationError:boolean= true
            try {
                for (let index = 0; index < allOrderNumber.length && validationError; index++) {
                    let message = await orderMaintenance.verifyProcessedOrdersMessage(values[0]);
                                        
                    if (message.actualmessage.search(data.successMessage) == -1) {
                        console.log("Actual OrderNumber= " + values[0] + "\n" + message.actualmessage)
                        break;
                    }
                    else {
                        console.log("in else")
                        await editTrip.clickOnLinkFromHeader(data.homeButton);
                        await pacePage.clickOnLink(data.paceLink);
                        await preferences.clickOnDropDown(data.dropDownOption);
                        await preferences.selectDropDownOption(data.dropDownCityOption);
                        await preferences.clickOnButton(data.saveButton);
                        await pacePage.clickOnLink(data.orderLookUpLink);
                        await orderLookup.clickOnButton(data.editTripButton);
                        values = await editTrip.clickOrderNumberFromButtom(allOrderNumber, index)
                        console.log(values + "test\n" + allOrderNumber)
                        await routeInformation.clickOnButton(data.exitButton);
                        await editTrip.clickOnLinkFromHeader(data.homeButton);
                        await pacePage.clickOnLink(data.paceAdminLink);
                        await adminsScreens.clickOnLink(data.orderRetriggerLink);
                        await orderMaintenance.clickOnRadioButton(data.orderInputTypeManualButton);
                        console.log("orderNumber= " + values[0])
                        await orderMaintenance.enterOrderNumber(data.orderNumberTextAreaName, values[0]);
                        await orderMaintenance.clickOnRadioButton(data.actionsRadioButton);
                        await orderMaintenance.clickOnButton(data.submitButton);

                    }

                }
            }
            catch (error) {
                console.log("trycatch" + error)
            }


        });

        it("Should click 'home tab'", async () => {
            await editTrip.clickOnLinkFromHeader(data.homeButton);
        });
        it("Should click 'pace tab'", async () => {
            await pacePage.clickOnLink(data.paceLink);
        });
        it("Should click 'account dropdown'", async () => {
            await preferences.clickOnDropDown(data.dropDownOption);
        });
        it("Should click 'account dropdown'", async () => {
            await preferences.selectDropDownOption(data.dropDownCityOption);
        });
        it("Should click 'save button'", async () => {
            await preferences.clickOnButton(data.saveButton);
        });
        it("Should click 'order lookup'", async () => {
            await pacePage.clickOnLink(data.orderLookUpLink);
        });
        it("Should click 'JBH Order'radio button", async () => {
            await orderLookup.clickOnRadioButton(data.jbhOrderButton);
        });
        it("Should enter the 'Order Number' you deleted and retrigered earlier", async () => {
            await orderLookup.jbhOrderText(data.jbhOrderButton, values[0]);
        });
        it("Should click 'edit trip'", async () => {
            await orderLookup.clickOnButton(data.editTripButton);
           if((await orderMaintenance.verifySuccessMessage.getText()).search("Business Validation Errors") != -1){
            await orderLookup.clickOnButton(data.editTripButton);
           }

        });
        it("Should click 'total miles'", async () => {
            await editTrip.clickOnMilerLink();
        });
        it("Get Miles Details after deletion'", async () => {
            totalEmptyMilesAfterDeletion = await routeInformation.getMlies(data.emptyMiles);
            totalDeadheadMilesAfterDeletion = await routeInformation.getMlies(data.deadHeadMiles);
            totalLoadedMilesAfterDeletion = await routeInformation.getMlies(data.loadedMiles);
            totalBobtailMilesBeforeDeletion = await routeInformation.getMlies(data.bobTailMiles);
            totalMilesAfterDeletion = await routeInformation.getMlies(data.totalMiles);
        });
        it("Should Verify that the following Miles items match with current Miles items", async () => {
            totalEmptyMilesBeforeDeletion = values[1],
                totalDeadheadMilesBeforeDeletion = values[2],
                totalLoadedMilesBeforeDeletion = values[3],
                totalBobtailMilesBeforeDeletion = values[4],
                totalMilesBeforeDeletion = values[5]

            expect(totalEmptyMilesBeforeDeletion).toEqual(totalEmptyMilesAfterDeletion)
            expect(totalDeadheadMilesBeforeDeletion).toEqual(totalDeadheadMilesAfterDeletion)
            expect(totalLoadedMilesBeforeDeletion).toEqual(totalLoadedMilesAfterDeletion)
            expect(totalBobtailMilesBeforeDeletion).toEqual(totalBobtailMilesBeforeDeletion)
            expect(totalMilesBeforeDeletion).toEqual(totalMilesAfterDeletion)
        });
        it("Should click 'exit button'", async () => {
            await editTrip.clickOnButton(data.exitButton);
        });
        it("Should click 'preferences tab'", async () => {
            await routeInformation.clickOnLinkFromHeader(data.preferencesLink);
        });
        it("Should close 'pace browser'", async () => {
            await pacePage.closePaceBrowser();
        });
    });
});