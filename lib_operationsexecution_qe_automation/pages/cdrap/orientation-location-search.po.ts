import { BasePage } from "../base.po";
import { ElementFinder, element, by } from "protractor";

export class OrientationLocationSearch extends BasePage {

    readonly loactionTypeDropdown: ElementFinder = element(by.xpath("//select[@name='selectedLocationTypeId']"));
    readonly loactionTypeHiringCenter: ElementFinder = element(by.xpath("//option[text()='Hiring Center']"));
    readonly hotelDropdown: ElementFinder= element(by.xpath("//select[@name='selectedLocationId']"));
    readonly hotelDropdownChicago: ElementFinder = element(by.xpath("//option[text()='FMS - Chicago']"));
    readonly hiringCenterDetailsTable: ElementFinder = element(by.xpath("//div[@id='mainIncludesDiv']/table[contains(.,'Hiring Center Details')]"));
    readonly locationTypeHotel: ElementFinder = element(by.xpath("//option[text()='Hotel']"));
    readonly hotelDropdownCandlewood: ElementFinder = element(by.xpath("//option[text()='FMS - Candlewood Suites - Spanaway, WA']"));
    readonly hotelDetailsTable: ElementFinder = element(by.xpath("//div[@id='mainIncludesDiv']/table[contains(.,'Hotel Details')]"));

}