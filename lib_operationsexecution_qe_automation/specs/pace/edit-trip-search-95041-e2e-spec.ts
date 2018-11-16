import { PaceHomePage } from "../../pages/pace/pace-home.po";
import { OrderLookupPage } from "../../pages/pace/order-lookup.po";
import { EditTripPage } from "../../pages/pace/edit-trip.po";
import { StopUpdatePage } from "../../pages/pace/stop-update.po";
import { PreferencePage } from "../../pages/pace/preference.po";
import { DataProvider } from "../../data/dataProvider";


let paceHomePage = new PaceHomePage();
let preferencePage = new PreferencePage();
let orderLookupPage = new OrderLookupPage();
let editTripPage = new EditTripPage();
let stopUpdatePage = new StopUpdatePage();

let using = require('jasmine-data-provider');

//TC 95041 PACE APP-Edit Trip - Search
using(DataProvider.Tc_95041, async function (data) {
    describe("Edit trip search", () => {
        let orderNumber: string;
        let trailerPrefix: string;
        let customerName: string;
        let stateOrCity: string;
        it("Should Open My pace url", async () => {
            await paceHomePage.openPaceUrl();
        });

        it("Login into pace application", async () => {
            await paceHomePage.loginIntoPaceApplication(data.username, data.password);
        });

        it("Should Click on pace link on pace home page", async () => {
            await paceHomePage.clicklink(data.paceLink);
        });

        it("Should set Whirlpool LDCN - AUSTXX to account dropdown", async () => {
            await preferencePage.selectAccountValue(data.accountLabel, data.accountValue);
        });

        it("Should Click on save button", async () => {
            await preferencePage.clickOnButton(data.saveButton);
        });

        it("Should Click on pace link on pace home page", async () => {
            await paceHomePage.clicklink(data.orderLookUpLink);
        });

        it("Verifying 'Billing Period Ending' Radio button is selected by default", async () => {
            await orderLookupPage.clickRadioButton(data.billingPeriodRadioButton);
        });

        it("Should select 'EMPTY' to order status dropdown", async () => {
            await orderLookupPage.setStatusOfOrderDropdown(data.orderStatus);
        });

        it("Should select 'NON Whirpool' to load classification dropdown", async () => {
            await orderLookupPage.setLoadClassificationDropdown(data.loadClassificationDropdownValue);
        });

        it("Should Click on Edit Trip button", async () => {
            await orderLookupPage.clickOnButton(data.editTripButton);
        });

        it("Verifying that edit trip page opens", async () => {
            await expect<any>(editTripPage.getPageTitle()).toBe(data.editTripPageTitle);
        });

        it("Should Click on customer reference number link", async () => {
            await editTripPage.clickCustomerReferenceNumberLink();
        });

        it("Verifying customer reference number ", async () => {
            await expect<any>(editTripPage.verifyCustomerReferenceNumber()).toBeTruthy();
        });

        it("Should Click on Exit button", async () => {
            await orderLookupPage.clickOnButton(data.exitButton);
        });

        it("Verifying that edit trip page opens", async () => {
            await expect<any>(editTripPage.getPageTitle()).toBe(data.editTripPageTitle);
        });

        it("Should get order number", async () => {
            orderNumber = await editTripPage.getOrderNumber();
        });

        it("Should Click on customer measure link", async () => {
            await editTripPage.clickCustomerMeasureLink();
        });

        it("Verifying customer measures page opens", async () => {
            await expect<any>(editTripPage.verifyCustomerMeasuresPage()).toBeTruthy();
        });

        it("Verifying account used", async () => {
            await expect<any>(editTripPage.verifyAccount()).toBe(data.verifyAccount);
        });

        it("Verifying order numer used", async () => {
            await expect<any>(editTripPage.verifyOrderNumber()).toBe(orderNumber);
        });

        it("Should Click on Exit button", async () => {
            await orderLookupPage.clickOnButton(data.exitButton);
        });

        it("Verifying that edit trip page opens", async () => {
            await expect<any>(editTripPage.getPageTitle()).toBe(data.editTripPageTitle);
        });

        it("Should Click on cash expense link", async () => {
            await editTripPage.clickCashExpenseLink();
        });

        it("Verifying cash expense page opens", async () => {
            await expect<any>(editTripPage.verifyCashExpensePage()).toBeTruthy();
        });

        it("Verifying account used", async () => {
            await expect<any>(editTripPage.verifyAccount()).toBe(data.accountUsed);
        });

        it("Should Click on Cancel button", async () => {
            await orderLookupPage.clickOnButton(data.cancelButton);
        });

        it("Verifying that edit trip page opens", async () => {
            await expect<any>(editTripPage.getPageTitle()).toBe(data.editTripPageTitle);
        });

        it("Click 'Total Miles' link on bottom-right side", async () => {
            await editTripPage.clickTotalMilesLink();
        });
        it("Verifying route information page opens", async () => {
            await expect<any>(editTripPage.verifyRouteInformationPage()).toBeTruthy();
        });

        it("Verifying account informationused", async () => {
            await expect<any>(editTripPage.verifyAccount()).toBe(data.verifyAccountTripPage);
        });

        it("Verifying route details information", async () => {
            await expect<any>(editTripPage.verifyRouteDetails()).toBeGreaterThan(data.routeDetailsResults);
        });

        it("Should Click on Exit button", async () => {
            await orderLookupPage.clickOnButton(data.exitButton);
        });

        it("Verifying that edit trip page opens", async () => {
            await expect<any>(editTripPage.getPageTitle()).toBe(data.editTripPageTitle);
        });

        it("Should Click on stop details first row", async () => {
            await editTripPage.clickOnStopDetailsRow(data.routeDetailsResults);
        });

        it("Should get tariler prefix", async () => {
            trailerPrefix = await stopUpdatePage.tarilerPrefix();
        });

        it("Should Click on misc equipment link", async () => {
            await stopUpdatePage.clickMiscEquipmentLink();
        });

        it("Verifying trailing and miscellameous page opens", async () => {
            await expect<any>(stopUpdatePage.verifyTrailingAndMiscellaneousPage()).toBeTruthy();
        });

        it("Verifying order numer used", async () => {
            await expect<any>(stopUpdatePage.verifyOrderNumber()).toBe(orderNumber);
        });

        it("Verifying trailer numer", async () => {
            await expect<any>(stopUpdatePage.verifyTrailerNumber()).toBe(trailerPrefix);
        });

        it("Should Click on Exit button", async () => {
            await stopUpdatePage.clickOnButton(data.exitButton);
        });

        it("Verifying that Stop Update page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.stopUpdateTitle);
        });

        it("Should get customer name", async () => {
            customerName = await stopUpdatePage.getCustomername();
        });

        it("Should get city or state ", async () => {
            stateOrCity = await stopUpdatePage.getCityOrState();
        });

        it("Should click on customer name and city link ", async () => {
            await stopUpdatePage.clickCustomerNmaeAndCityLink();
        });

        it("Verifying customer name ", async () => {
            await expect<any>(stopUpdatePage.verifyCustomerName()).toBe(customerName);
        });

        it("Verifying city/state ", async () => {
            await expect<any>(stopUpdatePage.verifyCityOrState()).toBe(stateOrCity);
        });

        it("Should Click on Exit button", async () => {
            await stopUpdatePage.clickOnButton(data.exitButton);
        });

        it("Verifying that Stop Update page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.stopUpdateTitle);
        });

        it("Should click on order number and shipping information link", async () => {
            await stopUpdatePage.clickProductAndShippingInformationLink();
        });

        it("Verifying product and shipping information page opens", async () => {
            await expect<any>(stopUpdatePage.verifyProductAndShippingInfoPage()).toBeTruthy();
        });

        it("Verifying order numer", async () => {
            await expect<any>(stopUpdatePage.verifyOrderNumberinProductAndShippingInformationPage()).toBe(orderNumber);
        });

        it("Verifying product information", async () => {
            await expect<any>(stopUpdatePage.verifyProductInformation()).toBeGreaterThan(data.productInformation);
        });

        it("Should Click on Cancel button", async () => {
            await stopUpdatePage.clickOnButton(data.cancelButton);
        });

        it("Verifying that Stop Update page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.stopUpdateTitle);
        });

        it("Should Click on Cancel button", async () => {
            await stopUpdatePage.clickOnButton(data.cancelButton);
        });

        it("Should Click on stop details second row", async () => {
            await editTripPage.clickOnStopDetailsRow(data.stopDetailsRow);
        });

        it("Should select home delivery to stop classification drop down", async () => {
            await stopUpdatePage.setStopClassificationDropDown(data.classificationDropDown);
        });

        it("Should Click on customer services link", async () => {
            await stopUpdatePage.clickCustomerServiceLink();
        });

        it("Should hover over on customer service row", async () => {
            await stopUpdatePage.hoverOnCustomerServicesRow();
            await expect<any>(stopUpdatePage.verifyProductDetailPopUp()).toContain(data.productDetailText);
        });
       
        it("Should Click on Exit button", async () => {
            await stopUpdatePage.clickOnButton(data.exitButton);
            await stopUpdatePage.acceptingAlert();
        });

        it("Should Click on Cancel button", async () => {
            await stopUpdatePage.clickOnButton(data.cancelButton);
        });

        it("Verifying that edit trip page opens", async () => {
            await expect<any>(editTripPage.getPageTitle()).toBe(data.editTripPageTitle);
        });


    });
});    