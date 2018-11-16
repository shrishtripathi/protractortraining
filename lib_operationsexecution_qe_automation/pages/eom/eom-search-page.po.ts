import { browser, ElementFinder, element, by, ProtractorBrowser, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";
import { protractor } from "protractor";


export class EomSearchPage extends BasePage {

   readonly greenMouseIcon=element(by.id("frmSkeletonListing:lSkeletonListing:0:cmdBtnBookFromSklActionFocusLink"));

   public async clickLoadNumberLink(loadNumber){
       let link=element(by.xpath("//a[text()='"+loadNumber+"']"));
       console.log("//a[text()='"+loadNumber+"']");
       await this.actions.click(link,"clicked on "+loadNumber+" link")
   }
}