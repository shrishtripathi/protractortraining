import { browser, ElementFinder, element, by } from "protractor";
import { BasePage } from "./base.po";
import { By } from "selenium-webdriver";
import { ElementArrayFinder } from "protractor/built/element";
import { ASMFullScreenPage } from "./asm-fullscreen.po";


export class ASMSplitScreenPage extends ASMFullScreenPage {

    constructor() {
        super();
    }

}